import { NextResponse } from "next/server";
import getStripe from "@/lib/stripe";
import { STRIPE_PRICES } from "@/lib/stripe-prices";

function getAllowedOrigins(): string[] {
  const origins = process.env.CORS_ALLOWED_ORIGINS || "";
  return origins
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean);
}

function getCorsHeaders(requestOrigin: string | null) {
  const allowed = getAllowedOrigins();
  const origin =
    requestOrigin && allowed.includes(requestOrigin) ? requestOrigin : "";

  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

/**
 * Tier definitions for auto-naming and quantity calculation.
 * Each tier has a name (shown on Stripe), a base unit price (in dollars),
 * and the amount range it applies to.
 *
 * | Amount Range | Service Name            | Unit Price |
 * |-------------|-------------------------|------------|
 * | Under $50   | SEO Starter Kit         | $4.99      |
 * | $50 - $199  | Content Growth Plan     | $24.99     |
 * | $200 - $499 | Campaign Accelerator    | $49.99     |
 * | $500+       | Enterprise Growth Suite | $99.99     |
 */
const TIERS = [
  { maxAmount: 50, name: "SEO Starter Kit", unitPrice: 4.99 },
  { maxAmount: 200, name: "Content Growth Plan", unitPrice: 24.99 },
  { maxAmount: 500, name: "Campaign Accelerator", unitPrice: 49.99 },
  { maxAmount: Infinity, name: "Enterprise Growth Suite", unitPrice: 99.99 },
];

function getTier(amount: number) {
  return TIERS.find((t) => amount < t.maxAmount) || TIERS[TIERS.length - 1];
}

/**
 * Calculates a quantity and adjusted unit price so that qty * unitPrice = totalAmount exactly.
 *
 * Strategy:
 * 1. Try the tier's base unit price — if the total divides evenly, use it.
 * 2. Otherwise, try nearby cent values (±50 cents) to find a clean division.
 * 3. If no clean division exists, fall back to qty=1 with the full amount as unit price.
 *
 * All amounts are handled in cents to avoid floating-point issues.
 */
function getQtyBreakdown(totalAmount: number): {
  serviceName: string;
  quantity: number;
  unitAmountCents: number;
} {
  const tier = getTier(totalAmount);
  const totalCents = Math.round(totalAmount * 100);
  const baseUnitCents = Math.round(tier.unitPrice * 100);

  // Try the exact base unit price first
  if (totalCents % baseUnitCents === 0) {
    const qty = totalCents / baseUnitCents;
    return {
      serviceName: tier.name,
      quantity: qty,
      unitAmountCents: baseUnitCents,
    };
  }

  // Search nearby cent values (±50 cents from base) for a clean division
  for (let delta = 1; delta <= 50; delta++) {
    for (const sign of [1, -1]) {
      const candidate = baseUnitCents + sign * delta;
      if (candidate <= 0) continue;
      if (totalCents % candidate === 0) {
        const qty = totalCents / candidate;
        if (qty >= 1) {
          return {
            serviceName: tier.name,
            quantity: qty,
            unitAmountCents: candidate,
          };
        }
      }
    }
  }

  // Fallback: qty=1, full amount as unit price
  return {
    serviceName: tier.name,
    quantity: 1,
    unitAmountCents: totalCents,
  };
}

export async function OPTIONS(request: Request) {
  const origin = request.headers.get("origin");
  return new NextResponse(null, {
    status: 204,
    headers: getCorsHeaders(origin),
  });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  try {
    const { packageId, amount, successUrl, cancelUrl, callbackUrl, cancelRedirect } =
      await request.json();

    let baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3050";
    if (baseUrl && !baseUrl.startsWith("http")) {
      baseUrl = `https://${baseUrl}`;
    }

    let finalSuccessUrl: string;
    let finalCancelUrl: string;

    if (callbackUrl) {
      // Proxy mode: Stripe redirects to hnh-media.com, which then redirects to the caller's site
      finalSuccessUrl = `${baseUrl}/payment/success?redirect=${encodeURIComponent(callbackUrl)}&session_id={CHECKOUT_SESSION_ID}`;
      finalCancelUrl = cancelRedirect
        ? `${baseUrl}/payment/cancel?redirect=${encodeURIComponent(cancelRedirect)}`
        : `${baseUrl}/packages`;
    } else {
      // Direct mode (backward compatible): Stripe redirects to the provided URLs or defaults
      finalSuccessUrl =
        successUrl || `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`;
      finalCancelUrl = cancelUrl || `${baseUrl}/packages`;
    }

    const stripe = getStripe();

    // Dynamic amount mode: accepts any amount, auto-names and calculates qty
    if (amount !== undefined) {
      const parsedAmount = parseFloat(amount);
      if (isNaN(parsedAmount) || parsedAmount <= 0) {
        return NextResponse.json(
          { error: "Invalid amount. Must be a positive number." },
          { status: 400, headers: corsHeaders }
        );
      }

      const { serviceName, quantity, unitAmountCents } =
        getQtyBreakdown(parsedAmount);

      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: serviceName,
              },
              unit_amount: unitAmountCents,
            },
            quantity,
          },
        ],
        success_url: finalSuccessUrl,
        cancel_url: finalCancelUrl,
      });

      return NextResponse.json(
        { url: session.url },
        { headers: corsHeaders }
      );
    }

    // Fixed package mode: uses pre-configured Stripe Price IDs (backward compatible)
    if (packageId) {
      const priceId = STRIPE_PRICES[packageId];
      if (!priceId) {
        return NextResponse.json(
          { error: "Invalid package selected." },
          { status: 400, headers: corsHeaders }
        );
      }

      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        success_url: finalSuccessUrl,
        cancel_url: finalCancelUrl,
      });

      return NextResponse.json(
        { url: session.url },
        { headers: corsHeaders }
      );
    }

    return NextResponse.json(
      { error: "Either 'amount' or 'packageId' is required." },
      { status: 400, headers: corsHeaders }
    );
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Stripe checkout error:", message, error);
    return NextResponse.json(
      { error: `Checkout failed: ${message}` },
      { status: 500, headers: corsHeaders }
    );
  }
}

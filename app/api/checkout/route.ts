import { NextResponse } from "next/server";
import getStripe from "@/lib/stripe";
import { STRIPE_PRICES } from "@/lib/stripe-prices";

// Allowed origins for CORS (your main site domains)
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

// Handle preflight OPTIONS request (required for cross-origin calls)
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
    const { packageId, amount, name, successUrl, cancelUrl } =
      await request.json();

    // Use caller-provided URLs (main site) or fall back to ViralSearch URLs
    const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3050";
    const finalSuccessUrl =
      successUrl || `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`;
    const finalCancelUrl = cancelUrl || `${baseUrl}/packages`;

    const stripe = getStripe();

    // Dynamic amount mode: accepts any amount + product name from the main site
    if (amount !== undefined) {
      const parsedAmount = parseFloat(amount);
      if (isNaN(parsedAmount) || parsedAmount <= 0) {
        return NextResponse.json(
          { error: "Invalid amount. Must be a positive number." },
          { status: 400, headers: corsHeaders }
        );
      }

      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: name || "ViralSearch Service",
              },
              unit_amount: Math.round(parsedAmount * 100), // convert dollars to cents
            },
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

    // Neither amount nor packageId provided
    return NextResponse.json(
      { error: "Either 'amount' or 'packageId' is required." },
      { status: 400, headers: corsHeaders }
    );
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500, headers: corsHeaders }
    );
  }
}

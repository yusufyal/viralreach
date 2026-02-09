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
    const { packageId, successUrl, cancelUrl } = await request.json();

    // Validate package ID
    const priceId = STRIPE_PRICES[packageId];
    if (!priceId) {
      return NextResponse.json(
        { error: "Invalid package selected." },
        { status: 400, headers: corsHeaders }
      );
    }

    // Use caller-provided URLs (main site) or fall back to ViralSearch URLs
    const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3050";
    const finalSuccessUrl =
      successUrl || `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`;
    const finalCancelUrl = cancelUrl || `${baseUrl}/packages`;

    // Create a Stripe Checkout Session
    const stripe = getStripe();
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
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500, headers: corsHeaders }
    );
  }
}

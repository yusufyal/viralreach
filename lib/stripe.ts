import Stripe from "stripe";

// Lazy initialization — only creates the Stripe client when first used at runtime,
// not during the build step. This prevents build failures when env vars aren't set yet.
let _stripe: Stripe | null = null;

function getStripe(): Stripe {
  if (!_stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error(
        "STRIPE_SECRET_KEY is not set. Please add it to your environment variables."
      );
    }
    _stripe = new Stripe(key, { typescript: true });
  }
  return _stripe;
}

export default getStripe;

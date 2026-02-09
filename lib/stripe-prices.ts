/**
 * Stripe Price ID mapping for one-time payments.
 *
 * To set up:
 * 1. Go to https://dashboard.stripe.com/test/products
 * 2. Create a Product for each package with a one-time price
 * 3. Copy the Price IDs (price_xxx) into your .env.local file
 *
 * Package tiers:
 *   order_1 = $2.99
 *   order_2 = $9.99
 *   order_3 = $17.99
 *   order_4 = $79.99
 *   order_5 = $149.99
 */
export const STRIPE_PRICES: Record<string, string> = {
  order_1: process.env.STRIPE_PRICE_ORDER_1 || "price_order1_placeholder", // $2.99
  order_2: process.env.STRIPE_PRICE_ORDER_2 || "price_order2_placeholder", // $9.99
  order_3: process.env.STRIPE_PRICE_ORDER_3 || "price_order3_placeholder", // $17.99
  order_4: process.env.STRIPE_PRICE_ORDER_4 || "price_order4_placeholder", // $79.99
  order_5: process.env.STRIPE_PRICE_ORDER_5 || "price_order5_placeholder", // $149.99
};

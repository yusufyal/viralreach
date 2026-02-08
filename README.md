# ViralSearch — Digital Marketing Agency Website

A professional, production-ready marketing website for **ViralSearch**, a digital marketing agency offering SEO services, content writing, digital promotional campaigns, and social media marketing.

Built with **Next.js 15** (App Router), **TypeScript**, and **Tailwind CSS**. Fully static, SEO-optimized, and ready for payment gateway integration.

---

## Pages

| Route                          | Page                        |
| ------------------------------ | --------------------------- |
| `/`                            | Home                        |
| `/services`                    | Services Overview           |
| `/services/seo`               | SEO Services                |
| `/services/content-writing`   | Content Writing Services    |
| `/services/digital-campaigns` | Digital Marketing Campaigns |
| `/packages`                    | Packages & Pricing          |
| `/about`                       | About Us                    |
| `/contact`                     | Contact Us                  |
| `/terms`                       | Terms & Conditions          |
| `/privacy`                     | Privacy Policy              |
| `/refund-policy`              | Refund & Cancellation Policy|

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Font:** Inter (via `next/font/google`)
- **SEO:** Built-in metadata API, sitemap.xml, robots.txt

---

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm (comes with Node.js)

### Installation

```bash
git clone https://github.com/your-username/digital-marketing-agency-site.git
cd digital-marketing-agency-site
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## Deployment

### Vercel (Recommended)

1. Push the repository to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Deploy — Vercel auto-detects Next.js and configures everything

### Static Export (Other Hosts)

Uncomment the `output: "export"` line in `next.config.ts`, then:

```bash
npm run build
```

The static files will be in the `out/` directory, ready to deploy to any static host (Netlify, AWS S3, etc.).

---

## Payment Integration (Future)

This site is structured and ready for payment gateway integration with **Stripe** or **Tap**.

### How to Add Stripe

1. Install Stripe SDK:
   ```bash
   npm install stripe @stripe/stripe-js
   ```

2. Create Stripe Price IDs for each package tier:
   - `starter` → Stripe Price ID
   - `growth` → Stripe Price ID
   - `enterprise` → Stripe Price ID

3. Add an API route at `app/api/checkout/route.ts`:
   ```typescript
   import Stripe from "stripe";
   import { NextResponse } from "next/server";

   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

   export async function POST(req: Request) {
     const { priceId } = await req.json();
     const session = await stripe.checkout.sessions.create({
       mode: "subscription",
       payment_method_types: ["card"],
       line_items: [{ price: priceId, quantity: 1 }],
       success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
       cancel_url: `${process.env.NEXT_PUBLIC_URL}/packages`,
     });
     return NextResponse.json({ url: session.url });
   }
   ```

4. Wire the "Get Started" buttons on the Packages page to call this API route.

### How to Add Tap Payments

1. Sign up at [tap.company](https://tap.company)
2. Use their Checkout API to create payment links
3. Replace the CTA buttons with Tap payment URLs or integrate their JavaScript SDK

---

## Logo Design Prompt

Use this prompt in Canva, Midjourney, or any AI design tool:

> "A modern, minimal logo for a digital marketing agency called 'ViralSearch'. The logo should combine a magnifying glass icon with a subtle upward growth arrow or signal/wave element. Use indigo (#4F46E5) as the primary color with a clean sans-serif font. The design should feel professional, trustworthy, and tech-forward. No gradients, flat design style."

---

## Project Structure

```
app/                    → Next.js App Router pages
  layout.tsx            → Root layout with Navbar + Footer
  page.tsx              → Home page
  services/             → Services pages
  packages/             → Pricing page
  about/                → About page
  contact/              → Contact page
  terms/                → Terms & Conditions
  privacy/              → Privacy Policy
  refund-policy/        → Refund Policy
  sitemap.ts            → Dynamic sitemap generator
  robots.ts             → Robots.txt generator

components/             → Reusable React components
  layout/               → Navbar, Footer
  home/                 → Home page sections
  services/             → Service cards
  packages/             → Pricing cards
  contact/              → Contact form
  ui/                   → Shared UI (Logo, Button, SectionHeading)

lib/                    → Utilities
  metadata.ts           → SEO metadata helper
```

---

## License

This project is proprietary. All rights reserved.

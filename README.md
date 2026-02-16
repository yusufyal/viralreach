# HNH Media — Digital Marketing Agency Website

A professional, production-ready marketing website for **HNH Media**, a digital marketing agency offering SEO services, content writing, digital promotional campaigns, and social media marketing.

Built with **Next.js 15** (App Router), **TypeScript**, and **Tailwind CSS**. SEO-optimized, with Stripe payment integration and ready for production deployment.

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
| `/success`                     | Payment Success             |

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Font:** Inter (via `next/font/google`)
- **SEO:** Built-in metadata API, sitemap.xml, robots.txt
- **Payments:** Stripe Checkout (one-time payments)

---

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm (comes with Node.js)

### Installation

```bash
git clone https://github.com/yusufyal/viralreach.git
cd digital-marketing-agency-site
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_URL=http://localhost:3000
CORS_ALLOWED_ORIGINS=http://localhost:3000
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

## Stripe Integration

The site includes a fully functional Stripe Checkout integration via the `/api/checkout` API route.

### Features

- **Dynamic pricing:** Accepts any amount from external sites and creates a Stripe Checkout session on-the-fly
- **Quantity simulation:** Automatically calculates quantity and unit price to display professional line items on Stripe
- **Auto-naming:** Service names are automatically assigned based on amount tiers
- **CORS support:** External sites can call the API with proper origin whitelisting
- **Backward compatible:** Still supports fixed package ID lookups

### API Usage

```bash
POST /api/checkout
Content-Type: application/json

{
  "amount": 75.00,
  "successUrl": "https://your-site.com/success",
  "cancelUrl": "https://your-site.com/cancel"
}
```

Response: `{ "url": "https://checkout.stripe.com/..." }`

---

## Deployment

### Railway (Current)

1. Push to GitHub
2. Connect the repo on [railway.app](https://railway.app)
3. Set environment variables in Railway dashboard
4. Deploy

### Vercel (Alternative)

1. Push the repository to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Set environment variables
4. Deploy — Vercel auto-detects Next.js and configures everything

---

## Logo Design Prompt

Use this prompt in Canva, Midjourney, or any AI design tool:

> "A modern, minimal logo for a digital marketing agency called 'HNH Media'. The logo should combine a growth chart icon with an upward arrow element. Use indigo (#4F46E5) as the primary color with a clean sans-serif font. The design should feel professional, trustworthy, and tech-forward. No gradients, flat design style."

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
  success/              → Payment success page
  api/checkout/         → Stripe Checkout API route
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
  stripe.ts             → Stripe client (lazy-initialized)
  stripe-prices.ts      → Package-to-Stripe-price mapping
```

---

## License

This project is proprietary. All rights reserved.

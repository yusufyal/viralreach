import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const packages = [
  {
    name: "Social Media Starter",
    description:
      "Kickstart your brand's social media presence with professional setup, content planning, and audience engagement strategy.",
    price: 39,
    qty: 1,
    period: "one-time",
    features: [
      "Social media audit (2 platforms)",
      "Profile optimization and branding",
      "7-day content calendar",
      "5 ready-to-post graphics",
      "Hashtag and engagement strategy",
      "Email support",
    ],
    highlighted: false,
    sortOrder: 1,
    active: true,
  },
  {
    name: "SEO & Content Boost",
    description:
      "Improve your search rankings and online visibility with targeted SEO optimization and professional content creation.",
    price: 79,
    qty: 1,
    period: "one-time",
    features: [
      "Full website SEO audit",
      "On-page SEO optimization (up to 10 pages)",
      "3 SEO-optimized blog articles",
      "Keyword research and tracking (20 keywords)",
      "Meta tags and schema markup setup",
      "Monthly ranking report",
      "Email support",
    ],
    highlighted: false,
    sortOrder: 2,
    active: true,
  },
  {
    name: "Digital Promotion Pro",
    description:
      "Launch targeted promotional campaigns across multiple channels to drive traffic, leads, and brand awareness for your business.",
    price: 199,
    qty: 1,
    period: "one-time",
    features: [
      "Custom digital campaign strategy",
      "Google Ads setup and management",
      "Social media ad campaigns (2 platforms)",
      "Landing page optimization",
      "A/B testing for ad creatives",
      "Bi-weekly performance reports",
      "Dedicated campaign manager",
    ],
    highlighted: true,
    sortOrder: 3,
    active: true,
  },
  {
    name: "Brand Growth Accelerator",
    description:
      "Full-scale marketing and promotion package for businesses ready to scale with multi-channel campaigns and premium content.",
    price: 449,
    qty: 1,
    period: "one-time",
    features: [
      "Complete SEO and content strategy",
      "10 blog articles and 15 social media posts",
      "Social media management (4 platforms)",
      "Google Ads + Meta Ads management",
      "Email marketing campaign setup",
      "Influencer outreach (micro-level)",
      "Weekly analytics and performance reports",
      "Priority support",
    ],
    highlighted: false,
    sortOrder: 4,
    active: true,
  },
  {
    name: "Enterprise Marketing Suite",
    description:
      "Enterprise-grade marketing and promotion with dedicated team support, advanced analytics, and maximum visibility across all digital channels.",
    price: 999,
    qty: 1,
    period: "one-time",
    features: [
      "Full-funnel marketing strategy",
      "Unlimited SEO and content management",
      "Social media management (all platforms)",
      "Multi-channel paid ad campaigns",
      "Video marketing and YouTube SEO",
      "Advanced analytics dashboard",
      "Conversion rate optimization",
      "Dedicated account manager",
      "Weekly strategy calls",
      "24/7 priority support",
    ],
    highlighted: false,
    sortOrder: 5,
    active: true,
  },
];

async function main() {
  console.log("Seeding packages...");

  for (const pkg of packages) {
    await prisma.package.create({ data: pkg });
    console.log(`  Created: ${pkg.name} ($${pkg.price})`);
  }

  console.log(`Seeded ${packages.length} packages.`);
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

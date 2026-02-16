import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const packages = [
  {
    name: "SEO Starter Kit",
    description:
      "Essential SEO foundations for startups and small projects looking to establish their online presence.",
    price: 29,
    qty: 1,
    period: "one-time",
    features: [
      "Basic SEO keyword analysis",
      "1 SEO-optimized blog article",
      "Social media profile review",
      "Performance summary report",
      "Email support",
    ],
    highlighted: false,
    sortOrder: 1,
    active: true,
  },
  {
    name: "Content Growth Plan",
    description:
      "A comprehensive content and marketing foundation for small businesses ready to grow their online reach.",
    price: 49,
    qty: 1,
    period: "one-time",
    features: [
      "SEO audit and on-page optimization",
      "3 SEO-optimized blog articles",
      "Social media setup (2 platforms)",
      "Keyword tracking (up to 15 keywords)",
      "Monthly performance report",
      "Email support",
    ],
    highlighted: false,
    sortOrder: 2,
    active: true,
  },
  {
    name: "Campaign Accelerator",
    description:
      "Strategic digital campaigns for growing businesses that need measurable results and broader reach.",
    price: 149,
    qty: 1,
    period: "one-time",
    features: [
      "Advanced SEO strategy and implementation",
      "5 SEO-optimized content pieces",
      "Social media management (3 platforms)",
      "PPC campaign setup and management",
      "Keyword tracking (up to 40 keywords)",
      "Bi-weekly performance reports",
      "Dedicated account manager",
    ],
    highlighted: true,
    sortOrder: 3,
    active: true,
  },
  {
    name: "Multi-Channel Strategy",
    description:
      "Full-scale campaign management for established businesses seeking multi-channel digital growth.",
    price: 349,
    qty: 1,
    period: "one-time",
    features: [
      "Full SEO management and strategy",
      "10 content pieces per delivery",
      "Social media management (4 platforms)",
      "Multi-channel campaign management",
      "Link building outreach",
      "Weekly performance reports",
      "Conversion rate optimization",
      "Priority support",
    ],
    highlighted: false,
    sortOrder: 4,
    active: true,
  },
  {
    name: "Enterprise Growth Suite",
    description:
      "Enterprise-grade promotional campaigns with dedicated support and maximum visibility across all channels.",
    price: 799,
    qty: 1,
    period: "one-time",
    features: [
      "Complete SEO and content strategy",
      "20+ content pieces per delivery",
      "Social media management (5+ platforms)",
      "Advanced multi-channel promotional campaigns",
      "Keyword tracking (unlimited)",
      "Advanced link building strategy",
      "Custom analytics dashboard",
      "Weekly strategy calls",
      "Priority support and dedicated manager",
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

import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import SectionHeading from "@/components/ui/SectionHeading";
import PricingCard from "@/components/packages/PricingCard";
import Button from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "Packages & Pricing",
  description:
    "View ViralSearch's digital marketing packages. Choose from Basic, Starter, Growth, Professional, or Enterprise plans covering SEO, content writing, and promotional campaigns.",
  path: "/packages",
});

const packages = [
  {
    id: "order_1",
    name: "Digital Marketing Service",
    description:
      "Essential digital marketing for startups and small projects looking to establish their online presence.",
    price: "$29",
    amount: 29,
    period: "one-time",
    features: [
      "Basic SEO keyword analysis",
      "1 SEO-optimized blog article",
      "Social media profile review",
      "Performance summary report",
      "Email support",
    ],
    highlighted: false,
  },
  {
    id: "order_2",
    name: "Digital Marketing Service",
    description:
      "A comprehensive marketing foundation for small businesses ready to grow their online reach.",
    price: "$49",
    amount: 49,
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
  },
  {
    id: "order_3",
    name: "Digital Campaign Service",
    description:
      "Strategic digital campaigns for growing businesses that need measurable results and broader reach.",
    price: "$149",
    amount: 149,
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
  },
  {
    id: "order_4",
    name: "Digital Campaign Service",
    description:
      "Full-scale campaign management for established businesses seeking multi-channel digital growth.",
    price: "$349",
    amount: 349,
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
  },
  {
    id: "order_5",
    name: "Digital Promotion Campaign",
    description:
      "Enterprise-grade promotional campaigns with dedicated support and maximum visibility across all channels.",
    price: "$799",
    amount: 799,
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
  },
];

export default function PackagesPage() {
  return (
    <>
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Packages & Pricing"
            title="Marketing Plans That Fit Your Business"
            description="Choose a package that aligns with your goals and budget. All plans include transparent reporting and dedicated support. Custom packages are available upon request."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start justify-items-center">
            {packages.map((pkg) => (
              <PricingCard key={pkg.id} {...pkg} />
            ))}
          </div>

          {/* Custom Packages Note */}
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Need a Custom Package?
              </h3>
              <p className="text-slate-600 mb-6">
                Every business is unique. If our standard packages don&apos;t
                quite fit your needs, we&apos;ll work with you to create a
                customized marketing plan tailored to your specific goals and
                budget.
              </p>
              <Button href="/contact" variant="outline">
                Contact Us for Custom Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What is included in the monthly reports?",
                a: "Our reports include detailed metrics on keyword rankings, organic traffic, content performance, campaign analytics, and actionable recommendations for improvement. Reports are delivered in a clear, easy-to-understand format.",
              },
              {
                q: "How long before I see results?",
                a: "Digital marketing is a long-term investment. While some improvements may be noticeable within the first few weeks, significant results from SEO and content strategies typically develop over 3 to 6 months. Paid campaigns can show results more quickly.",
              },
              {
                q: "Can I upgrade or downgrade my plan?",
                a: "Yes, you can adjust your plan at any time. We recommend discussing any changes with your account manager to ensure a smooth transition and continued progress toward your goals.",
              },
              {
                q: "Do you require long-term contracts?",
                a: "We offer both monthly and quarterly billing options. While we recommend a minimum commitment of 3 months for SEO services to allow time for results to develop, we do not lock clients into long-term contracts.",
              },
              {
                q: "How do I get started?",
                a: "Simply contact us through our website or email us at info@viralsearch.com. We will schedule an initial consultation to discuss your business goals and recommend the most suitable package.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="border border-slate-200 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

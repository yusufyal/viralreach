import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import SectionHeading from "@/components/ui/SectionHeading";
import PricingCard from "@/components/packages/PricingCard";
import Button from "@/components/ui/Button";
import prisma from "@/lib/prisma";

export const metadata: Metadata = createMetadata({
  title: "Packages & Pricing",
  description:
    "View HNH Media's digital marketing packages. Choose from our professional plans covering SEO, content writing, and promotional campaigns.",
  path: "/packages",
});

export const dynamic = "force-dynamic";

export default async function PackagesPage() {
  const packages = await prisma.package.findMany({
    where: { active: true },
    orderBy: { sortOrder: "asc" },
  });

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
              <PricingCard
                key={pkg.id}
                id={pkg.id}
                name={pkg.name}
                description={pkg.description}
                price={`$${pkg.price % 1 === 0 ? pkg.price.toFixed(0) : pkg.price.toFixed(2)}`}
                amount={pkg.price}
                qty={pkg.qty}
                period={pkg.period}
                features={pkg.features}
                highlighted={pkg.highlighted}
              />
            ))}
          </div>

          {packages.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              Packages coming soon. Please check back later.
            </div>
          )}

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
                a: "Simply contact us through our website or email us at info@hnh-media.com. We will schedule an initial consultation to discuss your business goals and recommend the most suitable package.",
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

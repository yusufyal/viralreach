import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Button from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "Content Writing Services",
  description:
    "Professional content writing services from HNH Media. We create SEO-optimized blog posts, website copy, product descriptions, and email campaigns that engage and convert.",
  path: "/services/content-writing",
});

const contentTypes = [
  {
    title: "Blog Articles & Thought Leadership",
    description:
      "Well-researched, engaging blog posts that position your brand as an authority in your industry while targeting valuable search terms to drive organic traffic.",
    features: [
      "SEO keyword integration",
      "Industry-relevant topics",
      "Engaging, reader-friendly format",
      "Regular publishing schedule",
    ],
  },
  {
    title: "Website & Landing Page Copy",
    description:
      "Persuasive, clear website copy that communicates your value proposition, guides visitors through your site, and encourages them to take action.",
    features: [
      "Conversion-focused messaging",
      "Brand voice consistency",
      "Clear calls to action",
      "SEO-optimized structure",
    ],
  },
  {
    title: "Product & Service Descriptions",
    description:
      "Detailed, compelling descriptions that highlight the benefits of your products or services, helping potential customers make informed decisions.",
    features: [
      "Benefit-driven copy",
      "Feature highlights",
      "Search-friendly formatting",
      "Consistent brand tone",
    ],
  },
  {
    title: "Email Marketing Campaigns",
    description:
      "Strategically written email sequences that nurture leads, retain customers, and drive engagement with your brand across the customer journey.",
    features: [
      "Welcome and onboarding sequences",
      "Newsletter content",
      "Promotional campaigns",
      "Re-engagement emails",
    ],
  },
];

export default function ContentWritingPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Content Writing
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Professional Content That Engages, Ranks, and Converts
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Great content is the foundation of every successful digital
              marketing strategy. Our team of experienced writers creates
              high-quality, SEO-optimized content that resonates with your
              audience and supports your business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Discuss Your Content Needs
              </Button>
              <Button href="/packages" variant="outline" size="lg">
                View Content Packages
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Content Services We Offer
            </h2>
            <p className="text-lg text-slate-600">
              From blog posts to email campaigns, we create content that serves
              your audience and supports your marketing goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contentTypes.map((type) => (
              <div
                key={type.title}
                className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <svg
                        className="w-5 h-5 text-primary-600 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Content Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why Our Content Delivers Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Research-Driven",
                text: "Every piece of content is backed by thorough research into your industry, audience, and competitive landscape.",
              },
              {
                title: "SEO-Optimized",
                text: "We integrate target keywords naturally, ensuring your content performs well in search results without sacrificing readability.",
              },
              {
                title: "Brand-Aligned",
                text: "We take the time to understand your brand voice and values, ensuring consistency across all content touchpoints.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let Us Tell Your Brand&apos;s Story
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Quality content is an investment in your brand&apos;s future. Contact us
            to discuss how our content writing services can support your
            marketing strategy.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Get Started Today
          </Button>
        </div>
      </section>
    </>
  );
}

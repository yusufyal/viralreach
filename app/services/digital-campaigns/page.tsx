import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Button from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "Digital Marketing Campaigns",
  description:
    "HNH Media manages targeted digital marketing campaigns including PPC, display advertising, and remarketing to help your business reach the right audience and maximize ROI.",
  path: "/services/digital-campaigns",
});

const campaignTypes = [
  {
    title: "Pay-Per-Click (PPC) Management",
    description:
      "We create and manage targeted PPC campaigns on search engines to connect your business with users actively searching for your products or services.",
    features: [
      "Keyword research and bid management",
      "Ad copy creation and A/B testing",
      "Landing page recommendations",
      "Conversion tracking and optimization",
    ],
  },
  {
    title: "Display Advertising",
    description:
      "Expand your brand awareness with visually engaging display campaigns across relevant websites and platforms that your target audience frequents.",
    features: [
      "Audience targeting and segmentation",
      "Creative design and messaging",
      "Placement optimization",
      "Performance monitoring",
    ],
  },
  {
    title: "Remarketing Campaigns",
    description:
      "Re-engage visitors who have previously interacted with your website or content, keeping your brand top of mind and encouraging return visits.",
    features: [
      "Custom audience creation",
      "Dynamic remarketing ads",
      "Cross-platform retargeting",
      "Frequency capping and optimization",
    ],
  },
  {
    title: "Campaign Analytics & Reporting",
    description:
      "Gain clear insights into your campaign performance with comprehensive analytics, reporting, and data-driven recommendations for improvement.",
    features: [
      "Real-time performance dashboards",
      "Conversion attribution analysis",
      "ROI tracking and reporting",
      "Monthly strategy reviews",
    ],
  },
];

export default function DigitalCampaignsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Digital Campaigns
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Targeted Promotional Campaigns That Reach the Right Audience
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Our digital campaign management services help businesses connect
              with their target audience through strategic advertising across
              search engines and digital platforms. We focus on data-driven
              decision-making to optimize your budget and maximize return on
              investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Plan Your Campaign
              </Button>
              <Button href="/packages" variant="outline" size="lg">
                View Campaign Packages
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Campaign Services We Offer
            </h2>
            <p className="text-lg text-slate-600">
              From search advertising to remarketing, we manage promotional
              campaigns with estimated delivery timelines and transparent budget
              allocation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {campaignTypes.map((type) => (
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

      {/* How Campaigns Work */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Campaign Management Process
            </h2>
            <p className="text-lg text-slate-600">
              A transparent, structured approach to running your marketing
              campaigns with clear estimated timelines and regular updates.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: "1",
                title: "Goal Setting & Audience Research",
                text: "We define clear campaign objectives and conduct thorough audience research to ensure your promotional messages reach the right people.",
              },
              {
                step: "2",
                title: "Campaign Setup & Creative Development",
                text: "Our team builds your campaigns with optimized ad copy, targeting parameters, and tracking to measure performance from day one.",
              },
              {
                step: "3",
                title: "Launch & Optimization",
                text: "We launch your campaigns and continuously monitor performance, making data-driven adjustments to improve results and efficiency.",
              },
              {
                step: "4",
                title: "Reporting & Strategy Refinement",
                text: "Regular performance reports keep you informed, and we use insights from campaign data to refine strategies and plan future initiatives.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Launch Your Next Campaign?
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Get in touch with our team to discuss your marketing goals and
            receive a customized campaign proposal with estimated timelines and
            budget recommendations.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Schedule a Strategy Call
          </Button>
        </div>
      </section>
    </>
  );
}

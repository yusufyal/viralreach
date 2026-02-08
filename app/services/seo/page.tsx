import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Button from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "SEO Services",
  description:
    "ViralSearch offers professional SEO services including keyword research, on-page optimization, technical audits, and link building to improve your search engine rankings.",
  path: "/services/seo",
});

const deliverables = [
  {
    title: "Keyword Research & Strategy",
    description:
      "We identify high-value keywords relevant to your business and audience, mapping them to content opportunities that can improve your organic search presence over time.",
  },
  {
    title: "On-Page Optimization",
    description:
      "From meta tags and heading structures to internal linking and content optimization, we ensure every page of your website is aligned with SEO best practices.",
  },
  {
    title: "Technical SEO Audits",
    description:
      "We conduct thorough technical audits to identify and resolve issues such as site speed, mobile responsiveness, crawl errors, and indexation problems.",
  },
  {
    title: "Link Building Strategy",
    description:
      "Our team develops ethical, white-hat link building strategies to increase your domain authority and improve rankings through quality backlinks.",
  },
  {
    title: "Local SEO",
    description:
      "For businesses targeting local markets, we optimize your Google Business Profile, local citations, and location-based keywords to increase visibility in local search results.",
  },
  {
    title: "Monthly Reporting & Analysis",
    description:
      "You receive detailed monthly reports covering ranking progress, traffic analytics, and actionable recommendations for continued improvement.",
  },
];

export default function SEOServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
              SEO Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Search Engine Optimization That Delivers Measurable Results
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Our SEO services are designed to improve your website&apos;s visibility
              in search engine results pages. Through a combination of technical
              optimization, content strategy, and authority building, we help
              your business attract more qualified organic traffic over time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Request a Free SEO Audit
              </Button>
              <Button href="/packages" variant="outline" size="lg">
                View SEO Packages
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Our SEO Services Include
            </h2>
            <p className="text-lg text-slate-600">
              A comprehensive approach to improving your search engine rankings,
              from technical foundations to content optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 rounded-xl p-6 border border-slate-100"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our SEO Process
            </h2>
            <p className="text-lg text-slate-600">
              A structured, results-oriented approach to search engine optimization.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: "1",
                title: "Website Audit & Analysis",
                text: "We start with a comprehensive audit of your current website, analyzing technical health, content quality, backlink profile, and competitive positioning.",
              },
              {
                step: "2",
                title: "Strategy Development",
                text: "Based on our findings, we create a detailed SEO strategy with prioritized action items, estimated timelines, and clear performance benchmarks.",
              },
              {
                step: "3",
                title: "Implementation",
                text: "Our team executes the strategy, making technical improvements, optimizing existing content, creating new content, and building quality backlinks.",
              },
              {
                step: "4",
                title: "Monitoring & Optimization",
                text: "We continuously monitor rankings, traffic, and engagement metrics, refining our approach to maximize results and adapt to algorithm changes.",
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
            Start Improving Your Search Rankings Today
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Contact us for a free initial consultation and website assessment.
            Let us show you how strategic SEO can benefit your business.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Get Your Free Consultation
          </Button>
        </div>
      </section>
    </>
  );
}

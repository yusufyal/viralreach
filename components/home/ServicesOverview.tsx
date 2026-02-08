import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    title: "SEO Services",
    description:
      "Improve your search engine rankings with comprehensive keyword research, on-page optimization, technical audits, and link building strategies that drive organic traffic.",
    href: "/services/seo",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Content Writing",
    description:
      "Engage your audience with professionally crafted blog posts, website copy, product descriptions, and email campaigns optimized for both readers and search engines.",
    href: "/services/content-writing",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "Digital Campaigns",
    description:
      "Reach your target audience through strategic PPC management, display advertising, remarketing, and data-driven promotional campaigns with transparent reporting.",
    href: "/services/digital-campaigns",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    title: "Social Media Marketing",
    description:
      "Build and engage your community across social platforms with tailored content strategies, scheduled posting, audience growth campaigns, and performance analytics.",
    href: "/services",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What We Offer"
          title="Comprehensive Digital Marketing Solutions"
          description="From search engine optimization to content creation, we provide end-to-end marketing services designed to help your business thrive in the digital landscape."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.description}
              </p>
              <span className="inline-flex items-center text-sm text-primary-600 font-medium mt-4 group-hover:gap-2 transition-all">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

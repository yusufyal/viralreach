import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = createMetadata({
  title: "Our Services",
  description:
    "Explore HNH Media's comprehensive digital marketing services including SEO, content writing, digital campaigns, and social media marketing tailored for your business.",
  path: "/services",
});

const services = [
  {
    title: "SEO Services",
    description:
      "Boost your organic search visibility with our data-driven SEO strategies. We optimize your website to rank higher and attract qualified traffic.",
    href: "/services/seo",
    features: [
      "Comprehensive keyword research",
      "On-page and technical SEO audits",
      "Link building strategies",
      "Monthly ranking reports",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Content Writing",
    description:
      "Engage and convert your audience with professionally written content that aligns with your brand voice and SEO objectives.",
    href: "/services/content-writing",
    features: [
      "SEO-optimized blog articles",
      "Website and landing page copy",
      "Product descriptions",
      "Email marketing campaigns",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing Campaigns",
    description:
      "Maximize your reach and ROI with targeted promotional campaigns across search engines and digital platforms.",
    href: "/services/digital-campaigns",
    features: [
      "PPC campaign management",
      "Display and remarketing ads",
      "Campaign analytics and optimization",
      "Budget allocation strategies",
    ],
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
      "Strengthen your brand's social presence with strategic content planning, community management, and growth-focused campaigns.",
    href: "/contact",
    features: [
      "Platform strategy and setup",
      "Content calendar management",
      "Community engagement",
      "Performance analytics",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Services"
            title="Digital Marketing Solutions for Every Business"
            description="We offer a full suite of digital marketing services designed to increase your online visibility, engage your target audience, and drive measurable business growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = createMetadata({
  title: "Contact Us",
  description:
    "Get in touch with HNH Media for a free consultation. Contact us to discuss your SEO, content writing, digital campaign, or social media marketing needs.",
  path: "/contact",
});

const contactInfo = [
  {
    title: "Email Us",
    detail: "info@hnh-media.com",
    description: "Send us an email anytime. We typically respond within 1-2 business days.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Call Us",
    detail: "+1 (555) 123-4567",
    description: "Available Monday to Friday, 9:00 AM - 6:00 PM (EST).",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Business Hours",
    detail: "Mon - Fri, 9 AM - 6 PM",
    description: "We are available during standard business hours (Eastern Time).",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Contact Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Let&apos;s Start a Conversation
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Whether you have a question about our services, need a custom quote,
            or want to discuss your marketing strategy, we&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below and a member of our team will be in
                touch shortly to discuss your needs.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info Sidebar */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Get in Touch
              </h2>
              <div className="space-y-8">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-primary-600 font-medium text-sm">
                        {item.detail}
                      </p>
                      <p className="text-sm text-slate-500 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-10 p-6 bg-slate-50 rounded-xl border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-3">
                  Free Initial Consultation
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Not sure which service is right for you? We offer a free
                  initial consultation to understand your business needs and
                  recommend the most suitable marketing strategy. No obligation,
                  no pressure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

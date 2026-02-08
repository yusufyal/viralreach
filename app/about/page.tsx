import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about ViralSearch, a professional digital marketing agency dedicated to helping businesses grow online through strategic SEO, content, and digital campaigns.",
  path: "/about",
});

const values = [
  {
    title: "Integrity",
    description:
      "We operate with complete honesty and transparency in everything we do. No hidden fees, no inflated metrics — just honest results and clear communication.",
  },
  {
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards of quality in every campaign, every piece of content, and every client interaction.",
  },
  {
    title: "Innovation",
    description:
      "The digital landscape evolves constantly. We stay ahead of industry trends and algorithm updates to keep our clients competitive.",
  },
  {
    title: "Collaboration",
    description:
      "We see ourselves as an extension of your team. Your goals become our goals, and we work closely with you to achieve them together.",
  },
];

const team = [
  {
    name: "Sarah Mitchell",
    role: "Founder & CEO",
    bio: "With over 10 years in digital marketing, Sarah founded ViralSearch to help businesses navigate the complexities of online growth with confidence.",
  },
  {
    name: "David Chen",
    role: "Head of SEO",
    bio: "David brings deep expertise in technical SEO and organic growth strategies, having helped dozens of businesses achieve first-page rankings.",
  },
  {
    name: "Emily Rodriguez",
    role: "Content Director",
    bio: "A skilled writer and strategist, Emily leads our content team in creating engaging, SEO-optimized content that resonates with target audiences.",
  },
  {
    name: "James Park",
    role: "Campaign Manager",
    bio: "James specializes in PPC and digital campaign management, with a data-driven approach to maximizing ROI for our clients.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
              About ViralSearch
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Your Partner in Digital Growth
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              ViralSearch is a professional digital marketing agency founded on
              the belief that every business deserves access to effective,
              transparent, and results-driven marketing strategies. We combine
              industry expertise with a genuine commitment to our clients&apos;
              success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  ViralSearch was born from a simple observation: too many
                  businesses were struggling with digital marketing agencies that
                  over-promised and under-delivered. We set out to change that by
                  building an agency grounded in transparency, measurable results,
                  and genuine partnership.
                </p>
                <p>
                  Since our founding, we have worked with businesses of all sizes
                  — from local startups to established enterprises — helping them
                  build a stronger online presence through strategic SEO,
                  compelling content, and targeted promotional campaigns.
                </p>
                <p>
                  Today, our team of experienced marketers, writers, and analysts
                  continues to deliver marketing solutions that are tailored to
                  each client&apos;s unique needs and objectives. We measure our
                  success by the results we achieve for our clients.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                To provide businesses with strategic, transparent, and
                results-oriented digital marketing services that drive
                sustainable online growth and deliver measurable value.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-primary-600">150+</p>
                  <p className="text-sm text-slate-500">Projects Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-600">50+</p>
                  <p className="text-sm text-slate-500">Active Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-600">5+</p>
                  <p className="text-sm text-slate-500">Years of Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-600">95%</p>
                  <p className="text-sm text-slate-500">Client Retention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Values"
            title="What We Stand For"
            description="These core values guide every decision we make and every strategy we develop for our clients."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 border border-slate-100 text-center"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Team"
            title="Meet the Experts Behind ViralSearch"
            description="A dedicated team of marketing professionals committed to delivering exceptional results for every client."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="text-center"
              >
                {/* Avatar placeholder */}
                <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-600">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-sm text-primary-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {member.bio}
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
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Ready to take your digital marketing to the next level? Get in touch
            with our team and let&apos;s discuss how we can help your business
            grow.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Us Today
          </Button>
        </div>
      </section>
    </>
  );
}

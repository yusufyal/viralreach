import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We begin by understanding your business, goals, target audience, and current online presence through a comprehensive consultation.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "Our team develops a tailored marketing strategy with clear objectives, timelines, and key performance indicators aligned with your goals.",
  },
  {
    step: "03",
    title: "Execution",
    description:
      "We implement the agreed-upon strategy across all relevant channels, from SEO and content to paid campaigns and social media.",
  },
  {
    step: "04",
    title: "Reporting",
    description:
      "You receive detailed monthly reports with performance metrics, insights, and recommendations for ongoing optimization.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Process"
          title="How We Work With You"
          description="A structured, transparent approach to digital marketing that keeps you informed and in control at every stage."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-primary-100" />
              )}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  features: string[];
  icon: React.ReactNode;
};

export default function ServiceCard({
  title,
  description,
  href,
  features,
  icon,
}: ServiceCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg hover:border-primary-200 transition-all duration-300">
      <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed mb-6">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
            <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="inline-flex items-center text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors"
      >
        Learn More
        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}

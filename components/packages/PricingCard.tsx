import Button from "@/components/ui/Button";

type PricingCardProps = {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
};

export default function PricingCard({
  name,
  description,
  price,
  period,
  features,
  highlighted = false,
  ctaText = "Get Started",
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col ${
        highlighted
          ? "bg-primary-600 text-white shadow-xl shadow-primary-600/20 scale-105 z-10"
          : "bg-white border border-slate-200 shadow-sm"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-accent-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3
          className={`text-xl font-bold mb-2 ${
            highlighted ? "text-white" : "text-slate-900"
          }`}
        >
          {name}
        </h3>
        <p
          className={`text-sm ${
            highlighted ? "text-primary-100" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      </div>

      <div className="mb-6">
        <span
          className={`text-4xl font-bold ${
            highlighted ? "text-white" : "text-slate-900"
          }`}
        >
          {price}
        </span>
        <span
          className={`text-sm ml-1 ${
            highlighted ? "text-primary-200" : "text-slate-500"
          }`}
        >
          /{period}
        </span>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <svg
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                highlighted ? "text-accent-400" : "text-primary-600"
              }`}
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
            <span className={highlighted ? "text-primary-50" : "text-slate-600"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        href="/contact"
        variant={highlighted ? "secondary" : "primary"}
        className="w-full"
      >
        {ctaText}
      </Button>
    </div>
  );
}

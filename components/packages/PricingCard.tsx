"use client";

import { useState } from "react";

type PricingCardProps = {
  id: string;
  name: string;
  description: string;
  price: string;
  amount: number;
  period: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
};

export default function PricingCard({
  name,
  description,
  price,
  amount,
  period,
  features,
  highlighted = false,
  ctaText = "Get Started",
}: PricingCardProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch {
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  const buttonVariantClasses = highlighted
    ? "bg-accent-500 text-white hover:bg-accent-600 shadow-sm shadow-accent-500/20"
    : "bg-primary-600 text-white hover:bg-primary-700 shadow-sm shadow-primary-600/20";

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

      <button
        onClick={handleCheckout}
        disabled={loading}
        className={`inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 px-6 py-2.5 text-base w-full disabled:opacity-60 disabled:cursor-not-allowed ${buttonVariantClasses}`}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Processing...
          </span>
        ) : (
          ctaText
        )}
      </button>
    </div>
  );
}

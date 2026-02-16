"use client";

import { useState } from "react";

type PricingCardProps = {
  id: string;
  name: string;
  description: string;
  amount: number;
  qty?: number;
  period: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
};

export default function PricingCard({
  name,
  description,
  amount,
  qty: defaultQty = 1,
  period,
  features,
  highlighted = false,
  ctaText = "Get Started",
}: PricingCardProps) {
  const [loading, setLoading] = useState(false);
  const [qty, setQty] = useState(defaultQty);

  const unitPrice = amount;
  const totalPrice = unitPrice * qty;

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalPrice }),
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

  const qtyBtnClasses = highlighted
    ? "w-8 h-8 rounded-lg border border-primary-300 text-white hover:bg-primary-500 flex items-center justify-center transition-colors font-bold text-lg"
    : "w-8 h-8 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-100 flex items-center justify-center transition-colors font-bold text-lg";

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

      {/* Price */}
      <div className="mb-4">
        <span
          className={`text-4xl font-bold ${
            highlighted ? "text-white" : "text-slate-900"
          }`}
        >
          ${totalPrice % 1 === 0 ? totalPrice : totalPrice.toFixed(2)}
        </span>
        <span
          className={`text-sm ml-1 ${
            highlighted ? "text-primary-200" : "text-slate-500"
          }`}
        >
          /{period}
        </span>
        {qty > 1 && (
          <p
            className={`text-xs mt-1 ${
              highlighted ? "text-primary-200" : "text-slate-400"
            }`}
          >
            {qty} x ${unitPrice} per unit
          </p>
        )}
      </div>

      {/* Qty selector */}
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <span
            className={`text-xs font-medium ${
              highlighted ? "text-primary-200" : "text-slate-500"
            }`}
          >
            Qty:
          </span>
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className={qtyBtnClasses}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span
            className={`w-8 text-center font-semibold text-sm ${
              highlighted ? "text-white" : "text-slate-900"
            }`}
          >
            {qty}
          </span>
          <button
            type="button"
            onClick={() => setQty((q) => Math.min(99, q + 1))}
            className={qtyBtnClasses}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
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

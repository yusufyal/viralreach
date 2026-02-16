"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type PackageData = {
  id?: string;
  name: string;
  description: string;
  price: number;
  qty: number;
  period: string;
  features: string[];
  highlighted: boolean;
  sortOrder: number;
  active: boolean;
  stripeTierName: string | null;
};

const defaultData: PackageData = {
  name: "",
  description: "",
  price: 0,
  qty: 1,
  period: "one-time",
  features: [],
  highlighted: false,
  sortOrder: 0,
  active: true,
  stripeTierName: null,
};

export default function PackageForm({
  initialData,
  isEdit = false,
}: {
  initialData?: PackageData;
  isEdit?: boolean;
}) {
  const router = useRouter();
  const [data, setData] = useState<PackageData>(initialData || defaultData);
  const [featuresText, setFeaturesText] = useState(
    (initialData?.features || []).join("\n")
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const features = featuresText
      .split("\n")
      .map((f) => f.trim())
      .filter(Boolean);

    const payload = { ...data, features };

    try {
      const url = isEdit
        ? `/api/admin/packages/${data.id}`
        : "/api/admin/packages";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to save package.");
      }

      router.push("/admin/packages");
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
          {error}
        </div>
      )}

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Package Name *
        </label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          required
          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
          placeholder="e.g. SEO Starter Kit"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Description *
        </label>
        <textarea
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
          required
          rows={3}
          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-y"
          placeholder="Short description of the package"
        />
      </div>

      {/* Price, Qty, Period — row */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Price ($) *
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            value={data.price}
            onChange={(e) =>
              setData({ ...data, price: parseFloat(e.target.value) || 0 })
            }
            required
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Display Qty
          </label>
          <input
            type="number"
            min="1"
            value={data.qty}
            onChange={(e) =>
              setData({ ...data, qty: parseInt(e.target.value) || 1 })
            }
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Period
          </label>
          <select
            value={data.period}
            onChange={(e) => setData({ ...data, period: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
          >
            <option value="one-time">One-time</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>

      {/* Sort Order */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Sort Order
          </label>
          <input
            type="number"
            min="0"
            value={data.sortOrder}
            onChange={(e) =>
              setData({ ...data, sortOrder: parseInt(e.target.value) || 0 })
            }
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
          />
          <p className="text-xs text-slate-400 mt-1">Lower numbers appear first</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Stripe Tier Name (optional)
          </label>
          <input
            type="text"
            value={data.stripeTierName || ""}
            onChange={(e) =>
              setData({ ...data, stripeTierName: e.target.value || null })
            }
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
            placeholder="Override auto-generated Stripe name"
          />
        </div>
      </div>

      {/* Features */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Features (one per line) *
        </label>
        <textarea
          value={featuresText}
          onChange={(e) => setFeaturesText(e.target.value)}
          rows={6}
          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-y font-mono"
          placeholder={"Basic SEO keyword analysis\n1 SEO-optimized blog article\nEmail support"}
        />
        <p className="text-xs text-slate-400 mt-1">
          Each line becomes a bullet point on the pricing card
        </p>
      </div>

      {/* Toggles */}
      <div className="flex gap-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={data.highlighted}
            onChange={(e) =>
              setData({ ...data, highlighted: e.target.checked })
            }
            className="w-4 h-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500"
          />
          <span className="text-sm text-slate-700">
            Highlighted (Most Popular)
          </span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={data.active}
            onChange={(e) => setData({ ...data, active: e.target.checked })}
            className="w-4 h-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500"
          />
          <span className="text-sm text-slate-700">Active (visible on site)</span>
        </label>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="bg-primary-600 text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-primary-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-sm"
        >
          {loading
            ? "Saving..."
            : isEdit
              ? "Update Package"
              : "Create Package"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/packages")}
          className="bg-slate-200 text-slate-700 font-semibold py-2.5 px-6 rounded-lg hover:bg-slate-300 transition-colors text-sm"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function PackageActions({
  id,
  active,
}: {
  id: string;
  active: boolean;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleToggle = async () => {
    setLoading(true);
    try {
      await fetch(`/api/admin/packages/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ active: !active }),
      });
      router.refresh();
    } catch {
      alert("Failed to toggle status.");
    }
    setLoading(false);
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this package?")) return;
    setLoading(true);
    try {
      await fetch(`/api/admin/packages/${id}`, { method: "DELETE" });
      router.refresh();
    } catch {
      alert("Failed to delete package.");
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-end gap-2">
      <Link
        href={`/admin/packages/${id}/edit`}
        className="text-primary-600 hover:text-primary-800 font-medium text-xs transition-colors"
      >
        Edit
      </Link>
      <button
        onClick={handleToggle}
        disabled={loading}
        className="text-amber-600 hover:text-amber-800 font-medium text-xs disabled:opacity-50 transition-colors"
      >
        {active ? "Deactivate" : "Activate"}
      </button>
      <button
        onClick={handleDelete}
        disabled={loading}
        className="text-red-600 hover:text-red-800 font-medium text-xs disabled:opacity-50 transition-colors"
      >
        Delete
      </button>
    </div>
  );
}

import Link from "next/link";
import AdminLayout from "@/components/admin/AdminLayout";
import prisma from "@/lib/prisma";
import PackageActions from "@/components/admin/PackageActions";

export const dynamic = "force-dynamic";

export default async function AdminPackagesPage() {
  let packages: Awaited<ReturnType<typeof prisma.package.findMany>> = [];
  try {
    packages = await prisma.package.findMany({
      orderBy: { sortOrder: "asc" },
    });
  } catch {
    // Database not connected yet
  }

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Packages</h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage the pricing packages displayed on the website.
          </p>
        </div>
        <Link
          href="/admin/packages/new"
          className="bg-primary-600 text-white font-semibold py-2.5 px-5 rounded-lg hover:bg-primary-700 transition-colors text-sm"
        >
          + New Package
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="text-left py-3 px-4 font-semibold text-slate-600">
                  Name
                </th>
                <th className="text-left py-3 px-4 font-semibold text-slate-600">
                  Price
                </th>
                <th className="text-left py-3 px-4 font-semibold text-slate-600">
                  Qty
                </th>
                <th className="text-left py-3 px-4 font-semibold text-slate-600">
                  Period
                </th>
                <th className="text-center py-3 px-4 font-semibold text-slate-600">
                  Order
                </th>
                <th className="text-center py-3 px-4 font-semibold text-slate-600">
                  Status
                </th>
                <th className="text-right py-3 px-4 font-semibold text-slate-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {packages.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="text-center py-12 text-slate-400"
                  >
                    No packages yet. Click &quot;+ New Package&quot; to create
                    one.
                  </td>
                </tr>
              )}
              {packages.map((pkg) => (
                <tr
                  key={pkg.id}
                  className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-900">
                        {pkg.name}
                      </span>
                      {pkg.highlighted && (
                        <span className="text-[10px] font-bold bg-primary-100 text-primary-700 px-1.5 py-0.5 rounded">
                          POPULAR
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-slate-700">
                    ${pkg.price.toFixed(2)}
                  </td>
                  <td className="py-3 px-4 text-slate-700">{pkg.qty}</td>
                  <td className="py-3 px-4 text-slate-500">{pkg.period}</td>
                  <td className="py-3 px-4 text-center text-slate-500">
                    {pkg.sortOrder}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${
                        pkg.active
                          ? "bg-green-100 text-green-700"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {pkg.active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <PackageActions id={pkg.id} active={pkg.active} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

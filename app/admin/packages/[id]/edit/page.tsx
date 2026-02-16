import { notFound } from "next/navigation";
import AdminLayout from "@/components/admin/AdminLayout";
import PackageForm from "@/components/admin/PackageForm";
import prisma from "@/lib/prisma";

export default async function EditPackagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const pkg = await prisma.package.findUnique({ where: { id } });
  if (!pkg) {
    notFound();
  }

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Edit Package</h1>
        <p className="text-sm text-slate-500 mt-1">
          Update &quot;{pkg.name}&quot; package details.
        </p>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <PackageForm
          initialData={{
            id: pkg.id,
            name: pkg.name,
            description: pkg.description,
            price: pkg.price,
            qty: pkg.qty,
            period: pkg.period,
            features: pkg.features,
            highlighted: pkg.highlighted,
            sortOrder: pkg.sortOrder,
            active: pkg.active,
            stripeTierName: pkg.stripeTierName,
          }}
          isEdit
        />
      </div>
    </AdminLayout>
  );
}

import AdminLayout from "@/components/admin/AdminLayout";
import PackageForm from "@/components/admin/PackageForm";

export default function NewPackagePage() {
  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Create Package</h1>
        <p className="text-sm text-slate-500 mt-1">
          Add a new pricing package to display on the website.
        </p>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <PackageForm />
      </div>
    </AdminLayout>
  );
}

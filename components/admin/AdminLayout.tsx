"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const navItems = [
  { label: "Packages", href: "/admin/packages" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Top bar */}
      <header className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/admin/packages" className="font-bold text-lg">
              HNH Media <span className="text-primary-400 text-sm font-normal">Admin</span>
            </Link>
            <nav className="flex gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded text-sm transition-colors ${
                    pathname.startsWith(item.href)
                      ? "bg-slate-700 text-white"
                      : "text-slate-300 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="text-sm text-slate-400 hover:text-white transition-colors"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}

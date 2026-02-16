import Link from "next/link";
import Logo from "@/components/ui/Logo";

const footerLinks = {
  services: [
    { label: "SEO Services", href: "/services/seo" },
    { label: "Content Writing", href: "/services/content-writing" },
    { label: "Digital Campaigns", href: "/services/digital-campaigns" },
    { label: "All Services", href: "/services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Packages & Pricing", href: "/packages" },
    { label: "Contact Us", href: "/contact" },
  ],
  legal: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4 [&_span]:text-white [&_svg]:text-primary-400">
              <Logo />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Strategic digital marketing solutions that help businesses grow
              their online presence and achieve measurable results.
            </p>
            <p className="text-sm text-slate-400">
              <strong className="text-slate-300">Email:</strong>{" "}
              <a
                href="mailto:info@hnh-media.com"
                className="hover:text-primary-400 transition-colors"
              >
                info@hnh-media.com
              </a>
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} HNH Media. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Professional Digital Marketing Services
          </p>
        </div>
      </div>
    </footer>
  );
}

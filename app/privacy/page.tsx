import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "HNH Media's privacy policy explains how we collect, use, and protect your personal information when you use our website and digital marketing services.",
  path: "/privacy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-500">
            Last updated: February 1, 2026
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              1. Introduction
            </h2>
            <p className="text-slate-600 leading-relaxed">
              HNH Media (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
              committed to protecting the privacy of our website visitors and
              clients. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your personal information when you visit
              our website or engage our digital marketing services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              2. Information We Collect
            </h2>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Personal Information
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We may collect personal information that you voluntarily provide to
              us when you fill out our contact form, subscribe to our newsletter,
              or engage our services. This may include your name, email address,
              phone number, company name, and details about your marketing needs.
            </p>
            <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-4">
              Automatically Collected Information
            </h3>
            <p className="text-slate-600 leading-relaxed">
              When you visit our website, we may automatically collect certain
              information about your device, including your IP address, browser
              type, operating system, referring URLs, and pages viewed. This
              information is collected through cookies and similar tracking
              technologies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              3. How We Use Your Information
            </h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>To provide and deliver our digital marketing services</li>
              <li>To respond to your inquiries and communicate with you</li>
              <li>To send you relevant information about our services, with your consent</li>
              <li>To improve our website and services</li>
              <li>To analyze website usage and trends</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Our website may use cookies and similar tracking technologies to
              enhance your browsing experience, analyze website traffic, and
              understand where our visitors are coming from. You can control
              cookie settings through your browser preferences. Please note that
              disabling cookies may affect certain features of our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              5. Third-Party Services
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We may use third-party services such as analytics providers,
              payment processors, and email marketing platforms to help us
              operate our business. These third parties may have access to your
              personal information only to perform tasks on our behalf and are
              obligated to protect your information in accordance with applicable
              laws and regulations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              6. Data Sharing and Disclosure
            </h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information in the following limited
              circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>With service providers who assist us in operating our business</li>
              <li>When required by law, legal process, or government request</li>
              <li>To protect the rights, property, or safety of HNH Media, our clients, or others</li>
              <li>With your explicit consent</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              7. Data Security
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. However, no method
              of transmission over the internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              8. Data Retention
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We retain your personal information only for as long as necessary
              to fulfill the purposes for which it was collected, including to
              satisfy any legal, accounting, or reporting requirements. When your
              information is no longer needed, we will securely delete or
              anonymize it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              9. Your Rights
            </h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Depending on your location, you may have the following rights
              regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>The right to access and receive a copy of your personal data</li>
              <li>The right to request correction of inaccurate data</li>
              <li>The right to request deletion of your personal data</li>
              <li>The right to object to or restrict processing of your data</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">
              To exercise any of these rights, please contact us at{" "}
              <a
                href="mailto:info@hnh-media.com"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                info@hnh-media.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              10. Children&apos;s Privacy
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Our website and services are not directed to individuals under the
              age of 18. We do not knowingly collect personal information from
              children. If we become aware that a child has provided us with
              personal information, we will take steps to delete such information
              promptly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              11. Changes to This Policy
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or applicable laws. We will post any
              updates on this page with a revised &quot;Last updated&quot; date.
              We encourage you to review this policy periodically.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              12. Contact Us
            </h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at{" "}
              <a
                href="mailto:info@hnh-media.com"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                info@hnh-media.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

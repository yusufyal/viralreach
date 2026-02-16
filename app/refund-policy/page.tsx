import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = createMetadata({
  title: "Refund & Cancellation Policy",
  description:
    "Review HNH Media's refund and cancellation policy. Learn about eligibility, timelines, and the process for requesting refunds or cancelling digital marketing services.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="text-slate-500">
            Last updated: February 1, 2026
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              1. Overview
            </h2>
            <p className="text-slate-600 leading-relaxed">
              At HNH Media, we are committed to delivering high-quality digital
              marketing services and ensuring client satisfaction. This Refund
              and Cancellation Policy outlines the conditions under which refunds
              may be issued and the procedures for cancelling our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              2. Refund Eligibility
            </h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Refunds may be considered under the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>
                <strong>Service Not Delivered:</strong> If we fail to deliver the
                agreed-upon services within the specified timeline without prior
                communication, you may be eligible for a full or partial refund.
              </li>
              <li>
                <strong>Duplicate Payment:</strong> If you are charged more than
                once for the same service, the duplicate amount will be refunded
                in full.
              </li>
              <li>
                <strong>Service Not Started:</strong> If you request cancellation
                before any work has commenced on your project, you may be
                eligible for a full refund, minus any applicable processing fees.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              3. Non-Refundable Items
            </h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              The following are generally not eligible for refunds:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>
                Services that have been fully delivered in accordance with the
                service agreement
              </li>
              <li>
                Partially completed work where deliverables have already been
                provided (a pro-rated adjustment may be considered)
              </li>
              <li>
                Third-party costs such as advertising spend, domain
                registrations, or software subscriptions paid on your behalf
              </li>
              <li>
                Setup fees or consultation fees that have already been fulfilled
              </li>
              <li>
                Custom content, designs, or strategies that have been delivered
                and approved by the client
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              4. Refund Request Process
            </h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              To request a refund, please follow these steps:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600">
              <li>
                Contact us at{" "}
                <a
                  href="mailto:info@hnh-media.com"
                  className="text-primary-600 hover:text-primary-700 underline"
                >
                  info@hnh-media.com
                </a>{" "}
                with the subject line &quot;Refund Request.&quot;
              </li>
              <li>
                Include your full name, the service or package you purchased,
                the date of purchase, and the reason for your refund request.
              </li>
              <li>
                Our team will review your request and respond within 5 business
                days with a determination.
              </li>
              <li>
                If approved, refunds will be processed within 7-14 business days
                using the original payment method.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              5. Cancellation Policy
            </h2>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Monthly Services
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Clients on monthly service plans may cancel at any time by
              providing at least 30 days written notice. Cancellation will take
              effect at the end of the current billing cycle. Services will
              continue until the end of the paid period.
            </p>
            <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-4">
              Project-Based Services
            </h3>
            <p className="text-slate-600 leading-relaxed">
              For one-time or project-based services, cancellation requests must
              be submitted before the project has been completed. Fees for work
              already performed will be calculated on a pro-rated basis.
            </p>
            <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-4">
              How to Cancel
            </h3>
            <p className="text-slate-600 leading-relaxed">
              To cancel your services, send a written notice to{" "}
              <a
                href="mailto:info@hnh-media.com"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                info@hnh-media.com
              </a>{" "}
              or notify your dedicated account manager. Please include your name,
              the services you wish to cancel, and your preferred cancellation
              date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              6. Refund Timeline
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Once a refund has been approved, please allow the following
              processing times:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-3">
              <li>
                <strong>Credit/Debit Card:</strong> 7-14 business days
              </li>
              <li>
                <strong>Bank Transfer:</strong> 5-10 business days
              </li>
              <li>
                <strong>Other Methods:</strong> Processing times may vary
                depending on the payment provider
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              7. Disputes
            </h2>
            <p className="text-slate-600 leading-relaxed">
              If you are dissatisfied with a refund determination, you may
              request a review by contacting us in writing. We will conduct a
              thorough review of your case and provide a final response within 10
              business days. We are committed to resolving all disputes fairly
              and promptly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              8. Changes to This Policy
            </h2>
            <p className="text-slate-600 leading-relaxed">
              HNH Media reserves the right to modify this Refund and
              Cancellation Policy at any time. Any changes will be posted on this
              page with an updated revision date. Continued use of our services
              after changes are posted constitutes acceptance of the revised
              policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              9. Contact Us
            </h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about this policy, please contact us at{" "}
              <a
                href="mailto:info@hnh-media.com"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                info@hnh-media.com
              </a>{" "}
              or visit our{" "}
              <Link
                href="/contact"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

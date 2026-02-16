import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions governing the use of HNH Media's digital marketing services, including service scope, payment terms, and liability.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Terms &amp; Conditions
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
              Welcome to HNH Media. These Terms and Conditions govern your use
              of our website and the digital marketing services we provide. By
              engaging our services or using our website, you agree to be bound by
              these terms. Please read them carefully before proceeding.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              2. Services
            </h2>
            <p className="text-slate-600 leading-relaxed">
              HNH Media provides digital marketing services including, but not
              limited to, search engine optimization (SEO), content writing,
              digital promotional campaigns, and social media marketing. The
              specific scope of services will be outlined in a service agreement
              or proposal provided to each client prior to commencement of work.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              We strive to deliver high-quality marketing services in accordance
              with industry best practices. However, due to the nature of digital
              marketing, we cannot guarantee specific rankings, traffic volumes,
              or conversion rates. Results may vary based on numerous factors
              including market conditions, competition, and client cooperation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              3. Client Obligations
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Clients are responsible for providing accurate and complete
              information necessary for the delivery of our services. This
              includes but is not limited to business information, access
              credentials, brand guidelines, and timely feedback on deliverables.
              Delays in providing required information may affect project
              timelines.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              4. Payment Terms
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Payment terms are specified in the service agreement provided to
              each client. Unless otherwise agreed, invoices are due within 14
              days of issuance. We accept payment via bank transfer, credit card,
              and other methods as specified during checkout or in the service
              agreement.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              Late payments may result in suspension of services until the
              outstanding balance is settled. We reserve the right to charge
              interest on overdue invoices at a rate of 1.5% per month or the
              maximum rate permitted by law, whichever is lower.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              5. Intellectual Property
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Upon full payment, clients receive ownership of all custom content,
              designs, and deliverables created specifically for their project,
              unless otherwise specified in the service agreement. HNH Media
              retains the right to use general methodologies, tools, and
              techniques developed during the engagement.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              Clients grant HNH Media a limited license to access and modify
              their website, social media accounts, and other platforms as
              necessary to deliver the agreed-upon services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              6. Confidentiality
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Both parties agree to keep confidential any proprietary information
              shared during the course of the engagement. This includes business
              strategies, analytics data, customer information, and any other
              information designated as confidential. This obligation survives
              termination of the service agreement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              7. Limitation of Liability
            </h2>
            <p className="text-slate-600 leading-relaxed">
              To the maximum extent permitted by law, HNH Media shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, including but not limited to loss of profits,
              data, or business opportunities, arising from the use of our
              services.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              Our total liability for any claim arising from or related to our
              services shall not exceed the total amount paid by the client for
              the specific services giving rise to the claim during the 12 months
              preceding the claim.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              8. Termination
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Either party may terminate the service agreement by providing 30
              days written notice to the other party. Upon termination, the client
              is responsible for payment of all services rendered up to the
              termination date. Any pre-paid amounts for undelivered services will
              be handled in accordance with our Refund Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              9. Modifications
            </h2>
            <p className="text-slate-600 leading-relaxed">
              HNH Media reserves the right to update these Terms and Conditions
              at any time. Changes will be effective upon posting to our website.
              Continued use of our services after changes are posted constitutes
              acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              10. Governing Law
            </h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms and Conditions are governed by and construed in
              accordance with applicable laws. Any disputes arising from these
              terms or the services provided shall be resolved through good-faith
              negotiation, and if necessary, through binding arbitration in
              accordance with the rules of the relevant arbitration association.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              11. Contact Information
            </h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about these Terms and Conditions, please
              contact us at{" "}
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

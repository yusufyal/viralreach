import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import Button from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "Payment Successful",
  description:
    "Thank you for choosing HNH Media. Your payment was successful and our team will be in touch shortly to get started on your marketing plan.",
  path: "/success",
});

export default function SuccessPage() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Payment Successful!
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-4">
          Thank you for choosing HNH Media. Your order has been
          confirmed and our team will reach out to you within 1-2 business days
          to begin working on your marketing strategy.
        </p>
        <p className="text-slate-500 mb-10">
          A confirmation email has been sent to your email address. If you have
          any questions, feel free to contact us at{" "}
          <a
            href="mailto:info@hnh-media.com"
            className="text-primary-600 hover:text-primary-700 underline"
          >
            info@hnh-media.com
          </a>
          .
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" size="lg">
            Back to Home
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}

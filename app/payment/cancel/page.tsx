"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function CancelRedirect() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (!redirect) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = redirect;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [redirect]);

  if (!redirect) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-3">Payment Cancelled</h1>
          <p className="text-slate-600">Your payment was cancelled. No charges were made.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md mx-auto px-6 text-center">
        <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">Payment Cancelled</h1>
        <p className="text-slate-600 mb-6">
          Your payment was cancelled. No charges were made. Redirecting you back in{" "}
          <span className="font-semibold text-slate-900">{countdown}</span>{" "}
          {countdown === 1 ? "second" : "seconds"}...
        </p>
        <div className="w-12 h-12 border-4 border-amber-200 border-t-amber-600 rounded-full animate-spin mx-auto mb-6" />
        <a
          href={redirect}
          className="text-sm text-primary-600 hover:text-primary-700 underline"
        >
          Click here if you are not redirected automatically
        </a>
      </div>
    </div>
  );
}

export default function PaymentCancelPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="w-12 h-12 border-4 border-slate-200 border-t-slate-600 rounded-full animate-spin" />
        </div>
      }
    >
      <CancelRedirect />
    </Suspense>
  );
}

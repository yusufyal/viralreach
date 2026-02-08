"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only: In production, connect to an API endpoint or email service
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-primary-50 border border-primary-200 rounded-xl p-8 text-center">
        <svg
          className="w-12 h-12 text-primary-600 mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Thank You for Reaching Out!
        </h3>
        <p className="text-slate-600">
          We have received your message and will get back to you within 1-2
          business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors text-slate-900"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors text-slate-900"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors text-slate-900 bg-white"
        >
          <option value="">Select a subject</option>
          <option value="seo">SEO Services</option>
          <option value="content">Content Writing</option>
          <option value="campaigns">Digital Campaigns</option>
          <option value="social">Social Media Marketing</option>
          <option value="packages">Packages & Pricing</option>
          <option value="custom">Custom Project</option>
          <option value="other">Other Inquiry</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors text-slate-900 resize-y"
          placeholder="Tell us about your project or inquiry..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}

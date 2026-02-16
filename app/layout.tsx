import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, DEFAULT_DESCRIPTION } from "@/lib/metadata";
import ClientBody from "@/components/layout/ClientBody";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hnh-media.com"),
  title: {
    default: `${SITE_NAME} - Professional Digital Marketing Agency`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Digital Marketing Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}

import type { Metadata } from "next";

const SITE_NAME = "HNH Media";
const SITE_URL = "https://hnh-media.com";
const DEFAULT_DESCRIPTION =
  "HNH Media is a professional digital marketing agency offering SEO services, content writing, digital campaigns, and social media marketing to help businesses grow online.";

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} - Digital Marketing Agency`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export { SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION };

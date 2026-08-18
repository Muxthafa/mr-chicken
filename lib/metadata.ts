import type { Metadata } from "next";
import { company } from "@/data/company";

export const siteConfig = {
  name: company.name,
  url: "https://www.mrchickenandmutton.com",
  defaultTitle: `${company.name} | Fresh Chicken & Mutton in Katpadi, Udupi`,
  defaultDescription: company.shortDescription,
  ogImage: "/opengraph-image",
};

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
}

export function buildMetadata({ title, description, path }: BuildMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/hero";
import { WhyChooseUs } from "@/components/sections/home/why-choose-us";
import { ProductsPreview } from "@/components/sections/home/products-preview";
import { WhoWeServe } from "@/components/sections/home/who-we-serve";
import { QualityPromise } from "@/components/sections/home/quality-promise";
import { Testimonials } from "@/components/sections/home/testimonials";
import { PartnerCta } from "@/components/sections/home/partner-cta";
import { buildMetadata, siteConfig } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ProductsPreview />
      <WhoWeServe />
      <QualityPromise />
      <Testimonials />
      <PartnerCta />
    </>
  );
}

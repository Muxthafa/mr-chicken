import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ServiceGrid } from "@/components/sections/services/service-grid";
import { PartnerCta } from "@/components/sections/home/partner-cta";
import { servicesHero } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description: servicesHero.description,
  path: "/services",
});

export default function ServicesPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <PageHero {...servicesHero} />
      <ServiceGrid />
      <PartnerCta />
    </>
  );
}

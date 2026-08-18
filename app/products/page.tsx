import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ProductGrid } from "@/components/sections/products/product-grid";
import { PartnerCta } from "@/components/sections/home/partner-cta";
import { productsHero } from "@/data/products";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Products",
  description: productsHero.description,
  path: "/products",
});

export default function ProductsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <PageHero {...productsHero} />
      <ProductGrid />
      <PartnerCta />
    </>
  );
}

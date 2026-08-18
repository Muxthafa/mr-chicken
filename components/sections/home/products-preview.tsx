import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/shared/section";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { ProductCategoryCard } from "@/components/cards/product-category-card";
import { Button } from "@/components/ui/button";
import { productCategories } from "@/data/products";

export function ProductsPreview() {
  return (
    <Section
      eyebrow="Our Products"
      heading="Fresh Today, Premium Tomorrow"
      subheading="From the counter to the cold chain — explore what we offer today, and what's coming next."
      tone="muted"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {productCategories.map((category, index) => (
          <AnimatedReveal key={category.id} delay={index * 0.08}>
            <ProductCategoryCard category={category} />
          </AnimatedReveal>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Button
          variant="outline"
          size="lg"
          className="h-11 gap-2 px-6"
          render={<Link href="/products" />}
        >
          View All Products <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </Section>
  );
}

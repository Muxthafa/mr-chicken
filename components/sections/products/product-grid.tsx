import { Container } from "@/components/shared/container";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { ProductItemCard } from "@/components/cards/product-item-card";
import { Badge } from "@/components/ui/badge";
import { iconMap } from "@/lib/icons";
import { productCategories } from "@/data/products";

export function ProductGrid() {
  return (
    <>
      {productCategories.map((category, categoryIndex) => {
        const Icon = iconMap[category.icon];
        const tinted = categoryIndex % 2 === 1;

        return (
          <section key={category.id} className={tinted ? "bg-muted py-20 md:py-28" : "py-20 md:py-28"}>
            <Container>
              <AnimatedReveal className="mb-10 flex flex-wrap items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                      {category.name}
                    </h2>
                    {category.status === "coming-soon" && (
                      <Badge variant="outline">Coming Soon</Badge>
                    )}
                  </div>
                  <p className="mt-1 max-w-xl text-sm text-muted-foreground sm:text-base">
                    {category.description}
                  </p>
                </div>
              </AnimatedReveal>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {category.items.map((item, index) => (
                  <AnimatedReveal key={item.slug} delay={index * 0.06}>
                    <ProductItemCard item={item} />
                  </AnimatedReveal>
                ))}
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}

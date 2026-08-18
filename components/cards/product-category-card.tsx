import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ContentImage } from "@/components/shared/content-image";
import type { ProductCategory } from "@/types/content";

export function ProductCategoryCard({ category }: { category: ProductCategory }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <ContentImage image={category.image} className="aspect-4/3 w-full rounded-none rounded-t-2xl border-0 border-b border-border" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
          {category.status === "coming-soon" && <Badge variant="outline">Coming Soon</Badge>}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{category.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {category.cuts.map((cut) => (
            <span
              key={cut}
              className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {cut}
            </span>
          ))}
        </div>
        <Link
          href="/products"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          View Details <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

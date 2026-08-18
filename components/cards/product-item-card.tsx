import { Badge } from "@/components/ui/badge";
import { ContentImage } from "@/components/shared/content-image";
import type { ProductItem } from "@/types/content";

export function ProductItemCard({ item }: { item: ProductItem }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <ContentImage
        image={item.image}
        className="aspect-4/3 w-full rounded-none rounded-t-2xl border-0 border-b border-border"
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-base font-semibold text-foreground">{item.name}</h4>
          {item.status === "coming-soon" && (
            <Badge variant="outline" className="shrink-0">
              Coming Soon
            </Badge>
          )}
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        <p className="mt-4 text-sm font-medium text-primary">
          {item.price !== null ? `₹${item.price} ${item.unit}` : `Price on enquiry — ${item.unit}`}
        </p>
      </div>
    </div>
  );
}

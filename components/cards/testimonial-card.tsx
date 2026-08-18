import { Quote } from "lucide-react";
import type { Testimonial } from "@/types/content";

export function TestimonialCard({ name, role, business, quote }: Testimonial) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
      <Quote className="h-6 w-6 text-primary/40" aria-hidden="true" />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">&ldquo;{quote}&rdquo;</p>
      <div className="mt-6 border-t border-border pt-4">
        <p className="text-sm font-semibold text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">
          {role}, {business}
        </p>
      </div>
    </div>
  );
}

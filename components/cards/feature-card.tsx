import { iconMap } from "@/lib/icons";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { IconTextItem } from "@/types/content";

export function FeatureCard({
  icon,
  title,
  description,
  status,
  className,
}: IconTextItem & { className?: string }) {
  const Icon = iconMap[icon];

  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md",
        className
      )}
    >
      {status === "future" && (
        <Badge variant="outline" className="absolute top-5 right-5">
          Coming Soon
        </Badge>
      )}
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

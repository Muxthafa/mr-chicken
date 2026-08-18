import { cn } from "@/lib/utils";

type HeadingTag = "h1" | "h2" | "h3" | "h4";

const sizeMap: Record<HeadingTag, string> = {
  h1: "text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl",
  h2: "text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl",
  h3: "text-2xl font-semibold tracking-tight text-foreground sm:text-3xl",
  h4: "text-lg font-semibold tracking-tight text-foreground sm:text-xl",
};

export function Heading({
  as = "h2",
  className,
  children,
}: {
  as?: HeadingTag;
  className?: string;
  children: React.ReactNode;
}) {
  const Tag = as;
  return <Tag className={cn(sizeMap[as], className)}>{children}</Tag>;
}

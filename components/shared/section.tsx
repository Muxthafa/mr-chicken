import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { AnimatedReveal } from "@/components/shared/animated-reveal";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  align?: "left" | "center";
  tone?: "default" | "muted";
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

export function Section({
  id,
  eyebrow,
  heading,
  subheading,
  align = "center",
  tone = "default",
  className,
  containerClassName,
  children,
}: SectionProps) {
  const hasHeader = Boolean(eyebrow || heading || subheading);

  return (
    <section
      id={id}
      className={cn("py-20 md:py-28", tone === "muted" && "bg-muted", className)}
    >
      <Container className={containerClassName}>
        {hasHeader && (
          <AnimatedReveal
            className={cn(
              "mb-12 md:mb-16",
              align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
            )}
          >
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold tracking-wider text-primary uppercase">
                {eyebrow}
              </p>
            )}
            {heading && <Heading as="h2">{heading}</Heading>}
            {subheading && (
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{subheading}</p>
            )}
          </AnimatedReveal>
        )}
        {children}
      </Container>
    </section>
  );
}

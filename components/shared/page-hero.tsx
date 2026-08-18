import { Container } from "@/components/shared/container";
import { AnimatedReveal } from "@/components/shared/animated-reveal";

interface PageHeroProps {
  eyebrow: string;
  heading: string;
  description: string;
}

export function PageHero({ eyebrow, heading, description }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-muted/40">
      <Container className="py-16 text-center md:py-24">
        <AnimatedReveal className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-semibold tracking-wider text-primary uppercase">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            {heading}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{description}</p>
        </AnimatedReveal>
      </Container>
    </section>
  );
}

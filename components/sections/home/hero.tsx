import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { ContentImage } from "@/components/shared/content-image";
import { hero } from "@/data/home";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <AnimatedReveal>
          <p className="mb-4 inline-flex items-center rounded-full border border-border bg-muted px-4 py-1.5 text-sm font-medium text-primary">
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl">
            {hero.heading}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {hero.subheading}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="h-12 px-6 text-base"
              render={<Link href={hero.primaryCta.href} />}
            >
              {hero.primaryCta.label}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-6 text-base"
              render={<Link href={hero.secondaryCta.href} />}
            >
              {hero.secondaryCta.label}
            </Button>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs text-muted-foreground sm:text-sm">{stat.label}</dt>
                <dd className="mt-1 text-xl font-semibold text-foreground sm:text-2xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </AnimatedReveal>
        <AnimatedReveal delay={0.15}>
          <ContentImage
            image={hero.image}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="aspect-square w-full lg:aspect-4/5"
          />
        </AnimatedReveal>
      </Container>
    </section>
  );
}

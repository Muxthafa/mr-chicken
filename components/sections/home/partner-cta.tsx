import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { partnerCta } from "@/data/home";

export function PartnerCta() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <AnimatedReveal className="rounded-3xl bg-primary px-8 py-16 text-center sm:px-16">
          <p className="text-sm font-semibold tracking-wider text-primary-foreground/70 uppercase">
            {partnerCta.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
            {partnerCta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
            {partnerCta.description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="h-12 px-6 text-base"
              render={<Link href={partnerCta.primaryCta.href} />}
            >
              {partnerCta.primaryCta.label}
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="h-12 px-6 text-base text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
              render={<Link href={partnerCta.secondaryCta.href} />}
            >
              {partnerCta.secondaryCta.label}
            </Button>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}

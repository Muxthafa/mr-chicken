import { Section } from "@/components/shared/section";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { FeatureCard } from "@/components/cards/feature-card";
import { whoWeServe } from "@/data/home";

export function WhoWeServe() {
  return (
    <Section
      eyebrow="Who We Serve"
      heading="Built to Supply — At Every Scale"
      subheading="From a family dinner table to a hotel kitchen to a quick-commerce warehouse."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {whoWeServe.map((item, index) => (
          <AnimatedReveal key={item.title} delay={index * 0.05}>
            <FeatureCard {...item} className="h-full" />
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}

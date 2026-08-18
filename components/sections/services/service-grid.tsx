import { Section } from "@/components/shared/section";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { FeatureCard } from "@/components/cards/feature-card";
import { services } from "@/data/services";

export function ServiceGrid() {
  return (
    <Section>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((item, index) => (
          <AnimatedReveal key={item.title} delay={index * 0.05}>
            <FeatureCard {...item} className="h-full" />
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}

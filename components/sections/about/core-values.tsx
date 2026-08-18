import { Section } from "@/components/shared/section";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { FeatureCard } from "@/components/cards/feature-card";
import { coreValues } from "@/data/about";

export function CoreValues() {
  return (
    <Section eyebrow="Core Values" heading="What Guides Every Decision We Make" tone="muted">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {coreValues.map((item, index) => (
          <AnimatedReveal key={item.title} delay={index * 0.06}>
            <FeatureCard {...item} className="h-full" />
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}

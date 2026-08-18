import { Section } from "@/components/shared/section";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { FeatureCard } from "@/components/cards/feature-card";
import { qualityPromise } from "@/data/home";

export function QualityPromise() {
  return (
    <Section
      eyebrow="Quality Promise"
      heading="Food Safety Isn't a Feature — It's the Foundation"
      subheading="Every process we run is built around one non-negotiable: what reaches you must be fresh, clean, and safe."
      tone="muted"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {qualityPromise.map((item, index) => (
          <AnimatedReveal key={item.title} delay={index * 0.06}>
            <FeatureCard {...item} className="h-full" />
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}

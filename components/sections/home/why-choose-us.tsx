import { Section } from "@/components/shared/section";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { FeatureCard } from "@/components/cards/feature-card";
import { whyChooseUs } from "@/data/home";

export function WhyChooseUs() {
  return (
    <Section
      eyebrow="Why Choose Us"
      heading="Fifty Years of Doing It Right"
      subheading="What keeps generations of Katpadi families — and now hotels, restaurants, and retailers — coming back."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.map((item, index) => (
          <AnimatedReveal key={item.title} delay={index * 0.06}>
            <FeatureCard {...item} className="h-full" />
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}

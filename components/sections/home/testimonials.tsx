import { Section } from "@/components/shared/section";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <Section eyebrow="Testimonials" heading="Trusted By Families and Businesses Alike">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((testimonial, index) => (
          <AnimatedReveal key={testimonial.name} delay={index * 0.08}>
            <TestimonialCard {...testimonial} />
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}

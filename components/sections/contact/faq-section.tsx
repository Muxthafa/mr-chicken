import { Section } from "@/components/shared/section";
import { FAQAccordion } from "@/components/cards/faq-accordion";
import { faqs } from "@/data/faq";

export function FAQSection() {
  return (
    <Section eyebrow="FAQ" heading="Common Questions" tone="muted">
      <div className="mx-auto max-w-2xl">
        <FAQAccordion faqs={faqs} />
      </div>
    </Section>
  );
}

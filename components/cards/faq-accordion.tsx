import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQItem } from "@/types/content";

export function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  return (
    <Accordion className="divide-y divide-border rounded-2xl border border-border bg-card px-6">
      {faqs.map((faq) => (
        <AccordionItem key={faq.question} value={faq.question} className="py-1">
          <AccordionTrigger className="text-base font-medium text-foreground">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

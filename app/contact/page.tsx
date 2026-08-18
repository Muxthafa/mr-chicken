import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { ContactInfo } from "@/components/sections/contact/contact-info";
import { MapEmbed } from "@/components/sections/contact/map-embed";
import { FAQSection } from "@/components/sections/contact/faq-section";
import { contactHero } from "@/data/contact";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description: contactHero.description,
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <PageHero {...contactHero} />
      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <AnimatedReveal>
            <ContactForm />
          </AnimatedReveal>
          <AnimatedReveal delay={0.1} className="space-y-8">
            <ContactInfo />
            <MapEmbed />
          </AnimatedReveal>
        </div>
      </Section>
      <FAQSection />
    </>
  );
}

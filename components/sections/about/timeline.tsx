import { Section } from "@/components/shared/section";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { timeline } from "@/data/about";

export function Timeline() {
  return (
    <Section eyebrow="Our Journey" heading="50 Years, One Story" tone="muted">
      <ol className="mx-auto max-w-2xl">
        {timeline.map((entry, index) => {
          const isLast = index === timeline.length - 1;
          return (
            <AnimatedReveal key={entry.year} delay={index * 0.06}>
              <li className="flex gap-6">
                <div className="flex flex-col items-center">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-primary ring-4 ring-background" />
                  {!isLast && <span className="w-px flex-1 bg-border" />}
                </div>
                <div className={isLast ? "" : "pb-10"}>
                  <p className="text-sm font-semibold text-primary">{entry.year}</p>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{entry.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {entry.description}
                  </p>
                </div>
              </li>
            </AnimatedReveal>
          );
        })}
      </ol>
    </Section>
  );
}

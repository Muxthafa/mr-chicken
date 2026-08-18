import { Section } from "@/components/shared/section";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { ContentImage } from "@/components/shared/content-image";
import { Heading } from "@/components/shared/heading";
import { story, storyImage } from "@/data/about";

export function Story() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <AnimatedReveal>
          <ContentImage image={storyImage} className="aspect-4/5 w-full" />
        </AnimatedReveal>
        <AnimatedReveal delay={0.1}>
          <Heading as="h2">{story.heading}</Heading>
          <div className="mt-6 space-y-4">
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </AnimatedReveal>
      </div>
    </Section>
  );
}

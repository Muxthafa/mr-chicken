import { Target, Eye } from "lucide-react";
import { Section } from "@/components/shared/section";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { missionVision } from "@/data/about";

export function MissionVision() {
  return (
    <Section>
      <div className="grid gap-6 sm:grid-cols-2">
        <AnimatedReveal>
          <div className="h-full rounded-2xl border border-border bg-card p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
              <Target className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">Our Mission</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {missionVision.mission}
            </p>
          </div>
        </AnimatedReveal>
        <AnimatedReveal delay={0.08}>
          <div className="h-full rounded-2xl border border-border bg-card p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
              <Eye className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">Our Vision</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {missionVision.vision}
            </p>
          </div>
        </AnimatedReveal>
      </div>
    </Section>
  );
}

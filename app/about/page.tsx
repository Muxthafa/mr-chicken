import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Story } from "@/components/sections/about/story";
import { Timeline } from "@/components/sections/about/timeline";
import { MissionVision } from "@/components/sections/about/mission-vision";
import { CoreValues } from "@/components/sections/about/core-values";
import { aboutHero } from "@/data/about";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description: aboutHero.description,
  path: "/about",
});

export default function AboutPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <PageHero {...aboutHero} />
      <Story />
      <Timeline />
      <MissionVision />
      <CoreValues />
    </>
  );
}

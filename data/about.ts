import type { ImageAsset, IconTextItem, TimelineEntry } from "@/types/content";

export const aboutHero = {
  eyebrow: "Our Story",
  heading: "Five Decades of Trust, Freshness, and Family",
  description:
    "How a single family counter in Katpadi became a name three generations of customers rely on.",
};

export const storyImage: ImageAsset = {
  src: "/images/about-story.png",
  alt: "MR Chicken & Mutton family-run shop in Katpadi, Udupi",
};

export const story = {
  heading: "Five Decades in the Making",
  paragraphs: [
    "MR Chicken & Mutton began in 1974 as a single family-run counter on Main Road, Katpadi — built on a simple promise: fresh meat, honestly sold, every single day.",
    "Over 50 years, that promise never changed even as Katpadi and Udupi grew around us. Three generations of the same family have run this business, each one adding to the trust the last one built.",
    "Today, we're taking that same discipline into a new chapter — modern cold storage, hygienic processing standards, and premium packaging — so that the trust our neighbors have in us can extend to restaurants, hotels, cloud kitchens, and modern retail partners across the region.",
  ],
};

export const timeline: TimelineEntry[] = [
  {
    year: "1974",
    title: "The First Counter",
    description: "Founded as a small family-run chicken and mutton counter in Katpadi, Udupi.",
  },
  {
    year: "1990s",
    title: "A Growing Reputation",
    description: "Word-of-mouth trust turned a single counter into a daily habit for local families.",
  },
  {
    year: "2000s",
    title: "Hygiene Standards Raised",
    description: "Adopted stricter processing and handling practices ahead of formal food safety norms.",
  },
  {
    year: "2015",
    title: "FSSAI Registration",
    description: "Formalized our food safety compliance with FSSAI registration and GST registration.",
  },
  {
    year: "2023",
    title: "Cold Chain Investment",
    description: "Began investing in refrigeration and cold storage to protect freshness at scale.",
  },
  {
    year: "2026",
    title: "Building for B2B",
    description: "Developing premium packaging and supply capability for hotels, restaurants, and quick-commerce.",
  },
];

export const missionVision = {
  mission:
    "To supply the freshest, safest chicken and mutton to every customer we serve — from a Katpadi household to a hotel kitchen — with the same integrity that built this business over 50 years.",
  vision:
    "To become Udupi's most trusted premium packaged meat brand, bridging traditional quality with the standards modern hospitality, retail, and quick-commerce partners expect.",
};

export const coreValues: IconTextItem[] = [
  {
    icon: "heart-handshake",
    title: "Family-Owned",
    description: "Three generations of the same family, personally invested in every order.",
  },
  {
    icon: "shield-check",
    title: "Trust",
    description: "Built customer by customer, over 50 years — never taken for granted.",
  },
  {
    icon: "badge-check",
    title: "Quality",
    description: "Consistent standards applied to every cut, every day, without exception.",
  },
  {
    icon: "sunrise",
    title: "Freshness",
    description: "No shortcuts on sourcing — freshness is the foundation, not a feature.",
  },
  {
    icon: "scale",
    title: "Integrity",
    description: "Fair pricing, honest sourcing, and transparent practices with every partner.",
  },
  {
    icon: "trending-up",
    title: "Future Expansion",
    description: "Growing deliberately into packaging, B2B supply, and modern retail channels.",
  },
];

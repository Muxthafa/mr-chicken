export interface ImageAsset {
  src: string;
  alt: string;
}

export type IconName =
  | "clock"
  | "sunrise"
  | "badge-check"
  | "shield-check"
  | "map-pin"
  | "package"
  | "leaf"
  | "sparkles"
  | "snowflake"
  | "users"
  | "utensils"
  | "building"
  | "chef-hat"
  | "store"
  | "shopping-bag"
  | "smartphone"
  | "zap"
  | "truck"
  | "home"
  | "handshake"
  | "scale"
  | "trending-up"
  | "phone"
  | "mail"
  | "drumstick"
  | "beef"
  | "thermometer"
  | "warehouse"
  | "package-check"
  | "clipboard-check"
  | "heart-handshake"
  | "boxes";

export type SocialPlatform = "instagram" | "facebook";

export interface CtaButton {
  label: string;
  href: string;
}

export interface IconTextItem {
  icon: IconName;
  title: string;
  description: string;
  status?: "current" | "future";
}

export interface NavLink {
  label: string;
  href: string;
}

export interface WorkingHoursEntry {
  days: string;
  hours: string;
}

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  shortDescription: string;
  yearsOfExperience: number;
  foundedYear: number;
  gstNumber: string;
  fssaiNumber: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: {
    line1: string;
    locality: string;
    city: string;
    state: string;
    country: string;
  };
  mapEmbedUrl: string;
  workingHours: WorkingHoursEntry[];
  socials: SocialLink[];
}

export interface HeroContent {
  eyebrow: string;
  heading: string;
  subheading: string;
  primaryCta: CtaButton;
  secondaryCta: CtaButton;
  image: ImageAsset;
  stats: { label: string; value: string }[];
}

export interface CtaSection {
  eyebrow: string;
  heading: string;
  description: string;
  primaryCta: CtaButton;
  secondaryCta: CtaButton;
}

export interface ProductItem {
  slug: string;
  name: string;
  description: string;
  image: ImageAsset;
  price: number | null;
  unit: string;
  status: "available" | "coming-soon";
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: ImageAsset;
  icon: IconName;
  cuts: string[];
  status: "available" | "coming-soon";
  items: ProductItem[];
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  business: string;
  quote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

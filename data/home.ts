import type { CtaSection, HeroContent, IconTextItem } from "@/types/content";

export const hero: HeroContent = {
  eyebrow: "50+ Years of Trust",
  heading: "Fresh Chicken & Mutton, Trusted for Generations",
  subheading:
    "For over five decades, MR Chicken & Mutton has served Katpadi with fresh, hygienically processed meat — daily. Now, we're building the cold chain and packaging to bring that same trust to homes, hotels, restaurants, and modern retail.",
  primaryCta: { label: "Explore Products", href: "/products" },
  secondaryCta: { label: "Contact Us", href: "/contact" },
  image: {
    src: "/images/hero.png",
    alt: "Fresh premium packaged chicken and mutton from MR Chicken & Mutton",
  },
  stats: [
    { label: "Years of Trust", value: "50+" },
    { label: "Fresh Daily Stock", value: "100%" },
    { label: "Working Hours", value: "6 AM – 9 PM" },
  ],
};

export const whyChooseUs: IconTextItem[] = [
  {
    icon: "clock",
    title: "50+ Years Experience",
    description:
      "Five decades of serving Katpadi has built a reputation we protect with every order, every day.",
  },
  {
    icon: "sunrise",
    title: "Daily Fresh Stock",
    description:
      "No overnight holding. Stock is sourced and processed fresh each day to guarantee quality.",
  },
  {
    icon: "badge-check",
    title: "Quality Checked",
    description:
      "Every batch is inspected against strict quality benchmarks before it reaches a counter or a customer.",
  },
  {
    icon: "shield-check",
    title: "Hygienic Processing",
    description:
      "Clean, controlled processing practices designed to meet modern food safety expectations.",
  },
  {
    icon: "heart-handshake",
    title: "Locally Trusted",
    description:
      "Generations of Katpadi families have relied on us — trust that took 50 years to build.",
  },
  {
    icon: "package-check",
    title: "Premium Packaging",
    description:
      "Our packaged range is being built for cold-chain integrity, from our facility to your doorstep.",
  },
];

export const whoWeServe: IconTextItem[] = [
  {
    icon: "users",
    title: "Families",
    description: "Daily fresh chicken and mutton for households across Katpadi and Udupi.",
    status: "current",
  },
  {
    icon: "utensils",
    title: "Restaurants",
    description: "Consistent quality and reliable supply for restaurant kitchens.",
    status: "current",
  },
  {
    icon: "building",
    title: "Hotels",
    description: "Bulk supply agreements built for hospitality-grade consistency.",
    status: "current",
  },
  {
    icon: "chef-hat",
    title: "Cloud Kitchens",
    description: "Fast-turnaround supply for delivery-first kitchen operations.",
    status: "current",
  },
  {
    icon: "store",
    title: "Retailers",
    description: "Wholesale rates and dependable stock for local meat retailers.",
    status: "current",
  },
  {
    icon: "shopping-bag",
    title: "Modern Trade",
    description: "Packaging and volume readiness for supermarket and modern trade partners.",
    status: "future",
  },
  {
    icon: "smartphone",
    title: "Swiggy Instamart",
    description: "Preparing our cold chain and packaging to supply quick-commerce partners.",
    status: "future",
  },
  {
    icon: "zap",
    title: "Blinkit",
    description: "Building toward reliable, on-demand delivery-grade supply.",
    status: "future",
  },
];

export const qualityPromise: IconTextItem[] = [
  {
    icon: "shield-check",
    title: "Food Safety",
    description: "Processes aligned with food safety practices, backed by our FSSAI registration.",
  },
  {
    icon: "sunrise",
    title: "Freshness",
    description: "Sourced and processed daily — nothing sits in storage waiting for a buyer.",
  },
  {
    icon: "sparkles",
    title: "Clean Processing",
    description: "Hygienic handling from intake to counter, with clean facilities and equipment.",
  },
  {
    icon: "snowflake",
    title: "Cold Chain",
    description: "Investing in cold storage and transport to protect freshness at every step.",
  },
  {
    icon: "package-check",
    title: "Premium Packaging",
    description: "Packaging designed to preserve quality for B2B and retail delivery formats.",
  },
];

export const partnerCta: CtaSection = {
  eyebrow: "Partner With Us",
  heading: "Become Our Retail Partner",
  description:
    "We're expanding beyond our Katpadi counter — into modern trade, hospitality supply, and quick-commerce. If you're a distributor, restaurant, hotel, or platform looking for a dependable meat supply partner, let's talk.",
  primaryCta: { label: "Contact Us", href: "/contact" },
  secondaryCta: { label: "View Services", href: "/services" },
};

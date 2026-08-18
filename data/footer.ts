import type { NavLink } from "@/types/content";

export const footerDescription =
  "A family-owned meat business in Katpadi, Udupi, serving fresh chicken and mutton for over 50 years — now building toward premium packaged supply for hotels, restaurants, and modern retail.";

export const footerLinkGroups: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Products", href: "/products" },
      { label: "Services", href: "/services" },
    ],
  },
];

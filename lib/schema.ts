import { company } from "@/data/company";
import { siteConfig } from "@/lib/metadata";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    legalName: company.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    foundingDate: String(company.foundedYear),
    sameAs: company.socials.filter((s) => s.href !== "#").map((s) => s.href),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: company.phone,
      email: company.email,
      contactType: "customer service",
      areaServed: "IN",
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": `${siteConfig.url}/#business`,
    name: company.name,
    image: `${siteConfig.url}/opengraph-image`,
    telephone: company.phone,
    email: company.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.line1,
      addressLocality: company.address.locality,
      addressRegion: company.address.state,
      addressCountry: company.address.country,
    },
    openingHoursSpecification: company.workingHours.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "06:00",
      closes: "21:00",
      description: entry.hours,
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

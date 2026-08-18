import type { ProductCategory } from "@/types/content";

export const productsHero = {
  eyebrow: "Our Products",
  heading: "Fresh Chicken & Mutton, Cut The Way You Need",
  description:
    "Every cut is sourced fresh and processed daily — with a premium packaged range on the way for retail and B2B partners.",
};

export const productCategories: ProductCategory[] = [
  {
    id: "chicken",
    name: "Fresh Chicken",
    description:
      "Sourced and processed daily, cut to order. Available whole or in the format your kitchen needs.",
    image: { src: "/images/products/chicken.png", alt: "Fresh chicken cuts" },
    icon: "drumstick",
    cuts: ["Whole Chicken", "Curry Cut", "Boneless", "Skinless"],
    status: "available",
    items: [
      {
        slug: "whole-chicken",
        name: "Whole Chicken",
        description: "Cleaned and dressed whole chicken, ready for any recipe.",
        image: { src: "/images/products/chicken-whole.png", alt: "Whole dressed chicken" },
        price: null,
        unit: "per kg",
        status: "available",
      },
      {
        slug: "curry-cut-chicken",
        name: "Curry Cut Chicken",
        description: "Bone-in pieces cut to the classic curry-ready size.",
        image: { src: "/images/products/chicken-curry-cut.png", alt: "Curry cut chicken pieces" },
        price: null,
        unit: "per kg",
        status: "available",
      },
      {
        slug: "boneless-chicken",
        name: "Boneless Chicken",
        description: "Hand-trimmed boneless chicken, ideal for grilling and quick cooking.",
        image: { src: "/images/products/chicken-boneless.jpg", alt: "Boneless chicken" },
        price: null,
        unit: "per kg",
        status: "available",
      },
      {
        slug: "skinless-chicken",
        name: "Skinless Chicken",
        description: "Skin removed for a leaner cut, cleaned and ready to cook.",
        image: { src: "/images/products/chicken-skinless.jpg", alt: "Skinless chicken" },
        price: null,
        unit: "per kg",
        status: "available",
      },
    ],
  },
  {
    id: "mutton",
    name: "Fresh Mutton",
    description:
      "Quality-checked mutton cuts, sourced fresh and processed with the same standard we've held for 50 years.",
    image: { src: "/images/products/mutton.jpg", alt: "Fresh mutton cuts" },
    icon: "beef",
    cuts: ["Bone-in", "Boneless", "Premium Cuts"],
    status: "available",
    items: [
      {
        slug: "bone-in-mutton",
        name: "Bone-in Mutton",
        description: "Traditional bone-in cuts, perfect for slow-cooked curries.",
        image: { src: "/images/products/mutton-bone-in.png", alt: "Bone-in mutton" },
        price: null,
        unit: "per kg",
        status: "available",
      },
      {
        slug: "boneless-mutton",
        name: "Boneless Mutton",
        description: "Hand-trimmed boneless mutton for faster, even cooking.",
        image: { src: "/images/products/mutton-boneless.jpg", alt: "Boneless mutton" },
        price: null,
        unit: "per kg",
        status: "available",
      },
      {
        slug: "premium-mutton-cuts",
        name: "Premium Mutton Cuts",
        description: "Select premium cuts for special preparations and bulk orders.",
        image: { src: "/images/products/mutton-premium.jpg", alt: "Premium mutton cuts" },
        price: null,
        unit: "per kg",
        status: "available",
      },
    ],
  },
  {
    id: "packaged-range",
    name: "Future Packaged Range",
    description:
      "A premium, sealed, cold-chain-ready packaging line — built for retail shelves, quick-commerce, and B2B delivery.",
    image: { src: "/images/products/packaged-range.png", alt: "Premium packaged chicken and mutton" },
    icon: "package-check",
    cuts: ["Packed Fresh Chicken", "Packed Fresh Mutton"],
    status: "coming-soon",
    items: [
      {
        slug: "packed-fresh-chicken",
        name: "Premium Packed Chicken",
        description: "Sealed, cold-chain packaging designed for retail and delivery partners.",
        image: { src: "/images/products/packed-chicken.jpg", alt: "Premium packed fresh chicken" },
        price: null,
        unit: "per kg",
        status: "coming-soon",
      },
      {
        slug: "packed-fresh-mutton",
        name: "Premium Packed Mutton",
        description: "Sealed, cold-chain packaging designed for retail and delivery partners.",
        image: { src: "/images/products/packed-mutton.jpg", alt: "Premium packed fresh mutton" },
        price: null,
        unit: "per kg",
        status: "coming-soon",
      },
    ],
  },
];

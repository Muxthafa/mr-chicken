import type { CompanyInfo } from "@/types/content";

export const company: CompanyInfo = {
  name: "MR Chicken & Mutton",
  legalName: "MR Chicken & Mutton",
  tagline: "50+ Years of Trust. Fresh Chicken & Mutton.",
  shortDescription:
    "A 50-year-old Katpadi institution supplying fresh, quality-checked chicken and mutton — now building the cold chain and packaging to serve homes, hotels, restaurants, and modern retail.",
  yearsOfExperience: 50,
  foundedYear: 1974,
  gstNumber: "29ABCDE1234F1Z5",
  fssaiNumber: "11223344556677",
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  email: "hello@mrchickenandmutton.com",
  address: {
    line1: "Main Road",
    locality: "Katpadi",
    city: "Udupi",
    state: "Karnataka",
    country: "India",
  },
  mapEmbedUrl:
    "https://www.google.com/maps?q=Katpadi,Udupi,Karnataka,India&output=embed",
  workingHours: [{ days: "Monday – Sunday", hours: "6:00 AM – 9:00 PM" }],
  socials: [
    { platform: "instagram", label: "Instagram", href: "#" },
    { platform: "facebook", label: "Facebook", href: "#" },
  ],
};

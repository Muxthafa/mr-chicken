import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { company } from "@/data/company";
import { contactInfoHeading } from "@/data/contact";

export function ContactInfo() {
  const fullAddress = `${company.address.line1}, ${company.address.locality}, ${company.address.city}, ${company.address.state}, ${company.address.country}`;

  const items = [
    { icon: Phone, label: "Phone", value: company.phoneDisplay, href: `tel:${company.phone}` },
    { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
    { icon: MapPin, label: "Address", value: fullAddress, href: undefined },
    {
      icon: Clock,
      label: "Working Hours",
      value: company.workingHours.map((w) => `${w.days}: ${w.hours}`).join(" · "),
      href: undefined,
    },
  ];

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <h2 className="text-xl font-semibold text-foreground">{contactInfoHeading}</h2>
      <ul className="mt-6 space-y-6">
        {items.map((item) => (
          <li key={item.label} className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
              <item.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-medium text-foreground">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                  {item.value}
                </a>
              ) : (
                <p className="text-sm text-muted-foreground">{item.value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

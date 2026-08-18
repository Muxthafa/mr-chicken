import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Separator } from "@/components/ui/separator";
import { SocialIcon } from "@/components/shared/social-icon";
import { company } from "@/data/company";
import { footerDescription, footerLinkGroups } from "@/data/footer";

export function Footer() {
  const year = new Date().getFullYear();
  const fullAddress = `${company.address.line1}, ${company.address.locality}, ${company.address.city}, ${company.address.state}, ${company.address.country}`;

  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 text-base font-semibold text-foreground">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                MR
              </span>
              <span>{company.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {footerDescription}
            </p>
            <div className="mt-6 flex gap-3">
              {company.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <SocialIcon platform={social.platform} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a href={`tel:${company.phone}`} className="hover:text-foreground">
                  {company.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a href={`mailto:${company.email}`} className="hover:text-foreground">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{fullAddress}</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-3 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {company.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <span>GSTIN: {company.gstNumber}</span>
            <span>FSSAI: {company.fssaiNumber}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

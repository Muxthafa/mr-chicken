"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Container } from "@/components/shared/container";
import { navLinks } from "@/data/nav";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-base font-semibold tracking-tight text-foreground"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            MR
          </span>
          <span className="hidden sm:inline">{company.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-sm font-medium text-foreground/70 transition-colors hover:text-foreground",
                  isActive && "text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button render={<Link href="/contact" />} size="lg" className="h-10 px-4">
            Become a Partner
          </Button>
        </div>

        <Sheet>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" aria-label="Open menu" />}
            className="md:hidden"
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="flex w-4/5 flex-col p-0">
            <SheetHeader className="border-b border-border px-6 py-5">
              <SheetTitle>{company.name}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-1 flex-col gap-1 px-4 py-4" aria-label="Mobile">
              {navLinks.map((link) => (
                <SheetClose
                  key={link.href}
                  render={<Link href={link.href} />}
                  className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                >
                  {link.label}
                </SheetClose>
              ))}
            </nav>
            <div className="border-t border-border px-4 py-4">
              <SheetClose render={<Link href="/contact" className="block" />}>
                <Button className="w-full">Become a Partner</Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}

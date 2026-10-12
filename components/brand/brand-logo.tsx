import Image from "next/image";
import { cn } from "@/lib/utils";

const LOGO_WIDTH = 1024;
const LOGO_HEIGHT = 563;

interface BrandLogoProps {
  className?: string;
  /** Smaller mark for tight spaces. */
  variant?: "default" | "icon";
  /** Set when the logo sits inside a link or heading that already names the brand. */
  decorative?: boolean;
  priority?: boolean;
}

export function BrandLogo({
  className,
  variant = "default",
  decorative = false,
  priority = false,
}: BrandLogoProps) {
  const label = "MR Mutton and Chicken";
  const isIcon = variant === "icon";

  return (
    <span
      className={cn("relative inline-block shrink-0", className)}
      aria-hidden={decorative}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : label}
    >
      <Image
        src="/brand/logo.png"
        alt={decorative ? "" : label}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority={priority}
        className={cn(
          "h-auto w-auto object-contain",
          isIcon ? "h-9" : "h-11 sm:h-12"
        )}
      />
    </span>
  );
}

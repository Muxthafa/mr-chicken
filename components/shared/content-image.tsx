import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImageAsset } from "@/types/content";

interface ContentImageProps {
  image: ImageAsset;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function ContentImage({
  image,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: ContentImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border bg-muted",
        className
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}

import type { SocialPlatform } from "@/types/content";

const paths: Record<SocialPlatform, React.ReactNode> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path d="M14 9h2V6h-2c-1.657 0-3 1.343-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V9.5c0-.276.224-.5.5-.5H14z" />
  ),
};

export function SocialIcon({
  platform,
  className,
}: {
  platform: SocialPlatform;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[platform]}
    </svg>
  );
}

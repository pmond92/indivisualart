import Link from "next/link";
import { siteConfig } from "@/lib/site";

type EtsyButtonProps = {
  className?: string;
  size?: "sm" | "md";
};

export function EtsyButton({ className = "", size = "md" }: EtsyButtonProps) {
  const hasUrl = Boolean(siteConfig.etsyUrl.trim());
  const label = hasUrl ? "Shop on Etsy" : "Etsy Shop — Coming Soon";

  const sizeClasses =
    size === "sm"
      ? "px-4 py-2 text-sm"
      : "px-6 py-3 text-sm sm:text-base";

  const baseClasses = [
    "inline-flex items-center justify-center whitespace-nowrap font-sans font-semibold tracking-wide",
    "rounded-full transition-all duration-200",
    sizeClasses,
    className,
  ].join(" ");

  if (!hasUrl) {
    return (
      <span
        className={`${baseClasses} cursor-not-allowed border border-cream-deep bg-white/60 text-muted shadow-sm`}
        aria-disabled="true"
        title="Etsy shop coming soon"
      >
        {label}
      </span>
    );
  }

  const fancyClasses = `${baseClasses} btn-gradient border-0 text-white hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]`;
  const isExternal = /^https?:\/\//i.test(siteConfig.etsyUrl);

  if (isExternal) {
    return (
      <a
        href={siteConfig.etsyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={fancyClasses}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={siteConfig.etsyUrl} className={fancyClasses}>
      {label}
    </Link>
  );
}

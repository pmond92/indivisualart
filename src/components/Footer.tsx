import Image from "next/image";
import Link from "next/link";
import { EtsyButton } from "@/components/EtsyButton";
import type { GalleryImage } from "@/lib/images";
import { navLinks, siteConfig } from "@/lib/site";

type FooterProps = {
  logo: GalleryImage | null;
};

export function Footer({ logo }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-cream-deep bg-gradient-to-b from-cream-deep/40 to-ocean/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <Link href="/" className="inline-flex items-center gap-3 text-ink">
            {logo ? (
              <Image
                src={logo.src}
                alt={siteConfig.siteName}
                width={140}
                height={42}
                className="h-8 w-auto object-contain"
              />
            ) : (
              <span className="font-serif text-xl tracking-tight">
                {siteConfig.siteName}
              </span>
            )}
          </Link>

          <nav
            className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-soft"
            aria-label="Footer"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-ocean"
              >
                {link.label}
              </Link>
            ))}
            <EtsyButton size="sm" />
          </nav>
        </div>

        <p className="text-sm text-muted">
          &copy; {year} {siteConfig.siteName}
        </p>
      </div>
    </footer>
  );
}

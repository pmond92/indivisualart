"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { EtsyButton } from "@/components/EtsyButton";
import type { GalleryImage } from "@/lib/images";
import { navLinks, siteConfig } from "@/lib/site";

type HeaderProps = {
  logo: GalleryImage | null;
};

export function Header({ logo }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-cream-deep/70 bg-gradient-to-b from-white/90 to-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 text-ink"
          aria-label={`${siteConfig.siteName} home`}
        >
          {logo ? (
            <Image
              src={logo.src}
              alt={siteConfig.siteName}
              width={160}
              height={48}
              className="h-9 w-auto object-contain sm:h-10"
              priority
            />
          ) : (
            <span className="font-serif text-xl tracking-tight sm:text-2xl">
              {siteConfig.siteName}
            </span>
          )}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.95rem] tracking-wide ${
                  active
                    ? "border-b-2 border-leaf pb-0.5 font-medium text-ocean"
                    : "text-ink-soft hover:text-ocean"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <EtsyButton size="sm" />
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream-deep bg-white/70 text-ink shadow-sm lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
            <span
              className={`h-px w-full bg-ink transition-transform ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-ink transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-ink transition-transform ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-cream-deep bg-cream/95 px-4 py-5 lg:hidden"
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-4" aria-label="Mobile">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg ${
                    active ? "font-medium text-ocean" : "text-ink-soft"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <EtsyButton className="w-full sm:w-auto" />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

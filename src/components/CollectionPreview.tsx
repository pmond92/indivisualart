import Image from "next/image";
import Link from "next/link";
import type { GalleryImage } from "@/lib/images";

type CollectionPreviewProps = {
  title: string;
  summary: string;
  href: string;
  image: GalleryImage | null;
  reverse?: boolean;
};

export function CollectionPreview({
  title,
  summary,
  href,
  image,
  reverse = false,
}: CollectionPreviewProps) {
  return (
    <article
      className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-white to-cream-deep/60 shadow-[0_18px_40px_rgb(37_99_168/0.12)] ring-1 ring-sky/20">
        {image ? (
          <Image
            src={image.src}
            alt={title}
            width={1200}
            height={900}
            className="h-auto w-full object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : (
          <div className="flex aspect-[4/3] items-center justify-center px-6 text-center text-sm text-muted">
            Add an image to this collection folder to preview it here.
          </div>
        )}
      </div>

      <div className="max-w-xl">
        <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          {summary}
        </p>
        <Link
          href={href}
          className="btn-outline-fancy mt-7 inline-flex items-center justify-center rounded-full border border-leaf/50 px-6 py-3 text-sm font-semibold tracking-wide text-ocean transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
        >
          View Collection
        </Link>
      </div>
    </article>
  );
}

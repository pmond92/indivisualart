"use client";

import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "@/components/Lightbox";
import type { GalleryImage } from "@/lib/images";

type CollectionGalleryProps = {
  images: GalleryImage[];
  emptyMessage?: string;
};

export function CollectionGallery({
  images,
  emptyMessage = "Artwork images will appear here once added to this folder.",
}: CollectionGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-leaf/40 bg-white/50 px-6 py-16 text-center">
        <p className="mx-auto max-w-md text-muted">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {images.map((image, index) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group block w-full text-left focus-visible:outline-offset-4"
              aria-label={`View ${image.alt}`}
            >
              <span className="block overflow-hidden rounded-xl bg-gradient-to-br from-white to-cream-deep/50 shadow-[0_10px_24px_rgb(37_99_168/0.1)] ring-1 ring-sky/15 transition-transform duration-200 group-hover:-translate-y-0.5">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={1100}
                  className="h-auto w-full object-contain transition-opacity duration-200 group-hover:opacity-95"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {activeIndex !== null ? (
        <Lightbox
          images={images}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onChange={setActiveIndex}
        />
      ) : null}
    </>
  );
}

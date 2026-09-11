"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
import type { GalleryImage } from "@/lib/images";

type LightboxProps = {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function Lightbox({ images, index, onClose, onChange }: LightboxProps) {
  const image = images[index];
  const hasMultiple = images.length > 1;

  const showPrevious = useCallback(() => {
    if (!hasMultiple) return;
    onChange((index - 1 + images.length) % images.length);
  }, [hasMultiple, images.length, index, onChange]);

  const showNext = useCallback(() => {
    if (!hasMultiple) return;
    onChange((index + 1) % images.length);
  }, [hasMultiple, images.length, index, onChange]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft") {
        showPrevious();
      } else if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, showNext, showPrevious]);

  if (!image) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Artwork lightbox"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-sm bg-cream/95 text-ink sm:right-5 sm:top-5"
        aria-label="Close lightbox"
      >
        <span aria-hidden="true" className="text-2xl leading-none">
          &times;
        </span>
      </button>

      {hasMultiple ? (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-sm bg-cream/95 text-ink sm:left-4"
            aria-label="Previous image"
          >
            <span aria-hidden="true" className="text-xl leading-none">
              &#8249;
            </span>
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-sm bg-cream/95 text-ink sm:right-4"
            aria-label="Next image"
          >
            <span aria-hidden="true" className="text-xl leading-none">
              &#8250;
            </span>
          </button>
        </>
      ) : null}

      <div
        className="relative flex max-h-full w-full max-w-5xl flex-col items-center gap-3"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative max-h-[80dvh] w-full">
          <Image
            src={image.src}
            alt={image.alt}
            width={1600}
            height={1200}
            className="mx-auto max-h-[80dvh] w-auto max-w-full object-contain"
            sizes="100vw"
            priority
          />
        </div>
        <p className="text-sm text-cream/80">
          {index + 1} of {images.length}
        </p>
      </div>
    </div>
  );
}

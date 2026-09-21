import { CollectionGallery } from "@/components/CollectionGallery";
import { getNamedImages } from "@/lib/images";
import { collections } from "@/lib/site";

export default function IconicPage() {
  const collection = collections.iconic;
  const images = getNamedImages(
    collection.imageFolder,
    collection.galleryFilenames,
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <header className="max-w-3xl">
        <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
          {collection.title}
        </h1>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          {collection.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </header>

      <section className="mt-12 lg:mt-16" aria-label="Iconic Series gallery">
        <CollectionGallery
          images={images}
          emptyMessage="Add icons1.png and icons2.png to /public/images/iconic/ to populate this gallery."
        />
      </section>
    </div>
  );
}

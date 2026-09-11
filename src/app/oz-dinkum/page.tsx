import { CollectionGallery } from "@/components/CollectionGallery";
import { getImagesFromFolder } from "@/lib/images";
import { collections } from "@/lib/site";

export default function OzDinkumPage() {
  const collection = collections.ozDinkum;
  const images = getImagesFromFolder(collection.imageFolder);

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

      <section className="mt-12 lg:mt-16" aria-label="OZ Dinkum gallery">
        <CollectionGallery
          images={images}
          emptyMessage="Add images to /public/images/ozdinkum/ to populate this gallery."
        />
      </section>
    </div>
  );
}

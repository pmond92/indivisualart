import { CollectionGallery } from "@/components/CollectionGallery";
import { getImagesFromFolder } from "@/lib/images";
import { collections } from "@/lib/site";

export default function BlartPage() {
  const collection = collections.blart;
  const images = getImagesFromFolder(collection.imageFolder);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <header className="max-w-3xl">
        <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
          {collection.title}
        </h1>
        <p className="mt-3 font-serif text-xl italic text-ocean sm:text-2xl">
          {collection.subheading}
        </p>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          {collection.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-8 font-serif text-2xl leading-snug text-eucalyptus sm:text-3xl">
          {collection.highlight}
        </p>
      </header>

      <section className="mt-12 lg:mt-16" aria-label="Blart gallery">
        <CollectionGallery
          images={images}
          emptyMessage="Add images to /public/images/blart/ to populate this gallery."
        />
      </section>
    </div>
  );
}

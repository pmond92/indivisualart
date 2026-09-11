import Image from "next/image";
import { CollectionPreview } from "@/components/CollectionPreview";
import { EtsyButton } from "@/components/EtsyButton";
import { getImagesFromFolder, getLogoImage } from "@/lib/images";
import { collections, homeContent, siteConfig } from "@/lib/site";

export default function HomePage() {
  const logo = getLogoImage();
  const ozImages = getImagesFromFolder(collections.ozDinkum.imageFolder);
  const blartImages = getImagesFromFolder(collections.blart.imageFolder);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-cream-deep/80">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(96_165_250/0.35),transparent_42%),radial-gradient(circle_at_80%_0%,rgb(37_99_168/0.18),transparent_40%)]"
        />
        <div className="relative mx-auto max-w-3xl px-4 pb-16 pt-14 text-center sm:px-6 sm:pt-20 lg:px-8 lg:pb-20">
          {logo ? (
            <Image
              src={logo.src}
              alt={siteConfig.siteName}
              width={420}
              height={160}
              className="mx-auto h-24 w-auto object-contain sm:h-32 md:h-36"
              priority
            />
          ) : (
            <p className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
              {siteConfig.siteName}
            </p>
          )}

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {homeContent.intro}
          </p>
          <div className="mt-9 flex justify-center">
            <EtsyButton />
          </div>
        </div>
      </section>

      <section className="border-b border-cream-deep/80 bg-gradient-to-b from-white/50 to-cream-deep/30">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">
            {homeContent.aboutHeading}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            {homeContent.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-20 px-4 py-16 sm:px-6 lg:space-y-28 lg:px-8 lg:py-24">
        <CollectionPreview
          title={collections.ozDinkum.title}
          summary={collections.ozDinkum.homeSummary}
          href={collections.ozDinkum.href}
          image={ozImages[0] ?? null}
        />
        <CollectionPreview
          title={collections.blart.title}
          summary={collections.blart.homeSummary}
          href={collections.blart.href}
          image={blartImages[0] ?? null}
          reverse
        />
      </section>
    </div>
  );
}

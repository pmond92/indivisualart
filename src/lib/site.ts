/**
 * Easy-to-edit site configuration.
 * Add your Etsy shop URL below when ready.
 * Leave blank to keep the Etsy button disabled.
 */
export const siteConfig = {
  siteName: "Indivisual",
  /**
   * Etsy shop URL. Example: "https://www.etsy.com/shop/YourShopName"
   * Leave as "" until the shop is live.
   */
  etsyUrl: "",
  /**
   * Main logo path relative to /public
   * Default: images/logo.png
   */
  logoPath: "images/logo.png",
  /**
   * Optional fallback filename inside /public/images/logo/
   * Used only if logoPath is missing.
   */
  logoFilename: "",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/oz-dinkum", label: "OZ Dinkum" },
  { href: "/blart", label: "Blart" },
] as const;

export const homeContent = {
  intro:
    "A collection of distinctive physical artworks combining experimentation, modern techniques, natural materials and unconventional processes.",
  aboutHeading: "About the Artist",
  about: [
    "Always experimenting with new ideas, materials and techniques, the artist behind these works is driven by a simple aim: to create something different.",
    "The work ranges from engraved Australian-inspired timber pieces to abstract artworks created through an experimental bubble-painting process.",
  ],
} as const;

export const collections = {
  ozDinkum: {
    slug: "oz-dinkum",
    href: "/oz-dinkum",
    title: "The OZ Dinkum Series",
    shortTitle: "OZ Dinkum",
    homeSummary:
      "Australian native wildlife brought together with laser engraving, painted marine plywood and natural eucalyptus leaf impressions.",
    imageFolder: "ozdinkum",
    description: [
      "The OZ Dinkum Series centres on Australian native animals, reptiles and birds.",
      "Each design is laser engraved into painted marine plywood, creating depth and a three-dimensional quality as light moves across the surface.",
      "Surrounding the engraving are impressions created using real eucalyptus leaves. Each leaf is individually positioned against the surface and kept wet over several days, allowing its natural form and markings to leave an impression on the artwork.",
      "The result combines modern engraving techniques with materials and forms drawn from the Australian landscape.",
    ],
  },
  blart: {
    slug: "blart",
    href: "/blart",
    title: "The Blart Series",
    shortTitle: "Blart",
    subheading: "An experimental approach to bubble art.",
    homeSummary:
      "Original abstract works created through an experimental bubble-painting process, where no two patterns are ever exactly the same.",
    imageFolder: "blart",
    highlight: "No two bubbles are the same.",
    description: [
      "Bubble painting is traditionally associated with simple coloured patterns, but the Blart Series began with the idea of taking the process somewhere different.",
      "After experimenting with conventional methods, the artist developed his own implements for creating and controlling the bubbles.",
      "Early experiments used colour, but black paint ultimately produced the most striking results. A specially developed black paint mixture creates intricate patterns as bubbles form and burst across the surface.",
      "Different materials were tested, including plastic and enamel surfaces, before glossy whiteboard produced the strongest patterns.",
      "Every bubble behaves differently. No two patterns are exactly the same, making each original work unique.",
    ],
  },
} as const;

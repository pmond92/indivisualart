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
  { href: "/iconic", label: "Iconic" },
] as const;

export const homeContent = {
  aboutHeading: "About the Artist",
  about: [
    "My story - I am always striving to create something new or different with a contemporary outlook and style.",
    "These pages will display some completely unique ideas",
  ],
} as const;

export const collections = {
  ozDinkum: {
    slug: "oz-dinkum",
    href: "/oz-dinkum",
    title: "The OZ Dinkum Series",
    shortTitle: "OZ Dinkum",
    homeSummary:
      "This series incorporates most Australian native animals reptiles and birds as a centerpiece which is laser engraved into painted Marine ply displaying a 3D effect when viewing. Surrounding the engravings are impressions Eucalyptus leaves which are placed on the surface individually, these are then kept wet for several days to be able to leave their mark",
    imageFolder: "ozdinkum",
    description: [
      "This series incorporates most Australian native animals reptiles and birds as a centerpiece which is laser engraved into painted Marine ply displaying a 3D effect when viewing. Surrounding the engravings are impressions Eucalyptus leaves which are placed on the surface individually, these are then kept wet for several days to be able to leave their mark",
    ],
  },
  blart: {
    slug: "blart",
    href: "/blart",
    title: "The Blart Series",
    shortTitle: "Blart",
    homeSummary:
      "Bubble art has been around for some time, usually done by schoolchildren and always in colour. I liked the concept of Bubble art but wanted to create a new and different way to make bubbles so I made implements to blow my own, to begin I used colour but I was not impressed with the results at all, black turned out to be the magic potion. My black paint formula leaves fantastic patterns and smaller bubbles on flat plastic white or enamel but the best patterns are left on shiny whiteboard, no 2 bubbles are the same, they are all totally unique",
    imageFolder: "blart",
    description: [
      "Bubble art has been around for some time, usually done by schoolchildren and always in colour. I liked the concept of Bubble art but wanted to create a new and different way to make bubbles so I made implements to blow my own, to begin I used colour but I was not impressed with the results at all, black turned out to be the magic potion. My black paint formula leaves fantastic patterns and smaller bubbles on flat plastic white or enamel but the best patterns are left on shiny whiteboard, no 2 bubbles are the same, they are all totally unique",
    ],
  },
  iconic: {
    slug: "iconic",
    href: "/iconic",
    title: "Iconic Series",
    shortTitle: "Iconic",
    homeSummary:
      "In the past I have made a lot of Logos' and icons for my own and other businesses, here is a montage of icons. enough for two colorful pieces",
    imageFolder: "iconic",
    previewFilename: "icon16.png",
    galleryFilenames: ["icons1.png", "icons2.png"],
    description: [
      "In the past I have made a lot of Logos' and icons for my own and other businesses, here is a montage of icons. enough for two colorful pieces",
    ],
  },
} as const;

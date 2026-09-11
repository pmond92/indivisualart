import { readdirSync, existsSync } from "fs";
import path from "path";
import { siteConfig } from "@/lib/site";

const SUPPORTED_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
]);

export type GalleryImage = {
  src: string;
  alt: string;
  filename: string;
};

function getPublicImagesDir(...segments: string[]) {
  return path.join(process.cwd(), "public", "images", ...segments);
}

function isSupportedImage(filename: string) {
  return SUPPORTED_EXTENSIONS.has(path.extname(filename).toLowerCase());
}

function toPublicSrc(...segments: string[]) {
  return `/images/${segments.join("/")}`;
}

function filenameToAlt(filename: string) {
  return path
    .parse(filename)
    .name.replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Reads supported image files from a folder under /public/images/
 * Returns an empty array if the folder is missing or empty.
 */
export function getImagesFromFolder(folder: string): GalleryImage[] {
  const dir = getPublicImagesDir(folder);

  if (!existsSync(dir)) {
    return [];
  }

  return readdirSync(dir)
    .filter(isSupportedImage)
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))
    .map((filename) => ({
      filename,
      src: toPublicSrc(folder, filename),
      alt: filenameToAlt(filename) || folder,
    }));
}

/**
 * Resolves the logo image.
 * Prefers /public/images/logo.png (or siteConfig.logoPath),
 * then falls back to the first image in /public/images/logo/
 */
export function getLogoImage(): GalleryImage | null {
  const configuredPath = siteConfig.logoPath.replace(/^\//, "");
  const configuredFullPath = path.join(process.cwd(), "public", configuredPath);

  if (existsSync(configuredFullPath) && isSupportedImage(configuredFullPath)) {
    return {
      filename: path.basename(configuredFullPath),
      src: `/${configuredPath.replace(/\\/g, "/")}`,
      alt: siteConfig.siteName,
    };
  }

  const rootCandidates = ["logo.png", "logo.jpg", "logo.jpeg", "logo.webp", "logo.avif"];
  for (const filename of rootCandidates) {
    const fullPath = getPublicImagesDir(filename);
    if (existsSync(fullPath)) {
      return {
        filename,
        src: toPublicSrc(filename),
        alt: siteConfig.siteName,
      };
    }
  }

  const images = getImagesFromFolder("logo");

  if (images.length === 0) {
    return null;
  }

  if (siteConfig.logoFilename) {
    const preferred = images.find(
      (image) => image.filename === siteConfig.logoFilename,
    );
    if (preferred) {
      return preferred;
    }
  }

  return images[0] ?? null;
}

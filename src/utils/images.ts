import type { ImageMetadata } from "astro";

// Eagerly import every optimizable image so data files (src/data/*.ts) can keep
// referring to images by a simple "/projects/foo.webp"-style path while the
// actual <Image> rendering goes through astro:assets for optimization.
const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/**/*.{png,jpg,jpeg,webp,svg}",
  { eager: true },
);

export function getLocalImage(path: string): ImageMetadata | undefined {
  if (!path) return undefined;
  return imageModules[`/src/assets/images${path}`]?.default;
}

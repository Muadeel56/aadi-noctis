export const SITE = {
  name: "Aadi",
  fullName: "Muhammad Adeel",
  tagline: "Built after midnight.",
  description:
    "Full-stack engineer building dark, elegant products end to end — React and Vue up front, Django and Postgres behind, shipped on Cloudflare.",
  url: "https://aadi-noctis.pages.dev",
  github: "https://github.com/Muadeel56",
} as const;

/** Short list of badges under the hero copy. */
export const HERO_STACK = [
  "React",
  "Next.js",
  "Vue",
  "Django",
  "PostgreSQL",
  "Cloudflare",
] as const;

/**
 * Theme registry — ids must match the [data-theme="..."] blocks in
 * globals.css. `swatch` mirrors each theme's --accent for the picker orbs.
 */
export const THEMES = [
  { id: "midnight", label: "Midnight", swatch: "oklch(0.78 0.14 220)" },
  { id: "ember", label: "Ember", swatch: "oklch(0.78 0.15 65)" },
  { id: "nebula", label: "Nebula", swatch: "oklch(0.72 0.19 315)" },
  { id: "sage", label: "Sage", swatch: "oklch(0.82 0.13 165)" },
] as const;

export type ThemeId = (typeof THEMES)[number]["id"];

/** Iqbal — used as the Urdu accent on the landing page. */
export const URDU_COUPLET = {
  text: "ستاروں سے آگے جہاں اور بھی ہیں",
  translation: "Beyond the stars, there are yet more worlds.",
} as const;

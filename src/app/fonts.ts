import localFont from "next/font/local";

/** Display / headings — sharp, editorial, confident. */
export const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash-display",
  weight: "200 700",
  display: "swap",
});

/** Body — clean, quiet, readable. */
export const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Variable.woff2",
      style: "normal",
      weight: "300 900",
    },
    {
      path: "./fonts/Satoshi-VariableItalic.woff2",
      style: "italic",
      weight: "300 900",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

/** Code, stack tags, terminal-style accents. */
export const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono-Variable.woff2",
  variable: "--font-jetbrains-mono",
  weight: "100 800",
  display: "swap",
});

/** Urdu Nastaliq — used sparingly for the Iqbal couplet accents. */
export const notoNastaliqUrdu = localFont({
  src: "./fonts/NotoNastaliqUrdu-Variable.woff2",
  variable: "--font-noto-nastaliq",
  weight: "400 700",
  display: "swap",
});

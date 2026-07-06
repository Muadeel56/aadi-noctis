import type { Metadata } from "next";
import {
  clashDisplay,
  jetbrainsMono,
  notoNastaliqUrdu,
  satoshi,
} from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Aadi — Built after midnight.",
    template: "%s · Aadi",
  },
  description:
    "Portfolio of Aadi (Muhammad Adeel) — frontend engineer crafting dark, elegant interfaces with React, Next.js, and Tailwind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="noctis"
      className={`dark ${satoshi.variable} ${clashDisplay.variable} ${jetbrainsMono.variable} ${notoNastaliqUrdu.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

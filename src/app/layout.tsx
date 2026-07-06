import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
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
    "Portfolio of Aadi (Muhammad Adeel) — full-stack engineer building dark, elegant products with React, Next.js, Vue, Django, and Cloudflare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${satoshi.variable} ${clashDisplay.variable} ${jetbrainsMono.variable} ${notoNastaliqUrdu.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

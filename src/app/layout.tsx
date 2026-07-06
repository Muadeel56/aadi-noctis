import type { Metadata } from "next";
import Script from "next/script";

import { CursorGlow } from "@/components/effects/cursor-glow";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { MotionProvider } from "@/components/motion/lazy";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE } from "@/lib/constants";
import {
  clashDisplay,
  jetbrainsMono,
  notoNastaliqUrdu,
  satoshi,
} from "./fonts";
import "./globals.css";

const CF_ANALYTICS_TOKEN = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description:
    "Portfolio of Aadi (Muhammad Adeel) — full-stack engineer building dark, elegant products with React, Next.js, Vue, Django, and Cloudflare.",
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: `${SITE.name} — ${SITE.fullName}`,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
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
      {/* suppressHydrationWarning: browser extensions inject attributes into
          <body> before hydration (e.g. bis_register), which React 19 flags. */}
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <ThemeProvider>
          <MotionProvider>
            <ScrollProgress />
            <CursorGlow />
            <div aria-hidden className="grain" />
            {children}
          </MotionProvider>
        </ThemeProvider>
        {CF_ANALYTICS_TOKEN && (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${CF_ANALYTICS_TOKEN}"}`}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}

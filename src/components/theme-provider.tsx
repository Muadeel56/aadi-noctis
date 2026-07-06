"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

import { THEMES } from "@/lib/constants";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      themes={THEMES.map((t) => t.id)}
      defaultTheme="midnight"
      storageKey="aadi-theme"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}

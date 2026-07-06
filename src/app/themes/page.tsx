import type { Metadata } from "next";

import { Navbar } from "@/components/layout/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { THEMES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Theme Lab",
  description: "All theme tokens and components under each dark theme.",
};

const TOKENS = [
  "background",
  "surface",
  "surface-elevated",
  "foreground",
  "muted",
  "accent",
  "accent-glow",
  "border",
] as const;

function TokenGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "grid grid-cols-4 gap-2"
          : "grid grid-cols-2 gap-3 sm:grid-cols-4"
      }
    >
      {TOKENS.map((token) => (
        <div key={token} className="flex flex-col gap-1.5">
          <div
            className={`rounded-lg border border-border ${compact ? "h-10" : "h-16"}`}
            style={{ backgroundColor: `var(--${token})` }}
          />
          <span className="font-mono text-[0.65rem] text-muted-foreground">
            --{token}
          </span>
        </div>
      ))}
    </div>
  );
}

function ComponentShowcase({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button size={compact ? "sm" : "default"}>Primary</Button>
        <Button size={compact ? "sm" : "default"} variant="secondary">
          Secondary
        </Button>
        <Button size={compact ? "sm" : "default"} variant="outline">
          Outline
        </Button>
        <Button size={compact ? "sm" : "default"} variant="ghost">
          Ghost
        </Button>
        {!compact && (
          <>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Badge>Badge</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        {!compact && <Badge variant="destructive">Destructive</Badge>}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Surface card</CardTitle>
          <CardDescription>
            bg-card on bg-background, separated by border.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Body text in <span className="text-foreground">foreground</span>,{" "}
            <span className="text-muted-foreground">muted-foreground</span>,
            and <span className="text-accent">accent</span>.
          </p>
        </CardContent>
        {!compact && (
          <CardFooter className="gap-2">
            <Button size="sm">Action</Button>
            <Button size="sm" variant="ghost">
              Dismiss
            </Button>
          </CardFooter>
        )}
      </Card>
      <div
        className="rounded-xl border border-accent/30 bg-surface p-4 shadow-[0_0_24px_var(--accent-glow)]"
      >
        <span className="text-sm text-accent">
          accent-glow — used for hover halos and focus emphasis.
        </span>
      </div>
    </div>
  );
}

export default function ThemesPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 pt-28 pb-24">
        <header className="flex flex-col gap-2">
          <h1 className="font-display text-3xl font-semibold">Theme Lab</h1>
          <p className="max-w-prose text-muted-foreground">
            Every token and component under the active theme. Use the orb in
            the navbar to switch — the section below updates live, and the
            gallery at the bottom pins each theme for side-by-side comparison.
          </p>
        </header>

        <section className="flex flex-col gap-6">
          <h2 className="font-display text-xl font-medium">Active theme</h2>
          <TokenGrid />
          <ComponentShowcase />
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="font-display text-xl font-medium">All themes</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {THEMES.map((theme) => (
              <div
                key={theme.id}
                data-theme={theme.id}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 text-foreground"
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="size-3.5 rounded-full"
                    style={{ backgroundColor: theme.swatch }}
                  />
                  <span className="font-display font-medium">
                    {theme.label}
                  </span>
                  <span className="ml-auto font-mono text-xs text-muted-foreground">
                    data-theme=&quot;{theme.id}&quot;
                  </span>
                </div>
                <TokenGrid compact />
                <ComponentShowcase compact />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

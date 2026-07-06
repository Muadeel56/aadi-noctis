import Link from "next/link";

import { SITE } from "@/lib/constants";

const FOOTER_LINKS = [
  { href: "/projects", label: "work" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-semibold tracking-wide">
            {SITE.name.toLowerCase()}
          </p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE.fullName} · {SITE.tagline}
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center gap-x-6 gap-y-2"
        >
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="link-sweep py-1">{link.label}</span>
            </Link>
          ))}
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="link-sweep py-1">github</span>
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex min-h-11 items-center font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="link-sweep py-1">email</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}

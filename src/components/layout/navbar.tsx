"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { ThemeSwitcher } from "@/components/layout/theme-switcher";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  React.useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        (scrolled || menuOpen) &&
          "border-b border-border/50 bg-background/75 backdrop-blur-lg supports-[not(backdrop-filter:blur(0))]:bg-background/95"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center font-display text-lg font-semibold tracking-wide transition-colors hover:text-accent"
        >
          {SITE.name.toLowerCase()}
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
              className={cn(
                "inline-flex min-h-11 items-center font-mono text-sm transition-colors",
                isActive(pathname, link.href)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span className="link-sweep py-1">{link.label}</span>
            </Link>
          ))}
          <ThemeSwitcher />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 sm:hidden">
          <ThemeSwitcher />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex size-11 items-center justify-center rounded-full outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/60"
          >
            {menuOpen ? (
              <X className="size-5" aria-hidden />
            ) : (
              <Menu className="size-5" aria-hidden />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <m.div
            initial={reducedMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reducedMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden sm:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={
                    isActive(pathname, link.href) ? "page" : undefined
                  }
                  className={cn(
                    "rounded-lg px-3 py-3 font-mono text-base transition-colors",
                    isActive(pathname, link.href)
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}

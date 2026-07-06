import { SITE } from "@/lib/constants";

/** Stub — full footer lands in the Layout & Routes phase. */
export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {SITE.fullName}
        </p>
        <a
          href={SITE.github}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          github
        </a>
      </div>
    </footer>
  );
}

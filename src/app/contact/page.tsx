import type { Metadata } from "next";
import { Mail } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { SITE } from "@/lib/constants";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14 0 1.54-.01 2.78-.01 3.16 0 .31.21.67.8.55A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch — email, GitHub, or a quick message. Open to interesting products, freelance work, and good conversations.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 pt-32 pb-24 sm:pb-32">
        <Reveal>
          <p className="font-mono text-sm tracking-widest text-primary uppercase">
            Contact
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Let&apos;s build something.
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Interesting products, freelance work, or just a good conversation
            about maps, music, or middleware — my inbox is open.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex min-h-11 items-center gap-2.5 rounded-lg border border-border bg-surface px-4 py-2.5 font-mono text-sm transition-colors hover:border-accent/40 hover:text-accent"
            >
              <Mail className="size-4" aria-hidden />
              {SITE.email}
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2.5 rounded-lg border border-border bg-surface px-4 py-2.5 font-mono text-sm transition-colors hover:border-accent/40 hover:text-accent"
            >
              <GithubIcon className="size-4" />
              github.com/Muadeel56
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 max-w-2xl rounded-2xl border border-border bg-surface/50 p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}

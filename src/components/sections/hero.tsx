import { NightClock } from "@/components/effects/night-clock";
import { ParallaxStage } from "@/components/effects/parallax-stage";
import { Starfield } from "@/components/effects/starfield";
import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { SITE, URDU_COUPLET } from "@/lib/constants";

/**
 * Word-level staggered reveal, done in pure CSS so the headline paints
 * with the server HTML instead of waiting for hydration (LCP-friendly).
 * The last word carries the accent gradient.
 */
function HeadlineReveal({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <h1
      className="mt-6 font-display text-[clamp(3rem,9vw+1rem,8.5rem)] leading-[1.02] font-semibold tracking-tight text-balance"
      aria-label={text}
    >
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <span key={i} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
            <span
              aria-hidden
              style={{ "--enter-delay": `${0.15 + i * 0.09}s` } as React.CSSProperties}
              className={
                isLast
                  ? "animate-word-rise inline-block bg-linear-to-r from-accent via-accent to-accent/60 bg-clip-text text-transparent"
                  : "animate-word-rise inline-block"
              }
            >
              {word}
              {"\u00A0"}
            </span>
          </span>
        );
      })}
    </h1>
  );
}

/** Slow-drifting gradient mesh — pure CSS, theme-reactive via --accent. */
function GradientMesh() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <div className="mesh-blob absolute -top-1/4 -left-1/4 size-[60vmax] rounded-full bg-accent/15 blur-[120px] [animation-name:mesh-drift-1]" />
      <div className="mesh-blob absolute -right-1/4 -bottom-1/3 size-[55vmax] rounded-full bg-accent/10 blur-[140px] [animation-name:mesh-drift-2]" />
      <div className="mesh-blob absolute top-1/3 left-1/2 size-[40vmax] rounded-full bg-[var(--accent-glow)] blur-[100px] [animation-name:mesh-drift-3]" />
    </div>
  );
}

function Enter({
  delay,
  className,
  children,
}: {
  delay: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{ "--enter-delay": `${delay}s` } as React.CSSProperties}
      className={`animate-fade-up ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <GradientMesh />
      <div aria-hidden className="absolute inset-0 -z-10">
        <Starfield />
      </div>

      <ParallaxStage className="w-full">
        <Enter delay={0}>
          <NightClock />
          <p className="mt-5 font-mono text-sm tracking-widest text-primary uppercase">
            {SITE.fullName}
          </p>
        </Enter>

        {/* The headline rides the highest 3D layer of the stage. */}
        <div style={{ transform: "translateZ(60px)" }}>
          <HeadlineReveal text={SITE.tagline} />
        </div>

        <div style={{ transform: "translateZ(30px)" }}>
          <Enter delay={0.5}>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              {SITE.description}
            </p>
          </Enter>
        </div>

        <Enter delay={0.65} className="mt-10 flex flex-wrap justify-center gap-3">
          <Magnetic>
            <Button
              asChild
              size="lg"
              className="min-h-12 px-6 text-base shadow-[0_0_24px_var(--accent-glow)] transition-shadow hover:shadow-[0_0_40px_var(--accent-glow)]"
            >
              <a href="#work">View work</a>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-h-12 px-6 text-base"
            >
              <a href={`mailto:${SITE.email}`}>Get in touch</a>
            </Button>
          </Magnetic>
        </Enter>

        <Enter delay={0.8}>
          <p
            lang="ur"
            className="font-urdu mt-16 text-2xl text-muted-foreground/80 sm:text-3xl"
          >
            {URDU_COUPLET.text}
          </p>
          <p className="mt-3 font-mono text-sm text-muted-foreground/60 italic">
            {URDU_COUPLET.translation} — Iqbal
          </p>
        </Enter>
      </ParallaxStage>
    </section>
  );
}

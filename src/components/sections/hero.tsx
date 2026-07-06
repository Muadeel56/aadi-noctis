import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { SITE, URDU_COUPLET } from "@/lib/constants";

const STACK = ["React 19", "Next.js", "Tailwind v4", "TypeScript"];

export function Hero() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <FadeIn>
        <p className="font-mono text-sm tracking-widest text-primary uppercase">
          {SITE.fullName}
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
          {SITE.tagline}
        </h1>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p className="mt-6 max-w-md text-base text-muted-foreground sm:text-lg">
          {SITE.description}
        </p>
      </FadeIn>

      <FadeIn delay={0.45}>
        <p
          lang="ur"
          className="font-urdu mt-10 text-xl text-muted-foreground/80 sm:text-2xl"
        >
          {URDU_COUPLET.text}
        </p>
        <p className="mt-2 font-mono text-xs text-muted-foreground/60 italic">
          {URDU_COUPLET.translation} — Iqbal
        </p>
      </FadeIn>

      <FadeIn delay={0.6} className="mt-10 flex flex-wrap justify-center gap-2">
        {STACK.map((item) => (
          <Badge key={item} variant="secondary" className="font-mono text-xs">
            {item}
          </Badge>
        ))}
      </FadeIn>
    </section>
  );
}

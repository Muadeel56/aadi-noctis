import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export function Cta() {
  return (
    <section className="border-y border-border/50 bg-surface">
      <Reveal className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-6 py-24 text-center sm:py-32">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          Have an idea? Let&apos;s build it.
        </h2>
        <p className="max-w-md text-base text-muted-foreground">
          I&apos;m open to interesting projects, collaborations, and good
          conversations about maps, products, and the web.
        </p>
        <Button asChild size="lg" className="min-h-11 px-6">
          <a href={`mailto:${SITE.email}`}>Get in touch</a>
        </Button>
      </Reveal>
    </section>
  );
}

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/data/skills";

function MarqueeRow({
  label,
  skills,
  reverse,
}: {
  label: string;
  skills: string[];
  reverse: boolean;
}) {
  const track = (hidden: boolean) => (
    <div className="marquee-track" aria-hidden={hidden || undefined}>
      {skills.map((skill) => (
        <Badge
          key={skill}
          variant="outline"
          className="h-7 shrink-0 border-border bg-surface px-3 font-mono text-xs text-muted-foreground"
        >
          {skill}
        </Badge>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col gap-3">
      <span className="font-mono text-xs tracking-widest text-muted-foreground/70 uppercase">
        {label}
      </span>
      <div className={reverse ? "marquee marquee-reverse" : "marquee"}>
        {track(false)}
        {track(true)}
      </div>
    </div>
  );
}

export function TechArsenal() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32">
      <Reveal>
        <p className="font-mono text-sm tracking-widest text-primary uppercase">
          Tech Arsenal
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Tools I reach for.
        </h2>
      </Reveal>

      <Reveal delay={0.15} className="mt-12 flex flex-col gap-8">
        {skillGroups.map((group, i) => (
          <MarqueeRow
            key={group.id}
            label={group.label}
            skills={group.skills}
            reverse={i % 2 === 1}
          />
        ))}
      </Reveal>
    </section>
  );
}

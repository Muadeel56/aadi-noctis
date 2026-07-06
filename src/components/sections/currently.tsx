import { Reveal } from "@/components/motion/reveal";
import { Tilt3d } from "@/components/motion/tilt";
import { CURRENTLY } from "@/lib/constants";

export function Currently() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32">
      <Reveal className="mx-auto max-w-2xl">
        <Tilt3d tilt={5} className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Currently
            </span>
          </div>

          <ul className="mt-6 flex flex-col gap-5">
            {CURRENTLY.map((item) => (
              <li key={item.label} className="flex flex-col gap-1">
                <p className="text-base">
                  <span className="text-muted-foreground">{item.label} </span>
                  <span className="font-medium text-foreground">
                    {item.value}
                  </span>
                </p>
                <p className="font-mono text-xs text-muted-foreground/70">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </Tilt3d>
      </Reveal>
    </section>
  );
}

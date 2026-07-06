import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { timeline } from "@/data/timeline";
import { cn } from "@/lib/utils";

export function Timeline() {
  return (
    <StaggerGroup className="relative flex flex-col gap-10" role="list">
      {/* Vertical rail connecting the dots */}
      <span
        aria-hidden
        className="absolute top-2 bottom-2 left-[5px] w-px bg-linear-to-b from-border via-accent/40 to-border"
      />

      {timeline.map((entry) => (
        <StaggerItem
          key={entry.title}
          role="listitem"
          className="relative pl-8"
        >
          <span
            aria-hidden
            className={cn(
              "absolute top-2 left-0 size-[11px] rounded-full border-2 border-background",
              entry.current
                ? "bg-accent shadow-[0_0_12px_var(--accent-glow)]"
                : "bg-muted-foreground/50"
            )}
          />
          <p className="font-mono text-xs tracking-widest text-primary uppercase">
            {entry.year}
          </p>
          <h3 className="mt-1 font-display text-lg font-semibold tracking-tight">
            {entry.title}
          </h3>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            {entry.detail}
          </p>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

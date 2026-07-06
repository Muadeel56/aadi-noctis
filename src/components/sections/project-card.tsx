"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  m,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

const MAX_TILT = 9; // degrees

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const lift = useSpring(useMotionValue(0), { stiffness: 220, damping: 22 });

  // Spotlight that follows the cursor across the card face.
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${glowX}px ${glowY}px, var(--accent-glow), transparent 70%)`;

  function handlePointerMove(e: React.PointerEvent) {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(-py * MAX_TILT * 2);
    rotateY.set(px * MAX_TILT * 2);
    lift.set(24);
    glowX.set(e.clientX - rect.left);
    glowY.set(e.clientY - rect.top);
  }

  function handlePointerLeave() {
    rotateX.set(0);
    rotateY.set(0);
    lift.set(0);
  }

  const screenshot = project.screenshots[0];

  return (
    <div style={{ perspective: 1100 }} className="h-full">
      <m.article
        ref={ref}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{ rotateX, rotateY, z: lift, transformStyle: "preserve-3d" }}
        className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-[0_24px_80px_-12px_var(--accent-glow),0_0_50px_var(--accent-glow)]"
      >
        <m.div
          aria-hidden
          style={{ background: spotlight, transform: "translateZ(2px)" }}
          className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        {/* Screenshot floats on its own 3D layer above the card body. */}
        <div
          style={{ transform: "translateZ(36px)" }}
          className="relative -mx-px -mt-px aspect-video overflow-hidden rounded-t-2xl border-b border-border/50 shadow-[0_16px_40px_-12px_rgb(0_0_0/0.6)]"
        >
          {screenshot ? (
            <Image
              src={screenshot}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 1280px) 40vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
            />
          ) : (
            <div className="flex size-full items-center justify-center bg-linear-to-br from-surface-elevated via-surface to-background">
              <span className="font-display text-7xl font-semibold text-accent/30">
                {project.title.charAt(0)}
              </span>
            </div>
          )}
        </div>

        <div
          style={{ transform: "translateZ(20px)" }}
          className="flex flex-1 flex-col gap-4 p-7"
        >
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              <Link
                href={`/projects/${project.slug}`}
                className="after:absolute after:inset-0 focus-visible:outline-none"
              >
                {project.title}
              </Link>
            </h3>
            <span className="font-mono text-sm text-muted-foreground">
              {project.year}
            </span>
          </div>

          <p className="text-base text-muted-foreground">{project.tagline}</p>

          <div className="mt-auto flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="secondary" className="font-mono text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </m.article>
    </div>
  );
}

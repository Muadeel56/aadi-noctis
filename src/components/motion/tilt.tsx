"use client";

import { useRef } from "react";
import {
  m,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

interface Tilt3dProps {
  children: React.ReactNode;
  /** Max rotation in degrees. */
  tilt?: number;
  /** Show a moving sheen highlight that follows the cursor. */
  sheen?: boolean;
  className?: string;
}

/**
 * Generic 3D tilt card: rotates toward the cursor in perspective, with an
 * optional glossy sheen tracking the pointer. Children are lifted on the
 * z-axis so the depth reads. No-ops under reduced motion.
 */
export function Tilt3d({
  children,
  tilt = 7,
  sheen = true,
  className,
}: Tilt3dProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const sheenX = useMotionValue(50);
  const sheenY = useMotionValue(50);
  const sheenBackground = useMotionTemplate`radial-gradient(420px circle at ${sheenX}% ${sheenY}%, oklch(1 0 0 / 7%), transparent 65%)`;

  function handlePointerMove(e: React.PointerEvent) {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(-py * tilt * 2);
    rotateY.set(px * tilt * 2);
    sheenX.set((px + 0.5) * 100);
    sheenY.set((py + 0.5) * 100);
  }

  function handlePointerLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div style={{ perspective: 1200 }} className="h-full">
      <m.div
        ref={ref}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`relative ${className ?? ""}`}
      >
        {children}
        {sheen && (
          <m.div
            aria-hidden
            style={{ background: sheenBackground, transform: "translateZ(1px)" }}
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 hover:opacity-100"
          />
        )}
      </m.div>
    </div>
  );
}

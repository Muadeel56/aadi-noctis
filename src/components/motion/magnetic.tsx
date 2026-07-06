"use client";

import { useRef } from "react";
import {
  m,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

interface MagneticProps {
  children: React.ReactNode;
  /** How far the element leans toward the cursor, in px. */
  strength?: number;
  className?: string;
}

/** Wrapper that makes its child lean toward the cursor while hovered. */
export function Magnetic({ children, strength = 8, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 15 });

  function handlePointerMove(e: React.PointerEvent) {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px * strength * 2);
    y.set(py * strength * 2);
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <m.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ x, y }}
      className={className}
    >
      {children}
    </m.div>
  );
}

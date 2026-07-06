"use client";

import { m, useReducedMotion, useScroll, useSpring } from "framer-motion";

/** Thin accent line along the top edge showing reading progress. */
export function ScrollProgress() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  if (reducedMotion) return null;

  return (
    <m.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-60 h-0.5 origin-left bg-accent shadow-[0_0_12px_var(--accent-glow)]"
    />
  );
}

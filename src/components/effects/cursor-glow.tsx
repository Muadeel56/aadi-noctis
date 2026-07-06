"use client";

import { useEffect, useState } from "react";
import {
  m,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

/**
 * A soft accent glow that trails the pointer — like carrying a lantern
 * through the site. Desktop-only (fine pointers) and skipped entirely
 * for reduced m.
 */
export function CursorGlow() {
  const reducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  const x = useSpring(useMotionValue(-400), { stiffness: 120, damping: 25 });
  const y = useSpring(useMotionValue(-400), { stiffness: 120, damping: 25 });

  useEffect(() => {
    if (reducedMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    function onMove(e: PointerEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
    }
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reducedMotion, x, y]);

  if (!enabled) return null;

  return (
    <m.div
      aria-hidden
      style={{ x, y }}
      className="pointer-events-none fixed top-0 left-0 z-1 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
    >
      <div className="size-full rounded-full bg-[radial-gradient(circle,var(--accent-glow),transparent_60%)]" />
    </m.div>
  );
}

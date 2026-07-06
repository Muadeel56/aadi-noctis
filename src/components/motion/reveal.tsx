"use client";

import {
  m,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";

interface RevealProps extends HTMLMotionProps<"div"> {
  /** Delay in seconds before the animation starts. */
  delay?: number;
  /** Vertical offset in px the element rises from. */
  y?: number;
}

/**
 * Scroll-triggered fade-up — FadeIn's whileInView counterpart for
 * below-the-fold sections. Animates once, when ~15% into the viewport.
 */
export function Reveal({ delay = 0, y = 24, ...props }: RevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <m.div
      initial={
        reducedMotion
          ? false
          : { opacity: 0, y, rotateX: 8, transformPerspective: 1000 }
      }
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      {...props}
    />
  );
}

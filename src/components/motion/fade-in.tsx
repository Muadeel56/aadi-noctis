"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

interface FadeInProps extends HTMLMotionProps<"div"> {
  /** Delay in seconds before the animation starts. */
  delay?: number;
  /** Vertical offset in px the element rises from. */
  y?: number;
}

/** Fades and rises content into view. The base pattern for all section reveals. */
export function FadeIn({ delay = 0, y = 16, ...props }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      {...props}
    />
  );
}

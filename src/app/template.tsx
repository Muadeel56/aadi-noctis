"use client";

import { m, useReducedMotion } from "framer-motion";

/**
 * Remounts on every route change, giving each page a soft fade-up entrance.
 * Keeps the body's column flex layout so footers still pin to the bottom.
 */
export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <m.div
      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="flex flex-1 flex-col"
    >
      {children}
    </m.div>
  );
}

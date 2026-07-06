"use client";

import { LazyMotion } from "framer-motion";

/**
 * Loads framer-motion's animation features in a separate async chunk so
 * they stay off the critical path. `domMax` (not `domAnimation`) because
 * the projects grid uses layout animations.
 */
const loadFeatures = () =>
  import("framer-motion").then((mod) => mod.domMax);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
}

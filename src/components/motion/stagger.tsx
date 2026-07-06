"use client";

import {
  m,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";

const groupVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* Cards swing up from a slight 3D pitch, like dominoes settling flat. */
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 48, rotateX: 18, transformPerspective: 900 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transformPerspective: 900,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

/**
 * Scroll-triggered stagger container. Direct children wrapped in
 * StaggerItem fade up one after another when the group enters view.
 */
export function StaggerGroup(props: HTMLMotionProps<"div">) {
  const reducedMotion = useReducedMotion();

  return (
    <m.div
      initial={reducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-15% 0px" }}
      variants={groupVariants}
      {...props}
    />
  );
}

/** A single fade-up child of StaggerGroup. */
export function StaggerItem(props: HTMLMotionProps<"div">) {
  const reducedMotion = useReducedMotion();

  return (
    <m.div variants={reducedMotion ? undefined : itemVariants} {...props} />
  );
}

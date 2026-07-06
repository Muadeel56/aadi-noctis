"use client";

import { useRef } from "react";
import {
  m,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

/**
 * A 3D stage for the hero: the whole content block leans gently toward
 * the cursor in perspective. Children can add their own translateZ for
 * extra depth separation. Pointer tracking is bound to the window so the
 * effect works across the full viewport, not just over the content.
 */
export function ParallaxStage({
  children,
  className,
  maxTilt = 3.5,
}: {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const rotateX = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });

  function handlePointerMove(e: React.PointerEvent) {
    if (reducedMotion) return;
    const px = e.clientX / window.innerWidth - 0.5;
    const py = e.clientY / window.innerHeight - 0.5;
    rotateX.set(-py * maxTilt * 2);
    rotateY.set(px * maxTilt * 2);
  }

  function handlePointerLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div
      style={{ perspective: 1400 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={className}
    >
      <m.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="flex flex-col items-center"
      >
        {children}
      </m.div>
    </div>
  );
}

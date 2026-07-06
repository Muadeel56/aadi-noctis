"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Star {
  x: number; // 0..1, scaled to canvas size on draw
  y: number;
  radius: number;
  baseAlpha: number;
  phase: number;
  twinkleSpeed: number;
}

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

const STAR_COUNT = 150;

function readAccent(): string {
  const accent = getComputedStyle(document.documentElement)
    .getPropertyValue("--accent")
    .trim();
  return accent || "#7dc8ff";
}

function makeStars(): Star[] {
  return Array.from({ length: STAR_COUNT }, () => ({
    x: Math.random(),
    y: Math.random(),
    radius: Math.random() * 1.1 + 0.3,
    baseAlpha: Math.random() * 0.5 + 0.25,
    phase: Math.random() * Math.PI * 2,
    twinkleSpeed: Math.random() * 1.2 + 0.4,
  }));
}

/**
 * A living night sky: twinkling stars with the occasional shooting star,
 * tinted to the active theme's accent. Sits behind the hero content.
 * Reduced motion gets a static sky; the loop pauses when offscreen.
 */
export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stars = makeStars();
    const meteors: Meteor[] = [];
    let accent = readAccent();
    let width = 0;
    let height = 0;
    let raf = 0;
    let visible = true;
    let nextMeteorAt = performance.now() + 2500;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawStars(t: number) {
      ctx!.clearRect(0, 0, width, height);
      for (const s of stars) {
        const alpha = reducedMotion
          ? s.baseAlpha
          : s.baseAlpha * (0.55 + 0.45 * Math.sin(t / 1000 * s.twinkleSpeed + s.phase));
        ctx!.globalAlpha = Math.max(alpha, 0.05);
        ctx!.fillStyle = accent;
        ctx!.beginPath();
        ctx!.arc(s.x * width, s.y * height, s.radius, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
    }

    function spawnMeteor() {
      meteors.push({
        x: Math.random() * width * 0.7 + width * 0.25,
        y: Math.random() * height * 0.35,
        vx: -(4 + Math.random() * 4), // streak down and to the left
        vy: 2.5 + Math.random() * 2,
        life: 0,
        maxLife: 45 + Math.random() * 25,
      });
    }

    function drawMeteors() {
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += m.vx;
        m.y += m.vy;
        m.life++;
        if (m.life > m.maxLife || m.x < -100 || m.y > height + 100) {
          meteors.splice(i, 1);
          continue;
        }
        const fade = 1 - m.life / m.maxLife;
        const tailX = m.x - m.vx * 9;
        const tailY = m.y - m.vy * 9;
        const gradient = ctx!.createLinearGradient(m.x, m.y, tailX, tailY);
        gradient.addColorStop(0, accent);
        gradient.addColorStop(1, "transparent");
        ctx!.globalAlpha = fade * 0.85;
        ctx!.strokeStyle = gradient;
        ctx!.lineWidth = 1.6;
        ctx!.lineCap = "round";
        ctx!.beginPath();
        ctx!.moveTo(m.x, m.y);
        ctx!.lineTo(tailX, tailY);
        ctx!.stroke();
      }
      ctx!.globalAlpha = 1;
    }

    function frame(t: number) {
      if (!visible) return;
      drawStars(t);
      if (t > nextMeteorAt && meteors.length < 2) {
        spawnMeteor();
        nextMeteorAt = t + 3500 + Math.random() * 5000;
      }
      drawMeteors();
      raf = requestAnimationFrame(frame);
    }

    resize();

    if (reducedMotion) {
      drawStars(0);
    } else {
      raf = requestAnimationFrame(frame);
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reducedMotion) drawStars(0);
    });
    resizeObserver.observe(canvas);

    // Pause the loop when the hero scrolls out of view.
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      const wasVisible = visible;
      visible = entry.isIntersecting;
      if (visible && !wasVisible && !reducedMotion) {
        raf = requestAnimationFrame(frame);
      }
    });
    intersectionObserver.observe(canvas);

    // Re-tint when the theme changes.
    const themeObserver = new MutationObserver(() => {
      accent = readAccent();
      if (reducedMotion) drawStars(0);
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      themeObserver.disconnect();
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 size-full"
    />
  );
}

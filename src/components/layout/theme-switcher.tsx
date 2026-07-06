"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useTheme } from "next-themes";
import { Popover } from "radix-ui";

import { THEMES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  // Server HTML always renders the default; only diverge after mount so
  // hydration matches and the post-mount re-render patches the DOM.
  const active = mounted
    ? (THEMES.find((t) => t.id === theme) ?? THEMES[0])
    : THEMES[0];

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          type="button"
          aria-label={`Theme: ${active.label}. Change theme`}
          className={cn(
            "group flex size-8 items-center justify-center rounded-full",
            "outline-none transition-colors hover:bg-muted",
            "focus-visible:ring-2 focus-visible:ring-ring/60"
          )}
        >
          <span
            className="size-4 rounded-full shadow-[0_0_10px_var(--accent-glow)] transition-transform group-hover:scale-110"
            style={{
              // Placeholder until mounted so SSR markup never mismatches
              backgroundColor: mounted ? active.swatch : "var(--muted)",
            }}
          />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="end"
          sideOffset={8}
          className="z-50 rounded-xl border border-border bg-popover p-2 shadow-lg outline-none"
        >
          <div className="flex items-center gap-1.5">
            {THEMES.map((t, i) => {
              const isActive = mounted && t.id === theme;
              return (
                <motion.button
                  key={t.id}
                  type="button"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.15 }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setTheme(t.id);
                    setOpen(false);
                  }}
                  aria-label={`Switch to ${t.label} theme`}
                  title={t.label}
                  className={cn(
                    "relative flex size-7 items-center justify-center rounded-full outline-none",
                    "focus-visible:ring-2 focus-visible:ring-ring/60",
                    isActive && "ring-2 ring-foreground/40 ring-offset-2 ring-offset-popover"
                  )}
                  style={{ backgroundColor: t.swatch }}
                >
                  {isActive && (
                    <Check className="size-3.5 text-background" strokeWidth={3} />
                  )}
                </motion.button>
              );
            })}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

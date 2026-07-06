"use client";

import { useEffect, useState } from "react";

function chakwalNow(): { time: string; hour: number } {
  const now = new Date();
  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Karachi",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(now);
  const hour = Number(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Karachi",
      hour: "2-digit",
      hour12: false,
    }).format(now)
  );
  return { time, hour };
}

function lineFor(hour: number): string {
  if (hour < 5) return "the best code happens now";
  if (hour < 12) return "coffee first, commits later";
  if (hour < 18) return "daylight shift";
  if (hour < 22) return "warming up for the night shift";
  return "entering the good hours";
}

/** Live local-time readout — a small heartbeat that proves the brand. */
export function NightClock() {
  const [state, setState] = useState<{ time: string; hour: number } | null>(
    null
  );

  useEffect(() => {
    setState(chakwalNow());
    const id = setInterval(() => setState(chakwalNow()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="inline-flex items-center gap-2.5 font-mono text-xs text-muted-foreground/70">
      <span aria-hidden className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex size-2 rounded-full bg-accent" />
      </span>
      {/* Render a stable shell on the server; the time fills in on mount. */}
      <span suppressHydrationWarning>
        {state
          ? `${state.time} in Chakwal — ${lineFor(state.hour)}.`
          : "Chakwal, Pakistan — UTC+5."}
      </span>
    </p>
  );
}

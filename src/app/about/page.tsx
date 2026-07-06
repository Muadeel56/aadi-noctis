import type { Metadata } from "next";
import { Mic2, Trophy } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Reveal } from "@/components/motion/reveal";
import { Tilt3d } from "@/components/motion/tilt";
import { Timeline } from "@/components/sections/timeline";
import { URDU_COUPLET_FULL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "From Chakwal to QTO House to building products — the story, the timeline, and the human layer: cricket, singing, and Iqbal.",
};

const HUMAN_LAYER = [
  {
    icon: Trophy,
    title: "Cricket",
    detail:
      "Tape-ball in the street, hard-ball when it matters. Still convinced I could have made the U-19 squad if the internet hadn't found me first.",
  },
  {
    icon: Mic2,
    title: "Singing",
    detail:
      "Mostly ghazals and old Bollywood, mostly for an audience of one. The same reason I like frontend work — timing, phrasing, and knowing when to hold back.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 pt-32 pb-24 sm:pb-32">
        <Reveal>
          <p className="font-mono text-sm tracking-widest text-primary uppercase">
            About
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            From Chakwal, with code.
          </h1>
        </Reveal>

        {/* The story */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex max-w-2xl flex-col gap-5 text-muted-foreground">
            <p>
              I grew up in Chakwal — a small city in Punjab better known for
              its poets and soldiers than its programmers. Somewhere between a
              slow family computer and a slower internet connection, I found
              out that a text file could become a living thing in a browser,
              and that was that.
            </p>
            <p>
              These days I&apos;m a full-stack developer at QTO House, a
              construction estimation company, where I build the products the
              business runs on: the client-facing takeoff platform, the
              company sites, and core modules of the internal ERP — Django and
              PostgreSQL behind, React in front, everything shipped on
              Cloudflare.
            </p>
            <p>
              After hours, I build products of my own. An AI translator for
              anxious brains. A finance tracker. A map-first side project
              called MapForge. The pattern is always the same: own the whole
              stack, sweat the interface, and ship the thing — usually well
              after midnight.
            </p>
          </div>
        </Reveal>

        {/* Timeline */}
        <section className="mt-20">
          <Reveal>
            <h2 className="font-mono text-sm tracking-widest text-primary uppercase">
              The Road So Far
            </h2>
          </Reveal>
          <div className="mt-10">
            <Timeline />
          </div>
        </section>

        {/* Human layer */}
        <section className="mt-20">
          <Reveal>
            <h2 className="font-mono text-sm tracking-widest text-primary uppercase">
              Off the Clock
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {HUMAN_LAYER.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1} className="h-full">
                <Tilt3d
                  tilt={6}
                  className="h-full rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-accent/30"
                >
                  <item.icon className="size-6 text-accent" aria-hidden />
                  <h3 className="mt-4 font-display text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground">
                    {item.detail}
                  </p>
                </Tilt3d>
              </Reveal>
            ))}
          </div>
        </section>

        {/* The couplet — the memorable moment */}
        <Reveal>
          <section className="relative mt-24 overflow-hidden rounded-2xl border border-border bg-surface px-6 py-14 text-center sm:py-16">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--accent-glow),transparent_65%)] opacity-60"
            />
            <div className="relative">
              <div lang="ur" className="font-urdu text-2xl text-foreground sm:text-3xl">
                {URDU_COUPLET_FULL.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <p className="mx-auto mt-6 max-w-md font-mono text-sm text-muted-foreground italic">
                &ldquo;{URDU_COUPLET_FULL.translation}&rdquo;
              </p>
              <p className="mt-3 font-mono text-xs tracking-widest text-primary uppercase">
                {URDU_COUPLET_FULL.poet} · translation my own
              </p>
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}

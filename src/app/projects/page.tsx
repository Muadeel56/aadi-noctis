import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Reveal } from "@/components/motion/reveal";
import { ProjectsGrid } from "@/components/sections/projects-grid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Everything I've shipped — SaaS platforms, GIS work, AI experiments, and personal builds. Each one has a full case study.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-7xl flex-1 px-6 pt-32 pb-24 sm:pb-32">
        <Reveal>
          <p className="font-mono text-sm tracking-widest text-primary uppercase">
            Projects
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Everything I&apos;ve shipped.
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Client platforms, internal tools, and after-midnight experiments.
            Every card opens a full case study.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12">
          <ProjectsGrid />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}

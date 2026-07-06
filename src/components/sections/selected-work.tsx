import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { ProjectCard } from "@/components/sections/project-card";
import { featuredProjects } from "@/data/projects";

export function SelectedWork() {
  return (
    <section id="work" className="mx-auto w-full max-w-7xl scroll-mt-24 px-6 py-24 sm:py-32">
      <Reveal>
        <p className="font-mono text-sm tracking-widest text-primary uppercase">
          Selected Work
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Things I&apos;ve shipped.
        </h2>
      </Reveal>

      <StaggerGroup className="mt-14 grid gap-8 sm:grid-cols-2">
        {featuredProjects.map((project) => (
          <StaggerItem key={project.slug}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}

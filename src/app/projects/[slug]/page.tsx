import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAdjacentProjects, getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      images: project.screenshots[0] ? [project.screenshots[0]] : undefined,
    },
  };
}

function CaseStudySection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <section className="border-t border-border/50 py-10">
        <div className="grid gap-4 sm:grid-cols-[10rem_1fr] sm:gap-8">
          <h2 className="font-mono text-sm tracking-widest text-primary uppercase">
            {label}
          </h2>
          <div>{children}</div>
        </div>
      </section>
    </Reveal>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const screenshot = project.screenshots[0];

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 pt-32 pb-24 sm:pb-32">
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex min-h-10 items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden />
            All projects
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-sm text-muted-foreground">
            <span className="text-primary">{project.category}</span>
            <span aria-hidden>·</span>
            <span>{project.year}</span>
            <span aria-hidden>·</span>
            <span>{project.role}</span>
          </div>

          <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {project.tagline}
          </p>

          {(project.liveUrl || project.repoUrl) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <Button asChild className="min-h-11 px-5">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Visit live site
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                </Button>
              )}
              {project.repoUrl && (
                <Button asChild variant="outline" className="min-h-11 px-5">
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    View source
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                </Button>
              )}
            </div>
          )}
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 overflow-hidden rounded-xl border border-border bg-surface shadow-[0_0_60px_var(--accent-glow)]">
            {screenshot ? (
              <Image
                src={screenshot}
                alt={`${project.title} screenshot`}
                width={1600}
                height={1000}
                priority
                sizes="(min-width: 896px) 832px, 100vw"
                className="h-auto w-full"
              />
            ) : (
              <div className="flex aspect-video items-center justify-center bg-linear-to-br from-surface-elevated via-surface to-background">
                <span className="font-display text-8xl font-semibold text-accent/30">
                  {project.title.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </Reveal>

        <div className="mt-16">
          <CaseStudySection label="Problem">
            <p className="text-muted-foreground">{project.problem}</p>
          </CaseStudySection>

          <CaseStudySection label="Solution">
            <p className="text-muted-foreground">{project.solution}</p>
          </CaseStudySection>

          <CaseStudySection label="Stack">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="secondary" className="font-mono">
                  {tech}
                </Badge>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection label="Key Features">
            <StaggerGroup className="flex flex-col gap-3" role="list">
              {project.features.map((feature) => (
                <StaggerItem
                  key={feature}
                  role="listitem"
                  className="flex gap-3 text-muted-foreground"
                >
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {feature}
                </StaggerItem>
              ))}
            </StaggerGroup>
          </CaseStudySection>

          <CaseStudySection label="What I Learned">
            <p className="text-muted-foreground">{project.learned}</p>
          </CaseStudySection>
        </div>

        <Reveal>
          <nav
            aria-label="Project navigation"
            className="mt-8 grid gap-4 border-t border-border/50 pt-10 sm:grid-cols-2"
          >
            <Link
              href={`/projects/${prev.slug}`}
              className="group rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/30"
            >
              <span className="flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                <ArrowLeft
                  aria-hidden
                  className="size-3.5 transition-transform group-hover:-translate-x-0.5"
                />
                Previous
              </span>
              <span className="mt-2 block font-display text-lg font-semibold">
                {prev.title}
              </span>
            </Link>
            <Link
              href={`/projects/${next.slug}`}
              className="group rounded-xl border border-border bg-surface p-5 text-right transition-colors hover:border-accent/30"
            >
              <span className="flex items-center justify-end gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                Next
                <ArrowRight
                  aria-hidden
                  className="size-3.5 transition-transform group-hover:translate-x-0.5"
                />
              </span>
              <span className="mt-2 block font-display text-lg font-semibold">
                {next.title}
              </span>
            </Link>
          </nav>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}

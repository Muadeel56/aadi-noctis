"use client";

import { useState } from "react";
import { AnimatePresence, LayoutGroup, m } from "framer-motion";

import { ProjectCard } from "@/components/sections/project-card";
import { projects, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

type FilterId = "all" | ProjectCategory;

const FILTERS: { id: FilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "Enterprise/SaaS", label: "SaaS" },
  { id: "GIS", label: "GIS" },
  { id: "AI/Creative", label: "AI" },
  { id: "Client Work", label: "Client" },
  { id: "Full-Stack", label: "Personal" },
];

export function ProjectsGrid() {
  const [filter, setFilter] = useState<FilterId>("all");

  const visible =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2"
      >
        {FILTERS.map((f) => {
          const isActive = f.id === filter;
          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setFilter(f.id)}
              className={cn(
                "relative min-h-10 rounded-full px-4 py-2 font-mono text-sm transition-colors",
                "outline-none focus-visible:ring-2 focus-visible:ring-ring/60",
                isActive
                  ? "text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {isActive && (
                <m.span
                  layoutId="filter-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-accent"
                />
              )}
              <span className="relative">{f.label}</span>
            </button>
          );
        })}
      </div>

      <LayoutGroup>
        <m.div layout className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <m.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <ProjectCard project={project} />
              </m.div>
            ))}
          </AnimatePresence>
        </m.div>
      </LayoutGroup>
    </div>
  );
}

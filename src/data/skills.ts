export interface SkillGroup {
  id: string;
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Vue",
      "Nuxt",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Material UI",
      "Framer Motion",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "SQLite",
      "Supabase",
      "Prisma",
      "Drizzle",
      "JWT Auth",
      "Cloudflare Workers",
      "Cloudflare D1",
      "Cloudflare R2",
      "Docker",
    ],
  },
  {
    id: "geo",
    label: "Geo & Mapping",
    skills: [
      "Leaflet",
      "Mapbox GL",
      "PostGIS",
      "GeoDjango",
      "Web Mapping",
      "Spatial Data Modeling",
    ],
  },
  {
    id: "ai",
    label: "AI & Tooling",
    skills: [
      "LLM Integration",
      "Prompt Engineering",
      "Claude Code",
      "Cursor",
      "AI-Assisted Product Design",
      "UX Pilot",
    ],
  },
];

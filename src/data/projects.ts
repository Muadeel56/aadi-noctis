export type ProjectCategory =
  | "client-work"
  | "product"
  | "experiment"
  | "open-source";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  url?: string;
  repoUrl?: string;
  stack: string[];
  category: ProjectCategory;
  featured: boolean;
  year: number;
}

/**
 * Project entries are skeletons for now — descriptions, stacks, and
 * screenshots get fleshed out in the Projects phase.
 */
export const projects: Project[] = [
  {
    slug: "qto-house",
    title: "QTO House",
    tagline: "Construction takeoff & estimation platform.",
    description: "",
    url: "https://qto-house-frontend.ahmadmustafa920.workers.dev/",
    stack: ["React", "Tailwind CSS"],
    category: "client-work",
    featured: true,
    year: 2025,
  },
  {
    slug: "qto-dev",
    title: "QTO Dev",
    tagline: "Company site for the QTO development team.",
    description: "",
    url: "https://qtodev-site.ahmadmustafa920.workers.dev/",
    stack: ["React", "Tailwind CSS"],
    category: "client-work",
    featured: false,
    year: 2025,
  },
  {
    slug: "qto-erp",
    title: "QTO ERP",
    tagline: "ERP web app for internal operations.",
    description: "",
    url: "https://qto-erp-web-staging.ahmadmustafa920.workers.dev/",
    stack: ["React", "Tailwind CSS"],
    category: "client-work",
    featured: true,
    year: 2025,
  },
  {
    slug: "location-tech",
    title: "Location Tech",
    tagline: "Marketing site for a location-intelligence company.",
    description: "",
    url: "https://location-tech-website.pages.dev/",
    stack: ["React", "Tailwind CSS"],
    category: "client-work",
    featured: false,
    year: 2025,
  },
  {
    slug: "ali-portfolio",
    title: "Ali Portfolio",
    tagline: "A portfolio built in Vue for a friend.",
    description: "",
    url: "https://ali-portfolio-vue.pages.dev/",
    stack: ["Vue"],
    category: "client-work",
    featured: false,
    year: 2025,
  },
  {
    slug: "overthinking-translator",
    title: "Overthinking Translator",
    tagline: "Says what your anxious brain actually means.",
    description: "",
    url: "https://overthinking-translator.pages.dev/",
    stack: ["React"],
    category: "experiment",
    featured: true,
    year: 2025,
  },
  {
    slug: "bhai-chronicles",
    title: "Bhai Chronicles",
    tagline: "A playful storytelling side project.",
    description: "",
    url: "https://bhai-chronicles.pages.dev/",
    stack: ["React"],
    category: "experiment",
    featured: false,
    year: 2025,
  },
  {
    slug: "personal-finance-tracker",
    title: "Personal Finance Tracker",
    tagline: "Track income, expenses, and habits in one place.",
    description: "",
    stack: ["React"],
    category: "product",
    featured: true,
    year: 2026,
  },
];

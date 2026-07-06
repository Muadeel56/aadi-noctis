export type ProjectCategory =
  | "Enterprise/SaaS"
  | "GIS"
  | "Client Work"
  | "AI/Creative"
  | "Full-Stack";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  stack: string[];
  features: string[];
  liveUrl?: string;
  repoUrl?: string;
  screenshots: string[];
  year: number;
  category: ProjectCategory;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "qto-house",
    title: "QTO House",
    tagline: "Construction takeoff & estimation platform.",
    description:
      "A client-facing platform for QTO House, a professional quantity takeoff and estimation service trusted by 300+ clients across 2,500+ projects. Contractors browse sample takeoffs, request quotes, and track their projects through the bidding process — all backed by an authenticated dashboard that streamlines what used to be an email-and-spreadsheet workflow.",
    role: "Full-Stack Developer",
    stack: ["React", "Tailwind CSS", "Django", "PostgreSQL", "Cloudflare Workers"],
    features: [
      "Quote request pipeline from submission to estimate delivery",
      "Sample takeoff library for prospective clients",
      "Authenticated client dashboard with project tracking",
      "Careers, projects, and contact flows for the full company web presence",
    ],
    liveUrl: "https://qto-house-frontend.ahmadmustafa920.workers.dev/",
    screenshots: ["/screenshots/qto-house.png"],
    year: 2025,
    category: "Enterprise/SaaS",
    featured: true,
  },
  {
    slug: "qto-dev",
    title: "QTO Dev",
    tagline: "Company site for a software engineering studio.",
    description:
      "The public face of QTO Dev, a software studio building cloud-native platforms and intelligent automation. The site sells the studio's process — weekly demos, senior engineers, production-grade delivery — with a CMS-driven services and blog section so the team can publish without touching code.",
    role: "Full-Stack Developer",
    stack: ["React", "Tailwind CSS", "Cloudflare Workers"],
    features: [
      "CMS-backed services and blog with headline and latest-post feeds",
      "Consultation booking funnel with clear conversion paths",
      "Client logo wall and capability showcase",
      "Fully responsive marketing pages tuned for performance",
    ],
    liveUrl: "https://qtodev-site.ahmadmustafa920.workers.dev/",
    screenshots: ["/screenshots/qto-dev.png"],
    year: 2025,
    category: "Enterprise/SaaS",
    featured: false,
  },
  {
    slug: "qto-erp",
    title: "QTO ERP",
    tagline: "Attendance, HR, and project management in one suite.",
    description:
      "A modern ERP for growing teams that unifies attendance, HRM, project management, and CRM into a single platform — with payroll and finance modules on the roadmap. Built for real operational scale: real-time clock in/out, onboarding workflows, Kanban and Gantt project views, and a lead-to-project CRM lifecycle with BOQ and cost estimation for construction companies.",
    role: "Full-Stack Developer",
    stack: ["React", "Tailwind CSS", "Django", "Django REST Framework", "PostgreSQL"],
    features: [
      "Real-time attendance with shift scheduling and automated timesheets",
      "HRM module covering employee data, onboarding, and performance reviews",
      "Project management with Kanban and Gantt views and resource allocation",
      "CRM with lead-to-project lifecycle, BOQ, and proposal tracking",
    ],
    liveUrl: "https://qto-erp-web-staging.ahmadmustafa920.workers.dev/",
    screenshots: ["/screenshots/qto-erp.png"],
    year: 2025,
    category: "Enterprise/SaaS",
    featured: true,
  },
  {
    slug: "location-technologies",
    title: "Location Technologies",
    tagline: "We map. We track. We connect.",
    description:
      "Marketing site for Location Technologies Pvt. Ltd., a Pakistan-based location-intelligence company doing GIS platforms, fleet tracking, and SaaS development. The site communicates survey-grade credibility — 99.9% tracking uptime, 2,400+ assets tracked live — through animated stats, a services showcase spanning web mapping to legacy modernization, and a portfolio of delivered projects.",
    role: "Frontend Developer",
    stack: ["React", "Tailwind CSS", "Cloudflare Pages"],
    features: [
      "Services showcase covering GIS, web mapping, SaaS, and DevOps",
      "Live-feel tracking widgets with geofence alerts and animated counters",
      "Portfolio of delivered projects across six industries",
      "Dark, precision-focused visual language fitting a geo company",
    ],
    liveUrl: "https://location-tech-website.pages.dev/",
    screenshots: ["/screenshots/location-technologies.png"],
    year: 2025,
    category: "GIS",
    featured: false,
  },
  {
    slug: "ali-portfolio",
    title: "Ali's Portfolio",
    tagline: "A personal portfolio, built in Vue for a change of pace.",
    description:
      "A cinematic portfolio for a Rawalpindi-based videographer — \"I film the silence between emotions\" — built in Vue rather than my usual React as a deliberate exercise in staying framework-fluent. Moody, film-grade visual treatment with sections for about, work, services, and contact, a live local-time readout, and session booking so clients can reach out without friction.",
    role: "Designer & Developer",
    stack: ["Vue", "Tailwind CSS", "Cloudflare Pages"],
    features: [
      "About, work, services, and contact sections in a single flowing page",
      "Live Rawalpindi local-time display in the header",
      "Session booking call-to-action wired for direct client outreach",
      "Composition API architecture mirroring modern React patterns",
    ],
    liveUrl: "https://ali-portfolio-vue.pages.dev/",
    screenshots: ["/screenshots/ali-portfolio.png"],
    year: 2025,
    category: "Client Work",
    featured: false,
  },
  {
    slug: "overthinking-translator",
    title: "Overthinking Translator",
    tagline: "Says what your anxious brain actually means.",
    description:
      "A quiet place to translate the loop into something you can hold. Type the spiral — \"they didn't text back\", \"what if I picked wrong\" — and the app translates anxious self-talk into what your brain is actually trying to say. An exercise in using AI for something soft: careful copy, a calm interface, and a keyboard-first flow that stays out of the way.",
    role: "Creator",
    stack: ["React", "Tailwind CSS", "AI/LLM", "Cloudflare Pages"],
    features: [
      "Free-text spiral input with one-tap example prompts",
      "AI translation of anxious thoughts into grounded language",
      "Keyboard-first flow with cmd+enter to translate",
      "Deliberately quiet, low-stimulation interface design",
    ],
    liveUrl: "https://overthinking-translator.pages.dev/",
    screenshots: ["/screenshots/overthinking-translator.png"],
    year: 2025,
    category: "AI/Creative",
    featured: true,
  },
  {
    slug: "bhai-chronicles",
    title: "Bhai Chronicles",
    tagline: "A birthday tribute that fits in your pocket.",
    description:
      "A four-chapter scrollytelling tribute built for my brother's birthday: a timeline of his quiet-superpower years, a full-screen photo gallery, a letter set in Nastaliq, and a confetti finale. Proof that a side project can be pure heart — soft scroll, zero hurry, notifications off.",
    role: "Creator",
    stack: ["React", "Tailwind CSS", "Framer Motion", "Cloudflare Pages"],
    features: [
      "Four-chapter narrative structure: journey, memories, letters, finale",
      "Swipeable full-screen photo gallery",
      "Urdu Nastaliq typography for the letters chapter",
      "Scroll-driven animations with a confetti finale",
    ],
    liveUrl: "https://bhai-chronicles.pages.dev/",
    screenshots: ["/screenshots/bhai-chronicles.png"],
    year: 2025,
    category: "AI/Creative",
    featured: false,
  },
  {
    slug: "wealthwise",
    title: "WealthWise",
    tagline: "Track income, expenses, and habits in one place.",
    description:
      "A personal finance tracker built end to end: income and expense logging, category budgets, and habit tracking that connects daily behavior to monthly outcomes. Owning the full stack — schema, API, and interface — with dashboards designed to answer \"where did it go?\" at a glance.",
    role: "Creator",
    stack: ["React", "TypeScript", "Django", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Income and expense logging with category budgets",
      "Habit tracking linked to spending behavior",
      "Dashboard views summarizing monthly cash flow",
      "Full-stack ownership from Postgres schema to UI",
    ],
    screenshots: [],
    year: 2026,
    category: "Full-Stack",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

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
  /** Case study: what was broken or missing before this existed. */
  problem: string;
  /** Case study: how the product answers the problem. */
  solution: string;
  /** Case study: what building it taught me. */
  learned: string;
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
    problem:
      "Takeoff services traditionally run on email threads and spreadsheets. With 300+ clients and 2,500+ projects moving through a manual pipeline, prospects couldn't see sample work before committing, quote requests got buried in inboxes, and clients had no visibility into where their estimates stood.",
    solution:
      "I turned the whole funnel into product: a public sample-takeoff library that does the selling, a structured quote-request pipeline that replaces email intake, and an authenticated dashboard where clients follow projects from submission to estimate delivery. Django and PostgreSQL run the pipeline; a React frontend on Cloudflare Workers serves it.",
    learned:
      "Contractors want status, not features — designing for a non-technical audience forced me to cut cleverness and surface state. Owning schema, API, and interface end to end also made every tradeoff mine to see, not someone else's problem.",
    role: "Full-Stack Developer",
    stack: ["React", "Tailwind CSS", "Django", "PostgreSQL", "Cloudflare Workers"],
    features: [
      "Quote request pipeline from submission to estimate delivery",
      "Sample takeoff library for prospective clients",
      "Authenticated client dashboard with project tracking",
      "Careers, projects, and contact flows for the full company web presence",
    ],
    liveUrl: "https://qto-house-frontend.ahmadmustafa920.workers.dev/",
    screenshots: ["/screenshots/qto-house.webp"],
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
    problem:
      "A software studio lives or dies on its public credibility, but QTO Dev's story — weekly demos, senior engineers, production-grade delivery — had no home. Worse, any services page or blog post would have needed a developer in the loop, which is how marketing sites go stale.",
    solution:
      "A marketing site where the content layer is fully CMS-driven: services, blog headlines, and latest-post feeds are editable without a deploy. Around that sits a consultation booking funnel, a client logo wall, and capability showcases — all tuned so the site itself demonstrates the delivery quality it promises.",
    learned:
      "Content modeling is a design problem: getting the CMS schema right up front is what keeps non-developers publishing months later. I also learned to treat a marketing site's performance as part of the pitch.",
    role: "Full-Stack Developer",
    stack: ["React", "Tailwind CSS", "Cloudflare Workers"],
    features: [
      "CMS-backed services and blog with headline and latest-post feeds",
      "Consultation booking funnel with clear conversion paths",
      "Client logo wall and capability showcase",
      "Fully responsive marketing pages tuned for performance",
    ],
    liveUrl: "https://qtodev-site.ahmadmustafa920.workers.dev/",
    screenshots: ["/screenshots/qto-dev.webp"],
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
    problem:
      "Growing companies duct-tape operations together: attendance in one tool, HR files in another, project boards in a third, CRM in a spreadsheet. Nothing talks to anything, and the company's actual state lives in nobody's head. QTO House needed all of it in one system built around how construction estimation actually works.",
    solution:
      "A unified ERP where the modules share one data model: real-time clock in/out feeding automated timesheets, HRM covering onboarding through performance reviews, project management with Kanban and Gantt views, and a CRM that carries a lead through BOQ and proposal into a live project. Django REST Framework and PostgreSQL underneath, React on top.",
    learned:
      "This is where I learned to design schemas for systems that grow sideways — every module you add stresses assumptions the last one made. Permissions, audit trails, and 'who can see what' turned out to be half the product.",
    role: "Full-Stack Developer",
    stack: ["React", "Tailwind CSS", "Django", "Django REST Framework", "PostgreSQL"],
    features: [
      "Real-time attendance with shift scheduling and automated timesheets",
      "HRM module covering employee data, onboarding, and performance reviews",
      "Project management with Kanban and Gantt views and resource allocation",
      "CRM with lead-to-project lifecycle, BOQ, and proposal tracking",
    ],
    liveUrl: "https://qto-erp-web-staging.ahmadmustafa920.workers.dev/",
    screenshots: ["/screenshots/qto-erp.webp"],
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
    problem:
      "A location-intelligence company that tracks 2,400+ assets with 99.9% uptime had no web presence that felt like it. Survey-grade GIS work was being sold through a site that read like a generic IT vendor — the credibility gap between what they do and how they looked online was costing trust.",
    solution:
      "A dark, precision-focused marketing site that shows rather than tells: live-feel tracking widgets with geofence alerts, animated stat counters for the uptime and asset numbers, a services showcase spanning GIS platforms to legacy modernization, and a portfolio of delivered projects across six industries.",
    learned:
      "Visual language is domain language — a geo company should feel like a map room at night, not a brochure. I also learned to keep animated counters and live-feel widgets cheap enough that the credibility play doesn't cost the performance score.",
    role: "Frontend Developer",
    stack: ["React", "Tailwind CSS", "Cloudflare Pages"],
    features: [
      "Services showcase covering GIS, web mapping, SaaS, and DevOps",
      "Live-feel tracking widgets with geofence alerts and animated counters",
      "Portfolio of delivered projects across six industries",
      "Dark, precision-focused visual language fitting a geo company",
    ],
    liveUrl: "https://location-tech-website.pages.dev/",
    screenshots: ["/screenshots/location-technologies.webp"],
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
    problem:
      "A videographer whose whole craft is mood — \"I film the silence between emotions\" — needed a portfolio that carried that atmosphere instead of flattening it into a grid of thumbnails. And I wanted a real project, not a tutorial, to prove my Vue fluency.",
    solution:
      "A single flowing page with film-grade visual treatment: about, work, services, and contact sections that breathe, a live Rawalpindi local-time readout in the header, and a session-booking call to action so clients can reach out without friction. Built on Vue's Composition API, deliberately mirroring the patterns I use in React.",
    learned:
      "Frameworks are dialects, not languages — Composition API mapped cleanly onto my React mental model, and switching sharpened both. Designing for someone else's aesthetic also taught me restraint: the portfolio had to feel like his films, not my defaults.",
    role: "Designer & Developer",
    stack: ["Vue", "Tailwind CSS", "Cloudflare Pages"],
    features: [
      "About, work, services, and contact sections in a single flowing page",
      "Live Rawalpindi local-time display in the header",
      "Session booking call-to-action wired for direct client outreach",
      "Composition API architecture mirroring modern React patterns",
    ],
    liveUrl: "https://ali-portfolio-vue.pages.dev/",
    screenshots: ["/screenshots/ali-portfolio.webp"],
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
    problem:
      "Anxious self-talk loops because it never gets said out loud in words you can examine. Most AI apps are loud — dashboards, streaks, engagement hooks. There was no quiet place to hand the spiral to something that would translate it instead of amplify it.",
    solution:
      "A deliberately low-stimulation interface: one text box for the spiral, one-tap example prompts for when you can't start, and an AI translation that renders the anxious thought into grounded language. Keyboard-first — cmd+enter to translate — so the tool stays out of the way of the feeling.",
    learned:
      "Prompt design is copywriting: the difference between a response that lands soft and one that lectures is entirely in how you frame the model's role. Restraint was the hard part — every feature I didn't add kept the room quiet.",
    role: "Creator",
    stack: ["React", "Tailwind CSS", "AI/LLM", "Cloudflare Pages"],
    features: [
      "Free-text spiral input with one-tap example prompts",
      "AI translation of anxious thoughts into grounded language",
      "Keyboard-first flow with cmd+enter to translate",
      "Deliberately quiet, low-stimulation interface design",
    ],
    liveUrl: "https://overthinking-translator.pages.dev/",
    screenshots: ["/screenshots/overthinking-translator.webp"],
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
    problem:
      "Birthday cards get thrown away and group-chat wishes scroll past. I wanted to give my brother something that would make him sit with two decades of memories for ten minutes — and no template, no card, no slideshow app was built for that.",
    solution:
      "A four-chapter scrollytelling site: a timeline of his quiet-superpower years, a swipeable full-screen photo gallery, a letter set in Urdu Nastaliq, and a confetti finale. Scroll-driven animation paces the story — soft scroll, zero hurry — so the site itself feels like being told a story by someone who loves you.",
    learned:
      "Scroll-driven narrative is choreography: the hard part isn't triggering animations, it's pacing them so the reader never feels pushed. Setting Nastaliq on the web — line-height, RTL flow, font loading — taught me typography lessons no Latin script ever would.",
    role: "Creator",
    stack: ["React", "Tailwind CSS", "Framer Motion", "Cloudflare Pages"],
    features: [
      "Four-chapter narrative structure: journey, memories, letters, finale",
      "Swipeable full-screen photo gallery",
      "Urdu Nastaliq typography for the letters chapter",
      "Scroll-driven animations with a confetti finale",
    ],
    liveUrl: "https://bhai-chronicles.pages.dev/",
    screenshots: ["/screenshots/bhai-chronicles.webp"],
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
    problem:
      "Every month ends with the same question — \"where did it go?\" — and the existing answers are either spreadsheets that demand discipline or finance apps that track money while ignoring the habits that spend it. The link between daily behavior and monthly outcome stays invisible.",
    solution:
      "A tracker that treats habits and money as one dataset: income and expense logging with category budgets, habit tracking wired to spending behavior, and dashboard views that answer the monthly question at a glance. Built end to end — PostgreSQL schema, Django API, typed React interface — with no one else's architecture decisions in the way.",
    learned:
      "Building for yourself is the harshest user testing: if logging an expense takes more than a few seconds, you stop, and the product dies. TypeScript across the API boundary paid for itself the first time the schema changed.",
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

/** Previous/next projects for case-study navigation, wrapping at the ends. */
export function getAdjacentProjects(slug: string): {
  prev: Project;
  next: Project;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { prev, next };
}

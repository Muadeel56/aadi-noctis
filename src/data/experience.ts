export interface Experience {
  company: string;
  role: string;
  period: string;
  current: boolean;
  location?: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export const experience: Experience[] = [
  {
    company: "QTO House",
    role: "Full-Stack Developer",
    period: "2024 – Present",
    current: true,
    location: "Remote",
    summary:
      "Building the product suite for a construction estimation company — from the client-facing takeoff platform to the internal ERP that runs its operations.",
    highlights: [
      "Shipped the QTO House client platform: quote requests, sample takeoffs, and an authenticated project dashboard serving 300+ clients",
      "Built core modules of QTO ERP — attendance, HRM, project management, and CRM — from Postgres schema to React UI",
      "Delivered the QTO Dev company site with CMS-driven services and blog content",
      "Own features end to end: Django REST APIs, PostgreSQL data models, and React frontends deployed on Cloudflare",
    ],
    stack: [
      "React",
      "Tailwind CSS",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Cloudflare Workers",
    ],
  },
];

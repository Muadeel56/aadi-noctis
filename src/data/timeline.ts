export interface TimelineEntry {
  year: string;
  title: string;
  detail: string;
  current?: boolean;
}

/** About-page timeline — Chakwal to now, newest last. */
export const timeline: TimelineEntry[] = [
  {
    year: "Origins",
    title: "Chakwal, Punjab",
    detail:
      "Grew up in a small city better known for its poets and soldiers than its programmers. First computer, first curiosity — the kind that takes things apart to see why they work.",
  },
  {
    year: "The turn",
    title: "Falling into code",
    detail:
      "Discovered that a text file could become a living thing in a browser. Taught myself the web stack the honest way: broken layouts, view-source, and nights that ended at dawn.",
  },
  {
    year: "2024",
    title: "QTO House — Full-Stack Developer",
    detail:
      "Joined a construction estimation company and started shipping for real users: the client platform, the company sites, and core modules of the internal ERP — Django and PostgreSQL behind, React in front.",
    current: true,
  },
  {
    year: "Now",
    title: "Building products",
    detail:
      "Side projects that ship: an AI translator for anxious brains, a finance tracker, a map-first project called MapForge. The goal hasn't changed — build things end to end, and make them feel good to use.",
    current: true,
  },
];

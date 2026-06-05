export type SiteNavLink = {
  label: string;
  href: string;
};

export type ToolId =
  | "wida-family-guide"
  | "scaffold"
  | "compass"
  | "li-li-chinese"
  | "hangul-flow";

export type FeaturedTool = {
  id: ToolId;
  title: string;
  subtitle: string;
  tags: string[];
  accent: string;
  url: string;
  screenshotSrc: string;
  screenshotAlt: string;
};

export type ResearchMilestone = {
  id: string;
  title: string;
  body: string;
  date: string;
  status: "ongoing" | "complete";
  href?: string;
  linkLabel?: string;
};

export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

export type FooterSocialLink = FooterLink & {
  id: "linkedin" | "email" | "github";
};

const basePath = import.meta.env.BASE_URL;

export const siteContact = {
  email: "mailto:lenguajelabs@proton.me",
  linkedin: "https://www.linkedin.com/in/federico-orozco-687b5431/",
  github: "https://github.com/LenguajeLabs-design/classroom-compass",
};

export const siteResources = {
  presentationPdf: `${basePath}resources/how-i-build-educational-tools-with-ai.pdf`,
  mlrcCapstonePdf: `${basePath}resources/mlrc-capstone-federico-orozco.pdf`,
};

export const navLinks: SiteNavLink[] = [
  { label: "Overview", href: "#lab" },
  { label: "Approach", href: "#mission" },
  { label: "Features", href: "#tools" },
  { label: "Research", href: "#research" },
  { label: "Fit", href: "#integration" },
  { label: "Contact", href: "#contact" },
];

export const featuredTools: FeaturedTool[] = [
  {
    id: "wida-family-guide",
    title: "WIDA Family Guide",
    subtitle: "Understand your child's English proficiency level and how to support their learning journey — available in multiple languages.",
    tags: ["Family", "EAL"],
    accent: "#1E3A5F",
    url: "https://wida-family-guide.replit.app/",
    screenshotSrc: `${basePath}app-screenshots/wida-family-guide.png`,
    screenshotAlt: "WIDA Family Guide screenshot",
  },
  {
    id: "scaffold",
    title: "Scaffold",
    subtitle: "AI-powered EAL lesson planning assistant. Enter a school access code and generate differentiated lessons in minutes.",
    tags: ["AI", "Lesson Planning"],
    accent: "#1E3A8A",
    url: "https://scaffold.replit.app/",
    screenshotSrc: `${basePath}app-screenshots/scaffold-lesson-output.png`,
    screenshotAlt: "Scaffold lesson output screenshot",
  },
  {
    id: "compass",
    title: "Classroom Compass",
    subtitle: "A calm support hub for neurodiverse learners and student services teams, designed to make language, literacy, and next steps easier to understand.",
    tags: ["Student Support", "Care Teams", "Neurodiversity"],
    accent: "#F59E0B",
    url: "https://github.com/LenguajeLabs-design/classroom-compass",
    screenshotSrc: "",
    screenshotAlt: "Classroom Compass preview",
  },
  {
    id: "li-li-chinese",
    title: "Li Li Chinese",
    subtitle: "A calm space to turn Chinese into real speaking. Save words, track progress, and build confidence at your own pace.",
    tags: ["Chinese", "Speaking"],
    accent: "#0D9488",
    url: "https://speak-chinese-now.replit.app/",
    screenshotSrc: `${basePath}app-screenshots/speak-chinese-now.png`,
    screenshotAlt: "Li Li Chinese screenshot",
  },
  {
    id: "hangul-flow",
    title: "Hangul Flow",
    subtitle: "Master Korean through AI-generated reading passages tailored to your level and interests, with instant vocabulary support.",
    tags: ["Korean", "AI Reading"],
    accent: "#7C3AED",
    url: "https://hangul-flow.replit.app/",
    screenshotSrc: `${basePath}app-screenshots/hangul-flow.png`,
    screenshotAlt: "Hangul Flow screenshot",
  },
];

export const researchMilestones: ResearchMilestone[] = [
  {
    id: "design",
    title: "Problem Discovery",
    body: "Collecting patterns from student support, multilingual learning, and family communication needs.",
    date: "Now",
    status: "ongoing",
  },
  {
    id: "mlrc",
    title: "Capstone Direction",
    body: "Exploring how family-facing and school-facing tools can reduce confusion around support plans and next steps.",
    date: "Summer 2026",
    status: "ongoing",
    href: siteResources.mlrcCapstonePdf,
    linkLabel: "Open research PDF",
  },
  {
    id: "pilot",
    title: "Pilot Readiness",
    body: "Shaping the product into something schools can test with real teams, real workflows, and real families.",
    date: "Ongoing",
    status: "ongoing",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    heading: "EXPLORE",
    links: [
      { label: "Overview", href: "#lab" },
      { label: "Approach", href: "#mission" },
      { label: "Features", href: "#tools" },
      { label: "Research", href: "#research" },
      { label: "Fit", href: "#integration" },
    ],
  },
  {
    heading: "CONNECT",
    links: [
      { label: "Email", href: siteContact.email },
      { label: "LinkedIn", href: siteContact.linkedin },
      { label: "GitHub", href: siteContact.github },
    ],
  },
  {
    heading: "RESOURCES",
    links: [
      { label: "About", href: "#mission" },
      { label: "Research PDF", href: siteResources.mlrcCapstonePdf, external: true },
      { label: "Project Notes", href: siteResources.presentationPdf, external: true },
      { label: "GitHub Repo", href: siteContact.github, external: true },
    ],
  },
];

export const footerSocialLinks: FooterSocialLink[] = [
  { id: "linkedin", label: "LinkedIn", href: siteContact.linkedin, external: true },
  { id: "email", label: "Email", href: siteContact.email },
  { id: "github", label: "GitHub", href: siteContact.github, external: true },
];

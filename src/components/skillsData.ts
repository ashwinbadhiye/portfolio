import { conceptIcon } from "./effects/conceptIcons";

export type Skill = {
  label: string;
  /** short label used in the outer rings */
  short: string;
  src: string;
};

export type SkillCategory = {
  name: string;
  color: string;
  skills: Skill[];
};

const si = (slug: string, color = "ffffff") =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

// Category accent colors (kept within the site's teal-forward palette range).
const C = {
  backend: "#5eead4", // teal
  frontend: "#38bdf8", // sky
  tools: "#f59e0b", // amber
  ai: "#a78bfa", // violet
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Backend",
    color: C.backend,
    skills: [
      { label: "Node.js", short: "Node.js", src: si("nodedotjs", "5FA04E") },
      { label: "Python", short: "Python", src: si("python", "3776AB") },
      { label: "FastAPI", short: "FastAPI", src: si("fastapi", "009688") },
      { label: "PostgreSQL", short: "PostgreSQL", src: si("postgresql", "4169E1") },
      { label: "MySQL", short: "MySQL", src: si("mysql", "4479A1") },
      { label: "Relational Databases (SQL)", short: "SQL", src: conceptIcon("vector", C.backend) },
    ],
  },
  {
    name: "Frontend",
    color: C.frontend,
    skills: [
      { label: "React", short: "React", src: si("react", "61DAFB") },
      { label: "Next.js", short: "Next.js", src: si("nextdotjs", "ffffff") },
      { label: "React Native", short: "React Native", src: si("react", "61DAFB") },
      { label: "Tailwind CSS", short: "Tailwind", src: si("tailwindcss", "06B6D4") },
    ],
  },
  {
    name: "Tools",
    color: C.tools,
    skills: [
      { label: "Git", short: "Git", src: si("git", "F05032") },
      { label: "GitHub Actions (CI/CD)", short: "GitHub Actions", src: si("githubactions", "2088FF") },
      { label: "Firebase", short: "Firebase", src: si("firebase", "FFCA28") },
      { label: "Netlify", short: "Netlify", src: si("netlify", "00C7B7") },
      { label: "Figma", short: "Figma", src: si("figma", "F24E1E") },
      { label: "WordPress", short: "WordPress", src: si("wordpress", "ffffff") },
      { label: "WooCommerce", short: "WooCommerce", src: si("woocommerce", "96588A") },
    ],
  },
  {
    name: "AI",
    color: C.ai,
    skills: [
      { label: "AI-Assisted Development", short: "AI-Assisted Dev", src: conceptIcon("sparkle", C.ai) },
      { label: "AI System Design", short: "AI System Design", src: conceptIcon("system", C.ai) },
      { label: "Multi-Agent Architecture", short: "Multi-Agent", src: conceptIcon("agents", C.ai) },
      { label: "Prompt Engineering", short: "Prompt Eng.", src: conceptIcon("prompt", C.ai) },
      { label: "LLM / OpenAI Integration", short: "LLM / OpenAI", src: conceptIcon("llm", C.ai) },
      { label: "Retrieval-Augmented Generation (RAG)", short: "RAG", src: conceptIcon("rag", C.ai) },
      { label: "Document Grounding", short: "Doc Grounding", src: conceptIcon("doc", C.ai) },
      { label: "Vector Databases", short: "Vector DBs", src: conceptIcon("vector", C.ai) },
      { label: "AI Agents & Automation", short: "AI Agents", src: conceptIcon("automation", C.ai) },
    ],
  },
];

// flat list of all skills for the icon sphere
export const allSkills: Skill[] = skillCategories.flatMap((c) => c.skills);

import { projects as sourceProjects, type ProjectAdditionalSections } from "../lib/projects";
import type { PortfolioProject, ProjectCategory, ProjectSection } from "@/types/portfolio";

const categories: Record<string, ProjectCategory[]> = {
  "sobat-bumi": ["Full Stack", "Civic Tech"],
  simkes: ["Full Stack", "Healthcare"],
  rentease: ["Full Stack", "Marketplace"],
  "warga-usaha": ["Full Stack", "Marketplace"],
  "dental-clinic": ["Full Stack", "Healthcare"],
  "persona-q": ["Full Stack", "Healthcare"],
  anemi: ["Full Stack", "E-Commerce"],
  "lms-impact-academy": ["Full Stack", "Education"],
  "mijel-apps": ["Backend", "Mobile", "Civic Tech"],
  "webcare-portal": ["Backend"],
  "e-klinik-pens": ["Backend", "Mobile", "Healthcare"],
  "rent-trip": ["Full Stack", "Marketplace"],
  "online-course": ["Full Stack", "Education"],
  "syntra-ai": ["AI", "Backend", "Full Stack"],
  shayda: ["Full Stack", "E-Commerce"],
};

const priorities: Record<string, number> = {
  "syntra-ai": 1,
  "dental-clinic": 2,
  "lms-impact-academy": 3,
  "sobat-bumi": 4,
  "warga-usaha": 5,
  shayda: 6,
};

function validUrl(url?: string) {
  return url && !/^https:\/\/github\.com\/?$/.test(url) ? url : undefined;
}

function extension(path: string) {
  return path.toLowerCase().endsWith(".jpg") || path.toLowerCase().endsWith(".jpeg") ? "jpg" : "png";
}

function cleanSection(section?: { title: string; description?: string; items?: string[] }): ProjectSection | undefined {
  const description = section?.description && !section.description.toLowerCase().includes("not specified") ? section.description : undefined;
  const items = section?.items?.filter(item => item && !item.toLowerCase().includes("not specified"));
  return section && (description || items?.length) ? { title: section.title, description, items } : undefined;
}

function capabilitySections(sections?: ProjectAdditionalSections) {
  if (!sections) return [];
  return Object.entries(sections)
    .filter(([key]) => !["problem", "goals", "impact", "technologyStack", "systemArchitecture"].includes(key))
    .map(([, value]) => cleanSection(value))
    .filter((section): section is ProjectSection => Boolean(section));
}

export const projects: PortfolioProject[] = sourceProjects.map(project => {
  const coverExtension = extension(project.thumbnail);
  return {
    slug: project.slug,
    title: project.title.trim(),
    shortDescription: project.description,
    overview: project.fullDescription,
    categories: categories[project.slug] ?? ["Full Stack"],
    featured: Boolean(priorities[project.slug]),
    priority: priorities[project.slug] ?? 99,
    technologies: [...new Set(project.technologies)].slice(0, 12),
    thumbnail: `/projects/${project.slug}/cover.${coverExtension}`,
    images: project.images.map((image, index) => ({ ...image, url: `/projects/${project.slug}/image-${String(index + 1).padStart(2, "0")}.${extension(image.url)}` })),
    problem: cleanSection(project.additionalSections?.problem),
    goals: cleanSection(project.additionalSections?.goals),
    features: project.features.length ? { title: "Key Features", items: project.features } : undefined,
    impact: cleanSection(project.additionalSections?.impact),
    architecture: cleanSection(project.additionalSections?.systemArchitecture),
    capabilityAreas: capabilitySections(project.additionalSections),
    liveUrl: validUrl(project.demoUrl),
    githubUrl: validUrl(project.githubUrl),
    videoUrl: validUrl(project.videoUrl),
  };
});

export const featuredProjects = projects.filter(project => project.featured).sort((a, b) => a.priority - b.priority);
export const projectCategories = [...new Set(projects.flatMap(project => project.categories))];

export function getProjectBySlug(slug: string) {
  return projects.find(project => project.slug === slug);
}

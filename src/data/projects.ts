import { projects as sourceProjects, type ProjectAdditionalSections } from "../lib/projects";
import type { Locale } from "@/lib/i18n";
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

function cleanSection(section: { title: string; titleId?: string; description?: string; descriptionId?: string; items?: string[]; itemsId?: string[] } | undefined, locale: Locale): ProjectSection | undefined {
  const title = locale === "id" ? section?.titleId ?? section?.title : section?.title;
  const descriptionValue = locale === "id" ? section?.descriptionId ?? section?.description : section?.description;
  const itemsValue = locale === "id" ? section?.itemsId ?? section?.items : section?.items;
  const description = descriptionValue && !descriptionValue.toLowerCase().includes("not specified") ? descriptionValue : undefined;
  const items = itemsValue?.filter(item => item && !item.toLowerCase().includes("not specified"));
  return section && (description || items?.length) ? { title: title ?? "", description, items } : undefined;
}

function capabilitySections(sections: ProjectAdditionalSections | undefined, locale: Locale) {
  if (!sections) return [];
  return Object.entries(sections)
    .filter(([key]) => !["problem", "goals", "impact", "technologyStack", "systemArchitecture"].includes(key))
    .map(([, value]) => cleanSection(value, locale))
    .filter((section): section is ProjectSection => Boolean(section));
}

function mapProject(project: (typeof sourceProjects)[number], locale: Locale): PortfolioProject {
  const coverExtension = extension(project.thumbnail);
  const title = locale === "id" ? project.titleId ?? project.title : project.title;
  const shortDescription = locale === "id" ? project.descriptionId ?? project.description : project.description;
  const overview = locale === "id" ? project.fullDescriptionId ?? project.fullDescription : project.fullDescription;
  return {
    slug: project.slug,
    title: title.trim(),
    shortDescription,
    overview,
    categories: categories[project.slug] ?? ["Full Stack"],
    featured: Boolean(priorities[project.slug]),
    priority: priorities[project.slug] ?? 99,
    technologies: [...new Set(project.technologies)].slice(0, 12),
    thumbnail: `/projects/${project.slug}/cover.${coverExtension}`,
    images: project.images.map((image, index) => ({ ...image, alt: locale === "id" ? `Tampilan antarmuka ${title}` : image.alt, url: `/projects/${project.slug}/image-${String(index + 1).padStart(2, "0")}.${extension(image.url)}` })),
    problem: cleanSection(project.additionalSections?.problem, locale),
    goals: cleanSection(project.additionalSections?.goals, locale),
    features: project.features.length ? { title: locale === "id" ? "Fitur Utama" : "Key Features", items: locale === "id" ? project.featuresId ?? project.features : project.features } : undefined,
    impact: cleanSection(project.additionalSections?.impact, locale),
    architecture: cleanSection(project.additionalSections?.systemArchitecture, locale),
    capabilityAreas: capabilitySections(project.additionalSections, locale),
    liveUrl: validUrl(project.demoUrl),
    githubUrl: validUrl(project.githubUrl),
    videoUrl: validUrl(project.videoUrl),
  };
}

export function getProjects(locale: Locale) {
  return sourceProjects.map((project) => mapProject(project, locale));
}

export const projects: PortfolioProject[] = getProjects("en");

export const featuredProjects = projects.filter(project => project.featured).sort((a, b) => a.priority - b.priority);
export const projectCategories = [...new Set(projects.flatMap(project => project.categories))];

export function getFeaturedProjects(locale: Locale) {
  return getProjects(locale).filter(project => project.featured).sort((a, b) => a.priority - b.priority);
}

export function getProjectBySlug(slug: string, locale: Locale = "en") {
  return getProjects(locale).find(project => project.slug === slug);
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCarousel } from "@/components/projects/project-carousel";
import { ProjectNavigation } from "@/components/projects/project-navigation";
import { ProjectSection, TechnologySection } from "@/components/projects/project-section";
import { buttonStyles } from "@/components/ui/button";
import { ArrowRightIcon, ExternalLinkIcon, GitHubIcon } from "@/components/ui/icons";
import { Tag } from "@/components/ui/tag";
import { getProjectBySlug, projects } from "@/data/projects";
import type { ProjectSection as ProjectSectionData } from "@/types/portfolio";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug((await params).slug);
  if (!project) return {};
  return { title: project.title, description: project.shortDescription, openGraph: { title: project.title, description: project.shortDescription } };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug((await params).slug);
  if (!project) notFound();
  const projectIndex = projects.findIndex(item => item.slug === project.slug);
  const sections: ProjectSectionData[] = [project.problem, project.goals, project.features, project.architecture, ...(project.capabilityAreas ?? []), project.impact].filter((section): section is ProjectSectionData => Boolean(section));
  const carouselImages = project.images.length ? project.images : [{ url: project.thumbnail, alt: `${project.title} interface preview` }];

  return <main><article><header className="mx-auto w-full max-w-6xl px-4 pb-12 pt-16 sm:pt-20"><nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-[#777]"><Link className="transition-colors hover:text-white" href="/projects">Projects</Link><span>/</span><span className="truncate text-[#b8b8b8]">{project.title}</span></nav><div className="flex flex-wrap gap-2">{project.categories.map(category => <Tag key={category}>{category}</Tag>)}</div><h1 className="mt-6 max-w-4xl bg-linear-to-b from-[#dff2fe] to-white bg-clip-text text-4xl font-semibold tracking-[-.045em] text-transparent sm:text-5xl md:text-6xl">{project.title}</h1><p className="mt-5 max-w-3xl text-base leading-relaxed text-[#a8a8a8] sm:text-lg">{project.shortDescription}</p><div className="mt-7 flex flex-wrap gap-3">{project.liveUrl && <a className={buttonStyles("primary", "h-10")} href={project.liveUrl} target="_blank" rel="noreferrer">Live Demo <ExternalLinkIcon className="size-4" /></a>}{project.githubUrl && <a className={buttonStyles("outline", "h-10")} href={project.githubUrl} target="_blank" rel="noreferrer"><GitHubIcon className="size-4" /> Source Code</a>}{project.videoUrl && <a className={buttonStyles("outline", "h-10")} href={project.videoUrl} target="_blank" rel="noreferrer">Preview Video <ArrowRightIcon className="size-4" /></a>}</div></header><ProjectCarousel projectTitle={project.title} images={carouselImages} /><div className="mx-auto w-full max-w-6xl px-4 pt-12"><section className="grid gap-5 py-10 md:grid-cols-[220px_1fr] md:py-14"><h2 className="text-xl font-semibold tracking-tight">Overview</h2><p className="max-w-3xl text-sm leading-7 text-[#b0b0b0] sm:text-base">{project.overview}</p></section><TechnologySection technologies={project.technologies} />{sections.map(section => <ProjectSection section={section} key={section.title} />)}<ProjectNavigation previous={projects[projectIndex - 1]} next={projects[projectIndex + 1]} /></div></article></main>;
}

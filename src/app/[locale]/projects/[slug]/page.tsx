import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCarousel } from "@/components/projects/project-carousel";
import { ProjectNavigation } from "@/components/projects/project-navigation";
import { ProjectSection, TechnologySection } from "@/components/projects/project-section";
import { buttonStyles } from "@/components/ui/button";
import { ArrowRightIcon, ExternalLinkIcon, GitHubIcon } from "@/components/ui/icons";
import { Tag } from "@/components/ui/tag";
import { getProjectBySlug, getProjects } from "@/data/projects";
import { getCopy, isLocale, categoryLabel, locales, type Locale } from "@/lib/i18n";
import type { ProjectSection as ProjectSectionData } from "@/types/portfolio";

type ProjectPageProps = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => getProjects(locale).map((project) => ({ locale, slug: project.slug })));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) return {};
  const project = getProjectBySlug(slug, rawLocale);
  if (!project) return {};
  return { title: project.title, description: project.shortDescription, openGraph: { title: project.title, description: project.shortDescription } };
}

export default async function LocaleProjectDetailPage({ params }: ProjectPageProps) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const text = getCopy(locale);
  const project = getProjectBySlug(slug, locale);
  if (!project) notFound();
  const projects = getProjects(locale);
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const sections: ProjectSectionData[] = [project.problem, project.goals, project.features, project.architecture, ...(project.capabilityAreas ?? []), project.impact].filter((section): section is ProjectSectionData => Boolean(section));
  const carouselImages = project.images.length ? project.images : [{ url: project.thumbnail, alt: text.projects.interface(project.title) }];

  return (
    <main>
      <article>
        <header className="mx-auto w-full max-w-6xl px-4 pb-12 pt-16 sm:pt-20">
          <nav aria-label={locale === "id" ? "Jejak navigasi" : "Breadcrumb"} className="mb-8 flex items-center gap-2 text-sm text-[#777]">
            <Link className="transition-colors hover:text-white" href={`/${locale}/projects`}>{text.projects.breadcrumb}</Link>
            <span>/</span>
            <span className="truncate text-[#b8b8b8]">{project.title}</span>
          </nav>
          <div className="flex flex-wrap gap-2">{project.categories.map((category) => <Tag key={category}>{categoryLabel(locale, category)}</Tag>)}</div>
          <h1 className="mt-6 max-w-4xl bg-linear-to-b from-[#dff2fe] to-white bg-clip-text text-4xl font-semibold tracking-[-.045em] text-transparent sm:text-5xl md:text-6xl">{project.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#a8a8a8] sm:text-lg">{project.shortDescription}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {project.liveUrl && <a className={buttonStyles("primary", "h-10")} href={project.liveUrl} target="_blank" rel="noreferrer">{text.projects.liveDemoButton} <ExternalLinkIcon className="size-4" /></a>}
            {project.githubUrl && <a className={buttonStyles("outline", "h-10")} href={project.githubUrl} target="_blank" rel="noreferrer"><GitHubIcon className="size-4" /> {text.projects.sourceCode}</a>}
            {project.videoUrl && <a className={buttonStyles("outline", "h-10")} href={project.videoUrl} target="_blank" rel="noreferrer">{text.projects.previewVideo} <ArrowRightIcon className="size-4" /></a>}
          </div>
        </header>
        <ProjectCarousel projectTitle={project.title} images={carouselImages} locale={locale} />
        <div className="mx-auto w-full max-w-6xl px-4 pt-12">
          <section className="grid gap-5 py-10 md:grid-cols-[220px_1fr] md:py-14"><h2 className="text-xl font-semibold tracking-tight">{text.projects.overview}</h2><p className="max-w-3xl text-sm leading-7 text-[#b0b0b0] sm:text-base">{project.overview}</p></section>
          <TechnologySection technologies={project.technologies} locale={locale} />
          {sections.map((section) => <ProjectSection section={section} key={section.title} />)}
          <ProjectNavigation previous={projects[projectIndex - 1]} next={projects[projectIndex + 1]} locale={locale} />
        </div>
      </article>
    </main>
  );
}

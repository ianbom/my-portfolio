import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectExplorer } from "@/components/projects/project-explorer";
import { SectionHeading } from "@/components/ui/section-heading";
import { getProjects } from "@/data/projects";
import { getCopy, isLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const text = getCopy(locale);
  return { title: text.nav.projects, description: text.projects.archiveDescription };
}

export default async function LocaleProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const text = getCopy(locale);

  return (
    <main>
      <section className="mx-auto w-full max-w-7xl px-4 pb-24 pt-20 sm:px-6 sm:pt-24">
        <SectionHeading eyebrow={text.projects.archive} title={text.projects.archiveTitle} description={text.projects.archiveDescription} align="left" className="mb-12 max-w-3xl" />
        <ProjectExplorer projects={getProjects(locale)} locale={locale} />
      </section>
    </main>
  );
}

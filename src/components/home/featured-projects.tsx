import Link from "next/link";
import { ProjectCard } from "@/components/projects/project-card";
import { buttonStyles } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getFeaturedProjects } from "@/data/projects";
import { getCopy, localePath, type Locale } from "@/lib/i18n";

export function FeaturedProjects({ locale }: { locale: Locale }) {
  const text = getCopy(locale);
  const featuredProjects = getFeaturedProjects(locale);
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow={text.home.selectedWork}
          title={text.home.featuredProjects}
          description={text.home.featuredDescription}
          className="mb-14"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard project={project} locale={locale} key={project.slug} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link className={buttonStyles("outline", "h-10")} href={localePath(locale, "/projects")}>
            {text.home.viewAllProjects} <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

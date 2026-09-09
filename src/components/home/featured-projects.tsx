import Link from "next/link";
import { ProjectCard } from "@/components/projects/project-card";
import { buttonStyles } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          description="A selection of full-stack, backend, and AI systems built around real workflows, integrations, and operational requirements."
          className="mb-14"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link className={buttonStyles("outline", "h-10")} href="/projects">
            View All Projects <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

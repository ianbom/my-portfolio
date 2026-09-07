import type { Metadata } from "next";
import { ProjectExplorer } from "@/components/projects/project-explorer";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projects", description: "Explore full-stack, backend, mobile, healthcare, education, commerce, civic technology, and AI projects by Ian Ale Hansyah." };

export default function ProjectsPage() {
  return <main><section className="mx-auto w-full max-w-7xl px-4 pb-24 pt-20 sm:px-6 sm:pt-24"><SectionHeading eyebrow="Project Archive" title="Engineering work across web, backend, and AI" description="Explore 15 application implementations shaped around operational workflows, domain requirements, integrations, and maintainable delivery." align="left" className="mb-12 max-w-3xl" /><ProjectExplorer projects={projects} /></section></main>;
}

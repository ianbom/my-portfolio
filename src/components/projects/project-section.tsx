import { Tag } from "@/components/ui/tag";
import type { ProjectSection as ProjectSectionData } from "@/types/portfolio";

export function ProjectSection({ section }: { section: ProjectSectionData }) {
  return <section className="grid gap-5 border-t border-white/10 py-10 md:grid-cols-[220px_1fr] md:py-14"><h2 className="text-xl font-semibold tracking-tight">{section.title}</h2><div className="max-w-3xl text-sm leading-7 text-[#b0b0b0] sm:text-base">{section.description && <p>{section.description}</p>}{section.items?.length && <ul className={section.description ? "mt-6 space-y-3" : "space-y-3"}>{section.items.map(item => <li className="flex gap-3" key={item}><span className="mt-3 size-1 shrink-0 rounded-full bg-[#8db7dc]" /><span>{item}</span></li>)}</ul>}</div></section>;
}

export function TechnologySection({ technologies }: { technologies: string[] }) {
  return <section className="grid gap-5 border-t border-white/10 py-10 md:grid-cols-[220px_1fr] md:py-14"><h2 className="text-xl font-semibold tracking-tight">Technology Stack</h2><div className="flex max-w-3xl flex-wrap gap-2">{technologies.map(technology => <Tag className="px-3 py-1.5" key={technology}>{technology}</Tag>)}</div></section>;
}

import { expertise } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";

export function ExpertiseSection() {
  return <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6"><Reveal><SectionHeading eyebrow="Capabilities" title="Engineering Expertise" description="Practical capability across the complete application lifecycle, with deeper specialization in backend systems and AI-enhanced products." className="mb-14" /><div className="grid gap-5 md:grid-cols-2">{expertise.map(item => <article className="rounded-2xl border border-white/10 bg-[#141414] p-6 sm:p-8" key={item.title}><h3 className="text-xl font-semibold tracking-tight">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-[#a8a8a8]">{item.description}</p><div className="mt-6 flex flex-wrap gap-2">{item.technologies.map(technology => <Tag key={technology}>{technology}</Tag>)}</div></article>)}</div></Reveal></section>;
}

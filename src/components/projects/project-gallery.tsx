import Image from "next/image";
import type { PortfolioProject } from "@/types/portfolio";

export function ProjectGallery({ project }: { project: PortfolioProject }) {
  if (!project.images.length) return null;
  return <section className="border-t border-white/10 py-10 md:py-14"><h2 className="mb-7 text-xl font-semibold tracking-tight">Project Gallery</h2><div className="grid gap-5 md:grid-cols-2">{project.images.map((image, index) => <figure className={`overflow-hidden rounded-2xl border border-white/10 bg-[#141414] ${index === 0 ? "md:col-span-2" : ""}`} key={image.url}><div className={`relative overflow-hidden bg-[#0b0b0b] ${index === 0 ? "aspect-[16/9]" : "aspect-[16/10]"}`}><Image src={image.url} alt={image.alt} fill sizes={index === 0 ? "(max-width: 1152px) 100vw, 1152px" : "(max-width: 768px) 100vw, 576px"} className="object-cover object-top" /></div>{image.caption && <figcaption className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-[#a8a8a8]">{image.caption}</figcaption>}</figure>)}</div></section>;
}

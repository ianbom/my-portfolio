import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ExternalLinkIcon } from "@/components/ui/icons";
import { Tag } from "@/components/ui/tag";
import type { PortfolioProject } from "@/types/portfolio";
import { categoryLabel, getCopy, localePath, type Locale } from "@/lib/i18n";

export function ProjectCard({ project, locale }: { project: PortfolioProject; locale: Locale }) {
  const text = getCopy(locale);
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#141414] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/30">
      <Link
        className="block overflow-hidden border-b border-white/10 bg-[#0b0b0b]"
        href={localePath(locale, `/projects/${project.slug}`)}
      >
        <div className="relative aspect-[2.1/1] overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={text.projects.interface(project.title)}
            fill
            priority={project.priority <= 2}
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 560px"
            className="object-contain transition-transform duration-500 group-hover:scale-[1.025]"
          />
        </div>
      </Link>
      <div className="flex flex-col gap-5 p-5 sm:p-6">
        <div className="flex flex-wrap gap-2">
          {project.categories.map((category) => (
            <Tag key={category}>{categoryLabel(locale, category)}</Tag>
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#a8a8a8]">
            {project.shortDescription}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((technology) => (
            <span className="text-xs text-[#8c8c8c]" key={technology}>
              {technology}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <Link
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#8db7dc]"
            href={localePath(locale, `/projects/${project.slug}`)}
          >
            {text.projects.view} <ArrowRightIcon className="size-4" />
          </Link>
          {project.liveUrl && (
            <a
              aria-label={text.projects.liveDemo(project.title)}
              className="flex size-8 items-center justify-center rounded-md border border-white/10 text-[#a8a8a8] transition-colors hover:bg-white/5 hover:text-white"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLinkIcon className="size-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

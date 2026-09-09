import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";
import type { PortfolioProject } from "@/types/portfolio";

export function ProjectNavigation({
  previous,
  next,
}: {
  previous?: PortfolioProject;
  next?: PortfolioProject;
}) {
  return (
    <nav
      aria-label="Project navigation"
      className="grid gap-4 border-t border-white/10 py-12 sm:grid-cols-2"
    >
      {previous ? (
        <Link
          className="group rounded-2xl border border-white/10 bg-[#141414] p-5 transition-colors hover:border-white/20"
          href={`/projects/${previous.slug}`}
        >
          <span className="text-xs uppercase tracking-[.14em] text-[#777]">
            Previous Project
          </span>
          <span className="mt-3 flex items-center justify-between font-medium">
            {previous.title}
            <ArrowRightIcon className="size-4 rotate-180 transition-transform group-hover:-translate-x-1" />
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link
          className="group rounded-2xl border border-white/10 bg-[#141414] p-5 transition-colors hover:border-white/20"
          href={`/projects/${next.slug}`}
        >
          <span className="text-xs uppercase tracking-[.14em] text-[#777]">
            Next Project
          </span>
          <span className="mt-3 flex items-center justify-between font-medium">
            {next.title}
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      )}
    </nav>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import { ProjectCard } from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "@/components/ui/icons";
import { projectCategories } from "@/data/projects";
import type { PortfolioProject, ProjectCategory } from "@/types/portfolio";
import { categoryLabel, getCopy, type Locale } from "@/lib/i18n";

type SortOption = "featured" | "name";

export function ProjectExplorer({
  projects,
  locale,
}: {
  projects: PortfolioProject[];
  locale: Locale;
}) {
  const text = getCopy(locale);
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"All" | ProjectCategory>("All");
  const [sort, setSort] = useState<SortOption>("featured");

  useEffect(() => {
    const timeout = window.setTimeout(
      () => setQuery(input.trim().toLowerCase()),
      300,
    );
    return () => window.clearTimeout(timeout);
  }, [input]);

  const visibleProjects = useMemo(
    () =>
      projects
        .filter(
          (project) =>
            category === "All" || project.categories.includes(category),
        )
        .filter(
          (project) =>
            !query ||
            [
              project.title,
              project.shortDescription,
              project.overview,
              ...project.categories,
              ...project.technologies,
            ]
              .join(" ")
              .toLowerCase()
              .includes(query),
        )
        .sort((first, second) =>
          sort === "name"
            ? first.title.localeCompare(second.title)
            : first.priority - second.priority ||
              first.title.localeCompare(second.title),
        ),
    [category, projects, query, sort],
  );

  function reset() {
    setInput("");
    setQuery("");
    setCategory("All");
    setSort("featured");
  }

  return (
    <div>
      <div className="rounded-2xl border border-white/10 bg-[#141414] p-4 sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative block lg:max-w-md lg:flex-1">
            <span className="sr-only">{text.projects.searchLabel}</span>
            <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#777]" />
            <input
              className="h-11 w-full rounded-lg border border-white/10 bg-[#0b0b0b] pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-[#666] focus:border-white/25"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={text.projects.searchPlaceholder}
            />
          </label>
          <label className="flex items-center gap-3 text-sm text-[#a8a8a8]">
            {text.projects.sort}
            <select
              aria-label={text.projects.sort}
              className="h-11 rounded-lg border border-white/10 bg-[#0b0b0b] px-3 text-sm text-white outline-none focus:border-white/25"
              value={sort}
              onChange={(event) => setSort(event.target.value as SortOption)}
            >
              <option value="featured">{text.projects.featured}</option>
              <option value="name">{text.projects.name}</option>
            </select>
          </label>
        </div>
        <div
          aria-label={locale === "id" ? "Kategori proyek" : "Project categories"}
          className="mt-4 flex gap-2 overflow-x-auto pb-1"
        >
          {(["All", ...projectCategories] as const).map((item) => (
            <button
              className={`shrink-0 rounded-full border px-3 py-1.5 text-xs transition-colors ${category === item ? "border-white/30 bg-white text-[#141414]" : "border-white/10 bg-white/[.03] text-[#a8a8a8] hover:border-white/20 hover:text-white"}`}
              key={item}
              onClick={() => setCategory(item)}
              type="button"
            >
              {item === "All" ? text.projects.all : categoryLabel(locale, item)}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between text-sm text-[#a8a8a8]">
        <p>
          <span className="font-medium text-white">
            {visibleProjects.length}
          </span>{" "}
          {visibleProjects.length === 1 ? text.projects.project : text.projects.projects}
        </p>
        {(input || category !== "All" || sort !== "featured") && (
          <button
            className="transition-colors hover:text-white"
            onClick={reset}
            type="button"
          >
            {text.projects.reset}
          </button>
        )}
      </div>
      {visibleProjects.length ? (
        <div className="mt-5 grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard project={project} locale={locale} key={project.slug} />
          ))}
        </div>
      ) : (
        <div className="mt-5 flex min-h-72 flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-[#101010] px-6 text-center">
          <h2 className="text-xl font-semibold">{text.projects.none}</h2>
          <p className="mt-2 text-sm text-[#a8a8a8]">
            {text.projects.tryAgain}
          </p>
          <Button className="mt-6" variant="outline" onClick={reset}>
            {text.projects.reset}
          </Button>
        </div>
      )}
    </div>
  );
}

import {
  siCelery,
  siCpanel,
  siDocker,
  siExpress,
  siFastapi,
  siFlutter,
  siInertia,
  siLangchain,
  siLaravel,
  siMariadb,
  siMinio,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siOllama,
  siPhp,
  siPostgresql,
  siPython,
  siQdrant,
  siReact,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";

const brandIcons: Record<string, SimpleIcon> = {
  React: siReact,
  "Next.js": siNextdotjs,
  TypeScript: siTypescript,
  "Tailwind CSS": siTailwindcss,
  "Inertia.js": siInertia,
  Flutter: siFlutter,
  Laravel: siLaravel,
  PHP: siPhp,
  FastAPI: siFastapi,
  Python: siPython,
  "Node.js": siNodedotjs,
  "Express.js": siExpress,
  MySQL: siMysql,
  MariaDB: siMariadb,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  Qdrant: siQdrant,
  LangChain: siLangchain,
  Ollama: siOllama,
  Docker: siDocker,
  MinIO: siMinio,
  cPanel: siCpanel,
  Celery: siCelery,
};

export function TechnologyLogo({ name }: { name: string }) {
  const icon = brandIcons[name];
  const testId = `technology-logo-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  if (!icon) return <div className="flex size-14 items-center justify-center rounded-xl px-1 text-center text-xs font-medium leading-tight text-[#d0d0d0] transition-transform duration-300 hover:-translate-y-1 sm:size-16" data-testid={testId}>{name}</div>;

  return <div aria-label={name} className="group relative flex size-14 items-center justify-center rounded-xl outline-none transition-transform duration-300 hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#8db7dc] sm:size-16" data-testid={testId} role="img" tabIndex={0}>
    <svg aria-hidden="true" className="size-9 transition-all duration-300 group-hover:scale-110 group-focus-visible:scale-110 sm:size-10" fill={`#${icon.hex}`} viewBox="0 0 24 24"><path d={icon.path} /></svg>
    <span aria-hidden="true" className="pointer-events-none absolute -bottom-7 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-[#1a1a1a] px-2 py-1 text-[11px] font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100" data-testid={`${testId}-tooltip`}>{name}</span>
  </div>;
}

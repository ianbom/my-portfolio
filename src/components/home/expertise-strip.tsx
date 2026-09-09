import { skillGroups } from "@/data/profile";
import { getCopy, type Locale } from "@/lib/i18n";

export function ExpertiseStrip({ locale }: { locale: Locale }) {
  const text = getCopy(locale);
  const skills = [
    skillGroups[0].skills[0],
    skillGroups[1].skills[0],
    "Next.js",
    "TypeScript",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "RAG",
  ];
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-4 py-20 text-center">
      <p className="text-sm font-medium text-[#a8a8a8]">
        {text.home.strip}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
        {skills.map((skill) => (
          <span
            className="text-sm font-semibold tracking-tight text-[#d0d0d0] sm:text-base"
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

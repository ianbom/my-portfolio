import { getProfileContent } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { getCopy, type Locale } from "@/lib/i18n";

export function ExperienceSection({ locale }: { locale: Locale }) {
  const text = getCopy(locale);
  const { experiences } = getProfileContent(locale);
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-24">
      <Reveal>
        <SectionHeading
          eyebrow={text.home.experience}
          title={text.home.professionalExperience}
          description={text.home.experienceDescription}
          className="mb-14"
        />
        <div className="space-y-5">
          {experiences.map((experience, index) => (
            <article
              className="grid gap-5 rounded-2xl border border-white/10 bg-[#141414] p-6 md:grid-cols-[220px_1fr] md:p-8"
              key={`${experience.company}-${experience.period}`}
            >
              <div>
                <span className="text-xs font-medium text-[#8db7dc]">
                  0{index + 1}
                </span>
                <p className="mt-2 text-sm text-[#a8a8a8]">
                  {experience.period}
                </p>
                <p className="mt-1 text-xs text-[#777]">
                  {experience.location}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{experience.role}</h3>
                <p className="mt-1 text-sm font-medium text-[#d0d0d0]">
                  {experience.company}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#a8a8a8]">
                  {experience.summary}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-[#b8b8b8]">
                  {experience.highlights.map((highlight) => (
                    <li className="flex gap-3" key={highlight}>
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[#8db7dc]" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <Tag key={technology}>{technology}</Tag>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

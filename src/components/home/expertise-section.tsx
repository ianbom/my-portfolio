import { getProfileContent } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { getCopy, type Locale } from "@/lib/i18n";

export function ExpertiseSection({ locale }: { locale: Locale }) {
  const text = getCopy(locale);
  const { expertise } = getProfileContent(locale);
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow={text.home.capabilities}
          title={text.home.expertise}
          description={text.home.expertiseDescription}
          className="mb-14"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {expertise.map((item) => (
            <article
              className="rounded-2xl border border-white/10 bg-[#141414] p-6 sm:p-8"
              key={item.title}
            >
              <h3 className="text-xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#a8a8a8]">
                {item.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.technologies.map((technology) => (
                  <Tag key={technology}>{technology}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

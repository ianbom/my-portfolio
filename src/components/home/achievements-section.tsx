import { getProfileContent } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExternalLinkIcon } from "@/components/ui/icons";
import { getCopy, type Locale } from "@/lib/i18n";

export function AchievementsSection({ locale }: { locale: Locale }) {
  const text = getCopy(locale);
  const { achievements } = getProfileContent(locale);
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow={text.home.recognition}
          title={text.home.achievements}
          description={text.home.achievementsDescription}
          className="mb-14"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement) => (
            <article
              className="flex min-h-64 flex-col rounded-2xl border border-white/10 bg-[#141414] p-6"
              key={achievement.competition}
            >
              <span className="text-sm font-semibold text-[#8db7dc]">
                {achievement.placement}
              </span>
              <h3 className="mt-5 text-lg font-semibold leading-snug">
                {achievement.competition}
              </h3>
              <div className="mt-auto flex items-end justify-between gap-4 pt-8">
                <div className="text-sm text-[#a8a8a8]">
                  <p>{achievement.organizer}</p>
                  <p className="mt-1">{achievement.year}</p>
                </div>
                <a
                  aria-label={text.home.openCertificate(achievement.competition)}
                  className="inline-flex items-center gap-2 text-right text-sm font-medium transition-colors hover:text-[#8db7dc]"
                  href={achievement.certificateFile}
                  target="_blank"
                  rel="noreferrer"
                >
                  {locale === "id" ? "Buka Sertifikat" : "View Certificate"} <ExternalLinkIcon className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

import { achievements } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExternalLinkIcon } from "@/components/ui/icons";

export function AchievementsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Recognition"
          title="National Competition Achievements"
          description="Four national web-development placements earned across 2025 and 2026."
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
                  aria-label={`Open ${achievement.competition} certificate PDF`}
                  className="inline-flex items-center gap-2 text-right text-sm font-medium transition-colors hover:text-[#8db7dc]"
                  href={achievement.certificateFile}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate <ExternalLinkIcon className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

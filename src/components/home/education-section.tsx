import Image from "next/image";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getCopy, type Locale } from "@/lib/i18n";

export function EducationSection({ locale }: { locale: Locale }) {
  const text = getCopy(locale);
  const education = locale === "en" ? profile.education : { ...profile.education, degreeEnglish: "Sarjana Terapan Teknik Informatika", period: "Juli 2022 – Juli 2026" };
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-24">
      <Reveal>
        <SectionHeading
          eyebrow={text.home.education}
          title={text.home.academicBackground}
          className="mb-12"
        />
        <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#141414] p-6 sm:p-8">
          <div className="pointer-events-none absolute -left-20 top-1/2 size-56 -translate-y-1/2 rounded-full bg-[#0d5f9c]/20 blur-[80px]" />
          <div className="relative grid items-center gap-8 text-center sm:grid-cols-[180px_1fr] sm:text-left">
            <div className="mx-auto flex size-40 items-center justify-center rounded-2xl border border-white/10 bg-white p-5 sm:mx-0">
              <Image
                src="/education/pens-logo.png"
                alt="Politeknik Elektronika Negeri Surabaya logo"
                width={160}
                height={160}
                sizes="160px"
                className="h-auto w-full object-contain"
              />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[.16em] text-[#8db7dc]">
                {education.period}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                {education.degreeEnglish}
              </h3>
              <p className="mt-3 text-base text-[#d0d0d0] sm:text-lg">
                {education.institution}
              </p>
              <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 text-sm font-medium text-[#dff2fe]">
                {text.home.gpa} {education.gpa}
              </div>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}

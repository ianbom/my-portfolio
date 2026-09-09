import { getCertifications } from "@/data/certifications";
import { ExternalLinkIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getCopy, type Locale } from "@/lib/i18n";

export function CertificationsSection({ locale }: { locale: Locale }) {
  const text = getCopy(locale);
  const certifications = getCertifications(locale);
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow={locale === "id" ? "Pembelajaran" : "Learning"}
          title={text.home.certifications}
          description={text.home.certificationsDescription}
          className="mb-14"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification) => (
            <article
              className="group flex min-h-72 flex-col rounded-2xl border border-white/10 bg-[#141414] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/30"
              key={certification.pdfFile}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-md border border-white/10 bg-white/[.03] px-2 py-1 text-[10px] font-medium tracking-[.12em] text-[#8db7dc]">
                  PDF
                </span>
                {certification.score && (
                  <span className="text-sm font-semibold text-[#dff2fe]">
                    {locale === "id" ? "Skor" : "Score"} {certification.score}
                  </span>
                )}
              </div>
              <div className="mt-7">
                <p className="text-xs font-medium text-[#8db7dc]">
                  {certification.issuer}
                </p>
                <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight">
                  {certification.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#a8a8a8]">
                  {certification.description}
                </p>
              </div>
              <div className="mt-auto flex items-center justify-between gap-4 pt-7">
                <p className="text-xs text-[#777]">{certification.date}</p>
                <a
                  aria-label={`${locale === "id" ? "Buka sertifikat" : "Open"} ${certification.title} PDF`}
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#8db7dc]"
                  href={encodeURI(`/certificate/${certification.pdfFile}`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {locale === "id" ? "Buka Sertifikat" : "Open Certificate"} <ExternalLinkIcon className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

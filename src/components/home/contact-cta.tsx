import Link from "next/link";
import { buttonStyles } from "@/components/ui/button";
import { ArrowRightIcon, LinkedInIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { getCopy, localePath, type Locale } from "@/lib/i18n";

export function ContactCta({ locale }: { locale: Locale }) {
  const text = getCopy(locale);
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#141414] px-6 py-16 text-center sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute inset-x-1/4 -top-40 h-64 bg-[#0d5f9c]/30 blur-[90px]" />
        <div className="relative mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[.16em] text-[#8db7dc]">
            {text.home.contactEyebrow}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {text.home.contactTitle}
          </h2>
          <p className="mt-4 text-[#a8a8a8]">
            {text.home.contactDescription}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link className={buttonStyles("primary", "h-10")} href={localePath(locale, "/contact")}>
              {text.home.contactMe} <ArrowRightIcon className="size-4" />
            </Link>
            <a
              className={buttonStyles("outline", "h-10")}
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="size-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

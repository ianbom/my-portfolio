import Link from "next/link";
import { InstagramIcon, LinkedInIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { getCopy, localePath, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const text = getCopy(locale);
  return (
    <footer className="w-full border-t border-white/10 bg-[#141414]/50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
        <div className="space-y-8">
          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            <div>
              <Link
                className="mb-3 inline-block text-xl font-medium tracking-tight"
                href={localePath(locale)}
              >
                {profile.name}
              </Link>
              <p className="max-w-sm text-sm text-[#a8a8a8]">
                {text.footer.description}
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold">{text.footer.navigation}</h3>
              <div className="flex flex-col gap-2 text-sm text-[#a8a8a8]">
                <Link href={localePath(locale)}>{text.nav.home}</Link>
                <Link href={localePath(locale, "/projects")}>{text.nav.projects}</Link>
                <Link href={localePath(locale, "/gallery")}>{text.nav.gallery}</Link>
                <Link href={localePath(locale, "/contact")}>{text.nav.contact}</Link>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold">{text.footer.connect}</h3>
              <div className="flex gap-2">
                <a
                  aria-label="LinkedIn"
                  className="flex size-9 items-center justify-center rounded-full transition-colors hover:bg-white/5"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon className="size-4" />
                </a>
                <a
                  aria-label="Instagram"
                  className="flex size-9 items-center justify-center rounded-full transition-colors hover:bg-white/5"
                  href={profile.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon className="size-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-[#a8a8a8] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {profile.name}. {text.footer.rights}.
            </p>
            <p>{profile.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

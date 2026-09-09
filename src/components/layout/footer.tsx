import Link from "next/link";
import { InstagramIcon, LinkedInIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#141414]/50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
        <div className="space-y-8">
          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            <div>
              <Link
                className="mb-3 inline-block text-xl font-medium tracking-tight"
                href="/"
              >
                {profile.name}
              </Link>
              <p className="max-w-sm text-sm text-[#a8a8a8]">
                Full Stack Developer focused on scalable web applications,
                backend systems, and AI-powered products.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold">Navigation</h3>
              <div className="flex flex-col gap-2 text-sm text-[#a8a8a8]">
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/gallery">Gallery</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold">Connect</h3>
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
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
            <p>{profile.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

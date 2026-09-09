import Image from "next/image";
import Link from "next/link";
import { buttonStyles } from "@/components/ui/button";
import { ArrowRightIcon, LinkedInIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section
      className="hero-stage relative isolate min-h-svh overflow-hidden"
      data-hero-section
    >
      <div
        aria-hidden="true"
        className="hero-stage-background"
        data-testid="hero-stage-background"
      >
        <span className="hero-stage-grid" />
        <span className="hero-stage-glow" />
        <span className="hero-stage-grain" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-svh max-w-7xl items-center px-4 pt-16 sm:px-6 lg:px-8 lg:pt-0">
        <div className="relative grid w-full items-center gap-8 py-10 pb-0 lg:min-h-svh lg:grid-cols-[minmax(0,1.05fr)_minmax(430px,.95fr)] lg:gap-2 lg:py-0">
          <div className="relative z-10 max-w-3xl pt-8 text-left lg:pt-0">
            <h1 className="mt-7 max-w-3xl bg-linear-to-b from-[#f3fbff] to-white bg-clip-text text-5xl font-medium tracking-[-.065em] text-transparent sm:text-6xl lg:text-7xl xl:whitespace-nowrap xl:text-[5rem]">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-3xl text-balance text-2xl font-medium leading-[1.15] tracking-[-.045em] text-white sm:text-3xl lg:text-4xl">
              Full Stack Developer building scalable web applications and
              AI-powered products.
            </p>
            <p className="mt-7 max-w-xl text-balance text-base leading-relaxed text-[#a8a8a8] sm:text-lg">
              {profile.heroDescription}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                className={buttonStyles("primary", "h-14 px-7")}
                href="/projects"
              >
                View Projects <ArrowRightIcon className="size-5" />
              </Link>
              <Link
                className={buttonStyles("outline", "h-14 px-7")}
                href="/contact"
              >
                Contact Me
              </Link>
              <a
                aria-label="LinkedIn profile"
                className={buttonStyles("outline", "h-14 px-6")}
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon className="size-5" /> LinkedIn
              </a>
            </div>
          </div>
          <div
            className="hero-portrait relative mx-auto h-[430px] w-full max-w-xl sm:h-[540px] lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:h-full lg:w-[50%] lg:max-w-none"
            data-testid="hero-portrait"
          >
            <span aria-hidden="true" className="hero-portrait-orbit" />
            <span aria-hidden="true" className="hero-portrait-glow" />
            <Image
              alt="Illustrated portrait of Ian Ale Hansyah"
              className="hero-portrait-image object-contain object-bottom lg:translate-x-[11%]"
              fill
              priority
              sizes="(max-width: 1023px) min(100vw - 32px, 576px), 48vw"
              src="/ian.png"
            />
            <div className="absolute right-0 top-[36%] hidden flex-col items-start text-[10px] font-medium tracking-[.28em] text-[#7794ad] lg:flex"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

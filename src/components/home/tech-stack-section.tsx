import { skillGroups } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechnologyLogo } from "@/components/ui/technology-logo";

export function TechStackSection() {
  const technologies = [
    ...new Set(skillGroups.flatMap((group) => group.skills)),
  ];
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Technology"
          title="Core Stack"
          className="mb-12"
        />
        <div
          aria-label="Technology logos"
          className="mx-auto grid max-w-4xl grid-cols-4 justify-items-center gap-x-4 gap-y-8 sm:grid-cols-6 sm:gap-x-7 sm:gap-y-10 lg:grid-cols-8 lg:gap-x-10"
        >
          {technologies.map((technology) => (
            <TechnologyLogo key={technology} name={technology} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

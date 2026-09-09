import { notFound } from "next/navigation";
import { AchievementsSection } from "@/components/home/achievements-section";
import { CertificationsSection } from "@/components/home/certifications-section";
import { ContactCta } from "@/components/home/contact-cta";
import { EducationSection } from "@/components/home/education-section";
import { ExpertiseSection } from "@/components/home/expertise-section";
import { ExpertiseStrip } from "@/components/home/expertise-strip";
import { ExperienceSection } from "@/components/home/experience-section";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { HeroSection } from "@/components/home/hero-section";
import { MetricsSection } from "@/components/home/metrics-section";
import { TechStackSection } from "@/components/home/tech-stack-section";
import { isLocale } from "@/lib/i18n";
import { getCopy } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: "Ian Ale Hansyah — Full Stack Developer",
    description: getCopy(locale).home.heroDescription,
  };
}

export default async function LocaleHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <main>
      <HeroSection locale={locale} />
      <ExpertiseStrip locale={locale} />
      <MetricsSection locale={locale} />
      <EducationSection locale={locale} />
      <AchievementsSection locale={locale} />
      <ExperienceSection locale={locale} />
      <ExpertiseSection locale={locale} />
      <CertificationsSection locale={locale} />
      <FeaturedProjects locale={locale} />
      <TechStackSection locale={locale} />
      <ContactCta locale={locale} />
    </main>
  );
}

import { AchievementsSection } from "@/components/home/achievements-section";
import { ContactCta } from "@/components/home/contact-cta";
import { CertificationsSection } from "@/components/home/certifications-section";
import { EducationSection } from "@/components/home/education-section";
import { ExpertiseSection } from "@/components/home/expertise-section";
import { ExpertiseStrip } from "@/components/home/expertise-strip";
import { ExperienceSection } from "@/components/home/experience-section";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { HeroSection } from "@/components/home/hero-section";
import { MetricsSection } from "@/components/home/metrics-section";
import { TechStackSection } from "@/components/home/tech-stack-section";

export default function HomePage() {
  return <main><HeroSection /><ExpertiseStrip /><MetricsSection /><EducationSection /><FeaturedProjects /><ExpertiseSection /><ExperienceSection /><AchievementsSection /><CertificationsSection /><TechStackSection /><ContactCta /></main>;
}

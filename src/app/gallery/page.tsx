import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A visual journal of Ian Ale Hansyah's internships, competitions, academic milestones, and professional activities.",
};

export default function GalleryPage() {
  return <main><section className="mx-auto min-h-screen w-full max-w-7xl px-4 pb-24 pt-20 sm:px-6 sm:pt-24"><SectionHeading eyebrow="Activity Gallery" title="Moments behind the work" description="A visual journal of internships, competitions, academic milestones, and events that shaped my engineering journey." align="left" className="mb-12 max-w-3xl" /><GalleryGrid items={galleryItems} /></section></main>;
}

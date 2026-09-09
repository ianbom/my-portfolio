import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { getGalleryItems } from "@/data/gallery";
import { getCopy, isLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const text = getCopy(locale);
  return { title: text.nav.gallery, description: text.gallery.description };
}

export default async function LocaleGalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const text = getCopy(locale);
  return <main><section className="mx-auto min-h-screen w-full max-w-7xl px-4 pb-24 pt-20 sm:px-6 sm:pt-24"><SectionHeading eyebrow={text.gallery.eyebrow} title={text.gallery.title} description={text.gallery.description} align="left" className="mb-12 max-w-3xl" /><GalleryGrid items={getGalleryItems(locale)} locale={locale} /></section></main>;
}

"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";
import type { PortfolioProject } from "@/types/portfolio";

type ProjectCarouselProps = {
  projectTitle: string;
  images: PortfolioProject["images"];
};

export function ProjectCarousel({ projectTitle, images }: ProjectCarouselProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const activeSlide = images[slideIndex];

    return <section aria-label={`${projectTitle} image gallery`} className="mx-auto w-full max-w-7xl px-4 sm:px-6" data-testid="project-carousel"><div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] sm:rounded-3xl"><div className="relative aspect-video"><Image className="object-contain" src={activeSlide.url} alt={activeSlide.alt} fill priority quality={90} sizes="(max-width: 1280px) 100vw, 1280px" /><button aria-label="Show previous project image" className="absolute left-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-md bg-[#141414]/85 text-white backdrop-blur-sm transition-colors hover:bg-[#1d1d1d] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-white/30 disabled:pointer-events-none disabled:opacity-40" disabled={slideIndex === 0} onClick={() => setSlideIndex(current => current - 1)} type="button"><ChevronLeftIcon className="size-4" /></button><button aria-label="Show next project image" className="absolute right-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-md bg-[#141414]/85 text-white backdrop-blur-sm transition-colors hover:bg-[#1d1d1d] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-white/30 disabled:pointer-events-none disabled:opacity-40" disabled={slideIndex === images.length - 1} onClick={() => setSlideIndex(current => current + 1)} type="button"><ChevronRightIcon className="size-4" /></button><p aria-live="polite" className="absolute bottom-4 right-4 rounded-full bg-[#141414]/85 px-3 py-1 text-sm text-[#d8d8d8] backdrop-blur-sm" data-testid="carousel-slide-count">{slideIndex + 1} / {images.length}</p></div>{activeSlide.caption && <p className="border-t border-white/10 bg-[#141414] px-5 py-4 text-center text-sm leading-relaxed text-[#a8a8a8]">{activeSlide.caption}</p>}<div aria-label="Project image thumbnails" className="flex gap-2 overflow-x-auto border-t border-white/10 bg-[#0b0b0b] p-3 [scrollbar-width:thin]">{images.map((image, index) => <button aria-label={`Show image ${index + 1}: ${image.alt}`} aria-current={index === slideIndex} className={`relative aspect-video w-24 shrink-0 overflow-hidden rounded-md border transition-colors sm:w-32 ${index === slideIndex ? "border-white/60" : "border-white/10 opacity-60 hover:opacity-100"}`} key={image.url} onClick={() => setSlideIndex(index)} type="button"><Image className="object-contain" src={image.url} alt="" fill quality={75} sizes="128px" /></button>)}</div></div></section>;
}

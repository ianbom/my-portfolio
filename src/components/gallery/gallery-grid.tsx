"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { GalleryItem } from "@/data/gallery";
import { CalendarIcon, CloseIcon, MapPinIcon } from "@/components/ui/icons";
import { Tag } from "@/components/ui/tag";
import { getCopy, type Locale } from "@/lib/i18n";

export function GalleryGrid({ items, locale }: { items: GalleryItem[]; locale: Locale }) {
  const text = getCopy(locale);
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const close = () => {
    setSelected(null);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  };

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected]);

  return (
    <>
      <div
        className="columns-1 gap-5 sm:columns-2 lg:columns-3"
        data-testid="gallery-grid"
      >
        {items.map((item) => (
          <button
            aria-haspopup="dialog"
            className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-[#141414] text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8db7dc]"
            key={item.id}
            onClick={(event) => {
              triggerRef.current = event.currentTarget;
              setSelected(item);
            }}
            type="button"
          >
            <Image
              className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] group-focus-visible:scale-[1.04]"
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) 50vw, 33vw"
            />
            <span className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black via-black/55 to-transparent p-5 opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
              <Tag className="mb-3 w-fit border-white/20 bg-black/30 text-white">
                {item.category}
              </Tag>
              <span className="text-lg font-semibold tracking-tight text-white">
                {item.title}
              </span>
              <span className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/70">
                {item.description}
              </span>
              <span className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/65">
                <span className="flex items-center gap-1.5">
                  <CalendarIcon className="size-3.5" />
                  {item.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPinIcon className="size-3.5" />
                  {item.location}
                </span>
              </span>
            </span>
          </button>
        ))}
      </div>

      {selected && (
        <div
          aria-labelledby="gallery-dialog-title"
          aria-modal="true"
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          data-testid="gallery-dialog"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) close();
          }}
          role="dialog"
        >
          <div className="relative grid max-h-[90svh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/10 bg-[#101010] shadow-2xl md:grid-cols-[minmax(0,1.7fr)_minmax(280px,.8fr)]">
            <div className="flex min-h-64 items-center justify-center bg-black md:min-h-[560px]">
              <Image
                className="max-h-[70svh] h-auto w-full object-contain md:max-h-[90svh]"
                src={selected.src}
                alt={selected.alt}
                width={selected.width}
                height={selected.height}
                sizes="(max-width: 768px) 100vw, 70vw"
                priority
              />
            </div>
            <div className="flex flex-col p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <Tag>{selected.category}</Tag>
                <button
                  aria-label={text.gallery.close}
                  className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#a8a8a8] transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8db7dc]"
                  onClick={close}
                  ref={closeButtonRef}
                  type="button"
                >
                  <CloseIcon className="size-4" />
                </button>
              </div>
              <h2
                className="mt-8 text-2xl font-semibold tracking-[-.03em] sm:text-3xl"
                id="gallery-dialog-title"
              >
                {selected.title}
              </h2>
              <div className="mt-4 space-y-2 text-sm text-[#a8a8a8]">
                <p className="flex items-center gap-2">
                  <CalendarIcon className="size-4 text-[#8db7dc]" />
                  {selected.date}
                </p>
                <p className="flex items-center gap-2">
                  <MapPinIcon className="size-4 text-[#8db7dc]" />
                  {selected.location}
                </p>
              </div>
              <p className="mt-7 text-sm leading-7 text-[#b8b8b8] sm:text-base">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

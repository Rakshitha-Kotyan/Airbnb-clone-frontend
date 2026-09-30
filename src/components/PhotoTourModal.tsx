"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, Share, Heart } from "lucide-react";
import { tourSections } from "@/data/listing";

interface Props {
  targetId: string | null;
  lightboxOpen: boolean;
  onClose: () => void;
  onOpenPhoto: (imageId: string) => void;
}

const SCROLL_OFFSET = 20;

function scrollToElement(
  root: HTMLElement | null,
  selector: string,
  smooth: boolean,
) {
  const el = root?.querySelector<HTMLElement>(selector);
  if (!root || !el) return;
  const top =
    root.scrollTop +
    el.getBoundingClientRect().top -
    root.getBoundingClientRect().top -
    SCROLL_OFFSET;
  root.scrollTo({ top, behavior: smooth ? "smooth" : "auto" });
}

export default function PhotoTourModal({
  targetId,
  lightboxOpen,
  onClose,
  onOpenPhoto,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLButtonElement>(null);

  // Open already scrolled to the clicked photo (no flash of the top).
  useLayoutEffect(() => {
    if (targetId)
      scrollToElement(
        scrollRef.current,
        `[data-image-id="${targetId}"]`,
        false,
      );
  }, [targetId]);

  // Lock page scroll while open.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Focus the back button on open, give focus back to the opener on close.
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    backRef.current?.focus();
    return () => opener?.focus?.();
  }, []);

  // Escape closes the tour, unless the lightbox is on top of it.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !lightboxOpen) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      className="fixed inset-0 z-50 flex flex-col bg-white"
    >
      <header className="relative flex h-[110px] shrink-0 items-center justify-between pl-[34px] pr-[45px]">
        <button
          ref={backRef}
          onClick={onClose}
          aria-label="Back"
          className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100"
        >
          <ChevronLeft size={20} />
        </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold text-neutral-900">
          Photo tour
        </h1>
        <div className="flex items-center gap-[13px]">
          <button
            aria-label="Share"
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100"
          >
            <Share size={20} />
          </button>
          <button
            aria-label="Save"
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100"
          >
            <Heart size={20} />
          </button>
        </div>
      </header>

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto overscroll-contain"
      >
        <div className="mx-auto w-full max-w-[1221px] pb-24">
          <nav
            aria-label="Photo tour sections"
            className="mb-[70px] grid grid-cols-8 gap-x-[15px] gap-y-4"
          >
            {tourSections.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() =>
                  scrollToElement(
                    scrollRef.current,
                    `[data-section-id="${s.id}"]`,
                    true,
                  )
                }
                className="group cursor-pointer text-left"
              >
                <div className="relative aspect-[139/131]">
                  <Image
                    src={s.thumb}
                    alt=""
                    fill
                    sizes="140px"
                    className="rounded-lg object-cover [transition:transform_.25s_cubic-bezier(.2,0,0,1),filter_.2s] group-hover:scale-[1.04] group-hover:brightness-[.94]"
                  />
                </div>
                <div className="mt-2 text-base leading-6 text-neutral-500 group-hover:text-neutral-900">
                  {s.title}
                </div>
              </button>
            ))}
          </nav>

          {tourSections.map((s) => (
            <section
              key={s.id}
              data-section-id={s.id}
              className="mb-[25px] grid grid-cols-[1fr_573px] gap-x-[68px]"
            >
              <div>
                <div className="sticky top-6">
                  <h2 className="text-4xl font-semibold tracking-tight text-neutral-900">
                    {s.title}
                  </h2>
                  {s.details && (
                    <p className="mt-2.5 text-lg leading-7 text-neutral-500">
                      {s.details}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[15px]">
                {s.images.map((img) => (
                  <button
                    key={img.id}
                    type="button"
                    data-image-id={img.id}
                    onClick={() => onOpenPhoto(img.id)}
                    aria-label={`Open ${img.alt}`}
                    className={`group relative block aspect-[3/2] cursor-pointer overflow-hidden rounded-xl ${
                      img.size === "full" ? "col-span-2" : ""
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes={img.size === "full" ? "573px" : "280px"}
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/10" />
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

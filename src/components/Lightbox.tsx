"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { Photo } from "@/data/listing";
import { Grip, ChevronLeft, ChevronRight, X } from "lucide-react";

interface Props {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export default function Lightbox({
  photos,
  index,
  onClose,
  onIndexChange,
}: Props) {
  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + photos.length) % photos.length);
  }, [index, photos.length, onIndexChange]);

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % photos.length);
  }, [index, photos.length, onIndexChange]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  const photo = photos[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${photos.length}`}
      className="fixed inset-0 z-[60] flex flex-col bg-white"
    >
      <div className="grid grid-cols-3 items-center px-6 py-4 text-neutral-900">
        <button
          onClick={onClose}
          aria-label="Back to photo tour"
          className="flex h-10 w-10 items-center justify-center justify-self-start rounded-full hover:bg-neutral-100"
        >
          <Grip size={18} />
        </button>
        <span className="justify-self-center text-base font-semibold">
          {photo.caption}
        </span>
        <div className="flex items-center gap-4 justify-self-end">
          <span className="text-sm font-semibold text-neutral-900">
            {index + 1} of {photos.length}
          </span>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-16">
        <button
          onClick={goPrev}
          aria-label="Previous photo"
          className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white transition hover:bg-neutral-100 disabled:opacity-40"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="relative h-[75vh] w-full max-w-5xl">
          <Image
            key={photo.id}
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="90vw"
            className="object-contain transition-opacity duration-200"
            priority
          />
        </div>

        <button
          onClick={goNext}
          aria-label="Next photo"
          className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white transition hover:bg-neutral-100 disabled:opacity-40"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="px-6 py-4 text-center text-neutral-900">
        {photo.subcaption && (
          <div className="text-sm text-neutral-500">{photo.subcaption}</div>
        )}
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { Grid3x3 } from "lucide-react";
import { Photo } from "@/data/listing";

interface Props {
  photos: Photo[];
  onOpenTour: () => void;
  onOpenLightbox: (index: number) => void;
}

export default function PhotoGrid({
  photos,
  onOpenTour,
  onOpenLightbox,
}: Props) {
  const main = photos[0];
  const rest = photos.slice(1, 5);

  return (
    <div className="relative mx-auto mt-6 max-w-[1128px] px-6">
      <div className="grid h-[520px] grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-xl">
        <button
          onClick={() => onOpenLightbox(0)}
          className="group relative col-span-2 row-span-2 overflow-hidden"
        >
          <Image
            src={main.src}
            alt={main.alt}
            fill
            sizes="50vw"
            className="object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/10" />
        </button>
        {rest.map((photo, i) => (
          <button
            key={photo.id}
            onClick={() => onOpenLightbox(i + 1)}
            className="group relative col-span-1 row-span-1 overflow-hidden"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="25vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/10" />
          </button>
        ))}
      </div>

      <button
        onClick={onOpenTour}
        className="absolute bottom-4 right-8 flex items-center gap-2 rounded-lg border border-neutral-900 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-neutral-100"
      >
        <Grid3x3 size={16} />
        Show all photos
      </button>
    </div>
  );
}

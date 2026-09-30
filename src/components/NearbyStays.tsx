"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { nearbyStays } from "@/data/listing";

export default function NearbyStays() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);

  const scrollByPage = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
    setPage((p) => Math.min(2, Math.max(1, p + dir)));
  };

  return (
    <section className="mx-auto mt-6 max-w-6xl px-6 py-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-neutral-900">
          More stays nearby
        </h2>
        <div className="flex items-center gap-3">
          <span className="text-sm text-neutral-500">{page} / 2</span>
          <button
            onClick={() => scrollByPage(-1)}
            aria-label="Previous"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-100"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scrollByPage(1)}
            aria-label="Next"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-100"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="mt-6 flex snap-x gap-6 overflow-x-auto scroll-smooth pb-2"
      >
        {nearbyStays.map((stay, i) => (
          <div key={stay.title} className="w-64 shrink-0 snap-start">
            <div
              className="h-64 w-64 rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url(${stay.src})` }}
            />
            <div className="mt-2 font-medium text-neutral-900">
              {stay.title}
            </div>
            <div className="mt-1 text-sm text-neutral-700">
              {stay.price} <span className="text-neutral-400">·</span> ★{" "}
              {stay.rating}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

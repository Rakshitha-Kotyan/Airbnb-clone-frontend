"use client";

import { useState } from "react";
import { Search, Plus, Minus, Home } from "lucide-react";
import { location } from "@/data/listing";

export default function Location() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="location"
      className="scroll-mt-24 border-t border-neutral-200 py-8"
    >
      <h2 className="text-xl font-semibold text-neutral-900">
        Where you&apos;ll be
      </h2>
      <p className="mt-2 text-neutral-700">{location.neighbourhood}</p>

      <div className="relative mt-6 h-[400px] w-full overflow-hidden rounded-xl bg-[#e9eef0]">
        <div
          className="absolute inset-0 bg-[#a9d3e8]"
          style={{ clipPath: "polygon(0 0, 45% 0, 0 60%)" }}
        />
        <div className="absolute left-[35%] top-[35%] h-24 w-24 rounded-full bg-[#c9dfc4]" />
        <div className="absolute right-[15%] top-[55%] h-32 w-32 rounded-full bg-[#c9dfc4]" />
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-900 text-white">
          <Home size={18} />
        </div>
        <button
          aria-label="Search map"
          className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow"
        >
          <Search size={16} />
        </button>
        <div className="absolute right-4 top-4 flex flex-col overflow-hidden rounded-lg bg-white shadow">
          <button
            aria-label="Zoom in"
            className="flex h-10 w-10 items-center justify-center hover:bg-neutral-100"
          >
            <Plus size={16} />
          </button>
          <button
            aria-label="Zoom out"
            className="flex h-10 w-10 items-center justify-center border-t border-neutral-200 hover:bg-neutral-100"
          >
            <Minus size={16} />
          </button>
        </div>
      </div>

      <p className="mt-4 text-neutral-600">
        Exact location will be provided after booking.
      </p>

      <h3 className="mt-8 text-lg font-semibold">Neighbourhood highlights</h3>
      <p className="mt-2 max-w-2xl text-neutral-700">
        {expanded
          ? location.highlight
          : location.highlight.length > 90
            ? location.highlight.slice(0, 90) + "…"
            : location.highlight}
      </p>
      <button
        onClick={() => setExpanded((v) => !v)}
        className="mt-2 flex items-center gap-1 text-sm font-medium underline"
      >
        {expanded ? "Show less" : "Show more"} <span aria-hidden>→</span>
      </button>
    </section>
  );
}

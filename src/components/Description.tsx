"use client";

import { useState } from "react";
import { description } from "@/data/listing";

export default function Description() {
  const [expanded, setExpanded] = useState(false);
  const isLong = description.text.length > 180;
  const shown =
    expanded || !isLong
      ? description.text
      : description.text.slice(0, 180) + "…";

  return (
    <section className="border-t border-neutral-200 py-8">
      {description.translatedNotice && (
        <div className="mb-6 rounded-xl bg-neutral-100 px-6 py-4 text-lg text-neutral-800">
          Some info has been automatically translated.{" "}
          <button className="font-medium underline">Show original</button>
        </div>
      )}
      <p className="whitespace-pre-line text-lg text-neutral-800">{shown}</p>
      {isLong && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 flex items-center gap-1 text-lg font-medium underline"
        >
          {expanded ? "Show less" : "Show more"} <span aria-hidden>›</span>
        </button>
      )}
    </section>
  );
}

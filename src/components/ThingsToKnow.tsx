"use client";

import { CalendarX, Search as SearchIcon, ShieldCheck } from "lucide-react";
import { thingsToKnow } from "@/data/listing";

const ICONS = [CalendarX, SearchIcon, ShieldCheck];

export default function ThingsToKnow() {
  return (
    <section className="border-t border-neutral-200 py-8">
      <h2 className="text-xl font-semibold text-neutral-900">Things to know</h2>
      <div className="mt-6 grid grid-cols-3 gap-10">
        {thingsToKnow.map((block, i) => {
          const Icon = ICONS[i];
          return (
            <div key={block.title}>
              <Icon size={26} />
              <h3 className="mt-4 font-semibold">{block.title}</h3>
              <div className="mt-2 space-y-1 text-neutral-700">
                {block.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <a
                href="#"
                className="mt-3 inline-block text-sm font-medium underline"
              >
                Learn more
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

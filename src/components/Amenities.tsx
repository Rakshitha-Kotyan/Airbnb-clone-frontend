"use client";

import {
  Wifi,
  ChefHat,
  Laptop,
  Car,
  Waves,
  Bath,
  Dog,
  Camera,
  Ban,
} from "lucide-react";
import { amenities } from "@/data/listing";

const ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  Kitchen: ChefHat,
  Wifi: Wifi,
  "Dedicated workspace": Laptop,
  "Free parking on premises": Car,
  Pool: Waves,
  "Hot tub": Bath,
  "Pets allowed": Dog,
  "Exterior security cameras on property": Camera,
  "Carbon monoxide alarm": Ban,
  "Smoke alarm": Ban,
};

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="scroll-mt-24 border-t border-neutral-200 py-8"
    >
      <h2 className="text-xl font-semibold text-neutral-900">
        What this place offers
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-4">
        {amenities.map((a) => {
          const Icon = ICONS[a.label] ?? Wifi;
          return (
            <div
              key={a.label}
              className={`flex items-center gap-4 py-2 ${
                a.available
                  ? "text-neutral-900"
                  : "text-neutral-400 line-through"
              }`}
            >
              <Icon size={22} />
              <span>{a.label}</span>
            </div>
          );
        })}
      </div>
      <button className="mt-6 rounded-lg border border-neutral-900 px-5 py-3 text-sm font-medium transition hover:bg-neutral-100">
        Show all 50 amenities
      </button>
    </section>
  );
}

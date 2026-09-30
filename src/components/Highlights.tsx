"use client";

import { PartyPopper, Fan, DoorOpen } from "lucide-react";
import { highlights } from "@/data/listing";

const ICONS = [PartyPopper, Fan, DoorOpen];

export default function Highlights() {
  return (
    <div className="mt-6 space-y-5">
      {highlights.map((h, i) => {
        const Icon = ICONS[i];
        return (
          <div key={h.title} className="flex items-start gap-4">
            <Icon size={24} className="mt-1 shrink-0" />
            <div>
              <div className="font-medium text-neutral-900">{h.title}</div>
              <div className="text-neutral-600">{h.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

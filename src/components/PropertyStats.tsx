"use client";

import { listing } from "@/data/listing";

export default function PropertyStats() {
  return (
    <div className="mx-auto mt-6 max-w-[1128px] px-6">
      <p className="text-2xl font-semibold text-neutral-900">
        {listing.propertyType}
      </p>
      <div className="mt-2 flex items-center gap-2 text-lg text-neutral-700">
        <span>{listing.stats}</span>
      </div>
    </div>
  );
}

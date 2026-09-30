"use client";

import { BadgeCheck } from "lucide-react";
import { listing } from "@/data/listing";
import Highlights from "@/components/Highlights";
import LeafIcon from "@/components/LeafIcon";

export default function Overview() {
  return (
    <div className="mt-6">
      <div className="mt-2 flex items-center gap-6 rounded-2xl border border-neutral-200 px-8 py-6">
        <div className="flex items-center gap-3 text-xl font-semibold leading-tight text-neutral-900">
          <LeafIcon />
          <span>
            Guest
            <br />
            favourite
          </span>
          <LeafIcon flip />
        </div>
        <div className="max-w-sm text-lg text-neutral-700">
          One of the most loved homes on Airbnb, according to guests
        </div>
        <div className="ml-auto text-center text-xl">
          <div className="font-semibold">{listing.rating.toFixed(2)}</div>
          <div aria-hidden className="text-base">
            ★★★★★
          </div>
        </div>
        <div className="border-l border-neutral-200 pl-6 text-center text-xl">
          <div className="font-semibold">{listing.reviewCount}</div>
          <div className="text-lg text-neutral-500">Reviews</div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3 border-b border-neutral-200 pb-6">
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-900 text-[10px] font-semibold text-white">
          MIRASHYA
          <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-white">
            <BadgeCheck size={12} />
          </span>
        </div>
        <div>
          <div className="text-xl font-semibold text-neutral-900">
            Hosted by {listing.host.name}
          </div>
          <div className="text-lg text-neutral-500">
            {listing.host.yearsHosting} years hosting
          </div>
        </div>
      </div>

      <Highlights />
    </div>
  );
}

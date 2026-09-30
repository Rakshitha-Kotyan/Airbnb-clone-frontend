"use client";

import { BadgeCheck } from "lucide-react";
import { listing, cohosts, hostDetails } from "@/data/listing";

export default function Host() {
  return (
    <section className="border-t border-neutral-200 py-8">
      <h2 className="text-xl font-semibold text-neutral-900">Meet your host</h2>

      <div className="mt-6 grid grid-cols-2 gap-10">
        <div className="rounded-2xl border border-neutral-200 p-8 text-center">
          <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-900 text-xs font-semibold text-white">
            MIRASHYA
            <span className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-rose-600 text-white">
              <BadgeCheck size={14} />
            </span>
          </div>
          <div className="mt-4 text-xl font-semibold">{listing.host.name}</div>
          <div className="text-neutral-500">Host</div>

          <div className="mt-6 grid grid-cols-3 divide-x divide-neutral-200 border-t border-neutral-200 pt-4">
            <div>
              <div className="text-lg font-semibold">
                {hostDetails.reviews.toLocaleString()}
              </div>
              <div className="text-xs text-neutral-500">Reviews</div>
            </div>
            <div>
              <div className="text-lg font-semibold">{hostDetails.rating}★</div>
              <div className="text-xs text-neutral-500">Rating</div>
            </div>
            <div>
              <div className="text-lg font-semibold">
                {hostDetails.yearsHosting}
              </div>
              <div className="text-xs text-neutral-500">Years hosting</div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-neutral-900">Co-Hosts</h3>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {cohosts.map((c) => (
              <div key={c.name} className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">
                  {c.name[0]}
                </div>
                <span className="text-sm text-neutral-800">{c.name}</span>
              </div>
            ))}
          </div>

          <h3 className="mt-8 font-semibold text-neutral-900">Host details</h3>
          <p className="mt-2 text-sm text-neutral-700">
            Response rate: {hostDetails.responseRate}
          </p>
          <p className="text-sm text-neutral-700">
            Responds {hostDetails.responseTime}
          </p>
        </div>
      </div>
    </section>
  );
}

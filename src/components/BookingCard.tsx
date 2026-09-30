"use client";

import { listing } from "@/data/listing";
import { Tag, Flag } from "lucide-react";

interface Props {
  checkIn: Date | null;
  checkOut: Date | null;
}

function formatDate(d: Date | null) {
  if (!d) return "Add date";
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
}

export default function BookingCard({ checkIn, checkOut }: Props) {
  return (
    <div className="h-full">
      <div className="mb-5 flex items-center gap-4 rounded-xl border border-neutral-200 p-5">
        <Tag size={24} className="text-emerald-700" />
        <div className="text-lg">
          <div>Get 10% off your next stay.</div>
          <a href="#" className="underline">
            Terms apply
          </a>
        </div>
        <button className="ml-auto rounded-lg border border-neutral-900 px-5 py-2.5 text-base font-medium hover:bg-neutral-100">
          Claim
        </button>
      </div>

      <div className="sticky top-28">
        <div className="rounded-2xl border border-neutral-200 p-8 shadow-lg">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-semibold">
              {listing.priceForStay}
            </span>
            <span className="text-lg text-neutral-600">
              for {listing.nights} nights
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 overflow-hidden rounded-lg border border-neutral-400">
            <div className="border-r border-neutral-400 p-3">
              <div className="text-xs font-semibold uppercase tracking-wide">
                Check-in
              </div>
              <div className="text-lg text-neutral-600">
                {formatDate(checkIn)}
              </div>
            </div>
            <div className="p-3">
              <div className="text-xs font-semibold uppercase tracking-wide">
                Checkout
              </div>
              <div className="text-lg text-neutral-600">
                {formatDate(checkOut)}
              </div>
            </div>
            <div className="col-span-2 border-t border-neutral-400 p-3">
              <div className="text-xs font-semibold uppercase tracking-wide">
                Guests
              </div>
              <div className="text-lg text-neutral-600">2 guests</div>
            </div>
          </div>

          <div className="mt-5 rounded-lg bg-neutral-100 px-4 py-3 text-center text-lg text-neutral-700">
            Free cancellation before {listing.freeCancellationDate}
          </div>

          <button className="mt-5 w-full rounded-full bg-rose-600 py-4 text-lg font-semibold text-white transition hover:bg-rose-700">
            Reserve
          </button>
          <p className="mt-3 text-center text-base text-neutral-500">
            You won&apos;t be charged yet
          </p>
        </div>

        <a
          href="#"
          className="mt-6 flex items-center justify-center gap-2 text-lg font-medium underline"
        >
          <Flag size={16} />
          Report this listing
        </a>
      </div>
    </div>
  );
}

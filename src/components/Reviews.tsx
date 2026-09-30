"use client";

import { useState } from "react";
import Image from "next/image";
import { listing, reviewCategories, reviewTags, reviews } from "@/data/listing";

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 140;
  const shown =
    expanded || !isLong ? review.text : review.text.slice(0, 140) + "…";

  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200 text-lg font-medium text-neutral-700">
          {review.name[0]}
        </div>
        <div>
          <div className="text-lg font-medium text-neutral-900">
            {review.name}
          </div>
          <div className="text-base text-neutral-500">{review.tenure}</div>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-1 text-sm text-neutral-500">
        <span>{"★".repeat(review.stars)}</span>
        <span>· {review.date}</span>
      </div>
      <p className="mt-2 text-lg font-medium text-neutral-800">{shown}</p>
      {isLong && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-1 text-base font-medium text-neutral-900 underline"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}

function RatingBar({ star, percent }: { star: number; percent: number }) {
  return (
    <div className="flex items-center gap-2 text-sm text-neutral-700">
      <span className="w-2">{star}</span>
      <div className="h-1 flex-1 rounded-full bg-neutral-200">
        <div
          className="h-1 rounded-full bg-neutral-900"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default function Reviews() {
  const distribution = [
    { star: 5, percent: 92 },
    { star: 4, percent: 8 },
    { star: 3, percent: 0 },
    { star: 2, percent: 0 },
    { star: 1, percent: 0 },
  ];

  return (
    <section
      id="reviews"
      className="scroll-mt-24 border-t border-neutral-200 py-8"
    >
      <div className="text-center">
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/images/laurel-left.png"
            alt=""
            width={100}
            height={130}
          />
          <span className="text-[100px] font-medium tracking-[-0.03em] text-neutral-900">
            {listing.rating.toFixed(2)}
          </span>
          <Image
            src="/images/laurel-right.png"
            alt=""
            width={100}
            height={130}
          />
        </div>
        <h2 className="mt-4 text-2xl font-semibold">Guest favourite</h2>
        <p className="mx-auto mt-2 max-w-md text-lg text-neutral-600">
          This home is a guest favourite based on ratings, reviews and
          reliability
        </p>
        <a
          href="#"
          className="mt-2 inline-block text-base font-medium underline"
        >
          How reviews work
        </a>
      </div>

      <div className="mt-8 grid grid-cols-6 gap-8 text-base">
        <div>
          <div className="text-lg text-neutral-900">Overall rating</div>
          <div className="mt-2 space-y-1.5">
            {distribution.map((d) => (
              <RatingBar key={d.star} star={d.star} percent={d.percent} />
            ))}
          </div>
        </div>
        {reviewCategories.map((c) => (
          <div key={c.label}>
            <div className="text-lg text-neutral-700">{c.label}</div>
            <div className="mt-1 text-xl font-medium">{c.score.toFixed(1)}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex gap-3 overflow-x-auto pb-2">
        {reviewTags.map((t) => (
          <span
            key={t.label}
            className="flex shrink-0 items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-base"
          >
            {t.label} <span className="text-neutral-500">{t.count}</span>
          </span>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-x-10 gap-y-8">
        {reviews.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>

      <button className="mt-8 rounded-lg border border-neutral-900 px-5 py-3 text-base font-medium transition hover:bg-neutral-100">
        Show all {listing.reviewCount} reviews
      </button>
    </section>
  );
}

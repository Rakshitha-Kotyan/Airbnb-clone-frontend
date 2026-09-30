"use client";

import { useState } from "react";
import { Share, Heart } from "lucide-react";
import { listing } from "@/data/listing";

export default function ListingHeader() {
  const [saved, setSaved] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 1800);
  };

  const handleSave = () => {
    setSaved((v) => !v);
    showToast(saved ? "Removed from wishlist" : "Saved to wishlist");
  };

  const handleShare = () => {
    showToast("Share options");
  };

  return (
    <div className="relative mx-auto mt-6 max-w-[1128px] px-6">
      <div className="flex items-start justify-between">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900">
          {listing.title}
        </h1>
        <div className="flex items-center gap-6 text-sm font-medium">
          <button
            onClick={handleShare}
            className="flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-neutral-100"
          >
            <Share size={16} strokeWidth={2} />
            <span className="underline">Share</span>
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-neutral-100"
          >
            <Heart
              size={16}
              strokeWidth={2}
              className={saved ? "fill-current text-rose-600" : ""}
            />
            <span className="underline">{saved ? "Saved" : "Save"}</span>
          </button>
        </div>
      </div>

      {toast && (
        <div className="fixed bottom-10 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-neutral-900 px-4 py-3 text-sm font-medium text-white shadow-lg">
          {toast}
        </div>
      )}
    </div>
  );
}

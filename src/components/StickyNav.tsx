"use client";

import { useEffect, useState } from "react";

const TABS = [
  { id: "photos", label: "Photos" },
  { id: "amenities", label: "Amenities" },
  { id: "reviews", label: "Reviews" },
  { id: "location", label: "Location" },
];

interface Props {
  price: string;
  nights: number;
  rating: number;
  reviewCount: number;
}

export default function StickyNav({
  price,
  nights,
  rating,
  reviewCount,
}: Props) {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("photos");

  useEffect(() => {
    const onScroll = () => {
      const trigger = document.getElementById("nav-trigger");
      if (!trigger) return;
      setVisible(trigger.getBoundingClientRect().top <= 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = TABS.map((t) => document.getElementById(t.id)).filter(
      (el): el is HTMLElement => !!el,
    );
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="fixed left-0 top-0 z-40 w-full border-b border-neutral-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-[1128px] items-center justify-between px-6 py-4">
        <nav className="flex gap-8 text-sm font-medium text-neutral-500">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className={`border-b-2 pb-1 transition-colors ${
                active === tab.id
                  ? "border-neutral-900 text-neutral-900"
                  : "border-transparent hover:text-neutral-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <div className="text-sm">
            <span className="font-semibold">{price}</span>{" "}
            <span className="text-neutral-500">for {nights} nights</span>
            <span className="ml-2 text-neutral-500">
              ★ {rating.toFixed(2)} · {reviewCount} reviews
            </span>
          </div>
          <button className="rounded-lg bg-rose-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-rose-700">
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}

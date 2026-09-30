"use client";

import Image from "next/image";
import { sleepingAreas } from "@/data/listing";

export default function WhereYoullSleep() {
  return (
    <section className="border-t border-neutral-200 py-8">
      <h2 className="text-xl font-semibold text-neutral-900">
        Where you&apos;ll sleep
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-6">
        {sleepingAreas.map((room) => (
          <div key={room.id}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src={room.src}
                alt={room.title}
                fill
                sizes="500px"
                className="object-cover"
              />
            </div>
            <div className="mt-3 font-medium text-neutral-900">
              {room.title}
            </div>
            <div className="text-neutral-600">{room.subtitle}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

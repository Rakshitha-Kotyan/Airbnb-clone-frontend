"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function sameDay(a: Date | null, b: Date | null) {
  return !!a && !!b && a.getTime() === b.getTime();
}

function formatShort(d: Date) {
  return `${d.getDate()} ${MONTH_NAMES[d.getMonth()].slice(0, 3)} ${d.getFullYear()}`;
}

function buildMonthGrid(year: number, month: number) {
  const first = new Date(year, month, 1);
  const startWeekday = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  return cells;
}

interface Props {
  checkIn: Date | null;
  checkOut: Date | null;
  onChange: (checkIn: Date | null, checkOut: Date | null) => void;
  locationLabel: string;
}

export default function Calendar({
  checkIn,
  checkOut,
  onChange,
  locationLabel,
}: Props) {
  const base = checkIn ?? new Date();
  const [viewYear, setViewYear] = useState(base.getFullYear());
  const [viewMonth, setViewMonth] = useState(base.getMonth());

  const nights =
    checkIn && checkOut
      ? Math.round((checkOut.getTime() - checkIn.getTime()) / 86400000)
      : 0;

  const handleDayClick = (day: Date) => {
    const clicked = startOfDay(day);
    if (!checkIn || (checkIn && checkOut)) {
      onChange(clicked, null);
    } else if (clicked.getTime() > checkIn.getTime()) {
      onChange(checkIn, clicked);
    } else {
      onChange(clicked, null);
    }
  };

  const isInRange = (day: Date) => {
    if (!checkIn || !checkOut) return false;
    return (
      day.getTime() > checkIn.getTime() && day.getTime() < checkOut.getTime()
    );
  };

  const goPrev = () => {
    const m = viewMonth === 0 ? 11 : viewMonth - 1;
    const y = viewMonth === 0 ? viewYear - 1 : viewYear;
    setViewMonth(m);
    setViewYear(y);
  };

  const goNext = () => {
    const m = viewMonth === 11 ? 0 : viewMonth + 1;
    const y = viewMonth === 11 ? viewYear + 1 : viewYear;
    setViewMonth(m);
    setViewYear(y);
  };

  const renderMonth = (year: number, month: number) => {
    const cells = buildMonthGrid(year, month);
    return (
      <div className="flex-1">
        <div className="mb-4 text-center text-lg font-semibold">
          {MONTH_NAMES[month]} {year}
        </div>
        <div className="grid grid-cols-7 gap-y-1 text-center text-xs font-medium text-neutral-500">
          {DAY_LABELS.map((d, i) => (
            <div key={i}>{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-y-1">
          {cells.map((day, i) => {
            if (!day) return <div key={i} />;
            const isCheckIn = sameDay(checkIn, day);
            const isCheckOut = sameDay(checkOut, day);
            const inRange = isInRange(day);
            return (
              <button
                key={i}
                onClick={() => handleDayClick(day)}
                className={`relative mx-auto flex h-10 w-10 items-center justify-center text-sm transition ${
                  isCheckIn || isCheckOut
                    ? "rounded-full bg-neutral-900 font-semibold text-white"
                    : inRange
                      ? "bg-neutral-100 text-neutral-900"
                      : "text-neutral-900 hover:rounded-full hover:bg-neutral-100"
                }`}
              >
                {day.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const nextMonthIndex = viewMonth === 11 ? 0 : viewMonth + 1;
  const nextMonthYear = viewMonth === 11 ? viewYear + 1 : viewYear;

  return (
    <section className="border-t border-neutral-200 py-8">
      <h2 className="text-xl font-semibold text-neutral-900">
        {nights > 0 ? `${nights} nights in ${locationLabel}` : `Select dates`}
      </h2>
      {checkIn && checkOut && (
        <p className="mt-1 text-neutral-600">
          {formatShort(checkIn)} - {formatShort(checkOut)}
        </p>
      )}

      <div className="relative mt-6 flex gap-16">
        <button
          onClick={goPrev}
          aria-label="Previous month"
          className="absolute -left-2 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-100"
        >
          <ChevronLeft size={16} />
        </button>
        {renderMonth(viewYear, viewMonth)}
        {renderMonth(nextMonthYear, nextMonthIndex)}
        <button
          onClick={goNext}
          aria-label="Next month"
          className="absolute -right-2 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-100"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <button
        onClick={() => onChange(null, null)}
        className="mt-4 text-sm font-medium underline"
      >
        Clear dates
      </button>
    </section>
  );
}

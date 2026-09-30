"use client";

import { useEffect, useRef, useState } from "react";
import {
  heroPhotos,
  listing,
  tourPhotos,
  heroTourTargets,
} from "@/data/listing";
import Header from "@/components/Header";
import StickyNav from "@/components/StickyNav";
import PhotoGrid from "@/components/PhotoGrid";
import ListingHeader from "@/components/ListingHeader";
import PropertyStats from "@/components/PropertyStats";
import Overview from "@/components/Overview";
import Description from "@/components/Description";
import WhereYoullSleep from "@/components/WhereYoullSleep";
import Amenities from "@/components/Amenities";
import Calendar from "@/components/Calendar";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Host from "@/components/Host";
import ThingsToKnow from "@/components/ThingsToKnow";
import NearbyStays from "@/components/NearbyStays";
import BookingCard from "@/components/BookingCard";
import PhotoTourModal from "@/components/PhotoTourModal";
import Lightbox from "@/components/Lightbox";

const TOUR_PARAM = "PHOTO_TOUR_SCROLLABLE";

export default function ListingPage() {
  const [tourOpen, setTourOpen] = useState(false);
  const [tourTarget, setTourTarget] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [checkIn, setCheckIn] = useState<Date | null>(new Date(2026, 9, 18));
  const [checkOut, setCheckOut] = useState<Date | null>(new Date(2026, 9, 23));
  const pushedRef = useRef(false);

  // Keep the URL in sync like the reference (?modal=PHOTO_TOUR_SCROLLABLE) and support the back button.
  useEffect(() => {
    const isTourUrl = () => window.location.search.includes(TOUR_PARAM);
    const onPop = () => {
      pushedRef.current = false;
      setTourOpen(isTourUrl());
      if (!isTourUrl()) setLightboxIndex(null);
    };
    if (isTourUrl()) setTourOpen(true);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const openTour = (target: string | null = null) => {
    setTourTarget(target);
    setTourOpen(true);
    if (!window.location.search.includes(TOUR_PARAM)) {
      window.history.pushState({ tour: true }, "", `?modal=${TOUR_PARAM}`);
      pushedRef.current = true;
    }
  };

  const closeTour = () => {
    setLightboxIndex(null);
    setTourOpen(false);
    if (pushedRef.current) {
      pushedRef.current = false;
      window.history.back();
    } else {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  const openTourPhoto = (imageId: string) => {
    const i = tourPhotos.findIndex((p) => p.id === imageId);
    if (i >= 0) setLightboxIndex(i);
  };

  return (
    <main className="min-h-screen bg-white pb-24">
      <Header />

      <ListingHeader />
      <div id="nav-trigger" />

      <div id="photos">
        <PhotoGrid
          photos={heroPhotos}
          onOpenTour={() => openTour()}
          onOpenLightbox={(i) => openTour(heroTourTargets[i])}
        />
      </div>

      <PropertyStats />

      <StickyNav
        price={listing.priceForStay}
        nights={listing.nights}
        rating={listing.rating}
        reviewCount={listing.reviewCount}
      />

      {/* Booking card stays sticky only alongside this block (through the calendar) */}
      <div
        className="mx-auto mt-2 grid max-w-[1128px] gap-10 px-6"
        style={{ gridTemplateColumns: "1.7fr 1fr" }}
      >
        <div>
          <Overview />
          <Description />
          <WhereYoullSleep />
          <Amenities />
          <Calendar
            checkIn={checkIn}
            checkOut={checkOut}
            onChange={(ci, co) => {
              setCheckIn(ci);
              setCheckOut(co);
            }}
            locationLabel="Candolim"
          />
        </div>
        <div>
          <BookingCard checkIn={checkIn} checkOut={checkOut} />
        </div>
      </div>

      {/* Reviews and Location run full-width, no sidebar pairing, so the card doesn't follow past here */}
      <div className="mx-auto max-w-[1128px] px-6">
        <Reviews />
        <Location />
        <Host />
        <ThingsToKnow />
      </div>

      <NearbyStays />

      {tourOpen && (
        <PhotoTourModal
          targetId={tourTarget}
          lightboxOpen={lightboxIndex !== null}
          onClose={closeTour}
          onOpenPhoto={openTourPhoto}
        />
      )}

      {lightboxIndex !== null && (
        <Lightbox
          photos={tourPhotos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </main>
  );
}

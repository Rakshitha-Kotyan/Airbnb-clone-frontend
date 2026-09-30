// Placeholder data, modeled on what's visible in the assignment's reference
// screenshots. Swap photo URLs for the real reference images and adjust
// copy once you've inspected the live page directly.

export interface Photo {
  id: string;
  src: string;
  alt: string;
  caption: string;
  subcaption?: string;
}

export const listing = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  propertyType: "Entire serviced apartment in Candolim, India",
  stats: "3 guests · 1 bedroom · 1 bed · 1 bathroom",
  rating: 4.95,
  reviewCount: 19,
  isSuperhost: true,
  priceForStay: "₹28,499",
  nights: 5,
  checkIn: "10/18/2026",
  checkOut: "10/23/2026",
  freeCancellationDate: "17 October",
  host: {
    name: "Mirashya Homes",
    yearsHosting: 2,
  },
};

export const description = {
  translatedNotice: true,
  text: "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖, popular cafés, restaurants, and nightlife 🌴, it's ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴",
};

export const sleepingAreas = [
  {
    id: "s1",
    title: "Bedroom",
    subtitle: "1 double bed",
    src: "/images/12.jpeg",
  },
  {
    id: "s2",
    title: "Living room",
    subtitle: "1 sofa",
    src: "/images/1s.jpeg",
  },
];

export const reviewCategories = [
  { label: "Cleanliness", score: 5.0 },
  { label: "Accuracy", score: 5.0 },
  { label: "Check-in", score: 5.0 },
  { label: "Communication", score: 5.0 },
  { label: "Location", score: 4.8 },
  { label: "Value", score: 4.8 },
];

export const reviewTags = [
  { label: "Comfort", count: 6 },
  { label: "Accuracy", count: 5 },
  { label: "Hot tub", count: 5 },
  { label: "Condition", count: 4 },
  { label: "Hospitality", count: 8 },
  { label: "Cleanliness", count: 4 },
  { label: "Amenities", count: 2 },
];

export const reviews = [
  {
    id: "r1",
    name: "Amit",
    tenure: "2 months on Airbnb",
    stars: 5,
    date: "1 week ago",
    text: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.",
  },
  {
    id: "r2",
    name: "Aheesh",
    tenure: "3 years on Airbnb",
    stars: 5,
    date: "2 weeks ago",
    text: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.",
  },
  {
    id: "r3",
    name: "Samiksha",
    tenure: "8 months on Airbnb",
    stars: 5,
    date: "May 2026",
    text: "the host nitish was really great help",
  },
  {
    id: "r4",
    name: "Vedant",
    tenure: "4 years on Airbnb",
    stars: 5,
    date: "May 2026",
    text: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine.",
  },
  {
    id: "r5",
    name: "Vaibhav S",
    tenure: "3 years on Airbnb",
    stars: 5,
    date: "May 2026",
    text: "Great great experience living out there, can't expect more, will always look for it in the future and will recommend my friends too.",
  },
  {
    id: "r6",
    name: "Mohd",
    tenure: "5 years on Airbnb",
    stars: 5,
    date: "May 2026",
    text: "Great place. Exactly as described in the listing.",
  },
];

export const location = {
  neighbourhood: "Candolim, Goa, India",
  highlight:
    "Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.",
};

export const cohosts = [
  { name: "Sharath" },
  { name: "Aman Dev Pahwa" },
  { name: "Maria Karen Priyanka" },
  { name: "Simran" },
  { name: "Pallavi" },
  { name: "Sanyukta" },
  { name: "Shruti" },
  { name: "Amisha" },
];

export const hostDetails = {
  reviews: 1463,
  rating: 4.68,
  yearsHosting: 2,
  responseRate: "100%",
  responseTime: "within an hour",
};

export const highlights = [
  {
    title: "Outdoor entertainment",
    text: "The pool and alfresco dining are great for summer trips.",
  },
  {
    title: "Designed for staying cool",
    text: "Beat the heat with the A/C and ceiling fan.",
  },
  {
    title: "Self check-in",
    text: "You can check in with the building staff.",
  },
];

export const thingsToKnow = [
  {
    title: "Cancellation policy",
    lines: [
      "Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.",
      "Review this host's full policy for details.",
    ],
  },
  {
    title: "House rules",
    lines: ["Check-in after 2:00 pm", "Checkout before 11:00 am", "3 guests maximum"],
  },
  {
    title: "Safety & property",
    lines: [
      "Carbon monoxide alarm not reported",
      "Smoke alarm not reported",
      "Exterior security cameras on property",
    ],
  },
];

export const nearbyStays = [
  { title: "Beautiful Studio with a view to die for", price: "₹23,600", rating: 4.91, src: "/images/s1.jpeg" },
  { title: "NAQAB - 1bhk with private pool", price: "₹42,218", rating: 4.95, src: "/images/s2.jpeg" },
  { title: "Greentique Luxury Flat with plunge pool, Calangute", price: "₹44,506", rating: 4.94, src: "/images/s3.jpeg" },
  { title: "The Tropical Studio | 5 mins to Beach", price: "₹22,824", rating: 4.96, src: "/images/s4.jpeg" },
  { title: "Luxury Casa Bella 1BHK with plunge pool, Calangute", price: "₹39,942", rating: 4.95, src: "/images/s5.jpeg" },
  { title: "Kanso by Earthen Window | Jacuzzi | Terrace | Pool", price: "₹45,648", rating: 5.0, src: "/images/s6.jpeg" },
  { title: "Luxury Apt | Private Pool | 6 Mins from Beach", price: "₹48,786", rating: 4.93, src: "/images/s2.jpeg" },
  { title: "Serendipity Cottage - Calm Stay in Calangute-Baga.", price: "₹22,824", rating: 4.92, src: "/images/s4.jpeg" },
];

export const amenities = [
  { label: "Kitchen", available: true },
  { label: "Wifi", available: true },
  { label: "Dedicated workspace", available: true },
  { label: "Free parking on premises", available: true },
  { label: "Pool", available: true },
  { label: "Hot tub", available: true },
  { label: "Pets allowed", available: true },
  { label: "Exterior security cameras on property", available: true },
  { label: "Carbon monoxide alarm", available: false },
  { label: "Smoke alarm", available: false },
];

export const photos: Photo[] = [
  {
    id: "p1",
    src: "/images/3.jpeg",
    alt: "Living room 1",
    caption: "Living room 1",
    subcaption: "Sofa · Air conditioning · Ceiling fan · TV",
  },
  {
    id: "p2",
    src: "/images/2nd.jpeg",
    alt: "Living room 2",
    caption: "Living room 2",
    subcaption: "Dining table · Seating for 4",
  },
  {
    id: "p3",
    src: "/images/3.jpeg",
    alt: "Full kitchen",
    caption: "Full kitchen",
    subcaption: "Refrigerator · Microwave · Stovetop",
  },
  {
    id: "p4",
    src: "/images/3.jpeg",
    alt: "Bedroom",
    caption: "Bedroom",
    subcaption: "1 queen bed",
  },
  {
    id: "p5",
    src: "/images/3.jpeg",
    alt: "Full bathroom",
    caption: "Full bathroom",
    subcaption: "Jacuzzi tub · Shower",
  },
  {
    id: "p6",
    src: "/images/3.jpeg",
    alt: "Pool",
    caption: "Pool",
    subcaption: "Shared pool",
  },
  {
    id: "p7",
    src: "/images/3.jpeg",
    alt: "Exterior",
    caption: "Exterior",
    subcaption: "Building view",
  },
  {
    id: "p8",
    src: "/images/3.jpeg",
    alt: "Pool view 2",
    caption: "Pool",
    subcaption: "Poolside seating",
  },
  {
    id: "p8",
    src: "/images/3.jpeg",
    alt: "Pool view 2",
    caption: "Pool",
    subcaption: "Poolside seating",
  },
  {
    id: "p8",
    src: "https://picsum.photos/seed/pool2/1200/900",
    alt: "Pool view 2",
    caption: "Pool",
    subcaption: "Poolside seating",
  },
  {
    id: "p8",
    src: "https://picsum.photos/seed/pool2/1200/900",
    alt: "Pool view 2",
    caption: "Pool",
    subcaption: "Poolside seating",
  },
  {
    id: "p8",
    src: "https://picsum.photos/seed/pool2/1200/900",
    alt: "Pool view 2",
    caption: "Pool",
    subcaption: "Poolside seating",
  },
  {
    id: "p8",
    src: "https://picsum.photos/seed/pool2/1200/900",
    alt: "Pool view 2",
    caption: "Pool",
    subcaption: "Poolside seating",
  },
  {
    id: "p8",
    src: "https://picsum.photos/seed/pool2/1200/900",
    alt: "Pool view 2",
    caption: "Pool",
    subcaption: "Poolside seating",
  },
  {
    id: "p8",
    src: "https://picsum.photos/seed/pool2/1200/900",
    alt: "Pool view 2",
    caption: "Pool",
    subcaption: "Poolside seating",
  },
  {
    id: "p8",
    src: "https://picsum.photos/seed/pool2/1200/900",
    alt: "Pool view 2",
    caption: "Pool",
    subcaption: "Poolside seating",
  },
  {
    id: "p8",
    src: "https://picsum.photos/seed/pool2/1200/900",
    alt: "Pool view 2",
    caption: "Pool",
    subcaption: "Poolside seating",
  },
  {
    id: "p8",
    src: "https://picsum.photos/seed/pool2/1200/900",
    alt: "Pool view 2",
    caption: "Pool",
    subcaption: "Poolside seating",
  },
  {
    id: "p8",
    src: "https://picsum.photos/seed/pool2/1200/900",
    alt: "Pool view 2",
    caption: "Pool",
    subcaption: "Poolside seating",
  },
  {
    id: "p8",
    src: "https://picsum.photos/seed/pool2/1200/900",
    alt: "Pool view 2",
    caption: "Pool",
    subcaption: "Poolside seating",
  },
  {
    id: "p8",
    src: "https://picsum.photos/seed/pool2/1200/900",
    alt: "Pool view 2",
    caption: "Pool",
    subcaption: "Poolside seating",
  },
  {
    id: "p8",
    src: "https://picsum.photos/seed/pool2/1200/900",
    alt: "Pool view 2",
    caption: "Pool",
    subcaption: "Poolside seating",
  },
  {
    id: "p8",
    src: "https://picsum.photos/seed/pool2/1200/900",
    alt: "Pool view 2",
    caption: "Pool",
    subcaption: "Poolside seating",
  },
  {
    id: "p8",
    src: "https://picsum.photos/seed/pool2/1200/900",
    alt: "Pool view 2",
    caption: "Pool",
    subcaption: "Poolside seating",
  },
  {
    id: "p8",
    src: "https://picsum.photos/seed/pool2/1200/900",
    alt: "Pool view 2",
    caption: "Pool",
    subcaption: "Poolside seating",
  },

];

// ---------- Photo tour ----------
export interface TourImage {
  id: string;
  src: string;
  alt: string;
  size: "full" | "half";
}

export interface TourSection {
  id: string;
  title: string;
  details: string;
  thumb: string;
  images: TourImage[];
}

// pattern: F = full width photo, H = half width photo. The pattern repeats down the list.
function makeSection(
  id: string,
  title: string,
  details: string,
  pattern: string,
  files: string[]
): TourSection {
  return {
    id,
    title,
    details,
    thumb: `/images/${files[0]}`,
    images: files.map((file, i) => ({
      id: `${id}-${i + 1}`,
      src: `/images/${file}`,
      alt: `${title} photo ${i + 1}`,
      size: (pattern[i % pattern.length] === "F" ? "full" : "half") as TourImage["size"],
    })),
  };
}

// Replace the file names with yours (files live in public/images).
// Add or remove files so the count matches the reference.
export const tourSections: TourSection[] = [
  makeSection("living-room-1", "Living room 1", "Sofa · Air conditioning · Ceiling fan · TV", "FHH", [
    "1s.jpeg",
    "40.jpeg",
    "3s.jpeg",
  ]),
  makeSection("living-room-2", "Living room 2", "Ceiling fan · Hot tub", "FHH", [
    "2nd.jpeg",
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
  ]),
  makeSection(
    "full-kitchen",
    "Full kitchen",
    "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery",
    "HH",
    ["7.jpeg", "8.jpeg"]
  ),
  makeSection(
    "bedroom",
    "Bedroom",
    "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi",
    "FHH",
    ["9.jpeg", "10.jpeg", "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg"]
  ),
  // Details text for the sections below was not in the screenshots, copy it from the reference.
  makeSection("full-bathroom", "Full bathroom", "", "FHH", [
    "15.jpeg"
    
  ]),
  makeSection("gym", "Gym", "", "FHH", ["16.jpeg", "17.jpeg", "18.jpeg", "19.jpeg", "20.jpeg"]),
  makeSection("exterior", "Exterior", "", "FHH", ["21.jpeg", "22.jpeg", "23.jpeg","23.jpeg", "24.jpeg", "26.jpeg"]),
  makeSection("pool", "Pool", "", "FHH", ["27.jpeg", "28.jpeg", "29.jpeg"]),
  makeSection("additional-photos", "Additional photos", "", "FHH", [
    "30.jpeg",
    "31.jpeg",
    "32.jpeg",
    "33.jpeg",
    "34.jpeg",
    "35.jpeg",
    "36.jpeg",
    "37.jpeg",
    "39.jpeg",
    "40.jpeg"
  ]),
];

// Which tour photo each hero photo opens on (hero order: big, top-middle, top-right, bottom-middle, bottom-right).
export const heroTourTargets: string[] = [
  "living-room-2-4",
  "living-room-2-1",
  "living-room-2-2",
  "bedroom-1",
  "exterior-1",
];

// Flat list used by the single photo viewer (lightbox).
export const tourPhotos: Photo[] = tourSections.flatMap((section) =>
  section.images.map((img) => ({
    id: img.id,
    src: img.src,
    alt: img.alt,
    caption: section.title,
  }))
);

// Hero grid pulls the same 5 photos it links to in the tour, instead of separate placeholders.
export const heroPhotos: Photo[] = heroTourTargets.map((id) => {
  const found = tourPhotos.find((p) => p.id === id);
  if (!found) throw new Error(`heroTourTargets: no tour photo with id "${id}"`);
  return found;
});
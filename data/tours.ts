export interface Tour {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  duration: string;
  price: number;
  priceNote: string;
  maxPeople: number;
  highlights: string[];
  includes: string[];
  image: string;
  featured: boolean;
  tag?: string;
  itinerary: string;
}

// Prices per boat. Fuel & VAT included. Multiple boat sizes available — contact us for large groups.
// Prices are fixed. Departures from Como city only.
export const tours: Tour[] = [
  {
    id: "tour-1h",
    slug: "lake-como-1-hour-tour",
    name: "1 Hour Discovery Tour",
    shortDescription: "A quick introduction to Lake Como's most famous villas along the first basin.",
    description:
      "The perfect tour if you have limited time. We navigate the first basin towards Laglio, passing Villa Olmo, Villa d'Este, Villa Pizzo and Villa Oleandra — better known as George Clooney's Lake Como residence. No land stops, pure lake experience.",
    duration: "1 hour",
    price: 220,
    priceNote: "per boat · fuel & VAT included",
    maxPeople: 12,
    highlights: ["Villa Olmo", "Villa d'Este", "Villa Pizzo", "Villa Oleandra (Clooney)"],
    includes: ["Private boat", "Certified skipper", "Fuel & VAT"],
    image: "/images/tour-villa.jpg",
    featured: false,
    itinerary: "First basin towards Laglio. Villa Olmo, Villa d'Este, Villa Pizzo, Villa Oleandra (Clooney). No stops.",
  },
  {
    id: "tour-2h",
    slug: "lake-como-2-hour-tour",
    name: "2 Hour West Branch Tour",
    shortDescription: "The western branch of the lake: the Nesso Waterfall, Torno and Laglio villages.",
    description:
      "A two-hour cruise along the western branch of Lake Como. We navigate past the villages of Torno and Laglio and reach the spectacular Nesso Waterfall — one of the lake's most dramatic natural features. No land stops.",
    duration: "2 hours",
    price: 400,
    priceNote: "per boat · fuel & VAT included",
    maxPeople: 12,
    highlights: ["Nesso Waterfall", "Village of Torno", "Village of Laglio", "Western branch"],
    includes: ["Private boat", "Certified skipper", "Fuel & VAT"],
    image: "/images/tour-morning.jpg",
    featured: false,
    itinerary: "West branch to Nesso Waterfall. Villages of Torno and Laglio. No land stops.",
  },
  {
    id: "tour-3h",
    slug: "lake-como-3-hour-tour",
    name: "3 Hour Grand Tour",
    shortDescription: "First and second basin, Villa Balbianello, Nesso Waterfall and an approach to Bellagio.",
    description:
      "Our most popular tour covers both the first and second basins of the lake. We pass Villa Balbianello, Villa Cassinella and the Nesso Waterfall before approaching Bellagio from the water. Includes one stop.",
    duration: "3 hours",
    price: 650,
    priceNote: "per boat · fuel & VAT included",
    maxPeople: 12,
    highlights: ["Villa Balbianello", "Villa Cassinella", "Nesso Waterfall", "Bellagio approach"],
    includes: ["Private boat", "Certified skipper", "Fuel & VAT", "1 stop"],
    image: "/images/tour-classic.jpg",
    featured: true,
    tag: "Most Popular",
    itinerary: "First and second basin. Villa Balbianello, Villa Cassinella, Nesso Waterfall, approach to Bellagio. 1 stop.",
  },
  {
    id: "tour-4h",
    slug: "lake-como-4-hour-tour",
    name: "4 Hour Centre Lake Tour",
    shortDescription: "Full centre lake reaching Bellagio and Varenna, with Isola Comacina and Argegno.",
    description:
      "Four hours to reach the true heart of Lake Como. We navigate to Bellagio and Varenna passing Villa Balbianello, Isola Comacina, Nesso and Argegno. Includes one land stop to explore a village.",
    duration: "4 hours",
    price: 850,
    priceNote: "per boat · fuel & VAT included",
    maxPeople: 12,
    highlights: ["Bellagio", "Varenna", "Isola Comacina", "Argegno"],
    includes: ["Private boat", "Certified skipper", "Fuel & VAT", "1 land stop"],
    image: "/images/tour-bellagio.jpg",
    featured: true,
    tag: "Recommended",
    itinerary: "Full centre lake to Bellagio and Varenna. Villa Balbianello, Isola Comacina, Nesso, Argegno. 1 land stop.",
  },
  {
    id: "tour-5h",
    slug: "lake-como-5-hour-tour",
    name: "5 Hour Iconic Tour",
    shortDescription: "All the iconic highlights — Bellagio, Varenna, Balbianello and Comacina — with 2 stops and a lunch break.",
    description:
      "Five hours covering all the iconic landmarks of Lake Como. Bellagio, Varenna, Villa Balbianello and Isola Comacina, with two stops including a lunch break at a lakeside restaurant (lunch cost not included).",
    duration: "5 hours",
    price: 950,
    priceNote: "per boat · fuel & VAT included",
    maxPeople: 12,
    highlights: ["Bellagio", "Varenna", "Villa Balbianello", "Isola Comacina"],
    includes: ["Private boat", "Certified skipper", "Fuel & VAT", "2 stops", "Lunch stop (lunch not included)"],
    image: "/images/tour-villa.jpg",
    featured: false,
    itinerary: "All iconic highlights with 2 stops. Bellagio, Varenna, Balbianello, Comacina. Lunch stop included (lunch not included in price).",
  },
  {
    id: "tour-6h",
    slug: "lake-como-6-hour-tour",
    name: "6 Hour Full Lake",
    shortDescription: "Six hours on Lake Como with a personalised itinerary and multiple stops.",
    description:
      "A full six-hour experience across Lake Como. Together with your skipper you choose the itinerary and the stops — all iconic destinations are within reach. Ideal for groups who want to explore at their own pace.",
    duration: "6 hours",
    price: 1100,
    priceNote: "per boat · fuel & VAT included",
    maxPeople: 12,
    highlights: ["Full lake itinerary", "Multiple stops", "Personalised route", "All iconic destinations"],
    includes: ["Private boat", "Certified skipper", "Fuel & VAT", "Multiple stops"],
    image: "/images/tour-morning.jpg",
    featured: false,
    itinerary: "Full iconic lake, personalised itinerary, multiple stops.",
  },
  {
    id: "tour-8h",
    slug: "lake-como-8-hour-tour",
    name: "8 Hour Complete Day",
    shortDescription: "The entire lake in one day: 3+ stops, swimming, lunch and a fully customisable itinerary.",
    description:
      "The ultimate Lake Como experience. A full day on the water with 3 or more stops, time for swimming, a proper lunch ashore and an itinerary shaped entirely around what you want to see. No rush, no compromise.",
    duration: "8 hours",
    price: 1300,
    priceNote: "per boat · fuel & VAT included",
    maxPeople: 12,
    highlights: ["Entire lake", "3+ stops", "Lunch & swimming", "Fully customisable"],
    includes: ["Private boat", "Certified skipper", "Fuel & VAT", "3+ stops", "Swimming & lunch time"],
    image: "/images/tour-family.jpg",
    featured: true,
    tag: "Best Value",
    itinerary: "Entire lake, 3+ stops, lunch, swimming. Fully customisable itinerary.",
  },
  {
    id: "tour-tramonto",
    slug: "sunset-cruise-lake-como",
    name: "Sunset Cruise",
    shortDescription: "Evening navigation along the western branch as the sun sets over the Alps.",
    description:
      "An evening cruise along the western branch of Lake Como, departing typically between 18:00 and 20:00. Watch the light change over the mountains and the water as the day ends. A naturally romantic experience.",
    duration: "1.5 hours",
    price: 350,
    priceNote: "per boat · fuel & VAT included",
    maxPeople: 12,
    highlights: ["Alpine sunset", "Evening navigation", "Golden hour", "Departure 18:00–20:00"],
    includes: ["Private boat", "Certified skipper", "Fuel & VAT"],
    image: "/images/tour-sunset.jpg",
    featured: true,
    tag: "Romantic",
    itinerary: "Western branch evening navigation. Departure typically 18:00–20:00.",
  },
  {
    id: "tour-cena",
    slug: "dinner-cruise-lake-como",
    name: "Dinner Cruise",
    shortDescription: "Boat to a lakeside restaurant, dinner, then a night-time return across the lake.",
    description:
      "We navigate to a lakeside restaurant for dinner, then return across the lake at night. We handle the restaurant reservation. Approximately 4 hours in total. Dinner cost is not included in the boat price.",
    duration: "~4 hours",
    price: 700,
    priceNote: "per boat · fuel & VAT included — dinner not included",
    maxPeople: 12,
    highlights: ["Lakeside restaurant", "Night navigation return", "Dinner reservation assistance", "~4 hours"],
    includes: ["Private boat", "Certified skipper", "Fuel & VAT", "Restaurant reservation assistance"],
    image: "/images/tour-bellagio.jpg",
    featured: false,
    tag: "Special",
    itinerary: "Navigation to lakeside restaurant, dinner, night return. ~4 hours. Dinner cost not included.",
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}

export function getFeaturedTours(): Tour[] {
  return tours.filter((t) => t.featured);
}

export function getAllTours(): Tour[] {
  return tours;
}

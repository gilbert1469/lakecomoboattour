export type TourCategory = "boat-tour" | "water-sports";

export interface BoatPriceRow {
  speedboat: number;
  luxuryBoat: number;
  venetianBoat: number;
}

export interface Tour {
  id: string;
  slug: string;
  name: string;
  category: TourCategory;
  duration: string;
  /** null = "Quotation on request" */
  priceFrom: number | null;
  priceNote: string;
  /** Absent = don't show a pax-range line for this tour. */
  paxNote?: string;
  boats: string[];
  /** Defaults to "Boats available" when absent. */
  boatsLabel?: string;
  shortDescription: string;
  description: string;
  includes: string[];
  image: string;
  featured: boolean;
  tag?: string;
  /** Per-boat price table for the detail page. Absent = quotation on request for every boat. */
  pricing?: BoatPriceRow;
}

// Standard copy used on every regular boat-tour card/detail page.
const STANDARD_PAX_NOTE = "Available from 1 to 50 pax depending on the chosen boat";
const STANDARD_BOATS: string[] = ["Speedboat", "Luxury Boat", "Exclusive Venetian Boat", "Private Ferry"];
const SUGGESTED_BOATS: string[] = ["Luxury Boat", "Exclusive Venetian Boat", "Riva"];
const STANDARD_PRICE_NOTE = "per boat · fuel & VAT included";
const STANDARD_INCLUDES = ["Private boat", "Certified skipper", "Fuel & VAT included", "Complimentary luggage storage available"];

// Boat classes bookable on every standard tour, with capacity — shown on detail pages.
export const boatOptions = [
  { name: "Speedboat", maxPax: 6 },
  { name: "Luxury Boat", maxPax: 6 },
  { name: "Exclusive Venetian Boat", maxPax: 10 },
  { name: "Private Ferry", maxPax: "25 or 50", quotationOnly: true },
] as const;

export const tours: Tour[] = [
  {
    id: "tour-highlights",
    slug: "lake-como-highlights",
    name: "Lake Como Highlights",
    category: "boat-tour",
    duration: "1 hour",
    priceFrom: 300,
    priceNote: STANDARD_PRICE_NOTE,
    paxNote: STANDARD_PAX_NOTE,
    boats: STANDARD_BOATS,
    shortDescription:
      "An hour on Lake Como is just enough to understand why people keep coming back — the western shore out, the eastern shore back.",
    description:
      "An hour on Lake Como is just enough to understand why people keep coming back. Departing from Como, you'll cruise the western shore through Cernobbio, Moltrasio and Laglio, returning via the eastern bank past Torno, Villa Pliniana and Blevio — historic villas, mountain backdrops and authentic villages gliding by one after another. A perfect first taste of the lake.",
    includes: STANDARD_INCLUDES,
    image: "/images/tour-classic.jpg",
    featured: false,
    pricing: { speedboat: 300, luxuryBoat: 345, venetianBoat: 405 },
  },
  {
    id: "tour-surroundings",
    slug: "como-and-surroundings",
    name: "Como & Surroundings",
    category: "boat-tour",
    duration: "2 hours",
    priceFrom: 500,
    priceNote: STANDARD_PRICE_NOTE,
    paxNote: STANDARD_PAX_NOTE,
    boats: STANDARD_BOATS,
    shortDescription:
      "Two hours to explore beyond Como's first basin, reaching the dramatic Orrido di Nesso gorge and back along the eastern shore.",
    description:
      "Two hours give you room to breathe and explore beyond Como's first basin. Heading west through Cernobbio, Moltrasio and Laglio, the route continues to the dramatic Orrido di Nesso gorge before looping back along the eastern shore past Torno, Villa Pliniana and Blevio. Historic villas, rugged mountain scenery and quiet lakeside villages — a proper introduction to the lake, at a relaxed pace.",
    includes: STANDARD_INCLUDES,
    image: "/images/tour-morning.jpg",
    featured: false,
    pricing: { speedboat: 500, luxuryBoat: 575, venetianBoat: 675 },
  },
  {
    id: "tour-heart",
    slug: "heart-of-the-lake",
    name: "Heart of the Lake",
    category: "boat-tour",
    duration: "3 hours",
    priceFrom: 700,
    priceNote: STANDARD_PRICE_NOTE,
    paxNote: STANDARD_PAX_NOTE,
    boats: STANDARD_BOATS,
    shortDescription:
      "Reach the lake's most iconic spots — Villa del Balbianello and Bellagio — without committing to a full day.",
    description:
      "Three hours on the water strike the right balance — enough time to reach the lake's most iconic spots without committing to a full day. From Como, the route heads north along the western shore through Cernobbio, Moltrasio and Laglio, arriving at the magnificent Villa del Balbianello. From there, you'll continue to Bellagio, set against dramatic mountain scenery at the very heart of the lake. The return leg follows the eastern shore past Torno, Villa Pliniana and Blevio, offering a completely different perspective on the way back to Como.",
    includes: STANDARD_INCLUDES,
    image: "/images/tour-villa.jpg",
    featured: true,
    tag: "Most Popular",
    pricing: { speedboat: 700, luxuryBoat: 805, venetianBoat: 945 },
  },
  {
    id: "tour-half-day",
    slug: "half-day-tour",
    name: "Half Day Tour",
    category: "boat-tour",
    duration: "4 hours",
    priceFrom: 900,
    priceNote: STANDARD_PRICE_NOTE,
    paxNote: STANDARD_PAX_NOTE,
    boats: STANDARD_BOATS,
    shortDescription:
      "Villa del Balbianello, Bellagio and Varenna — colourful houses, historic villas and striking mountain scenery.",
    description:
      "Four hours give you the space to go beyond the postcard views and get a genuine feel for the lake. Departing from Como, the route follows the western shore through Cernobbio, Moltrasio and Laglio to Villa del Balbianello, then continues to Bellagio before crossing to Varenna — colourful houses, historic villas and some of the most striking mountain scenery on the entire lake. The return journey along the eastern shore winds through hidden villages, Villa Pliniana, Torno and Blevio. Four hours that never feel rushed.",
    includes: STANDARD_INCLUDES,
    image: "/images/blog-things-to-do.jpg",
    featured: false,
    pricing: { speedboat: 900, luxuryBoat: 1035, venetianBoat: 1215 },
  },
  {
    id: "tour-six-hours",
    slug: "six-hours-of-wonder",
    name: "Six Hours of Wonder",
    category: "boat-tour",
    duration: "6 hours",
    priceFrom: 1300,
    priceNote: STANDARD_PRICE_NOTE,
    paxNote: STANDARD_PAX_NOTE,
    boats: STANDARD_BOATS,
    shortDescription:
      "The same iconic stretch as the Half Day Tour, with time to actually stop, swim and linger at a viewpoint.",
    description:
      "Six hours give you the freedom to do the lake properly. The route covers the same iconic stretch as the half day tour — western shore, Villa del Balbianello, Bellagio, Varenna — but with time to actually stop. Swim off the boat in a quiet bay, linger at a viewpoint. No rushing between landmarks, just the lake at its best. The right amount of time to see everything and still feel like you've enjoyed it.",
    includes: [...STANDARD_INCLUDES, "Swimming stop"],
    image: "/images/hero.jpg",
    featured: false,
    pricing: { speedboat: 1300, luxuryBoat: 1495, venetianBoat: 1495 },
  },
  {
    id: "tour-full-day",
    slug: "full-day-tour",
    name: "Full Day Tour",
    category: "boat-tour",
    duration: "8 hours",
    priceFrom: 1500,
    priceNote: STANDARD_PRICE_NOTE,
    paxNote: STANDARD_PAX_NOTE,
    boats: STANDARD_BOATS,
    shortDescription:
      "One boat, no fixed agenda. Departing any time between 10am and 6pm, north to south, with as many stops as you want.",
    description:
      "Eight hours, one boat, no fixed agenda. Departing any time between 10am and 6pm, this is the most flexible way to experience Lake Como — north to south, with as many stops as you want along the way. Pull into charming villages, drift past iconic villas, swim in clear water off secluded shores and take your time with the scenery. Mountains, greenery, light changing through the day. No rushing, no groups, no compromises.",
    includes: [...STANDARD_INCLUDES, "Fully flexible itinerary", "Swimming stops"],
    image: "/images/about-lake.jpg",
    featured: false,
    tag: "Best Value",
    pricing: { speedboat: 1500, luxuryBoat: 1725, venetianBoat: 1820 },
  },
  {
    id: "tour-sunset",
    slug: "sunset-tour",
    name: "Sunset Tour",
    category: "boat-tour",
    duration: "1.5 hours",
    priceFrom: 500,
    priceNote: STANDARD_PRICE_NOTE,
    paxNote: STANDARD_PAX_NOTE,
    boats: STANDARD_BOATS,
    shortDescription:
      "The most scenic stretch of the lake at the most beautiful time of day — prosecco in hand.",
    description:
      "There is no better way to end a day on Lake Como than from the water. As the light softens and the mountains turn golden, you'll cruise the most scenic stretch of the lake at the most beautiful time of day — prosecco in hand. No agenda, no rush — just the lake, the colours and the moment. Departure time varies by season to catch the best light. Prosecco included.",
    includes: [...STANDARD_INCLUDES, "Prosecco on board"],
    image: "/images/tour-sunset.jpg",
    featured: true,
    tag: "Romantic",
    pricing: { speedboat: 500, luxuryBoat: 575, venetianBoat: 675 },
  },
  {
    id: "tour-family",
    slug: "family-tour",
    name: "Family Tour",
    category: "boat-tour",
    duration: "4 hours recommended",
    priceFrom: 1000,
    priceNote: STANDARD_PRICE_NOTE,
    boats: SUGGESTED_BOATS,
    boatsLabel: "Boats suggested",
    shortDescription:
      "Designed with children in mind — fewer landmarks, more fun, with inflatables and snacks on board.",
    description:
      "A boat trip the whole family will remember. The route is designed with children in mind — fewer landmarks, more fun. Extra stops for swimming, inflatables in the water and plenty of time to just enjoy being on the lake together. Includes: inflatables, snorkelling masks, light snacks and soft drinks on board. Must be booked in advance. Customisable on request (duration, stops, extras).",
    includes: [...STANDARD_INCLUDES, "Inflatables & snorkelling masks", "Light snacks & soft drinks"],
    image: "/images/tour-family.jpg",
    featured: true,
    tag: "Family Favourite",
    pricing: { speedboat: 1000, luxuryBoat: 1135, venetianBoat: 1315 },
  },
  {
    id: "tour-custom",
    slug: "custom-tour",
    name: "Custom Tour",
    category: "boat-tour",
    duration: "Tailored to you",
    priceFrom: null,
    priceNote: "",
    paxNote: STANDARD_PAX_NOTE,
    boats: STANDARD_BOATS,
    shortDescription:
      "Tell us where you want to go and how long you want to stay out — we'll build the route around you.",
    description:
      "A custom journey designed around your preferences. Tell us where you want to go, how long you want to stay out and what you want to see — we'll build the route around you. Whether it's a specific villa, a hidden bay or a combination of stops no standard tour covers, we'll make it happen. Get in touch and we'll put together a proposal.",
    includes: STANDARD_INCLUDES,
    image: "/images/blog-taxi-boat.jpg",
    featured: false,
    tag: "On Request",
  },
  {
    id: "tour-wedding",
    slug: "wedding-tour",
    name: "Wedding Tour",
    category: "boat-tour",
    duration: "Tailored to you",
    priceFrom: null,
    priceNote: "",
    boats: SUGGESTED_BOATS,
    boatsLabel: "Boats suggested",
    shortDescription:
      "Arriving by private boat makes it unforgettable — from guest transfers to a scenic cruise for the wedding party.",
    description:
      "Lake Como is one of the most romantic settings in the world — and arriving by private boat makes it unforgettable. Whether you're looking for a boat to transfer guests between venues, a scenic cruise for the wedding party or something completely bespoke, we'll tailor every detail to your day. Contact us to discuss your plans.",
    includes: STANDARD_INCLUDES,
    image: "/images/wedding.png",
    featured: false,
    tag: "On Request",
  },
  {
    id: "tour-photoshoot",
    slug: "photoshoot-tour",
    name: "Photoshoot Tour",
    category: "boat-tour",
    duration: "Tailored to you",
    priceFrom: null,
    priceNote: "",
    boats: SUGGESTED_BOATS,
    boatsLabel: "Boats suggested",
    shortDescription:
      "Iconic villas, dramatic mountains and light photographers dream about — our skippers know every angle of the lake.",
    description:
      "Lake Como offers an extraordinary backdrop — iconic villas, dramatic mountains, crystal-clear water and light that photographers dream about. Our skippers know every angle of the lake and will position the boat exactly where you need it, for as long as you need it. Ideal for fashion shoots, elopements, content creation and professional photography. Get in touch to plan your session.",
    includes: STANDARD_INCLUDES,
    image: "/images/photoshoot.png",
    featured: false,
    tag: "On Request",
  },
  {
    id: "tour-watersport",
    slug: "boat-tour-water-sport-lesson",
    name: "Boat Tour 4h + Water Sport Lesson (Kite or WingFoil)",
    category: "water-sports",
    duration: "4 hours",
    priceFrom: 1100,
    priceNote: "per boat · fuel & VAT included",
    paxNote: "Max 6 pax",
    boats: ["Speedboat"],
    shortDescription:
      "A fast-paced cruise from Como past Isola Comacina and Villa Oleandra, then a kite or wingfoil lesson in the lake's wind zone.",
    description:
      "Pickup at 13:00. A fast-paced cruise from Como along the western shore — Cernobbio, Torno, Laglio, Nesso and its famous waterfall, Argegno, Isola Comacina (the only island on Lake Como), Villa Olmo, Villa D'Este, Villa Pizzo, Villa Oleandra (George Clooney's residence), Villa La Casinella, Villa del Balbianello, Bellagio and Varenna — no stops, no going ashore, just the lake passing by at its finest. From Bellagio the boat heads north to the wind zone above the lake, where your kite or wingfoil lesson begins. From the water you'll see the magnificent Castello di Santa Maria Rezzonico and the villages of Cremia. This product is available on Speedboat only, max 6 pax.",
    includes: ["Private speedboat", "Certified skipper", "Fuel & VAT included", "Kite or WingFoil lesson", "Pickup at 13:00", "Complimentary luggage storage available"],
    image: "/images/watersport-tour.jpg",
    featured: false,
    tag: "Speedboat Only",
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

export function getBoatTours(): Tour[] {
  return tours.filter((t) => t.category === "boat-tour");
}

export function getWaterSportTours(): Tour[] {
  return tours.filter((t) => t.category === "water-sports");
}

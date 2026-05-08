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
    shortDescription: "A scenic cruise along the western shore of the first basin past Como's most iconic villas — Villa Olmo, Villa d'Este, Villa Pizzo and Villa Oleandra.",
    description:
      "Un primo assaggio del Lago di Como navigando lungo la sponda occidentale del primo bacino. Dal molo di Como si costeggia la riva ammirando Villa Olmo, elegante dimora neoclassica di proprietà del Comune, Villa D'Este — uno degli hotel di lusso più famosi al mondo con il suo parco terrazzato sul lago — e Villa Pizzo, residenza nobiliare del XVII secolo arroccata sul promontorio di Cernobbio. Si raggiunge infine Laglio, dove si trova Villa Oleandra, la celebre residenza privata di George Clooney. Navigazione continua, nessuna sosta a terra.",
    duration: "1 hour",
    price: 220,
    priceNote: "per boat · fuel & VAT included",
    maxPeople: 12,
    highlights: ["Villa Olmo", "Villa d'Este", "Villa Pizzo", "Villa Oleandra — George Clooney's residence"],
    includes: ["Private boat", "Certified skipper", "Fuel & VAT"],
    image: "/images/tour-villa.jpg",
    featured: false,
    itinerary: "First basin western shore. Villa Olmo, Villa d'Este, Villa Pizzo, Villa Oleandra (Clooney). No stops.",
  },
  {
    id: "tour-2h",
    slug: "lake-como-2-hour-tour",
    name: "2 Hour West Branch Tour",
    shortDescription: "Two hours exploring the western branch, including the spectacular Nesso Waterfall and the villages of Blevio, Torno and Carate Urio.",
    description:
      "The 2-hour tour adds one of the most spectacular natural attractions of the lake to the first basin route: the Nesso Waterfall, where the Nose torrent plunges through a rocky gorge directly into the lake — visible only from the water. Along the way you will pass the villages of Blevio, Torno and Carate Urio and admire the most iconic villas of the western shore, including Villa Versace (now Villa Fontanelle) and Villa Pliniana, built in 1573 and famous for its intermittent spring cited by Pliny the Younger and Leonardo da Vinci. Continuous navigation, no land stops.",
    duration: "2 hours",
    price: 400,
    priceNote: "per boat · fuel & VAT included",
    maxPeople: 12,
    highlights: ["Nesso Waterfall", "Villa Pliniana (1573)", "Villa Fontanelle (ex Villa Versace)", "Villages of Blevio and Torno"],
    includes: ["Private boat", "Certified skipper", "Fuel & VAT"],
    image: "/images/tour-morning.jpg",
    featured: false,
    itinerary: "Western branch. Blevio, Torno, Carate Urio. Nesso Waterfall, Villa Fontanelle, Villa Pliniana. No land stops.",
  },
  {
    id: "tour-3h",
    slug: "lake-como-3-hour-tour",
    name: "3 Hour Grand Tour",
    shortDescription: "Heart of the lake: Villa del Balbianello, Nesso Waterfall and Villa La Cassinella. One stop included.",
    description:
      "The 3-hour tour reaches the heart of the lake. After crossing the first basin with its historic villas and the Nesso Waterfall, you arrive at Villa del Balbianello in Lenno — built in 1787 on an ancient Franciscan monastery, now owned by FAI and famous worldwide for its terraced gardens and as a filming location for Star Wars Episode II and Casino Royale. You then navigate towards Villa La Cassinella, considered one of the most exclusive private villas on the lake with its pool, tennis courts and inner courtyard — visible only from the water. One land stop in a centre-lake village. Return to Como.",
    duration: "3 hours",
    price: 650,
    priceNote: "per boat · fuel & VAT included",
    maxPeople: 12,
    highlights: ["Villa del Balbianello — Star Wars & Casino Royale location", "Nesso Waterfall", "Villa La Cassinella (private, lake view only)", "1 land stop"],
    includes: ["Private boat", "Certified skipper", "Fuel & VAT", "1 stop"],
    image: "/images/tour-classic.jpg",
    featured: true,
    tag: "Most Popular",
    itinerary: "First basin, Nesso Waterfall, Villa del Balbianello (Lenno), Villa La Cassinella. 1 land stop.",
  },
  {
    id: "tour-4h",
    slug: "lake-como-4-hour-tour",
    name: "4 Hour Centre Lake Tour",
    shortDescription: "Full centre lake tour including Isola Comacina, Villa Balbiano and a stop in Bellagio — the pearl of the lake.",
    description:
      "A complete tour of the centre lake with a stop in Bellagio, the most famous village on Lake Como, nicknamed the pearl of the lake for its position on the promontory dividing the two branches. You navigate all the villas of the first basin, the Nesso Waterfall, Villa del Balbianello, Villa La Cassinella, Isola Comacina — the only island on Lake Como, with a millenary history including a 12th-century papal curse — and Villa Balbiano, known as the filming location for House of Gucci. Stop in Bellagio to walk the medieval alleys, the gardens of Villa Melzi and the panoramic terraces. Return to Como.",
    duration: "4 hours",
    price: 850,
    priceNote: "per boat · fuel & VAT included",
    maxPeople: 12,
    highlights: ["Bellagio — pearl of the lake", "Isola Comacina", "Villa Balbiano — House of Gucci location", "Villa del Balbianello"],
    includes: ["Private boat", "Certified skipper", "Fuel & VAT", "1 land stop"],
    image: "/images/tour-bellagio.jpg",
    featured: true,
    tag: "Recommended",
    itinerary: "First basin, Nesso Waterfall, Villa Balbianello, Isola Comacina, Villa Balbiano (House of Gucci), Bellagio stop.",
  },
  {
    id: "tour-5h",
    slug: "lake-como-5-hour-tour",
    name: "5 Hour Iconic Tour",
    shortDescription: "All the iconic highlights plus a second stop in Varenna or Menaggio with time for lunch on the lake.",
    description:
      "The 5-hour tour adds a second stop to the full centre lake itinerary, with a choice between Varenna and Menaggio and enough time for lunch at a lakeside restaurant. Varenna is one of the most romantic villages on the lake, with its medieval castle, Villa Monastero — a former Cistercian convent with botanical gardens open to the public — and Villa Cipressi. Menaggio offers an elegant lakefront promenade and the opportunity to explore the historic centre. Two stops total, relaxed pace. Return to Como.",
    duration: "5 hours",
    price: 950,
    priceNote: "per boat · fuel & VAT included",
    maxPeople: 12,
    highlights: ["Varenna — Villa Monastero & medieval castle", "Menaggio lakefront", "Lunch stop included", "All centre lake highlights"],
    includes: ["Private boat", "Certified skipper", "Fuel & VAT", "2 stops", "Lunch stop (lunch not included)"],
    image: "/images/tour-villa.jpg",
    featured: false,
    itinerary: "Full centre lake itinerary + 2nd stop in Varenna or Menaggio. Lunch stop included. 2 stops total.",
  },
  {
    id: "tour-6h",
    slug: "lake-como-6-hour-tour",
    name: "6 Hour Full Lake",
    shortDescription: "Personalised full iconic lake tour with 3 stops. Includes Villa Carlotta, Argegno and all the classic destinations.",
    description:
      "A fully personalised tour covering the entire iconic part of the lake, with the itinerary agreed in advance and three stops of your choice. In addition to all the destinations of the previous tours, you can include Villa Carlotta in Tremezzo — one of the most beautiful botanical gardens in Italy, with azaleas, rhododendrons and neoclassical sculpture collections — and the village of Argegno, departure point of the cable car to Pigra with panoramic views of the Alps. Ideal for those who want to discover the lake at a leisurely pace without missing the main highlights. Return to Como.",
    duration: "6 hours",
    price: 1100,
    priceNote: "per boat · fuel & VAT included",
    maxPeople: 12,
    highlights: ["Villa Carlotta — botanical gardens Tremezzo", "Argegno & Pigra cable car", "3 stops of your choice", "Fully personalised itinerary"],
    includes: ["Private boat", "Certified skipper", "Fuel & VAT", "3 stops"],
    image: "/images/tour-morning.jpg",
    featured: false,
    itinerary: "Full iconic lake, personalised itinerary, 3 stops of your choice. Villa Carlotta option, Argegno.",
  },
  {
    id: "tour-8h",
    slug: "lake-como-8-hour-tour",
    name: "8 Hour Complete Day",
    shortDescription: "The entire lake from Como to the northern branch. Bellano Gorge, Varenna, 3+ stops, lunch and swimming included.",
    description:
      "A full day on the lake. The entire stretch of water from Como to the northern branch, with the possibility of reaching Bellano and its Orrido — a natural gorge carved by the Pioverna torrent, visitable on suspended walkways — and Varenna. Lunch included at a lakeside restaurant agreed in advance. Three or more land stops, swimming in the lake at the quietest spots. Completely customisable itinerary based on the group's interests. Return to Como.",
    duration: "8 hours",
    price: 1300,
    priceNote: "per boat · fuel & VAT included",
    maxPeople: 12,
    highlights: ["Bellano Orrido — suspended walkways", "Entire lake north to south", "Lunch included", "Swimming stop & 3+ land stops"],
    includes: ["Private boat", "Certified skipper", "Fuel & VAT", "3+ stops", "Swimming & lunch time"],
    image: "/images/tour-family.jpg",
    featured: true,
    tag: "Best Value",
    itinerary: "Entire lake to northern branch. Bellano Orrido, Varenna. 3+ stops, lunch, swimming. Fully customisable.",
  },
  {
    id: "tour-tramonto",
    slug: "sunset-cruise-lake-como",
    name: "Sunset Cruise",
    shortDescription: "A 1.5-hour evening cruise along the first basin as the Alps and villas turn red and gold at sunset.",
    description:
      "An evening navigation along the first basin in the light of the sunset. The Alps and villas turn red and gold as the lake calms after the daytime traffic. The tour departs around 18:00 and returns around 19:30–20:00, cruising past Villa d'Este, Villa Oleandra and the villages of the first basin in a completely different atmosphere to the daytime tours. Ideal for couples and for those spending just one evening in Como.",
    duration: "1.5 hours",
    price: 350,
    priceNote: "per boat · fuel & VAT included",
    maxPeople: 12,
    highlights: ["Alpine sunset", "Villa d'Este & Villa Oleandra by evening light", "Departure ~18:00", "Ideal for couples"],
    includes: ["Private boat", "Certified skipper", "Fuel & VAT"],
    image: "/images/tour-sunset.jpg",
    featured: true,
    tag: "Romantic",
    itinerary: "First basin evening navigation. Villa d'Este, Villa Oleandra. Departure ~18:00, return ~19:30–20:00.",
  },
  {
    id: "tour-cena",
    slug: "dinner-cruise-lake-como",
    name: "Dinner Cruise",
    shortDescription: "Evening navigation to a lakeside restaurant for dinner, then a night return to Como. Dinner not included in price.",
    description:
      "The boat departs in the late afternoon from Como and reaches one of our partner lakeside restaurants by water. After dinner, return to Como navigating by night with the lake illuminated by the reflections of the villages. Dinner cost not included in the tour price. Departure time and restaurant agreed in advance.",
    duration: "~4 hours",
    price: 700,
    priceNote: "per boat · fuel & VAT included — dinner not included",
    maxPeople: 12,
    highlights: ["Lakeside restaurant by boat", "Night navigation return", "Villages reflected on the water", "Dinner reservation assistance"],
    includes: ["Private boat", "Certified skipper", "Fuel & VAT", "Restaurant reservation assistance"],
    image: "/images/tour-bellagio.jpg",
    featured: false,
    tag: "Special",
    itinerary: "Late afternoon departure, navigation to partner lakeside restaurant, dinner, night return to Como. ~4 hours.",
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

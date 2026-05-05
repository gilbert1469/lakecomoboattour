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
}

export const tours: Tour[] = [
  {
    id: "tour-classico-lago",
    slug: "classic-lake-como-tour",
    name: "Classic Lake Como Tour",
    shortDescription: "The essential cruise to discover Lake Como's historic villas and most beautiful villages.",
    description:
      "Step aboard and let the timeless beauty of Lake Como take your breath away. You'll glide past noble villas, botanical gardens overlooking the water, and charming fishing villages. Your skipper will share stories, anecdotes and fascinating facts that make this lake truly unique. Suitable for families, elderly guests and anyone who wants an authentic experience.",
    duration: "2 hours",
    price: 280,
    priceNote: "up to 6 people",
    maxPeople: 6,
    highlights: [
      "Villa del Balbianello",
      "Varenna & Bellagio",
      "Tremezzo & Villa Carlotta",
      "Como historic centre",
    ],
    includes: ["Private boat", "Certified skipper", "Water & welcome drink", "Optional audio guide"],
    image: "/images/tours/tour-classico.jpg",
    featured: true,
    tag: "Most Popular",
  },
  {
    id: "tour-ville-storiche",
    slug: "historic-villas-tour",
    name: "Historic Villas Tour",
    shortDescription: "An exclusive journey past Lake Como's most iconic villas, from Balbianello to Carlotta.",
    description:
      "An itinerary dedicated to the architectural wonders that made Lake Como famous worldwide. Admire from the water the facades of noble villas, terraced gardens and historic boat houses. A special stop in front of Villa Balbianello, filming location for James Bond and Star Wars scenes.",
    duration: "3 hours",
    price: 380,
    priceNote: "up to 6 people",
    maxPeople: 6,
    highlights: [
      "Villa del Balbianello (Lenno)",
      "Villa Carlotta (Tremezzo)",
      "Villa Serbelloni (Bellagio)",
      "Villa Monastero (Varenna)",
    ],
    includes: ["Private boat", "Certified skipper", "On-board snack", "Photo stop at the villas"],
    image: "/images/tours/tour-ville.jpg",
    featured: true,
    tag: "Recommended",
  },
  {
    id: "tour-tramonto",
    slug: "sunset-cruise",
    name: "Sunset Cruise",
    shortDescription: "Lake Como bathed in pink and gold at dusk — a romantic, unforgettable experience.",
    description:
      "When the sun sets behind the Alps, Lake Como transforms into a breathtaking display of light and colour. This evening tour is perfect for couples, anniversaries and anyone who wants a truly special moment. On board you'll find a welcome aperitif with prosecco and local nibbles.",
    duration: "2 hours",
    price: 320,
    priceNote: "up to 6 people",
    maxPeople: 6,
    highlights: [
      "Alpine sunset",
      "Reflections on the water",
      "Illuminated villages",
      "Como by night panorama",
    ],
    includes: ["Private boat", "Certified skipper", "Aperitivo with prosecco & snacks"],
    image: "/images/tours/tour-tramonto.jpg",
    featured: false,
    tag: "Romantic",
  },
  {
    id: "tour-bellagio",
    slug: "bellagio-varenna-tour",
    name: "Bellagio & Varenna Tour",
    shortDescription: "A cruise to Lake Como's two most charming villages with free time to explore.",
    description:
      "Visit Bellagio, the 'Pearl of the Lake', and Varenna, with its colourful alleys and medieval castle. Your skipper will take you there by boat and you'll have free time to stroll, shop and enjoy lunch at local restaurants before heading back.",
    duration: "4 hours",
    price: 480,
    priceNote: "up to 6 people",
    maxPeople: 6,
    highlights: [
      "Bellagio – historic centre",
      "Varenna – castle & lovers' staircase",
      "Free time in the villages",
      "Swimming stop (summer)",
    ],
    includes: ["Private boat", "Certified skipper", "Water on board", "Summer swimming stop included"],
    image: "/images/tours/tour-bellagio.jpg",
    featured: false,
  },
  {
    id: "tour-privato-giornata",
    slug: "full-day-private-tour",
    name: "Full-Day Private Tour",
    shortDescription: "The whole lake, just for you: customisable itinerary, swimming, lunch and village stops.",
    description:
      "Maximum freedom on Lake Como. You choose the route together with the skipper: villas, villages, hidden coves for swimming, lunch at a restaurant or a picnic on board. Ideal for large families, groups of friends or anyone who wants a completely tailored experience.",
    duration: "6–7 hours",
    price: 750,
    priceNote: "up to 8 people",
    maxPeople: 8,
    highlights: [
      "Customisable itinerary",
      "Swimming stops",
      "Lunch at a restaurant or on board",
      "All lake villages",
    ],
    includes: [
      "Private boat (8 seats)",
      "Certified skipper",
      "Water & welcome drink",
      "Personalised itinerary planning",
    ],
    image: "/images/tours/tour-giornata.jpg",
    featured: true,
    tag: "Best Value",
  },
  {
    id: "tour-family",
    slug: "family-tour",
    name: "Family Tour",
    shortDescription: "Designed for families with children: relaxed pace, safe swimming stops and plenty of magic.",
    description:
      "A tour designed especially for families with children. Easy-going pace, safe swimming stops, simple and fun commentary. The skipper is experienced in making the experience enjoyable for the whole family, from the youngest to grandparents.",
    duration: "3 hours",
    price: 350,
    priceNote: "up to 8 people",
    maxPeople: 8,
    highlights: [
      "Safe swimming stop",
      "Child-friendly commentary",
      "Relaxed pace",
      "Group photo souvenir",
    ],
    includes: ["Private boat (8 seats)", "Certified skipper", "Water & fruit juice", "Kids' kit on board"],
    image: "/images/tours/tour-family.jpg",
    featured: false,
    tag: "Family Friendly",
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}

export function getFeaturedTours(): Tour[] {
  return tours.filter((t) => t.featured);
}

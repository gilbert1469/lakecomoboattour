export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

export const siteSEO = {
  siteName: "Lake Como Boat Tour",
  siteUrl: "https://lakecomoboatour.net",
  defaultOgImage: "/images/og-default.jpg",
  locale: "en_US",
  twitterHandle: "@lakecomoboatour",
};

export const pageSEO: Record<string, PageSEO> = {
  home: {
    title: "Lake Como Boat Tour – Private Boat Tours on Lake Como, Italy",
    description:
      "Private boat tours on Lake Como with a certified skipper. Family-friendly, elderly-friendly, multilingual crew. Book your tour from Como, Bellagio or Varenna.",
    keywords: [
      "lake como boat tour",
      "private boat tour lake como",
      "lake como boat trip",
      "lake como tour italy",
      "bellagio boat tour",
      "como lake private boat",
    ],
    ogImage: "/images/og-home.jpg",
  },
  tours: {
    title: "Boat Tours on Lake Como – All Itineraries | Lake Como Boat Tour",
    description:
      "Explore all our private boat tours on Lake Como: historic villas, sunset cruises, Bellagio & Varenna, full-day tours. Private boat, certified skipper, family-friendly.",
    keywords: [
      "lake como boat tours",
      "lake como itineraries",
      "villa balbianello boat tour",
      "bellagio varenna boat trip",
      "sunset cruise lake como",
      "lake como private boat tour",
    ],
    ogImage: "/images/og-tours.jpg",
  },
  experiences: {
    title: "Lake Como Experiences – Cycling, Cooking Class & Luggage Storage | Lake Como Boat Tour",
    description:
      "More than boats: cycling tours on Lake Como, authentic Italian cooking class, and secure luggage storage in the heart of Como. Experiences for every taste.",
    keywords: [
      "lake como cycling tour",
      "cooking class como italy",
      "luggage storage como",
      "lake como experiences",
      "things to do como italy",
      "cycling lake como",
    ],
    ogImage: "/images/og-experiences.jpg",
  },
  booking: {
    title: "Book Your Lake Como Boat Tour | Lake Como Boat Tour",
    description:
      "Book your private boat tour on Lake Como online. Check availability and choose your itinerary. Instant confirmation, free cancellation up to 48h before.",
    keywords: [
      "book lake como boat tour",
      "lake como boat reservation",
      "como italy boat booking",
      "private tour lake como book",
    ],
    ogImage: "/images/og-booking.jpg",
  },
  blog: {
    title: "Blog – Discover Lake Como | Lake Como Boat Tour",
    description:
      "Guides, tips and stories about Lake Como: what to see, where to eat, the most beautiful villages, historic villas and everything you need to know before you visit.",
    keywords: [
      "what to see lake como",
      "lake como travel guide",
      "lake como blog",
      "lake como villages",
      "lake como villas",
    ],
    ogImage: "/images/og-blog.jpg",
  },
  about: {
    title: "About Us – Our Agency in Como | Lake Como Boat Tour",
    description:
      "We are a private tour agency based in Como (Via Adamo del Pero 38). Multilingual team, certified skippers and a passion for Lake Como.",
    keywords: [
      "lake como tour agency",
      "lake como boat tour about",
      "certified skipper lake como",
      "tour operator lake como",
    ],
    ogImage: "/images/og-about.jpg",
  },
  contact: {
    title: "Contact Us – Lake Como Boat Tour | Via Adamo del Pero 38, Como",
    description:
      "Get in touch for information, custom quotes and bookings. We are in Como, Via Adamo del Pero 38. We reply within 24 hours.",
    keywords: [
      "contact lake como boat tour",
      "lake como agency address",
      "como italy tour contact",
      "lake como tour operator contact",
    ],
    ogImage: "/images/og-contact.jpg",
  },
};

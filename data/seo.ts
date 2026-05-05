export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

export const siteSEO = {
  siteName: "Lake Como Boat Tour",
  siteUrl: "https://lakecomoboattour.net",
  defaultOgImage: "/images/og-default.jpg",
  locale: "it_IT",
  twitterHandle: "@lakecomoboattour",
};

export const pageSEO: Record<string, PageSEO> = {
  home: {
    title: "Lake Como Boat Tour – Tour in Barca privata sul Lago di Como",
    description:
      "Tour in barca privata sul Lago di Como con skipper certificato. Family-friendly, adatto agli anziani, multilingue. Prenota il tuo giro in barca da Como, Bellagio, Varenna.",
    keywords: [
      "tour barca lago di como",
      "giro in barca lago como",
      "boat tour lake como",
      "escursione lago como",
      "noleggio barca como",
      "lake como boat trip private",
    ],
    ogImage: "/images/og-home.jpg",
  },
  tours: {
    title: "Tour in Barca Lago di Como – Tutti gli Itinerari | Lake Como Boat Tour",
    description:
      "Scopri tutti i tour in barca privata sul Lago di Como: ville storiche, tramonto, Bellagio e Varenna, giornata intera. Barca privata, skipper certificato, adatto a famiglie.",
    keywords: [
      "tour in barca lago como",
      "itinerari lago di como",
      "villa del balbianello boat tour",
      "bellagio boat tour",
      "tramonto lago como",
      "lake como private boat tour",
    ],
    ogImage: "/images/og-tours.jpg",
  },
  experiences: {
    title: "Esperienze a Como – Bici, Cooking Class, Deposito Bagagli | Lake Como Boat Tour",
    description:
      "Non solo barca: tour in bici sul Lago di Como, cooking class con cucina lariana, deposito bagagli sicuro in centro Como. Esperienze per tutti i gusti.",
    keywords: [
      "tour bici lago como",
      "cooking class como",
      "deposito bagagli como",
      "esperienze lago di como",
      "attività como",
      "cycling lake como",
    ],
    ogImage: "/images/og-experiences.jpg",
  },
  booking: {
    title: "Prenota il tuo Tour in Barca | Lake Como Boat Tour",
    description:
      "Prenota online il tuo tour in barca privata sul Lago di Como. Verifica disponibilità e scegli il tuo itinerario. Conferma immediata.",
    keywords: [
      "prenota tour barca lago como",
      "prenotazione giro barca como",
      "book lake como boat tour",
      "disponibilità tour como",
    ],
    ogImage: "/images/og-booking.jpg",
  },
  blog: {
    title: "Blog – Scopri il Lago di Como | Lake Como Boat Tour",
    description:
      "Guide, consigli e storie sul Lago di Como: cosa vedere, dove mangiare, i borghi più belli, le ville storiche e tutto ciò che devi sapere prima di venire.",
    keywords: [
      "cosa vedere lago di como",
      "guida lago como",
      "blog lago di como",
      "borghi lago como",
      "ville lago como",
    ],
    ogImage: "/images/og-blog.jpg",
  },
  about: {
    title: "Chi Siamo – La Nostra Agenzia a Como | Lake Como Boat Tour",
    description:
      "Siamo un'agenzia di tour privati con sede a Como (Via Adamo del Pero 38). Team multilingue, skipper certificati e passione per il Lago di Como.",
    keywords: [
      "agenzia tour como",
      "lake como boat tour chi siamo",
      "skipper certificato como",
      "tour operator lago di como",
    ],
    ogImage: "/images/og-about.jpg",
  },
  contact: {
    title: "Contatti – Lake Como Boat Tour | Via Adamo del Pero 38, Como",
    description:
      "Contattaci per informazioni, preventivi personalizzati e prenotazioni. Siamo a Como, Via Adamo del Pero 38. Risposta garantita entro 24 ore.",
    keywords: [
      "contatti lake como boat tour",
      "indirizzo agenzia como",
      "prenotazione telefonica como",
      "tour operator como contatti",
    ],
    ogImage: "/images/og-contact.jpg",
  },
};

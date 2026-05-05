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
    slug: "tour-classico-lago-di-como",
    name: "Tour Classico del Lago di Como",
    shortDescription: "Il giro essenziale per scoprire le ville storiche e i borghi più belli del lago.",
    description:
      "Salite a bordo e lasciatevi sorprendere dalla bellezza senza tempo del Lago di Como. Navigherete tra ville nobiliari, giardini botanici affacciati sull'acqua e caratteristici borghi di pescatori. La guida vi racconterà storie, aneddoti e curiosità che rendono questo lago unico al mondo. Tour adatto a famiglie, anziani e chiunque voglia vivere un'esperienza autentica.",
    duration: "2 ore",
    price: 280,
    priceNote: "fino a 6 persone",
    maxPeople: 6,
    highlights: [
      "Villa del Balbianello",
      "Varenna e Bellagio",
      "Tremezzo e Villa Carlotta",
      "Centro storico di Como",
    ],
    includes: ["Barca privata", "Skipper certificato", "Acqua e benvenuto", "Audioguida opzionale"],
    image: "/images/tours/tour-classico.jpg",
    featured: true,
    tag: "Più popolare",
  },
  {
    id: "tour-ville-storiche",
    slug: "tour-ville-storiche",
    name: "Tour Ville Storiche",
    shortDescription: "Un viaggio esclusivo tra le ville più iconiche del lago, da Balbianello a Carlotta.",
    description:
      "Un itinerario dedicato alle meraviglie architettoniche che hanno reso il Lago di Como famoso in tutto il mondo. Ammirate dall'acqua le facciate delle ville nobiliari, i parchi terrazzati e le darsene storiche. Tappa speciale davanti alla Villa Balbianello, location di scene memorabili di James Bond e Guerre Stellari.",
    duration: "3 ore",
    price: 380,
    priceNote: "fino a 6 persone",
    maxPeople: 6,
    highlights: [
      "Villa del Balbianello (Lenno)",
      "Villa Carlotta (Tremezzo)",
      "Villa Serbelloni (Bellagio)",
      "Villa Monastero (Varenna)",
    ],
    includes: ["Barca privata", "Skipper certificato", "Spuntino a bordo", "Sosta fotografica alle ville"],
    image: "/images/tours/tour-ville.jpg",
    featured: true,
    tag: "Consigliato",
  },
  {
    id: "tour-tramonto",
    slug: "tour-al-tramonto",
    name: "Tour al Tramonto",
    shortDescription: "La magia del Lago di Como tinto di rosa e oro: un'esperienza romantica e indimenticabile.",
    description:
      "Quando il sole tramonta dietro le Alpi, il Lago di Como si trasforma in uno spettacolo di luci e colori unico. Questo tour serale è perfetto per coppie, anniversari e chi vuole vivere un momento speciale. A bordo troverete un aperitivo con prosecco e stuzzichini locali.",
    duration: "2 ore",
    price: 320,
    priceNote: "fino a 6 persone",
    maxPeople: 6,
    highlights: [
      "Tramonto sulle Alpi",
      "Riflessioni sull'acqua",
      "Borghi illuminati",
      "Panorama di Como by night",
    ],
    includes: ["Barca privata", "Skipper certificato", "Aperitivo con prosecco e stuzzichini"],
    image: "/images/tours/tour-tramonto.jpg",
    featured: false,
    tag: "Romantico",
  },
  {
    id: "tour-bellagio",
    slug: "tour-bellagio-varenna",
    name: "Tour Bellagio & Varenna",
    shortDescription: "Navigazione verso i due borghi più affascinanti del lago con sosta e tempo libero.",
    description:
      "Visitate Bellagio, la 'Perla del Lago', e Varenna, con i suoi vicoli colorati e il castello medievale. Lo skipper vi accompagnerà in barca e avrete tempo libero per passeggiare, fare shopping e pranzare nei ristoranti locali prima del ritorno.",
    duration: "4 ore",
    price: 480,
    priceNote: "fino a 6 persone",
    maxPeople: 6,
    highlights: [
      "Bellagio – centro storico",
      "Varenna – castello e scalini dell'amore",
      "Tempo libero nei borghi",
      "Fermata balneare (estate)",
    ],
    includes: ["Barca privata", "Skipper certificato", "Acqua a bordo", "Fermata balneare inclusa in estate"],
    image: "/images/tours/tour-bellagio.jpg",
    featured: false,
  },
  {
    id: "tour-privato-giornata",
    slug: "tour-privato-giornata-intera",
    name: "Tour Privato – Giornata Intera",
    shortDescription: "Il lago tutto per voi: itinerario personalizzabile, bagni, pranzo a bordo e sosta nei borghi.",
    description:
      "La massima libertà sul Lago di Como. Scegliete voi il percorso insieme allo skipper: ville, borghi, baie nascoste per il bagno, pranzo in ristorante o pic-nic a bordo. Ideale per famiglie numerose, gruppi di amici o chi vuole un'esperienza completamente su misura.",
    duration: "6-7 ore",
    price: 750,
    priceNote: "fino a 8 persone",
    maxPeople: 8,
    highlights: [
      "Itinerario personalizzabile",
      "Soste balneari",
      "Pranzo in ristorante o a bordo",
      "Tutti i borghi del lago",
    ],
    includes: [
      "Barca privata (8 posti)",
      "Skipper certificato",
      "Acqua e benvenuto",
      "Pianificazione itinerario personalizzata",
    ],
    image: "/images/tours/tour-giornata.jpg",
    featured: true,
    tag: "Best Value",
  },
  {
    id: "tour-family",
    slug: "tour-family",
    name: "Tour Family",
    shortDescription: "Pensato per famiglie con bambini: ritmo tranquillo, soste balneari e tanta magia.",
    description:
      "Un tour pensato appositamente per le famiglie con bambini. Ritmo comodo, soste balneari sicure, spiegazioni semplici e divertenti. Lo skipper è esperto nel rendere l'esperienza piacevole per tutta la famiglia, dai più piccoli ai nonni.",
    duration: "3 ore",
    price: 350,
    priceNote: "fino a 8 persone",
    maxPeople: 8,
    highlights: [
      "Sosta balneare sicura",
      "Spiegazioni per bambini",
      "Ritmo tranquillo",
      "Foto di gruppo ricordo",
    ],
    includes: ["Barca privata (8 posti)", "Skipper certificato", "Acqua e succhi di frutta", "Kit bambini a bordo"],
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

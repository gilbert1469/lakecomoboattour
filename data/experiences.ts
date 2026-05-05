export interface Experience {
  id: string;
  slug: string;
  name: string;
  category: "cycling" | "cooking" | "luggage";
  shortDescription: string;
  description: string;
  duration?: string;
  price: number;
  priceNote: string;
  highlights: string[];
  includes: string[];
  image: string;
  icon: string;
}

export const experiences: Experience[] = [
  {
    id: "cycling-lago",
    slug: "tour-bici-lago-di-como",
    name: "Tour in Bicicletta sul Lago di Como",
    category: "cycling",
    shortDescription: "Pedalate lungo le rive del lago su percorsi adatti a tutti, tra natura e borghi.",
    description:
      "Scoprite il Lago di Como su due ruote! I nostri tour ciclistici seguono percorsi panoramici lungo le sponde del lago, tra borghi medievali, ville storiche e viste mozzafiato. Disponiamo di biciclette per adulti, bambini e e-bike per chi preferisce un aiuto sulle salite. Accompagnati da una guida locale esperta.",
    duration: "3-4 ore",
    price: 45,
    priceNote: "a persona",
    highlights: [
      "Percorsi per tutti i livelli",
      "E-bike disponibili",
      "Guida locale esperta",
      "Soste panoramiche",
    ],
    includes: ["Bicicletta (city bike o e-bike)", "Casco", "Guida certificata", "Acqua e snack"],
    image: "/images/experiences/cycling.jpg",
    icon: "🚲",
  },
  {
    id: "cooking-class",
    slug: "cooking-class-cucina-comasca",
    name: "Cooking Class – Cucina del Lago",
    category: "cooking",
    shortDescription: "Imparate a cucinare i piatti della tradizione lariana in una cucina professionale con uno chef locale.",
    description:
      "Un'esperienza autentica nella cucina della tradizione lariana. Lo chef vi guiderà nella preparazione di piatti tipici: risotto al pesce persico, missultin, polenta uncia e dolci della tradizione. Al termine cucinerete e degusterete insieme quello che avete preparato, con abbinamento ai vini del territorio.",
    duration: "3 ore",
    price: 85,
    priceNote: "a persona (min. 2 persone)",
    highlights: [
      "Chef locale professionista",
      "Piatti della tradizione lariana",
      "Degustazione vini locali",
      "Ricettario in regalo",
    ],
    includes: ["Ingredienti", "Grembiule", "Cena/pranzo con ciò che cucinate", "Ricettario digitale"],
    image: "/images/experiences/cooking.jpg",
    icon: "👨‍🍳",
  },
  {
    id: "luggage-storage",
    slug: "deposito-bagagli-como",
    name: "Deposito Bagagli Como",
    category: "luggage",
    shortDescription: "Lascia i bagagli da noi e goditi Como senza pesi. Servizio sicuro, flessibile e conveniente.",
    description:
      "Non devi aspettare il check-in o hai perso la coincidenza? Lascia i tuoi bagagli in sicurezza nella nostra agenzia in centro a Como (Via Adamo del Pero 38) e goditi la città o il lago senza pensieri. Il servizio è disponibile tutti i giorni con orario flessibile. Consegna e ritiro anche fuori sede su richiesta.",
    price: 6,
    priceNote: "a bagaglio al giorno",
    highlights: [
      "Posizione centrale a Como",
      "Aperto tutti i giorni",
      "Videosorveglianza 24/7",
      "Consegna a domicilio disponibile",
    ],
    includes: ["Custodia sicura", "Ricevuta di deposito", "Assicurazione bagagli"],
    image: "/images/experiences/luggage.jpg",
    icon: "🧳",
  },
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}

export function getExperiencesByCategory(category: Experience["category"]): Experience[] {
  return experiences.filter((e) => e.category === category);
}

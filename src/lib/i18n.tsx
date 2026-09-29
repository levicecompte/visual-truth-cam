import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "fr" | "en";

type Dict = typeof fr;

export const fr = {
  nav: {
    jardin: "Le Jardin",
    table: "La Table",
    rooftop: "Rooftop",
    suites: "Suites",
    spa: "Spa",
    ateliers: "Ateliers",
    experiences: "Expériences",
    book: "Réserver",
  },
  hero: {
    since: "Depuis 2025 — Art de vivre à la française & marocaine",
    title: "Un Palace secret à Marrakech",
    sub: "32 clés, un jardin de 1 200 m² au cœur de la médina, une piscine miroir suspendue face à l'Atlas.",
    cta1: "Réserver",
    cta2: "Découvrir le Jardin",
    scroll: "Descendre",
  },
  manifeste: {
    eyebrow: "Manifeste",
    title: "Authentic Moroccan elegance since 2025",
    body: "DAR ELIA est né d'une obsession : faire dialoguer l'art de vivre à la française et le savoir-faire marocain, sans jamais élever la voix. Trente-deux clés seulement. Un jardin secret de 1 200 m² planté de palmiers, d'orangers et de jasmin. Une piscine miroir perchée sur les toits, face à la Koutoubia. Une table qui vise sa première étoile. Le luxe ici ne se montre pas : il se respire.",
    signature: "Maison indépendante — Marrakech, Médina",
  },
  jardin: {
    eyebrow: "Le Jardin Secret",
    title: "Une promenade de 1 200 m²",
    body: "Derrière un mur d'enduit à la chaux, le bruit de la médina s'éteint. Palmiers dattiers, orangers amers, jasmin étoilé et un potager aromatique qui alimente chaque jour les cuisines de NOUR. Les jardiniers y travaillent avant l'aube, à la lampe.",
    badge: "Jardin aromatique & Potager — Circuit court",
    stats: [
      { n: "1 200", l: "m² de jardin clos" },
      { n: "87", l: "essences végétales" },
      { n: "20 km", l: "rayon du potager bio" },
    ],
  },
  table: {
    eyebrow: "La Table Étoilée",
    title: "NOUR",
    body: "Une salle intimiste de vingt-quatre couverts, tons cuivrés, lumière basse. Au plafond, une suspension de feuilles de laiton martelées projette des ombres végétales sur les nappes. Derrière la baie vitrée, la cuisine ouverte joue son théâtre silencieux.",
    chef: "La chef signe une cuisine de l'entre-deux-continents : souvenirs d'enfance entre Provence et Afrique, épices rapportées du souk chaque mardi.",
    menusTitle: "Trois lectures d'une même saison",
    menus: [
      {
        n: "3",
        t: "Séquences",
        d: "Le déjeuner du jardin. Trois gestes, produits du potager du matin.",
        p: "680 MAD",
      },
      {
        n: "5",
        t: "Séquences",
        d: "Le menu signature. Provence et Atlas, en cinq mouvements.",
        p: "1 180 MAD",
      },
      {
        n: "7",
        t: "Séquences",
        d: "La table du chef, face aux cuisines. Accords cépages marocains.",
        p: "1 780 MAD",
      },
    ],
    badges: ["1 Étoile Michelin visée", "3 macarons Ecotable", "Produits locaux"],
    cta: "Voir le ballet des cuisiniers",
  },
  rooftop: {
    eyebrow: "Rooftop & Piscine",
    title: "Le miroir suspendu",
    body: "Vingt-deux mètres d'eau noire, immobile, au sixième étage. Au lever du jour l'Atlas s'y reflète en entier ; au crépuscule, la Koutoubia. Service au bord de l'eau, à voix basse.",
    points: [
      "Piscine miroir chauffée 28°",
      "Vue Atlas & Koutoubia",
      "Bar cuivré, 18h — minuit",
    ],
  },
  suites: {
    eyebrow: "Chambres & Suites",
    title: "Trente-deux clés",
    body: "Louis XV revisité par la médina : tadelakt poli à la pierre, zellige mat, laiton brossé, lin lavé.",
    view: "Vue",
    from: "À partir de",
    night: "la nuit",
    items: [
      {
        name: "Suite Impériale",
        view: "Jardin",
        price: "12 000 MAD",
        size: "110 m²",
        amenities: ["Patio privé", "Hammam privatif", "Majordome 24h"],
      },
      {
        name: "Suite Lumière",
        view: "Palmeraie",
        price: "8 400 MAD",
        size: "78 m²",
        amenities: ["Terrasse plein sud", "Baignoire tadelakt", "Cheminée"],
      },
      {
        name: "Suite Palmeraie",
        view: "Médina & Atlas",
        price: "6 900 MAD",
        size: "64 m²",
        amenities: ["Balcon zellige", "Dressing cèdre", "Petit-déjeuner servi"],
      },
      {
        name: "Suite Zellige",
        view: "Patio intérieur",
        price: "5 800 MAD",
        size: "56 m²",
        amenities: ["Salon bas", "Douche tadelakt", "Bibliothèque"],
      },
      {
        name: "Suite Oranger",
        view: "Jardin",
        price: "5 200 MAD",
        size: "48 m²",
        amenities: ["Loggia privée", "Bain cuivre", "Thé servi à 17h"],
      },
      {
        name: "Chambre Médina",
        view: "Toits de la médina",
        price: "4 400 MAD",
        size: "38 m²",
        amenities: ["Fenêtre moucharabieh", "Lin lavé", "Petit bureau"],
      },
    ],
  },
  spa: {
    eyebrow: "Spa & Hammam",
    title: "Le Spa Dar Elia",
    body: "Un hammam taillé dans le marbre vert, une salle de soins aux herbes cueillies au jardin le matin même, un solarium qui ne reçoit que six personnes. Rituels de 60 à 180 minutes.",
    items: [
      "Hammam marbre vert",
      "Soins aux herbes du jardin",
      "Solarium six places",
      "Rituel nuptial 180 min",
    ],
  },
  ateliers: {
    eyebrow: "Ateliers d'Artisans",
    title: "Les mains de la maison",
    body: "Trois ateliers permanents, ouverts aux résidents sur réservation. On y regarde, on y apprend, on repart avec sa pièce.",
    items: [
      {
        t: "Le Céramiste",
        d: "Tour à pied, terre de Safi, émaux verts de Tamegroute. Deux heures.",
      },
      {
        t: "La Tisserande",
        d: "Métier haute lisse, laines végétales du Moyen-Atlas. Trois heures.",
      },
      {
        t: "Le Parfumeur",
        d: "Composition à l'orgue : néroli, rose de Kelâat, cèdre. Flacon signé.",
      },
    ],
  },
  experiences: {
    eyebrow: "Expériences",
    title: "Ce qui ne se réserve qu'ici",
    items: [
      {
        t: "Quatre mains d'exception",
        d: "Deux fois l'an, la chef invite une table étoilée étrangère. Vingt-quatre couverts, une seule soirée.",
      },
      {
        t: "Dîner sous les étoiles",
        d: "Une table unique dressée au cœur du jardin, lanternes et service silencieux.",
      },
      {
        t: "Petit-déjeuner dans la palmeraie",
        d: "Départ 6h30, calèche, thé à la menthe et pain de semoule au lever du soleil.",
      },
    ],
  },
  booking: {
    title: "Réserver",
    arrival: "Arrivée",
    departure: "Départ",
    guests: "Voyageurs",
    submit: "Vérifier les disponibilités",
    note: "Séjour minimum 2 nuits — annulation gratuite 7 jours avant.",
    confirm: "Merci. Notre conciergerie vous répond sous 2 heures.",
  },
  footer: {
    address: "42 Derb El Bahia, Palmeraie, Marrakech, Maroc",
    phone: "+212 5 24 00 42 42",
    email: "reservations@darelia.ma",
    newsletter: "Lettre confidentielle",
    newsletterNote: "Quatre envois par an. Jamais davantage.",
    placeholder: "Votre adresse e-mail",
    subscribe: "S'inscrire",
    subscribed: "Bienvenue. À très bientôt.",
    rules: [
      "Tenue correcte exigée au restaurant et au rooftop.",
      "Expérience confidentielle : photographie discrète appréciée.",
      "Animaux non acceptés au restaurant.",
    ],
    rights: "Tous droits réservés",
  },
} as const;

export const en: Dict = {
  nav: {
    jardin: "The Garden",
    table: "The Table",
    rooftop: "Rooftop",
    suites: "Suites",
    spa: "Spa",
    ateliers: "Workshops",
    experiences: "Experiences",
    book: "Book",
  },
  hero: {
    since: "Since 2025 — French and Moroccan art de vivre",
    title: "A secret Palace in Marrakech",
    sub: "32 keys, a 1,200 sqm garden in the heart of the medina, a mirror pool suspended above the rooftops facing the Atlas.",
    cta1: "Book",
    cta2: "Enter the Garden",
    scroll: "Scroll",
  },
  manifeste: {
    eyebrow: "Manifesto",
    title: "Authentic Moroccan elegance since 2025",
    body: "DAR ELIA was born from one obsession: letting French art de vivre and Moroccan craft speak to each other, never raising their voice. Thirty-two keys only. A 1,200 sqm secret garden of palms, orange trees and jasmine. A mirror pool perched on the roofs, facing the Koutoubia. A table reaching for its first star. Luxury here is not displayed — it is breathed.",
    signature: "Independent house — Marrakech, Medina",
  },
  jardin: {
    eyebrow: "The Secret Garden",
    title: "A 1,200 sqm walk",
    body: "Behind a lime-plaster wall, the medina falls silent. Date palms, bitter orange trees, star jasmine and an aromatic kitchen garden that feeds the NOUR kitchens every day. The gardeners work before dawn, by lamplight.",
    badge: "Aromatic garden & Kitchen plot — Short supply chain",
    stats: [
      { n: "1,200", l: "sqm walled garden" },
      { n: "87", l: "plant species" },
      { n: "20 km", l: "organic sourcing radius" },
    ],
  },
  table: {
    eyebrow: "The Starred Table",
    title: "NOUR",
    body: "An intimate room of twenty-four covers, copper tones, low light. Above, a suspension of hammered brass leaves casts botanical shadows across the linen. Behind the glass, the open kitchen plays its silent theatre.",
    chef: "The chef cooks between two continents: childhood memories split between Provence and Africa, spices carried back from the souk every Tuesday.",
    menusTitle: "Three readings of one season",
    menus: [
      {
        n: "3",
        t: "Sequences",
        d: "The garden lunch. Three gestures, picked that morning.",
        p: "680 MAD",
      },
      {
        n: "5",
        t: "Sequences",
        d: "The signature menu. Provence and Atlas, in five movements.",
        p: "1,180 MAD",
      },
      {
        n: "7",
        t: "Sequences",
        d: "The chef's table, facing the kitchen. Moroccan varietal pairings.",
        p: "1,780 MAD",
      },
    ],
    badges: ["Reaching for 1 Michelin Star", "3 Ecotable macarons", "Local produce"],
    cta: "Watch the kitchen ballet",
  },
  rooftop: {
    eyebrow: "Rooftop & Pool",
    title: "The suspended mirror",
    body: "Twenty-two metres of still black water, six floors up. At dawn the whole Atlas range is reflected in it; at dusk, the Koutoubia. Service at the water's edge, in a low voice.",
    points: ["Heated mirror pool, 28°", "Atlas & Koutoubia view", "Copper bar, 6pm — midnight"],
  },
  suites: {
    eyebrow: "Rooms & Suites",
    title: "Thirty-two keys",
    body: "Louis XV reread by the medina: stone-polished tadelakt, matte zellige, brushed brass, washed linen.",
    view: "View",
    from: "From",
    night: "per night",
    items: [
      {
        name: "Suite Impériale",
        view: "Garden",
        price: "12,000 MAD",
        size: "110 sqm",
        amenities: ["Private patio", "Private hammam", "24h butler"],
      },
      {
        name: "Suite Lumière",
        view: "Palm grove",
        price: "8,400 MAD",
        size: "78 sqm",
        amenities: ["South terrace", "Tadelakt bath", "Fireplace"],
      },
      {
        name: "Suite Palmeraie",
        view: "Medina & Atlas",
        price: "6,900 MAD",
        size: "64 sqm",
        amenities: ["Zellige balcony", "Cedar dressing", "Breakfast served"],
      },
      {
        name: "Suite Zellige",
        view: "Inner patio",
        price: "5,800 MAD",
        size: "56 sqm",
        amenities: ["Low salon", "Tadelakt shower", "Library"],
      },
      {
        name: "Suite Oranger",
        view: "Garden",
        price: "5,200 MAD",
        size: "48 sqm",
        amenities: ["Private loggia", "Copper bath", "Tea served at 5pm"],
      },
      {
        name: "Chambre Médina",
        view: "Medina rooftops",
        price: "4,400 MAD",
        size: "38 sqm",
        amenities: ["Moucharabieh window", "Washed linen", "Writing desk"],
      },
    ],
  },
  spa: {
    eyebrow: "Spa & Hammam",
    title: "Le Spa Dar Elia",
    body: "A hammam carved from green marble, a treatment room using herbs cut in the garden that same morning, a solarium that seats only six. Rituals from 60 to 180 minutes.",
    items: [
      "Green marble hammam",
      "Garden herb treatments",
      "Six-seat solarium",
      "Bridal ritual, 180 min",
    ],
  },
  ateliers: {
    eyebrow: "Artisan Workshops",
    title: "The hands of the house",
    body: "Three permanent workshops, open to residents by reservation. You watch, you learn, you leave with your own piece.",
    items: [
      {
        t: "The Ceramicist",
        d: "Kick wheel, Safi clay, Tamegroute green glazes. Two hours.",
      },
      {
        t: "The Weaver",
        d: "High-warp loom, plant-dyed Middle Atlas wool. Three hours.",
      },
      {
        t: "The Perfumer",
        d: "Composed at the organ: neroli, Kelâat rose, cedar. Signed flacon.",
      },
    ],
  },
  experiences: {
    eyebrow: "Experiences",
    title: "Only bookable here",
    items: [
      {
        t: "Four hands, one night",
        d: "Twice a year the chef invites a starred table from abroad. Twenty-four covers, a single evening.",
      },
      {
        t: "Dinner under the stars",
        d: "One table set at the heart of the garden, lanterns and silent service.",
      },
      {
        t: "Breakfast in the palm grove",
        d: "6:30am departure, horse-drawn carriage, mint tea and semolina bread at sunrise.",
      },
    ],
  },
  booking: {
    title: "Book",
    arrival: "Arrival",
    departure: "Departure",
    guests: "Guests",
    submit: "Check availability",
    note: "Two-night minimum — free cancellation up to 7 days before.",
    confirm: "Thank you. Our concierge replies within 2 hours.",
  },
  footer: {
    address: "42 Derb El Bahia, Palmeraie, Marrakech, Morocco",
    phone: "+212 5 24 00 42 42",
    email: "reservations@darelia.ma",
    newsletter: "Confidential letter",
    newsletterNote: "Four sendings a year. Never more.",
    placeholder: "Your email address",
    subscribe: "Subscribe",
    subscribed: "Welcome. See you very soon.",
    rules: [
      "Smart dress required at the restaurant and rooftop.",
      "Confidential experience: discreet photography appreciated.",
      "Pets are not admitted in the restaurant.",
    ],
    rights: "All rights reserved",
  },
};

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}>({ lang: "fr", setLang: () => {}, t: fr });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  return (
    <LangContext.Provider value={{ lang, setLang, t: lang === "fr" ? fr : en }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);

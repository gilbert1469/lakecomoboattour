# Milan to Lake Como – CLAUDE.md

Questo file documenta la struttura, le convenzioni e le istruzioni per Claude Code (e Claude Cowork) su come lavorare su questo progetto senza rompere niente.

## Stack tecnico

- **Framework**: Next.js 16 (App Router)
- **Linguaggio**: TypeScript
- **Stile**: Tailwind CSS v4
- **Font**: Inter (body), Playfair Display (titoli) via Google Fonts
- **Blog**: Markdown + gray-matter + next-mdx-remote/rsc
- **Form**: react-hook-form + zod
- **Deploy**: Vercel

## Struttura cartelle

```
/app/                      → Pagine (App Router)
  layout.tsx               → Root layout con Header, Footer, metadata globali
  page.tsx                 → Homepage
  gite-in-barca/page.tsx   → Pagina tour in barca
  esperienze/page.tsx      → Pagina esperienze (bici, cooking, bagagli)
  prenotazione/page.tsx    → Form di prenotazione
  blog/
    page.tsx               → Lista articoli blog
    [slug]/page.tsx        → Singolo articolo
  chi-siamo/page.tsx       → About page
  contatti/page.tsx        → Pagina contatti
  sitemap.ts               → Sitemap auto-generata
  robots.ts                → robots.txt auto-generato

/components/
  layout/Header.tsx        → Header sticky con nav mobile
  layout/Footer.tsx        → Footer con link, contatti, orari
  ui/Button.tsx            → Componente bottone (primary/secondary/outline, sm/md/lg)
  ui/Section.tsx           → Wrapper sezione con padding e bg variant
  tours/TourCard.tsx       → Card tour
  blog/BlogCard.tsx        → Card articolo blog

/data/                     → Dati editabili senza toccare il codice
  tours.ts                 → Array tours[] con tutti i tour (prezzi, descrizioni, ecc.)
  experiences.ts           → Array experiences[] con bici, cooking, bagagli
  seo.ts                   → Metadata SEO per ogni pagina (title, description, keywords, ogImage)
  navigation.ts            → Link di navigazione e dati di contatto

/content/blog/             → Articoli blog in formato Markdown
  *.md                     → Ogni file = un articolo. Il nome file = slug URL

/lib/
  blog.ts                  → Funzioni per leggere i post markdown
  utils.ts                 → Utility: cn(), formatDate(), formatPrice()

/public/images/            → Immagini statiche
/docs/                     → Guide per agenti AI (SEO_GUIDE.md)
```

## Colori brand (Tailwind CSS v4)

Definiti in `app/globals.css` via `@theme`:

| Nome           | Valore     | Uso principale              |
|----------------|------------|-----------------------------|
| `navy`         | `#1B3A6B`  | Testi, sfondi scuri          |
| `navy-dark`    | `#122849`  | Hover navy                   |
| `navy-light`   | `#2a5090`  | Variante chiara              |
| `gold`         | `#C9A84C`  | Accent, CTA, tag             |
| `gold-dark`    | `#a8862d`  | Hover gold                   |
| `gold-light`   | `#e2c36e`  | Variante su sfondi scuri     |
| `cream`        | `#F8F4EC`  | Sfondi alternati sezioni     |
| `slate`        | `#4A5568`  | Testo body                   |

Usa `text-navy`, `bg-gold`, `text-slate`, ecc.

## Aggiungere un nuovo Tour

1. Apri `data/tours.ts`
2. Aggiungi un oggetto alla fine dell'array `tours[]` seguendo il tipo `Tour`
3. Aggiungi l'immagine in `public/images/tours/nome-tour.jpg`
4. Il tour apparirà automaticamente nella pagina `/gite-in-barca`
5. Se `featured: true`, apparirà anche in homepage

## Aggiungere un articolo Blog

1. Crea un file `.md` in `content/blog/` con questo frontmatter:
```markdown
---
title: "Titolo dell'articolo"
date: "2025-06-01"
description: "Meta description per SEO (max 160 caratteri)"
keywords:
  - keyword 1
  - keyword 2
author: "Milan to Lake Como"
image: "/images/blog/nome-immagine.jpg"
canonical: "https://milantolakecomo.com/blog/nome-slug"
---

Contenuto markdown qui...
```
2. Il nome del file diventa l'URL: `como-guida.md` → `/blog/como-guida`
3. Non servono altre modifiche al codice

## Modificare SEO di una pagina

1. Apri `data/seo.ts`
2. Trova la chiave della pagina (es. `home`, `tours`, `blog`)
3. Modifica `title`, `description`, `keywords`, `ogImage`
4. Non toccare il file della pagina stessa

## Modificare contatti / orari / indirizzo

1. Apri `data/navigation.ts`
2. Modifica l'oggetto `contact`

## Immagini

- Formato consigliato: `.jpg` o `.webp`
- Dimensioni hero: 1920×1080 px
- Dimensioni card: 800×600 px
- Cartella: `public/images/`
- Sottocartelle: `tours/`, `blog/`, `experiences/`, `team/`
- Placeholder attivo: se un'immagine manca, Next.js mostrerà un errore. Usa immagini reali o placeholder temporanei.

## Convenzioni TypeScript

- Nessun `any` esplicito
- I tipi dei dati sono definiti in `data/*.ts` e `lib/blog.ts`
- Usa `satisfies` per la validazione dei tipi inline

## Pagina Prenotazione e Google Calendar

La pagina `/prenotazione` ha un form funzionante con validazione Zod. **Google Calendar non è ancora integrato**: c'è un avviso placeholder nella pagina. Per attivarlo:
1. Creare le credenziali API Google Calendar
2. Creare un endpoint `/api/availability` che interroga il calendario
3. Sostituire il placeholder con un componente calendario interattivo
4. **Non attivare senza conferma esplicita del proprietario**

## Deploy su Vercel

1. Push del codice su GitHub
2. Importa il progetto su Vercel
3. Framework preset: Next.js (auto-rilevato)
4. Environment variables necessarie (quando attivo Google Calendar):
   - `GOOGLE_CALENDAR_API_KEY`
   - `GOOGLE_CALENDAR_ID`
5. Il file `vercel.json` include headers di sicurezza e redirect

## Regole generali per Claude Code

- **Non modificare** `app/globals.css` senza motivo: i colori e i font sono lì
- **Non installare** dipendenze non necessarie
- **Non aggiungere** Dark Mode: questo sito è light-only
- **Prima di refactoring** grandi: leggi `COORDINATION.md` per capire lo stato del progetto
- **Immagini mancanti**: è normale in sviluppo. Aggiungile sempre in `public/images/`

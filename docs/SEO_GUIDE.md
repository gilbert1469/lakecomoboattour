# SEO_GUIDE.md – Guida per Claude Cowork

Questa guida spiega come un agente AI (Claude Cowork) può aggiungere, modificare e ottimizzare contenuti SEO senza rischiare di rompere il codebase.

**Repository**: Lake Como Boat Tour – lakecomoboattour.net  
**Stack**: Next.js 16, TypeScript, Tailwind CSS v4, Markdown blog  

---

## Struttura SEO del progetto

### 1. Metadata delle pagine → `data/seo.ts`

Ogni pagina ha i propri metadata definiti nell'oggetto `pageSEO` nel file `data/seo.ts`.

**Come modificare un meta title o description:**
```typescript
// data/seo.ts
export const pageSEO = {
  home: {
    title: "Lake Como Boat Tour – Tour in Barca privata sul Lago di Como",
    description: "Tour in barca privata sul Lago di Como con skipper certificato...",
    keywords: ["tour barca lago di como", "giro in barca lago como", ...],
    ogImage: "/images/og-home.jpg",
  },
  // ...altre pagine
}
```

**Regole:**
- `title`: max 60 caratteri, include sempre il brand name alla fine
- `description`: 120-160 caratteri, descrittiva e con keyword principale
- `keywords`: array di stringhe, 5-10 keyword per pagina
- `ogImage`: path relativo a `/public/`, formato consigliato 1200×630 px

---

### 2. Articoli Blog → `content/blog/*.md`

Ogni articolo blog è un file Markdown in `content/blog/`. Il nome del file = slug URL.

**Esempio**: `content/blog/cosa-vedere-lago-di-como.md` → URL `/blog/cosa-vedere-lago-di-como`

**Frontmatter obbligatorio:**
```yaml
---
title: "Cosa Vedere al Lago di Como: la Guida Completa 2025"
date: "2025-03-15"
description: "Breve description SEO-ottimizzata, max 160 caratteri."
keywords:
  - keyword principale
  - keyword secondaria
  - long-tail keyword
author: "Lake Como Boat Tour"
image: "/images/blog/nome-immagine.jpg"
canonical: "https://lakecomoboattour.net/blog/nome-slug"
---

Contenuto markdown qui...
```

**Come aggiungere un articolo:**
1. Crea il file `.md` in `content/blog/`
2. Compila tutto il frontmatter
3. Scrivi il contenuto in Markdown
4. Aggiungi l'immagine in `public/images/blog/`
5. **Non modificare nessun file in `/app/`**

**Buone pratiche per il contenuto:**
- Usa H2 (`##`) e H3 (`###`) per la struttura
- Keyword principale nel titolo H1 (frontmatter `title`) e nel primo paragrafo
- Includi sempre un link interno alla fine: `[Scopri i nostri tour →](/gite-in-barca)`
- Lunghezza ideale: 800-1500 parole
- Evita keyword stuffing

---

### 3. Dati strutturati (JSON-LD)

Il sito include JSON-LD in queste pagine:
- **Homepage**: `LocalBusiness` schema
- **Gite in Barca**: `TouristTrip` + `ItemList` schema
- **Blog post**: `BlogPosting` schema

Per modificare i dati strutturati, vai nel file della pagina corrispondente in `/app/` e cerca `const jsonLd`. **Non toccare la struttura dello schema**, solo i valori testuali.

---

### 4. Sitemap

La sitemap è **auto-generata** in `app/sitemap.ts`. Include:
- Tutte le pagine statiche
- I tour (come ancore)
- Tutti i post del blog (letti dai file markdown)

Non modificare `app/sitemap.ts` a meno che non si aggiungano nuove sezioni di pagine.

---

### 5. robots.txt

Generato automaticamente da `app/robots.ts`. Non modificare salvo istruzioni esplicite.

---

## Checklist per nuovi contenuti SEO

Prima di pubblicare un articolo o modificare un metadata:

- [ ] Title max 60 caratteri
- [ ] Description 120-160 caratteri
- [ ] Keyword principale nel title e description
- [ ] Almeno 1 link interno all'articolo
- [ ] Immagine con nome file descrittivo (es. `villa-balbianello-lago-como.jpg`)
- [ ] Data nel frontmatter nel formato `YYYY-MM-DD`
- [ ] Canonical URL corretto

---

## File da NON toccare per SEO

Questi file gestiscono la struttura del sito. Modificarli può rompere il build:
- `app/layout.tsx`
- `app/globals.css`
- `components/**/*`
- `lib/**/*`
- `next.config.ts`

---

## Idee di contenuto per articoli blog

Topic ad alto potenziale SEO per Lake Como Boat Tour:
1. "Cosa vedere a Bellagio in un giorno" (keyword: cosa vedere bellagio)
2. "Come arrivare al Lago di Como da Milano" (keyword: como da milano)
3. "Lago di Como con bambini: guida completa" (keyword: lago di como bambini)
4. "Le migliori ville del Lago di Como" (keyword: ville lago di como)
5. "Quando andare al Lago di Como: il meteo mese per mese"
6. "Varenna: cosa vedere nel borgo più romantico del lago"
7. "Tour in barca vs traghetto: qual è la differenza?"
8. "Villa del Balbianello: come visitarla"
9. "Dove dormire sul Lago di Como: guida per budget"
10. "Il lago di Como in autunno: perché è la stagione migliore"

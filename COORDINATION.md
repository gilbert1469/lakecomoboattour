# COORDINATION.md – Stato del Progetto

Ultimo aggiornamento: 2026-05-05

## Stato generale

Il progetto è in fase di sviluppo attivo. La struttura è completa, tutte le pagine sono costruite, il deploy su Vercel è configurato.

---

## ✅ Completato

### Struttura e configurazione
- [x] Scaffolding Next.js 16 con TypeScript e Tailwind v4
- [x] Installazione dipendenze: gray-matter, react-hook-form, zod, next-mdx-remote, date-fns, clsx
- [x] Configurazione Tailwind con colori brand (navy, gold, cream, slate)
- [x] Font: Inter (body) + Playfair Display (titoli)
- [x] Root layout con Header e Footer
- [x] vercel.json con headers di sicurezza e redirect

### Dati
- [x] `data/tours.ts` – 6 tour completi con prezzi, descrizioni, highlights
- [x] `data/experiences.ts` – 3 esperienze: bici, cooking class, deposito bagagli
- [x] `data/seo.ts` – Metadata SEO per tutte le pagine
- [x] `data/navigation.ts` – Link di navigazione e dati di contatto

### Componenti
- [x] `Header.tsx` – Sticky, responsive, mobile hamburger menu
- [x] `Footer.tsx` – 4 colonne, contatti, orari, social
- [x] `Button.tsx` – 3 varianti (primary/secondary/outline), 3 dimensioni
- [x] `Section.tsx` + `SectionHeader` – Wrapper sezioni con bg variants
- [x] `TourCard.tsx` – Card con immagine, badge, prezzo, CTA
- [x] `BlogCard.tsx` – Card con immagine, data, tempo lettura

### Pagine
- [x] **Homepage** `/` – Hero, tour in evidenza, USP, esperienze, testimonial
- [x] **Gite in Barca** `/gite-in-barca` – Tutti i tour, come funziona, FAQ
- [x] **Esperienze** `/esperienze` – Bici, cooking class, deposito bagagli
- [x] **Prenotazione** `/prenotazione` – Form con validazione Zod (Google Calendar stub)
- [x] **Blog** `/blog` – Lista articoli markdown
- [x] **Singolo Post** `/blog/[slug]` – MDX rendering, JSON-LD BlogPosting
- [x] **Chi Siamo** `/chi-siamo` – Storia, valori, team, posizione
- [x] **Contatti** `/contatti` – Form, mappa embed, orari

### SEO e infrastruttura
- [x] `sitemap.ts` – Auto-generata (pagine statiche + blog dinamico)
- [x] `robots.ts` – robots.txt
- [x] JSON-LD: LocalBusiness (homepage), TouristTrip (tours), BlogPosting (blog)
- [x] Open Graph e Twitter Card su ogni pagina
- [x] Metadata separati in `data/seo.ts` (editabili senza toccare le pagine)

### Content
- [x] 2 articoli blog di esempio in `content/blog/`
- [x] Struttura frontmatter documentata

### Documentazione
- [x] `CLAUDE.md` – Guida completa per Claude Code
- [x] `COORDINATION.md` – Questo file
- [x] `docs/SEO_GUIDE.md` – Guida per Claude Cowork

---

## 🔴 Da fare (alta priorità)

- [ ] **Immagini reali** – Sostituire tutti i placeholder in `public/images/` con foto vere del lago, della barca, del team
- [ ] **Google Calendar integration** – Integrare disponibilità in tempo reale nella pagina prenotazione (richiede credenziali API del proprietario)
- [ ] **Form backend** – Collegare i form (prenotazione e contatti) a un servizio email (es. Resend, SendGrid, Formspree)
- [ ] **Privacy Policy e Cookie** – Creare le pagine `/privacy` e `/cookie` (attualmente link nel footer puntano a pagine inesistenti)

---

## 🟡 Da fare (media priorità)

- [ ] **Più articoli blog** – Aggiungere 5-10 articoli SEO-ottimizzati in `content/blog/`
- [ ] **Recensioni reali** – Sostituire la testimonial placeholder in homepage con recensioni vere (TripAdvisor widget o statiche)
- [ ] **OG images** – Creare immagini Open Graph personalizzate per ogni pagina (1200×630 px)
- [ ] **Favicon** – Aggiungere favicon.ico e apple-touch-icon.png in `public/`
- [ ] **Multi-lingua EN** – Il sito è in italiano; aggiungere versione inglese con next-intl o routing alternativo
- [ ] **Analytics** – Aggiungere Google Analytics 4 o Plausible
- [ ] **Tour page dedicata** – Valutare se aggiungere pagine `/gite-in-barca/[slug]` per ogni tour (attualmente solo ancore)

---

## 🟢 Nice to have (bassa priorità)

- [ ] **WhatsApp floating button** – Pulsante fisso in basso a destra per WhatsApp
- [ ] **Cookie banner** – Banner GDPR-compliant
- [ ] **Ricerca blog** – Filtro/ricerca negli articoli
- [ ] **Gallery** – Galleria foto del lago e dei tour
- [ ] **Video hero** – Sostituire l'immagine hero con un video del lago

---

## Note tecniche

- **Node version**: 25.x (locale), configurare `.nvmrc` o `engines` in package.json per Vercel
- **Next.js version**: 16.2.4
- **Tailwind version**: v4 (CSS-first, nessun `tailwind.config.ts` separato)
- **Immagini**: `next/image` con `fill` richiede un contenitore con `position: relative` e dimensioni definite

---

## Come contribuire

1. Leggi `CLAUDE.md` per la struttura del progetto
2. Leggi `docs/SEO_GUIDE.md` per aggiungere/modificare contenuti SEO
3. Aggiorna questo file (`COORDINATION.md`) dopo ogni sessione di lavoro significativa

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { tours } from "@/data/tours";
import { experiences } from "@/data/experiences";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { contact } from "@/data/navigation";

const schema = z.object({
  firstName: z.string().min(2, "Inserisci il nome"),
  lastName: z.string().min(2, "Inserisci il cognome"),
  email: z.string().email("Email non valida"),
  phone: z.string().min(6, "Inserisci il numero di telefono"),
  service: z.string().min(1, "Seleziona un servizio"),
  date: z.string().min(1, "Seleziona una data"),
  time: z.string().min(1, "Seleziona un orario"),
  people: z.string().min(1, "Indicare il numero di persone"),
  notes: z.string().optional(),
  privacy: z.literal(true, { message: "Devi accettare la privacy policy" }),
});

type FormData = z.infer<typeof schema>;

const allServices = [
  ...tours.map((t) => ({ value: t.slug, label: `Barca: ${t.name}` })),
  ...experiences.map((e) => ({ value: e.slug, label: `${e.icon} ${e.name}` })),
];

const timeSlots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Booking request:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Section bg="cream" className="min-h-[60vh] flex items-center">
        <div className="max-w-lg mx-auto text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="font-serif text-3xl font-bold text-navy mb-4">
            Richiesta ricevuta!
          </h1>
          <p className="text-slate leading-relaxed mb-8">
            Grazie per averci contattato. Riceverai una conferma via email entro poche ore.
            Per urgenze, chiama direttamente il{" "}
            <a href={`tel:${contact.phone}`} className="text-gold font-semibold">
              {contact.phone}
            </a>
            .
          </p>
          <Button href="/">Torna alla Home</Button>
        </div>
      </Section>
    );
  }

  return (
    <>
      {/* Hero */}
      <div className="bg-navy py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">
            Prenota online
          </p>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-4">
            Prenota il tuo Tour
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Compila il modulo e ti confermiamo la disponibilità entro poche ore. Nessun pagamento anticipato.
          </p>
        </div>
      </div>

      <Section bg="cream">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="font-serif text-2xl font-bold text-navy mb-6">
                Dettagli della Prenotazione
              </h2>

              {/* Google Calendar note */}
              <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 mb-6 flex gap-3">
                <span className="text-xl">📅</span>
                <div>
                  <p className="text-sm font-semibold text-navy">Disponibilità in tempo reale</p>
                  <p className="text-xs text-slate mt-1">
                    Il calendario di disponibilità con Google Calendar sarà attivato a breve.
                    Nel frattempo compila il modulo e ti confermeremo la disponibilità via email.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">Nome *</label>
                    <input
                      {...register("firstName")}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder="Mario"
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">Cognome *</label>
                    <input
                      {...register("lastName")}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder="Rossi"
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">Email *</label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder="mario@esempio.it"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">Telefono *</label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder="+39 347 000 0000"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Servizio desiderato *</label>
                  <select
                    {...register("service")}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold bg-white"
                  >
                    <option value="">Seleziona un tour o esperienza...</option>
                    <optgroup label="🚢 Tour in Barca">
                      {tours.map((t) => (
                        <option key={t.slug} value={t.slug}>{t.name} – {t.duration} – da €{t.price}</option>
                      ))}
                    </optgroup>
                    <optgroup label="✨ Esperienze">
                      {experiences.map((e) => (
                        <option key={e.slug} value={e.slug}>{e.name}</option>
                      ))}
                    </optgroup>
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">Data preferita *</label>
                    <input
                      {...register("date")}
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    />
                    {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">Orario preferito *</label>
                    <select
                      {...register("time")}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold bg-white"
                    >
                      <option value="">Seleziona orario...</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Numero di persone *</label>
                  <select
                    {...register("people")}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold bg-white"
                  >
                    <option value="">Quante persone siete?</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "persona" : "persone"}</option>
                    ))}
                  </select>
                  {errors.people && <p className="text-red-500 text-xs mt-1">{errors.people.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Note aggiuntive</label>
                  <textarea
                    {...register("notes")}
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold resize-none"
                    placeholder="Bambini, esigenze speciali, richieste particolari, festività da celebrare..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    {...register("privacy")}
                    type="checkbox"
                    id="privacy"
                    className="mt-0.5 accent-gold"
                  />
                  <label htmlFor="privacy" className="text-sm text-slate">
                    Ho letto e accetto la{" "}
                    <a href="/privacy" className="text-gold underline">Privacy Policy</a>
                    {" "}e acconsento al trattamento dei miei dati personali per la gestione della richiesta. *
                  </label>
                </div>
                {errors.privacy && <p className="text-red-500 text-xs -mt-3">{errors.privacy.message}</p>}

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Invio in corso..." : "Invia Richiesta di Prenotazione"}
                </Button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-serif text-xl font-bold text-navy mb-4">Preferisci chiamarci?</h3>
              <p className="text-slate text-sm mb-4">
                Il nostro team è disponibile per rispondere alle tue domande e aiutarti a scegliere il tour perfetto.
              </p>
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-3 text-navy font-semibold hover:text-gold transition-colors"
              >
                <span className="text-xl">📞</span>
                {contact.phone}
              </a>
              <a
                href={`https://wa.me/${contact.whatsapp.replace(/\s/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center gap-3 text-navy font-semibold hover:text-gold transition-colors"
              >
                <span className="text-xl">💬</span>
                WhatsApp
              </a>
              <div className="mt-4 text-xs text-slate">
                <p className="font-medium">Orari:</p>
                <p>Lun–Ven: {contact.hours.weekdays}</p>
                <p>Sab: {contact.hours.saturday}</p>
              </div>
            </div>

            <div className="bg-navy rounded-2xl p-6 text-white">
              <h3 className="font-serif text-xl font-bold mb-4">Politica di Cancellazione</h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex gap-2">
                  <span className="text-gold">✓</span>
                  Cancellazione gratuita fino a 48h prima
                </li>
                <li className="flex gap-2">
                  <span className="text-gold">✓</span>
                  Rimborso completo in caso di maltempo
                </li>
                <li className="flex gap-2">
                  <span className="text-gold">✓</span>
                  Nessun pagamento anticipato richiesto
                </li>
                <li className="flex gap-2">
                  <span className="text-gold">✓</span>
                  Possibilità di spostare la data
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { tours } from "@/data/tours";
import { experiences } from "@/data/experiences";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { contact } from "@/data/navigation";

const schema = z.object({
  firstName: z.string().min(2, "Please enter your first name"),
  lastName: z.string().min(2, "Please enter your last name"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Please enter your phone number"),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  people: z.string().min(1, "Please indicate the number of people"),
  notes: z.string().optional(),
  privacy: z.literal(true, { message: "You must accept the privacy policy" }),
});

type FormData = z.infer<typeof schema>;

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

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
            Request received!
          </h1>
          <p className="text-slate leading-relaxed mb-8">
            Thank you for getting in touch. You will receive a confirmation email within a few hours.
            For urgent enquiries, call us directly on{" "}
            <a href={`tel:${contact.phone}`} className="text-gold font-semibold">
              {contact.phone}
            </a>
            .
          </p>
          <Button href="/">Back to Home</Button>
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
            Book online
          </p>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-4">
            Book Your Tour
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Fill in the form and we will confirm your availability within a few hours. No upfront payment required.
          </p>
        </div>
      </div>

      <Section bg="cream">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="font-serif text-2xl font-bold text-navy mb-6">
                Booking Details
              </h2>

              {/* Google Calendar note */}
              <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 mb-6 flex gap-3">
                <span className="text-xl">📅</span>
                <div>
                  <p className="text-sm font-semibold text-navy">Real-time availability</p>
                  <p className="text-xs text-slate mt-1">
                    Live calendar availability (Google Calendar) will be activated shortly.
                    In the meantime, fill in the form and we will confirm your slot by email.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">First Name *</label>
                    <input
                      {...register("firstName")}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder="John"
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">Last Name *</label>
                    <input
                      {...register("lastName")}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder="Smith"
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
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">Phone *</label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder="+1 555 000 0000"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Preferred service *</label>
                  <select
                    {...register("service")}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold bg-white"
                  >
                    <option value="">Select a tour or experience...</option>
                    <optgroup label="🚢 Boat Tours">
                      {tours.map((t) => (
                        <option key={t.slug} value={t.slug}>{t.name} – {t.duration} – from €{t.price}</option>
                      ))}
                    </optgroup>
                    <optgroup label="✨ Experiences">
                      {experiences.map((e) => (
                        <option key={e.slug} value={e.slug}>{e.name}</option>
                      ))}
                    </optgroup>
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">Preferred date *</label>
                    <input
                      {...register("date")}
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    />
                    {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">Preferred time *</label>
                    <select
                      {...register("time")}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold bg-white"
                    >
                      <option value="">Select a time...</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Number of people *</label>
                  <select
                    {...register("people")}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold bg-white"
                  >
                    <option value="">How many people?</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "person" : "people"}</option>
                    ))}
                  </select>
                  {errors.people && <p className="text-red-500 text-xs mt-1">{errors.people.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Additional notes</label>
                  <textarea
                    {...register("notes")}
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold resize-none"
                    placeholder="Children, special requirements, celebrations, dietary needs..."
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
                    I have read and accept the{" "}
                    <a href="/privacy" className="text-gold underline">Privacy Policy</a>
                    {" "}and consent to the processing of my personal data for the management of this request. *
                  </label>
                </div>
                {errors.privacy && <p className="text-red-500 text-xs -mt-3">{errors.privacy.message}</p>}

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Sending..." : "Send Booking Request"}
                </Button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-serif text-xl font-bold text-navy mb-4">Prefer to call?</h3>
              <p className="text-slate text-sm mb-4">
                Our team is available to answer your questions and help you choose the perfect tour.
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
                <p className="font-medium">Opening hours:</p>
                <p>Mon–Fri: {contact.hours.weekdays}</p>
                <p>Sat: {contact.hours.saturday}</p>
              </div>
            </div>

            <div className="bg-navy rounded-2xl p-6 text-white">
              <h3 className="font-serif text-xl font-bold mb-4">Cancellation Policy</h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex gap-2">
                  <span className="text-gold">✓</span>
                  Free cancellation up to 48h before
                </li>
                <li className="flex gap-2">
                  <span className="text-gold">✓</span>
                  Full refund in case of bad weather
                </li>
                <li className="flex gap-2">
                  <span className="text-gold">✓</span>
                  No upfront payment required
                </li>
                <li className="flex gap-2">
                  <span className="text-gold">✓</span>
                  Option to reschedule your date
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

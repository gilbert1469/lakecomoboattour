"use client";

import { contact } from "@/data/navigation";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-navy py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-light text-sm font-semibold uppercase tracking-widest mb-2">We&apos;re here for you</p>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-4">Contact</h1>
          <p className="text-white/70 text-lg max-w-xl">
            Have a question, want a quote or just want to say hello? Write or call us — we reply within 24 hours.
          </p>
        </div>
      </div>

      <Section bg="cream">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-navy mb-4">Information</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-2xl shrink-0">📍</span>
                  <div>
                    <p className="text-sm font-semibold text-navy">Address</p>
                    <p className="text-slate text-sm">{contact.address}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl shrink-0">📞</span>
                  <div>
                    <p className="text-sm font-semibold text-navy">Phone</p>
                    <a href={`tel:${contact.phone}`} className="text-slate text-sm hover:text-gold-dark transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl shrink-0">✉️</span>
                  <div>
                    <p className="text-sm font-semibold text-navy">Email</p>
                    <a href={`mailto:${contact.email}`} className="text-slate text-sm hover:text-gold-dark transition-colors">
                      {contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl shrink-0">💬</span>
                  <div>
                    <p className="text-sm font-semibold text-navy">WhatsApp</p>
                    <a
                      href={`https://wa.me/${contact.whatsapp.replace(/\s/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate text-sm hover:text-gold-dark transition-colors"
                    >
                      Chat on WhatsApp →
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 shrink-0 text-navy" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  <div>
                    <p className="text-sm font-semibold text-navy">Instagram</p>
                    <a
                      href="https://www.instagram.com/lakecomotouristcenter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate text-sm hover:text-gold-dark transition-colors"
                    >
                      @lakecomotouristcenter
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-navy mb-4">Opening Hours</h2>
              <ul className="space-y-2 text-sm text-slate">
                <li className="flex justify-between">
                  <span>Mon–Sun</span>
                  <span className="font-medium text-navy">{contact.hours}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Map */}
      <div className="h-80 lg:h-96 w-full bg-gray-200 relative">
        <iframe
          src={contact.googleMapsUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lake Como Tourist Center – Map"
          className="absolute inset-0"
        />
      </div>
    </>
  );
}

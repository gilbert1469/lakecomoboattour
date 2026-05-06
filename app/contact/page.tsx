"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contact } from "@/data/navigation";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(10, "Message is too short"),
  privacy: z.literal(true, { message: "You must accept the privacy policy" }),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Contact form:", data);
    setSubmitted(true);
  };

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
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-navy mb-4">Opening Hours</h2>
              <ul className="space-y-2 text-sm text-slate">
                <li className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="font-medium text-navy">{contact.hours.weekdays}</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-navy">{contact.hours.saturday}</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-navy">{contact.hours.sunday}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form or success */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-2xl shadow-sm p-8 text-center h-full flex flex-col items-center justify-center">
                <div className="text-5xl mb-4">✅</div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3">Message sent!</h2>
                <p className="text-slate mb-6">
                  Thank you for writing to us. We will reply within 24 hours to the email address you provided.
                </p>
                <Button href="/">Back to Home</Button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="font-serif text-2xl font-bold text-navy mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1">Full Name *</label>
                      <input
                        {...register("name")}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-dark/50 focus:border-gold-dark"
                        placeholder="John Smith"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1">Email *</label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-dark/50 focus:border-gold-dark"
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">Subject *</label>
                    <input
                      {...register("subject")}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-dark/50 focus:border-gold-dark"
                      placeholder="Enquiry about the Classic Tour..."
                    />
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">Message *</label>
                    <textarea
                      {...register("message")}
                      rows={6}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-dark/50 focus:border-gold-dark resize-none"
                      placeholder="Write your message here..."
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      {...register("privacy")}
                      type="checkbox"
                      id="privacy-contact"
                      className="mt-0.5 accent-gold"
                    />
                    <label htmlFor="privacy-contact" className="text-sm text-slate">
                      I have read and accept the{" "}
                      <a href="/privacy" className="text-navy-light underline">Privacy Policy</a>. *
                    </label>
                  </div>
                  {errors.privacy && <p className="text-red-500 text-xs -mt-3">{errors.privacy.message}</p>}

                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            )}
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

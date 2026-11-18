"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import Button from "@/components/ui/Button";
import { contact } from "@/data/navigation";

// Same EmailJS service/template as the booking and partner enquiry forms.
const EMAILJS_SERVICE_ID = "service_pvty7cg";
const EMAILJS_TEMPLATE_ID = "template_zrttijd";
const EMAILJS_PUBLIC_KEY = "i54f0HPpkKN2Zc4QN";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(10, "Message is too short"),
  privacy: z.literal(true, { message: "You must accept the privacy policy" }),
});

type FormData = z.infer<typeof schema>;

const inputClass =
  "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-dark/50 focus:border-gold-dark";

interface ContactFormProps {
  /** When set, the enquiry is tagged with this tour and the subject is prefilled. */
  tourName?: string;
  title?: string;
}

export default function ContactForm({ tourName, title = "Send a Message" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: tourName ? { subject: `Enquiry about the ${tourName}` } : undefined,
  });

  const onSubmit = async (data: FormData) => {
    setSubmitError(false);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          first_name: data.name,
          last_name: "",
          email: data.email,
          phone: "-",
          service: tourName ? `TOUR ENQUIRY – ${tourName}` : `CONTACT – ${data.subject}`,
          date: "-",
          time: "-",
          people: "-",
          notes: [
            tourName ? `TOUR ENQUIRY: ${tourName}` : "CONTACT FORM",
            `Subject: ${data.subject}`,
            "",
            data.message,
          ].join("\n"),
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setSubmitError(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-8 text-center h-full flex flex-col items-center justify-center">
        <div className="text-5xl mb-4">✅</div>
        <h2 className="font-serif text-2xl font-bold text-navy mb-3">Message sent!</h2>
        <p className="text-slate mb-6">
          Thank you for writing to us. We will reply within 24 hours to the email address you provided.
        </p>
        <Button href="/">Back to Home</Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <h2 className="font-serif text-2xl font-bold text-navy mb-6">{title}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-navy mb-1">Full Name *</label>
            <input id="contact-name" {...register("name")} className={inputClass} placeholder="John Smith" />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-navy mb-1">Email *</label>
            <input
              id="contact-email"
              {...register("email")}
              type="email"
              className={inputClass}
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="contact-subject" className="block text-sm font-medium text-navy mb-1">Subject *</label>
          <input
            id="contact-subject"
            {...register("subject")}
            className={inputClass}
            placeholder="Enquiry about the Classic Tour..."
          />
          {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-navy mb-1">Message *</label>
          <textarea
            id="contact-message"
            {...register("message")}
            rows={6}
            className={`${inputClass} resize-none`}
            placeholder="Write your message here..."
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </div>

        <div className="flex items-start gap-3">
          <input {...register("privacy")} type="checkbox" id="privacy-contact" className="mt-0.5 accent-gold" />
          <label htmlFor="privacy-contact" className="text-sm text-slate">
            I have read and accept the{" "}
            <a href="/privacy" className="text-navy-light underline">Privacy Policy</a>. *
          </label>
        </div>
        {errors.privacy && <p className="text-red-500 text-xs -mt-3">{errors.privacy.message}</p>}

        {submitError && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
            Sorry, something went wrong and your message could not be sent. Please try again or email us at{" "}
            <a href={`mailto:${contact.email}`} className="underline font-medium">
              {contact.email}
            </a>
            .
          </div>
        )}

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}

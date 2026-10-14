"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import Button from "@/components/ui/Button";
import { contact } from "@/data/navigation";

const EMAILJS_SERVICE_ID = "service_pvty7cg";
const EMAILJS_TEMPLATE_ID = "template_zrttijd";
const EMAILJS_PUBLIC_KEY = "i54f0HPpkKN2Zc4QN";

const BUSINESS_TYPES = ["Travel Agency", "DMC", "Tour Operator", "Other"] as const;

const schema = z.object({
  company: z.string().min(2, "Please enter your agency / company name"),
  contactName: z.string().min(2, "Please enter your name"),
  email: z.string().email("Invalid email address"),
  country: z.string().min(2, "Please enter your country"),
  businessType: z.enum(BUSINESS_TYPES, { message: "Please select a business type" }),
  message: z.string().min(10, "Message is too short"),
  privacy: z.literal(true, { message: "You must accept the privacy policy" }),
});

type FormData = z.infer<typeof schema>;

const inputClass =
  "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-dark/50 focus:border-gold-dark";

export default function PartnerEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitError(false);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          first_name: data.contactName,
          last_name: `(${data.company})`,
          email: data.email,
          phone: "-",
          service: `PARTNER ENQUIRY – ${data.businessType} – ${data.company} (${data.country})`,
          date: "-",
          time: "-",
          people: "-",
          notes: [
            "PARTNER ENQUIRY (Travel Trade)",
            `Company: ${data.company}`,
            `Contact: ${data.contactName}`,
            `Email: ${data.email}`,
            `Country: ${data.country}`,
            `Business type: ${data.businessType}`,
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
      <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-serif text-2xl font-bold text-navy mb-3">Enquiry sent!</h3>
        <p className="text-slate">
          Thank you for your interest in partnering with us. Our travel trade team will get back to you
          shortly at the email address you provided.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="partner-company" className="block text-sm font-medium text-navy mb-1">
              Agency / Company Name *
            </label>
            <input id="partner-company" {...register("company")} className={inputClass} placeholder="Acme Travel Ltd" />
            {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
          </div>
          <div>
            <label htmlFor="partner-name" className="block text-sm font-medium text-navy mb-1">
              Contact Name *
            </label>
            <input id="partner-name" {...register("contactName")} className={inputClass} placeholder="Jane Smith" />
            {errors.contactName && <p className="text-red-500 text-xs mt-1">{errors.contactName.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="partner-email" className="block text-sm font-medium text-navy mb-1">
              Email *
            </label>
            <input
              id="partner-email"
              {...register("email")}
              type="email"
              className={inputClass}
              placeholder="jane@agency.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="partner-country" className="block text-sm font-medium text-navy mb-1">
              Country *
            </label>
            <input id="partner-country" {...register("country")} className={inputClass} placeholder="United States" />
            {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="partner-type" className="block text-sm font-medium text-navy mb-1">
            Business Type *
          </label>
          <select id="partner-type" {...register("businessType")} defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select…
            </option>
            {BUSINESS_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.businessType && <p className="text-red-500 text-xs mt-1">{errors.businessType.message}</p>}
        </div>

        <div>
          <label htmlFor="partner-message" className="block text-sm font-medium text-navy mb-1">
            Message *
          </label>
          <textarea
            id="partner-message"
            {...register("message")}
            rows={6}
            className={`${inputClass} resize-none`}
            placeholder="Tell us about your agency, your clients and what you're looking for on Lake Como..."
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </div>

        <div className="flex items-start gap-3">
          <input {...register("privacy")} type="checkbox" id="privacy-partner" className="mt-0.5 accent-gold" />
          <label htmlFor="privacy-partner" className="text-sm text-slate">
            I have read and accept the{" "}
            <a href="/privacy" className="text-navy-light underline">Privacy Policy</a>. *
          </label>
        </div>
        {errors.privacy && <p className="text-red-500 text-xs -mt-3">{errors.privacy.message}</p>}

        {submitError && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
            Sorry, something went wrong and your enquiry could not be sent. Please try again or email us at{" "}
            <a href={`mailto:${contact.email}`} className="underline font-medium">
              {contact.email}
            </a>
            .
          </div>
        )}

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Sending..." : "Send Partner Enquiry"}
        </Button>
      </form>
    </div>
  );
}

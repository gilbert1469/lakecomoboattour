"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { getTourBySlug } from "@/data/tours";
import { experiences } from "@/data/experiences";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { contact } from "@/data/navigation";
import {
  BOAT_RENTAL_PRICES,
  BOAT_RENTAL_SLUG,
  BOAT_TYPE_OPTIONS,
  getBookingPrice,
  isBoatRental,
  isPayableTour,
} from "@/lib/pricing";

const EMAILJS_SERVICE_ID = "service_pvty7cg";
const EMAILJS_TEMPLATE_ID = "template_zrttijd";
const EMAILJS_PUBLIC_KEY = "i54f0HPpkKN2Zc4QN";

const GROUP_SIZE_OPTIONS = [
  { value: "up-to-10", label: "Individuals / small group (up to 10)" },
  { value: "up-to-15", label: "Up to 15 people" },
  { value: "up-to-25", label: "Up to 25 people" },
  { value: "up-to-50", label: "Up to 50 people" },
  { value: "over-50", label: "Over 50 people" },
] as const;

const INTEREST_OPTIONS = [
  { value: "boat-tour", label: "Boat tour" },
  { value: "boat-rental", label: "Boat rental" },
  { value: "experience", label: "Experience (cooking, wine, cycling, water sports)" },
  { value: "info", label: "Just request information" },
] as const;

type GroupSize = (typeof GROUP_SIZE_OPTIONS)[number]["value"];
type Interest = (typeof INTEREST_OPTIONS)[number]["value"];

/** Boat tour duration (hours) → payable tour slug. */
const DURATION_TO_TOUR: Record<string, string> = {
  "1": "lake-como-highlights",
  "2": "como-and-surroundings",
  "3": "heart-of-the-lake",
  "4": "half-day-tour",
  "6": "six-hours-of-wonder",
  "8": "full-day-tour",
};

const hoursLabel = (h: string) => `${h} ${h === "1" ? "hour" : "hours"}`;

const groupSizeLabel = (v: string | undefined) => GROUP_SIZE_OPTIONS.find((o) => o.value === v)?.label ?? "";
const interestLabel = (v: string | undefined) => INTEREST_OPTIONS.find((o) => o.value === v)?.label ?? "";

/** Online payment is only for small groups booking a boat tour or a boat rental. */
function isPayPath(groupSize: string | undefined, interest: string | undefined): boolean {
  return groupSize === "up-to-10" && (interest === "boat-tour" || interest === "boat-rental");
}

/** The pricing-engine slug for the current selection (tour slug, boat rental slug, or undefined). */
function selectedServiceSlug(groupSize?: string, interest?: string, tourDuration?: string): string | undefined {
  if (!isPayPath(groupSize, interest)) return undefined;
  if (interest === "boat-tour") return tourDuration ? DURATION_TO_TOUR[tourDuration] : undefined;
  return BOAT_RENTAL_SLUG;
}

const schema = z
  .object({
    groupSize: z.enum(GROUP_SIZE_OPTIONS.map((o) => o.value) as [GroupSize, ...GroupSize[]], {
      message: "Please select your group size",
    }),
    interest: z.enum(INTEREST_OPTIONS.map((o) => o.value) as [Interest, ...Interest[]], {
      message: "Please tell us what you are interested in",
    }),
    tourDuration: z.string().optional(),
    boatType: z.string().optional(),
    rentalDuration: z.string().optional(),
    experience: z.string().optional(),
    firstName: z.string().min(2, "Please enter your first name"),
    lastName: z.string().min(2, "Please enter your last name"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    date: z.string().optional(),
    time: z.string().optional(),
    notes: z.string().optional(),
    privacy: z.literal(true, { message: "You must accept the privacy policy" }),
  })
  .superRefine((data, ctx) => {
    const issue = (path: string, message: string) => ctx.addIssue({ code: "custom", path: [path], message });
    const payPath = isPayPath(data.groupSize, data.interest);

    if (payPath && data.interest === "boat-tour") {
      if (!data.tourDuration) issue("tourDuration", "Please select a duration");
      if (!data.boatType) issue("boatType", "Please select a boat type");
    }
    if (payPath && data.interest === "boat-rental" && !data.rentalDuration) {
      issue("rentalDuration", "Please select a rental duration");
    }
    if (data.interest === "experience" && !data.experience) {
      issue("experience", "Please select an experience");
    }

    if (data.interest === "info") {
      if (!data.notes || data.notes.trim().length < 5) issue("notes", "Please write your message");
    } else {
      if (!data.phone || data.phone.length < 6) issue("phone", "Please enter your phone number");
      if (!data.date) issue("date", "Please select a date");
      if (!data.time) issue("time", "Please select a time");
    }
  }, { when: () => true }); // run even when base fields fail, so every error shows at once

type FormData = z.infer<typeof schema>;

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

const inputClass =
  "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-dark/50 focus:border-gold-dark";
const selectClass = `${inputClass} bg-white`;

function FieldError({ message }: { message?: string }) {
  return message ? <p className="text-red-500 text-xs mt-1">{message}</p> : null;
}

/** Pre-selections from a `?tour=` / `?service=` deep link. */
function defaultsFromParam(param: string | null): Partial<FormData> {
  if (!param) return {};
  const duration = Object.keys(DURATION_TO_TOUR).find((h) => DURATION_TO_TOUR[h] === param);
  if (duration) return { groupSize: "up-to-10", interest: "boat-tour", tourDuration: duration };
  if (isBoatRental(param)) return { groupSize: "up-to-10", interest: "boat-rental" };
  return {};
}

/** Reads the deep-link param and applies its pre-selections once, without remounting the form. */
function DeepLinkPreselect({ onDefaults }: { onDefaults: (defaults: Partial<FormData>) => void }) {
  const params = useSearchParams();
  const param = params.get("tour") ?? params.get("service");
  useEffect(() => {
    const defaults = defaultsFromParam(param);
    if (Object.keys(defaults).length > 0) onDefaults(defaults);
  }, [param, onDefaults]);
  return null;
}

function BookingForm({ onSubmitted }: { onSubmitted: () => void }) {
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const applyDefaults = useCallback(
    (defaults: Partial<FormData>) => {
      // The Duration select mounts after this re-render and picks up the stored value on register.
      if (defaults.groupSize) setValue("groupSize", defaults.groupSize);
      if (defaults.interest) setValue("interest", defaults.interest);
      if (defaults.tourDuration) setValue("tourDuration", defaults.tourDuration);
    },
    [setValue]
  );

  const groupSize = watch("groupSize");
  const interest = watch("interest");
  const payPath = isPayPath(groupSize, interest);
  const showTourFields = payPath && interest === "boat-tour";
  const showRentalFields = payPath && interest === "boat-rental";
  const showExperience = interest === "experience";
  const isInfo = interest === "info";
  const isLargeGroup = !!groupSize && groupSize !== "up-to-10";

  const totalPrice = getBookingPrice({
    service: selectedServiceSlug(groupSize, interest, watch("tourDuration")),
    boatType: showTourFields ? watch("boatType") : undefined,
    rentalDuration: showRentalFields ? watch("rentalDuration") : undefined,
  });

  const onSubmit = async (data: FormData) => {
    setSubmitError(false);

    const service = selectedServiceSlug(data.groupSize, data.interest, data.tourDuration);
    const boatType = isPayableTour(service) ? data.boatType : undefined;
    const rentalDuration = isBoatRental(service) ? data.rentalDuration : undefined;
    const price = getBookingPrice({ service, boatType, rentalDuration });

    const boatTypeLabel = BOAT_TYPE_OPTIONS.find((o) => o.value === boatType)?.label;
    const experienceName =
      data.interest === "experience" ? experiences.find((e) => e.slug === data.experience)?.name : undefined;
    const durationLabel =
      data.interest === "boat-tour" && data.tourDuration
        ? hoursLabel(data.tourDuration)
        : rentalDuration
          ? hoursLabel(rentalDuration)
          : "";

    let serviceDetail: string;
    if (isPayableTour(service)) {
      serviceDetail = [getTourBySlug(service as string)?.name ?? service, durationLabel, boatTypeLabel]
        .filter(Boolean)
        .join(" – ");
    } else if (isBoatRental(service)) {
      serviceDetail = `Boat Rental – 40 CV – ${durationLabel}`;
    } else if (experienceName) {
      serviceDetail = `Experience: ${experienceName}`;
    } else {
      serviceDetail = interestLabel(data.interest);
    }
    if (data.groupSize !== "up-to-10") serviceDetail += " – tailored group quote";
    const serviceLine = price !== null ? `${serviceDetail} – €${price} (online payment)` : serviceDetail;

    let emailSent = false;
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone ?? "",
          service: serviceLine,
          date: data.date ?? "",
          time: data.time ?? "",
          people: groupSizeLabel(data.groupSize),
          notes: data.notes ?? "",
          group_size: groupSizeLabel(data.groupSize),
          interest: interestLabel(data.interest),
          duration: durationLabel,
          boat_type: boatTypeLabel ?? "",
          experience: experienceName ?? "",
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      emailSent = true;
    } catch (err) {
      console.error("EmailJS send failed:", err);
    }

    // Payable bookings go to Stripe even if the notification email failed.
    if (price !== null) {
      try {
        const res = await fetch("/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service,
            boatType,
            rentalDuration,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone ?? "",
            date: data.date ?? "",
            time: data.time ?? "",
            people: groupSizeLabel(data.groupSize),
            notes: data.notes ?? "",
          }),
        });
        const json: { url?: string } = await res.json();
        if (!res.ok || !json.url) throw new Error("Checkout session creation failed");
        window.location.href = json.url;
      } catch (err) {
        console.error("Checkout failed:", err);
        setSubmitError(true);
      }
      return;
    }

    if (emailSent) {
      onSubmitted();
    } else {
      setSubmitError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Suspense fallback={null}>
        <DeepLinkPreselect onDefaults={applyDefaults} />
      </Suspense>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="groupSize" className="block text-sm font-medium text-navy mb-1">Group size *</label>
          <select id="groupSize" {...register("groupSize")} className={selectClass}>
            <option value="">How many people?</option>
            {GROUP_SIZE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          <FieldError message={errors.groupSize?.message} />
        </div>
        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-navy mb-1">What are you interested in? *</label>
          <select id="interest" {...register("interest")} className={selectClass}>
            <option value="">Select...</option>
            {INTEREST_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          <FieldError message={errors.interest?.message} />
        </div>
      </div>

      {isLargeGroup && (
        <p className="text-sm text-navy bg-cream rounded-lg px-4 py-3">
          Our team will prepare a tailored quote for your group.
        </p>
      )}

      {showTourFields && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="tourDuration" className="block text-sm font-medium text-navy mb-1">Duration *</label>
            <select id="tourDuration" {...register("tourDuration")} className={selectClass}>
              <option value="">Select a duration...</option>
              {Object.keys(DURATION_TO_TOUR).map((h) => (
                <option key={h} value={h}>{hoursLabel(h)} – {getTourBySlug(DURATION_TO_TOUR[h])?.name}</option>
              ))}
            </select>
            <FieldError message={errors.tourDuration?.message} />
          </div>
          <div>
            <label htmlFor="boatType" className="block text-sm font-medium text-navy mb-1">Boat type *</label>
            <select id="boatType" {...register("boatType")} className={selectClass}>
              <option value="">Select a boat type...</option>
              {BOAT_TYPE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <FieldError message={errors.boatType?.message} />
          </div>
        </div>
      )}

      {showRentalFields && (
        <div>
          <label htmlFor="rentalDuration" className="block text-sm font-medium text-navy mb-1">Rental duration *</label>
          <select id="rentalDuration" {...register("rentalDuration")} className={selectClass}>
            <option value="">Select a duration...</option>
            {Object.keys(BOAT_RENTAL_PRICES).map((h) => (
              <option key={h} value={h}>{hoursLabel(h)}</option>
            ))}
          </select>
          <FieldError message={errors.rentalDuration?.message} />
        </div>
      )}

      {showExperience && (
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-navy mb-1">Experience *</label>
          <select id="experience" {...register("experience")} className={selectClass}>
            <option value="">Select an experience...</option>
            {experiences.map((e) => (
              <option key={e.slug} value={e.slug}>{e.name}</option>
            ))}
          </select>
          <FieldError message={errors.experience?.message} />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-navy mb-1">First Name *</label>
          <input {...register("firstName")} className={inputClass} placeholder="John" />
          <FieldError message={errors.firstName?.message} />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-1">Last Name *</label>
          <input {...register("lastName")} className={inputClass} placeholder="Smith" />
          <FieldError message={errors.lastName?.message} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-navy mb-1">Email *</label>
          <input {...register("email")} type="email" className={inputClass} placeholder="john@example.com" />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-1">Phone {isInfo ? "" : "*"}</label>
          <input {...register("phone")} type="tel" className={inputClass} placeholder="+1 555 000 0000" />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>

      {!isInfo && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-navy mb-1">Preferred date *</label>
            <input
              {...register("date")}
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className={inputClass}
            />
            <FieldError message={errors.date?.message} />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy mb-1">Preferred time *</label>
            <select {...register("time")} className={selectClass}>
              <option value="">Select a time...</option>
              {timeSlots.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <FieldError message={errors.time?.message} />
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-navy mb-1">{isInfo ? "Your message *" : "Additional notes"}</label>
        <textarea
          {...register("notes")}
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder={
            isInfo
              ? "Tell us what you would like to know..."
              : "Children, special requirements, celebrations, dietary needs..."
          }
        />
        <FieldError message={errors.notes?.message} />
      </div>

      <div className="flex items-start gap-3">
        <input {...register("privacy")} type="checkbox" id="privacy" className="mt-0.5 accent-gold" />
        <label htmlFor="privacy" className="text-sm text-slate">
          I have read and accept the{" "}
          <a href="/privacy" className="text-navy-light underline">Privacy Policy</a>
          {" "}and consent to the processing of my personal data for the management of this request. *
        </label>
      </div>
      {errors.privacy && <p className="text-red-500 text-xs -mt-3">{errors.privacy.message}</p>}

      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3">
          Something went wrong. Please try again or contact us on WhatsApp.
        </div>
      )}

      {totalPrice !== null && (
        <div className="flex items-center justify-between bg-cream rounded-lg px-4 py-3">
          <span className="text-sm text-slate">Price per boat, paid securely online</span>
          <span className="font-serif text-xl font-bold text-navy">Total: €{totalPrice}</span>
        </div>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending..." : totalPrice !== null ? "Continue to Payment" : "Send Request"}
      </Button>
    </form>
  );
}

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <Section bg="cream" className="min-h-[60vh] flex items-center">
        <div className="max-w-lg mx-auto text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="font-serif text-3xl font-bold text-navy mb-4">
            Request received!
          </h1>
          <p className="text-slate leading-relaxed mb-8">
            Thank you! We&apos;ve received your request and will get back to you within a few hours.
            For urgent enquiries, call us directly on{" "}
            <a href={`tel:${contact.phone}`} className="text-navy-light font-semibold">
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
          <p className="text-gold-light text-sm font-semibold uppercase tracking-widest mb-2">
            Book online
          </p>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-4">
            Book Your Tour
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Hourly boat tours and boat rental for groups of up to 10 are booked and paid securely online. Larger groups, experiences and information requests are on request — just send the form and we&apos;ll get back to you within a few hours, no upfront payment.
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
              <div className="bg-cream border border-gold/40 rounded-xl p-4 mb-6 flex gap-3">
                <span className="text-xl">📅</span>
                <div>
                  <p className="text-sm font-semibold text-navy">Real-time availability</p>
                  <p className="text-xs text-slate mt-1">
                    Live calendar availability (Google Calendar) will be activated shortly.
                    In the meantime, fill in the form and we will confirm your slot by email.
                  </p>
                </div>
              </div>

              <BookingForm onSubmitted={() => setSubmitted(true)} />
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
                className="flex items-center gap-3 text-navy font-semibold hover:text-gold-dark transition-colors"
              >
                <span className="text-xl">📞</span>
                {contact.phone}
              </a>
              <a
                href={`https://wa.me/${contact.whatsapp.replace(/\s/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center gap-3 text-navy font-semibold hover:text-gold-dark transition-colors"
              >
                <span className="text-xl">💬</span>
                WhatsApp
              </a>
              <div className="mt-4 text-xs text-slate">
                <p className="font-medium">Opening hours:</p>
                <p>Mon–Sun: {contact.hours}</p>
              </div>
            </div>

            <div className="bg-navy rounded-2xl p-6 text-white">
              <h3 className="font-serif text-xl font-bold mb-4">Cancellation Policy</h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex gap-2">
                  <span className="text-gold-light">✓</span>
                  Free cancellation up to 48h before
                </li>
                <li className="flex gap-2">
                  <span className="text-gold-light">✓</span>
                  Full refund in case of bad weather
                </li>
                <li className="flex gap-2">
                  <span className="text-gold-light">✓</span>
                  Secure online payment for hourly tours &amp; rentals
                </li>
                <li className="flex gap-2">
                  <span className="text-gold-light">✓</span>
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

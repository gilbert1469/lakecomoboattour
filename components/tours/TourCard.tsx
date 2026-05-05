import Link from "next/link";
import Image from "next/image";
import { Tour } from "@/data/tours";
import { formatPrice } from "@/lib/utils";

interface TourCardProps {
  tour: Tour;
  variant?: "default" | "featured";
}

export default function TourCard({ tour, variant = "default" }: TourCardProps) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {tour.tag && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-gold text-white text-xs font-bold rounded-full uppercase tracking-wide">
            {tour.tag}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="font-serif text-xl font-bold text-navy leading-snug">{tour.name}</h3>
        </div>

        <p className="text-slate text-sm leading-relaxed mb-4 flex-1">{tour.shortDescription}</p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-slate mb-5">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {tour.duration}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            max {tour.maxPeople} persone
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
          <div>
            <span className="text-2xl font-bold text-navy">{formatPrice(tour.price)}</span>
            <span className="text-xs text-slate ml-1">{tour.priceNote}</span>
          </div>
          <Link
            href={`/prenotazione?tour=${tour.slug}`}
            className="px-4 py-2 bg-gold text-white text-sm font-semibold rounded-full hover:bg-gold-dark transition-colors"
          >
            Prenota
          </Link>
        </div>
      </div>
    </article>
  );
}

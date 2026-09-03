import Link from "next/link";
import Image from "next/image";
import { Tour } from "@/data/tours";
import { formatPrice, getShortDuration } from "@/lib/utils";

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  const shortDuration = getShortDuration(tour.duration);

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
          <div className="absolute top-3 left-3 px-3 py-1 bg-navy text-white text-xs font-bold rounded-full uppercase tracking-wide">
            {tour.tag}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-serif text-xl font-bold text-navy leading-snug mb-3">
          {tour.name}
          {shortDuration && ` – ${shortDuration}`}
        </h3>

        <div className="flex items-center gap-1 text-sm text-slate mb-3">
          <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {tour.duration}
        </div>

        <div className="mb-4">
          <span className="text-2xl font-bold text-navy">
            {tour.priceFrom !== null ? `from ${formatPrice(tour.priceFrom)}` : "Quotation on request"}
          </span>
          {tour.priceFrom !== null && tour.priceNote && (
            <span className="block text-xs text-slate mt-0.5">{tour.priceNote}</span>
          )}
        </div>

        <div className="flex-1 space-y-2 text-sm text-slate border-t border-gray-100 pt-4 mb-5">
          {tour.paxNote && (
            <p className="flex items-start gap-2">
              <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {tour.paxNote}
            </p>
          )}
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16l4-8 4 4 4-9 6 13H3z" />
            </svg>
            <div>
              <span>{tour.boatsLabel ?? "Boats available"}:</span>
              <ul className="mt-1 space-y-0.5">
                {tour.boats.map((boat) => (
                  <li key={boat} className="list-disc list-inside">
                    {boat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="flex items-start gap-2">
            <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14l-1 12H6L5 8zm0 0l1-4h12l1 4M9 12v4m6-4v4" />
            </svg>
            Complimentary luggage storage available
          </p>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href={`/booking?tour=${tour.slug}`}
            className="px-4 py-2 bg-gold-light text-navy text-sm font-semibold rounded-full hover:bg-gold transition-colors"
          >
            Book
          </Link>
          <Link
            href={`/taxi-boat-lake-como/${tour.slug}`}
            className="text-sm font-medium text-navy-light hover:text-navy transition-colors"
          >
            Discover more →
          </Link>
        </div>
      </div>
    </article>
  );
}

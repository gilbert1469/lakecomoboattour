import Link from "next/link";
import Image from "next/image";
import { Tour } from "@/data/tours";

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
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

      {/* Content: name on top, CTAs pinned to the bottom */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-serif text-xl font-bold text-navy leading-snug mb-5">{tour.name}</h3>

        <div className="mt-auto flex items-center gap-3">
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

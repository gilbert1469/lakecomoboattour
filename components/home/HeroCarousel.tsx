"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const slides = [
  "/images/tour-villa.jpg",
  "/images/experience-cooking.jpg",
  "/images/guided-tours.png",
  "/images/watersport-tour.jpg",
  "/images/tour-sunset.jpg",
];

const ROTATE_INTERVAL_MS = 4000;

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {slides.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: index === activeIndex ? 1 : 0 }}
          aria-hidden={index !== activeIndex}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-navy/55" />
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-4xl font-bold text-gold-light text-balance sm:text-5xl lg:text-6xl">
          We Make Experiences
        </h1>
        <p className="mt-3 font-serif text-xl font-semibold text-gold-light sm:text-2xl">
          Your Gateway to Lake Como
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
          Boat tours, guided experiences, cooking classes and more — everything you need to
          make the most of your time on the lake, all from one place.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/taxi-boat-lake-como" variant="primary" size="lg">
            Explore Tours
          </Button>
          <Button
            href="/experiences"
            variant="outline"
            size="lg"
            className="!border-white !text-white hover:!bg-white hover:!text-navy"
          >
            Discover Experiences
          </Button>
        </div>
        <p className="mt-6 flex items-center gap-1.5 text-sm text-white/70">
          <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          3 minutes from Como S. Giovanni train station - Connection with Milano Centrale, Milano
          Malpensa, Milano Porta Garibaldi, Lugano and Zurigo
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((src, index) => (
          <button
            key={src}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

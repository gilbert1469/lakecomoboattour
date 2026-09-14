"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const slides = [
  "/images/watersport-tour.jpg",
  "/images/experience-cooking.jpg",
  "/images/guided-tours.png",
  "/images/tour-villa.jpg",
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
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold-light">
          We Make Experiences
        </p>
        <h1 className="font-serif text-4xl font-bold text-white text-balance sm:text-5xl lg:text-6xl">
          Your Gateway to Lake Como
        </h1>
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

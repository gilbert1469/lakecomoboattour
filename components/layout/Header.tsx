"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation, contact } from "@/data/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl">⛵</span>
            <div>
              <div className="font-serif text-lg font-bold text-navy leading-tight">
                Lake Como
              </div>
              <div className="text-xs text-navy-light font-medium tracking-widest uppercase leading-tight">
                Tourist Center
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.label === "Prenota" ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="ml-4 px-5 py-2 bg-gold-light text-navy font-semibold rounded-full text-sm hover:bg-gold transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-slate hover:text-navy transition-colors rounded-md hover:bg-gray-50"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile phone + hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={`tel:${contact.phone}`}
              className="text-navy p-2"
              aria-label="Call us"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-navy"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={
                  item.label === "Prenota"
                    ? "mt-2 px-4 py-3 bg-gold-light text-navy font-semibold rounded-full text-center text-sm"
                    : "px-4 py-3 text-sm font-medium text-slate hover:text-navy hover:bg-gray-50 rounded-md"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

'use client';

import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';

export function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-charcoal-900 py-20 sm:py-28 lg:py-32"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-steel-600/10 blur-3xl"
          style={{
            transform: `translate(calc(-50% + ${(mousePosition.x - 0.5) * 40}px), calc(-50% + ${(mousePosition.y - 0.5) * 40}px))`,
            transition: 'transform 0.5s ease-out',
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container-width relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to Restore Your Vehicle?
          </h2>
          <p className="mb-10 text-lg text-charcoal-300 sm:text-xl">
            Get a free estimate today. Our expert team is ready to help you get
            back on the road with a beautifully restored vehicle.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="btn-primary group text-lg"
            >
              Get a Free Quote
              <svg
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <a
              href="tel:201-857-0419"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/20 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (201) 857-0419
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

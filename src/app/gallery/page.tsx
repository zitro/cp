import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { FadeIn } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'View our portfolio of collision repair work. See before and after photos of restored vehicles at Collision Pros Body Work in Waldwick, NJ.',
};

export default function GalleryPage() {
  return (
    <>
      {/* Elfsight Instagram Feed Script */}
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
      />

      {/* Hero Section */}
      <section className="relative flex min-h-[40vh] items-center bg-charcoal-900 pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/topBooth.jpg"
            alt="Our work gallery"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/90 to-charcoal-900/70" />
        </div>
        <div className="container-width relative z-10 px-4 py-16 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-brand-400">
              Our Work
            </p>
            <h1 className="font-display mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Gallery
            </h1>
            <p className="text-xl text-charcoal-300">
              See the quality of our collision repair work. Every vehicle is
              restored with precision and care.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <FadeIn className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display mb-4 text-3xl font-bold text-charcoal-900 sm:text-4xl">
              Our Recent Work
            </h2>
            <p className="text-lg text-charcoal-600">
              Follow us on Instagram to see our latest projects and
              behind-the-scenes content.
            </p>
          </FadeIn>

          {/* Elfsight Instagram Feed Widget */}
          <div
            className="elfsight-app-f0534d19-758e-42d0-8e0f-7da07d31464e"
            data-elfsight-app-lazy
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-600 text-white">
        <div className="container-width">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="font-display mb-6 text-3xl font-bold sm:text-4xl">
              Ready to Get Your Vehicle Restored?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Let us transform your damaged vehicle into a beautifully restored
              masterpiece. Contact us for a free estimate today.
            </p>
            <Link href="/contact" className="btn-white">
              Get a Free Quote
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

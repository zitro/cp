import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Complete collision repair services including major repairs, hail damage, paintless dent repair, auto glass, and paint protection film. Expert technicians, OEM parts, warranty on all repairs.',
};

const services = [
  {
    id: 'major-repairs',
    title: 'Major Repairs',
    description:
      'The best part of our job is watching the delight and disbelief on customers\' faces in that first moment when they see their beautifully restored vehicle. Our specialist expertise and manufacturer-trained technicians restore vehicles to pre-accident condition using state-of-the-art equipment and techniques.',
    features: [
      'Frame and structural repair',
      'Panel replacement and alignment',
      'Welding and metalwork',
      'Complete vehicle restoration',
      'OEM parts and procedures',
    ],
    image: '/images/hpLeft.jpg',
  },
  {
    id: 'hail-damage',
    title: 'Hail Damage Repair',
    description:
      'Our facility provides both paintless dent repair and conventional body damage repair for hail-damaged vehicles. We work directly with insurance companies and exclusively use Original Equipment Manufactured Parts, applied by certified technicians following factory-specific guidelines.',
    features: [
      'Paintless dent repair (PDR)',
      'Conventional body repair',
      'Insurance claim assistance',
      'OEM parts only',
      'Factory-certified procedures',
    ],
    image: '/images/hpCenter.jpg',
  },
  {
    id: 'pdr',
    title: 'Paintless Dent Repair',
    description:
      'Our paintless dent repair service removes minor dents and serious creases while preserving your vehicle\'s original paint finish. This innovative technique means faster repairs, fewer days with a rental car, and reduced insurance claims resulting in lower costs for you.',
    features: [
      'Preserves original paint',
      'Faster turnaround time',
      'Lower cost than traditional repair',
      'No color matching needed',
      'Environmentally friendly',
    ],
    image: '/images/hpRight.jpg',
  },
  {
    id: 'glass',
    title: 'Auto Glass Repair',
    description:
      'From small chip repairs to complete windshield replacement, our technicians use advanced clear resin that cures under ultraviolet light to restore damaged areas. We also offer tint matching to ensure your replacement glass matches the rest of your vehicle perfectly.',
    features: [
      'Chip and crack repair',
      'Windshield replacement',
      'Side and rear glass',
      'Tint matching',
      'UV-cured resin technology',
    ],
    image: '/images/topBooth.jpg',
  },
  {
    id: 'ppf',
    title: 'Paint Protection Film',
    description:
      'Paint protection film is a durable, colorless urethane armor that protects your vehicle\'s most vulnerable areas from road debris, rock chips, and environmental damage. We apply this invisible shield to hood edges, wheel flares, mirrors, rocker panels, and more.',
    features: [
      'Invisible protection',
      'Self-healing technology',
      'UV and stain resistant',
      'Custom-cut for perfect fit',
      'Protects against rock chips',
    ],
    image: '/images/a53336677eb30bbe5e96c364b12d3dd6x.jpg',
  },
  {
    id: 'painting',
    title: 'Professional Painting',
    description:
      'Damage to paint can come from many sources - collisions, scratches, weather, and everyday wear. Our expert technicians use computerized color matching technology to find the exact match for your vehicle, ensuring a seamless finish that looks factory-fresh.',
    features: [
      'Computerized color matching',
      'Full vehicle respray',
      'Spot and panel painting',
      'Clear coat restoration',
      'Custom finishes available',
    ],
    image: '/images/hpCenter.jpg',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] items-center bg-charcoal-900 pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/topBooth.jpg"
            alt="Auto body repair services"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/90 to-charcoal-900/70" />
        </div>
        <div className="container-width relative z-10 px-4 py-20 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-brand-400">
              Our Services
            </p>
            <h1 className="font-display mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Complete Collision Repair Services
            </h1>
            <p className="text-xl text-charcoal-300">
              From minor dents to major collision damage, our certified
              technicians have the expertise and equipment to restore your
              vehicle to perfection.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="space-y-24">
            {services.map((service, index) => (
              <FadeIn
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-display mb-4 text-3xl font-bold text-charcoal-900 sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mb-6 text-lg text-charcoal-600">
                      {service.description}
                    </p>
                    <ul className="mb-8 space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-charcoal-700"
                        >
                          <svg
                            className="h-5 w-5 shrink-0 text-brand-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="btn-primary">
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-width">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="font-display mb-6 text-3xl font-bold text-white sm:text-4xl">
              Not Sure What Service You Need?
            </h2>
            <p className="mb-8 text-lg text-charcoal-300">
              Bring your vehicle in for a free inspection and computerized
              estimate. Our experts will assess the damage and recommend the
              best solution.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Schedule Free Inspection
              </Link>
              <a
                href="tel:201-857-0419"
                className="inline-flex items-center gap-2 font-semibold text-white hover:text-brand-400"
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
                Call (201) 857-0419
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

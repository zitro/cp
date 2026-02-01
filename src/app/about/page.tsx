import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Collision Pros Body Work - over 15 years of expert collision repair service in Waldwick, NJ. Certified technicians, warranty on all repairs, and exceptional customer service.',
};

const values = [
  {
    title: 'Quality Craftsmanship',
    description:
      'We take pride in every repair, ensuring your vehicle is restored to pre-accident condition or better using the finest materials and techniques.',
  },
  {
    title: 'Customer First',
    description:
      'Your satisfaction is our priority. We communicate clearly throughout the repair process and handle insurance claims to minimize your stress.',
  },
  {
    title: 'Integrity',
    description:
      'We provide honest assessments and fair pricing. No hidden fees, no surprises - just quality work you can trust.',
  },
  {
    title: 'Continuous Improvement',
    description:
      'Our technicians receive ongoing training to stay current with the latest repair techniques and technology.',
  },
];

const certifications = [
  'I-CAR Gold Class',
  'ASE Certified',
  'OEM Certified',
  'EPA Certified',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center bg-charcoal-900 pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/topBooth.jpg"
            alt="Collision Pros Body Work facility"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/90 to-charcoal-900/70" />
        </div>
        <div className="container-width relative z-10 px-4 py-20 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-brand-400">
              About Us
            </p>
            <h1 className="font-display mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Collision Pros Body Work
            </h1>
            <p className="text-xl text-charcoal-300">
              Over 15 years of exceptional collision repair service, restoring
              vehicles and peace of mind for our community.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn animation="slide-in-left">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/a53336677eb30bbe5e96c364b12d3dd6x.jpg"
                  alt="Our team at work"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn animation="slide-in-right">
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-brand-600">
                Our Story
              </p>
              <h2 className="font-display mb-6 text-3xl font-bold text-charcoal-900 sm:text-4xl">
                Why We&apos;re Different
              </h2>
              <div className="space-y-4 text-charcoal-600">
                <p>
                  It takes truly inspired service to create a positive
                  experience in the wake of a collision that damages your car.
                  At Collision Pros Body Work, we understand that vehicle damage
                  is stressful, which is why we&apos;ve dedicated over 15 years
                  to making the repair process as seamless as possible.
                </p>
                <p>
                  Our mission is to restore your vehicle to pre-accident
                  condition - or better - while providing exceptional customer
                  service every step of the way. We handle everything from free
                  computerized estimates to insurance claims, towing
                  arrangements, and rental car coordination.
                </p>
                <p>
                  What sets us apart is our commitment to quality. Every repair
                  is backed by our warranty, because we stand behind
                  our work. Our certified technicians use only Original
                  Equipment Manufacturer (OEM) parts and follow factory-specific
                  guidelines to ensure your vehicle is restored to the highest
                  standards.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-width">
          <FadeIn className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-brand-600">
              Our Values
            </p>
            <h2 className="font-display mb-6 text-3xl font-bold text-charcoal-900 sm:text-4xl">
              What Drives Us
            </h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value, index) => (
              <FadeIn
                key={value.title}
                delay={index * 100}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >
                <h3 className="font-display mb-3 text-xl font-bold text-charcoal-900">
                  {value.title}
                </h3>
                <p className="text-charcoal-600">{value.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <FadeIn className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-brand-600">
              Certified Excellence
            </p>
            <h2 className="font-display mb-6 text-3xl font-bold text-charcoal-900 sm:text-4xl">
              Industry Certifications
            </h2>
            <p className="text-lg text-charcoal-600">
              Our technicians maintain the highest industry certifications to
              ensure quality repairs on every vehicle.
            </p>
          </FadeIn>
          <FadeIn className="flex flex-wrap items-center justify-center gap-8">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex h-24 w-48 items-center justify-center rounded-xl border-2 border-charcoal-200 bg-charcoal-50 px-6 py-4 text-center font-semibold text-charcoal-700"
              >
                {cert}
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Our Warranty */}
      <section className="section-padding bg-brand-600 text-white">
        <div className="container-width">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <h2 className="font-display mb-6 text-3xl font-bold sm:text-4xl">
                Our Warranty
              </h2>
              <p className="mb-6 text-lg text-white/90">
                We stand behind every repair with our comprehensive warranty
                program. This commitment to quality means you can drive with
                confidence, knowing that your vehicle&apos;s repair is protected.
              </p>
              <ul className="mb-8 space-y-3">
                {[
                  'Covers all workmanship',
                  'Protects your repair investment',
                  'No hidden exclusions',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-white"
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
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-white">
                Get Your Free Estimate
              </Link>
            </FadeIn>
            <FadeIn
              animation="slide-in-right"
              className="flex items-center justify-center"
            >
              <div className="text-center">
                <div className="mb-4 inline-flex h-32 w-32 items-center justify-center rounded-full bg-white/10">
                  <svg
                    className="h-16 w-16 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <p className="font-display text-2xl font-bold">
                  Warranty
                </p>
                <p className="text-white/80">On All Repairs</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/ui';

const features = [
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: 'Warranty',
    description: 'We stand behind our work with a comprehensive warranty program.',
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: 'State-of-the-Art Facility',
    description: 'Modern equipment and tools for precise, efficient repairs.',
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: 'Expert Technicians',
    description: 'Certified professionals with ongoing training and industry certifications.',
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'Insurance Assistance',
    description: 'We handle insurance claims directly to make the process stress-free.',
  },
];

export function About() {
  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Side */}
          <FadeIn animation="slide-in-left" className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/topBooth.jpg"
                alt="Collision Pros Body Work paint booth facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-brand-600 px-8 py-6 text-white shadow-xl">
              <p className="font-display text-4xl font-bold">15+</p>
              <p className="text-sm uppercase tracking-wide">Years Experience</p>
            </div>
          </FadeIn>

          {/* Content Side */}
          <div>
            <FadeIn>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-brand-600">
                About Us
              </p>
              <h2 className="font-display mb-6 text-3xl font-bold text-charcoal-900 sm:text-4xl lg:text-5xl">
                Exceptional Collision Repair
              </h2>
              <p className="mb-6 text-lg text-charcoal-600">
                It takes truly inspired service to create a positive experience
                in the wake of a collision that damages your car. We make the
                process of repairing your vehicle as stress-free as possible,
                working to restore it to pre-accident condition or better.
              </p>
              <p className="mb-8 text-charcoal-600">
                We offer free computerized estimates, arrange towing, coordinate
                rental cars, and handle insurance claims so you can focus on
                what matters most.
              </p>
            </FadeIn>

            <div className="mb-8 grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <FadeIn
                  key={feature.title}
                  delay={index * 100}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-charcoal-600">
                      {feature.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={400}>
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

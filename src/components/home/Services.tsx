import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/ui';

const services = [
  {
    title: 'Expert Auto Body Work',
    description:
      'Your vehicle will be repaired with quality and integrity. We\'ve provided our community with over 15 years of quality work, restoring vehicles to their pre-accident condition.',
    image: '/images/hpLeft.jpg',
    href: '/services#major-repairs',
  },
  {
    title: 'Professional Painting',
    description:
      'Damage to paint can come from many sources, but we will find the right match for your vehicle with advanced paint matching technology and expert application.',
    image: '/images/hpCenter.jpg',
    href: '/services#painting',
  },
  {
    title: 'Complete Mechanical Work',
    description:
      'From a rattling noise to something that just doesn\'t seem right, our certified technicians offer complete mechanical inspection and repairs.',
    image: '/images/hpRight.jpg',
    href: '/services#mechanical',
  },
];

export function Services() {
  return (
    <section className="section-padding bg-charcoal-50">
      <div className="container-width">
        <FadeIn className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-brand-600">
            What We Do
          </p>
          <h2 className="font-display mb-6 text-3xl font-bold text-charcoal-900 sm:text-4xl lg:text-5xl">
            Our Expert Services
          </h2>
          <p className="text-lg text-charcoal-600">
            We provide comprehensive collision repair services with a commitment
            to quality craftsmanship and customer satisfaction.
          </p>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn
              key={service.title}
              delay={index * 150}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <Link href={service.href}>
                <div className="image-hover relative aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display mb-3 text-xl font-bold text-charcoal-900 transition-colors group-hover:text-brand-600">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-charcoal-600">{service.description}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-brand-600">
                    Learn More
                    <svg
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
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
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={500} className="mt-12 text-center">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

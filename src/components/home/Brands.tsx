import Image from 'next/image';
import { FadeIn } from '@/components/ui';

export function Brands() {
  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <FadeIn className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-brand-600">
            All Makes & Models
          </p>
          <h2 className="font-display mb-6 text-3xl font-bold text-charcoal-900 sm:text-4xl lg:text-5xl">
            We Repair All Brands
          </h2>
          <p className="text-lg text-charcoal-600">
            Our certified technicians are trained to work on all vehicle makes
            and models, from domestic to import, economy to luxury.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="relative mx-auto max-w-4xl">
            <Image
              src="/images/a53336677eb30bbe5e96c364b12d3dd6x.jpg"
              alt="We repair all makes and models - Fiat, Ford, Genesis, Subaru, Toyota, Volkswagen, Volvo, Saturn, Mitsubishi and more"
              width={1200}
              height={600}
              className="w-full rounded-2xl shadow-lg"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

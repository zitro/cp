import { FadeIn } from '@/components/ui';

const reasons = [
  {
    number: '01',
    title: 'Free Computerized Estimates',
    description:
      'Get accurate, detailed estimates using the latest computerized technology. No hidden fees, no surprises.',
  },
  {
    number: '02',
    title: 'Insurance Claim Handling',
    description:
      'We work directly with your insurance company to streamline the claims process and minimize your stress.',
  },
  {
    number: '03',
    title: 'Towing Arrangements',
    description:
      "If your vehicle isn't drivable, we'll arrange towing to bring it safely to our facility.",
  },
  {
    number: '04',
    title: 'Rental Car Coordination',
    description:
      'Need a vehicle while yours is being repaired? We coordinate rental car services for your convenience.',
  },
  {
    number: '05',
    title: 'OEM Parts',
    description:
      'We use Original Equipment Manufacturer parts to ensure your vehicle is restored to factory specifications.',
  },
  {
    number: '06',
    title: 'Certified Technicians',
    description:
      'Our team receives ongoing training and industry certifications to stay current with the latest repair techniques.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-charcoal-50">
      <div className="container-width">
        <FadeIn className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-brand-600">
            Why Choose Us
          </p>
          <h2 className="font-display mb-6 text-3xl font-bold text-charcoal-900 sm:text-4xl lg:text-5xl">
            What Sets Us Apart
          </h2>
          <p className="text-lg text-charcoal-600">
            We go above and beyond to make your collision repair experience as
            seamless as possible.
          </p>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <FadeIn
              key={reason.number}
              delay={index * 100}
              className="group rounded-2xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <span className="font-display mb-4 inline-block text-4xl font-bold text-brand-200 transition-colors group-hover:text-brand-400">
                {reason.number}
              </span>
              <h3 className="font-display mb-3 text-xl font-bold text-charcoal-900">
                {reason.title}
              </h3>
              <p className="text-charcoal-600">{reason.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

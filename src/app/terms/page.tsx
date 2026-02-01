import type { Metadata } from 'next';
import { FadeIn } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Collision Pros Body Work.',
};

export default function TermsPage() {
  return (
    <section className="section-padding bg-white pt-32">
      <div className="container-width">
        <FadeIn className="mx-auto max-w-3xl">
          <h1 className="font-display mb-8 text-4xl font-bold text-charcoal-900">
            Terms of Service
          </h1>
          <div className="prose prose-charcoal max-w-none">
            <p className="text-lg text-charcoal-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="font-display mt-8 text-2xl font-bold text-charcoal-900">
              Agreement to Terms
            </h2>
            <p className="text-charcoal-600">
              By accessing or using our website and services, you agree to be
              bound by these Terms of Service. If you do not agree to these
              terms, please do not use our services.
            </p>

            <h2 className="font-display mt-8 text-2xl font-bold text-charcoal-900">
              Services
            </h2>
            <p className="text-charcoal-600">
              Collision Pros Body Work provides collision repair, auto body
              work, and related services. All services are subject to
              availability and our assessment of the work required.
            </p>

            <h2 className="font-display mt-8 text-2xl font-bold text-charcoal-900">
              Estimates and Pricing
            </h2>
            <p className="text-charcoal-600">
              All estimates are provided free of charge. Final pricing may vary
              based on the actual work required, which may only be fully
              determined once work begins. We will notify you of any significant
              changes to the estimated cost before proceeding.
            </p>

            <h2 className="font-display mt-8 text-2xl font-bold text-charcoal-900">
              Warranty
            </h2>
            <p className="text-charcoal-600">
              We offer a warranty on all workmanship. This warranty
              covers defects in our repair work for as long as you own the
              vehicle. The warranty is transferable to subsequent owners.
            </p>

            <h2 className="font-display mt-8 text-2xl font-bold text-charcoal-900">
              Limitation of Liability
            </h2>
            <p className="text-charcoal-600">
              Collision Pros Body Work shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising
              from your use of our services.
            </p>

            <h2 className="font-display mt-8 text-2xl font-bold text-charcoal-900">
              Contact Us
            </h2>
            <p className="text-charcoal-600">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-charcoal-600">
              Collision Pros Body Work
              <br />
              45 Hewson Ave
              <br />
              Waldwick, NJ 07463
              <br />
              Phone: (201) 857-0419
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

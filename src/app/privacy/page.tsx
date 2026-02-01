import type { Metadata } from 'next';
import { FadeIn } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Collision Pros Body Work.',
};

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-white pt-32">
      <div className="container-width">
        <FadeIn className="mx-auto max-w-3xl">
          <h1 className="font-display mb-8 text-4xl font-bold text-charcoal-900">
            Privacy Policy
          </h1>
          <div className="prose prose-charcoal max-w-none">
            <p className="text-lg text-charcoal-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="font-display mt-8 text-2xl font-bold text-charcoal-900">
              Information We Collect
            </h2>
            <p className="text-charcoal-600">
              We collect information you provide directly to us, such as when
              you request a quote, schedule a service, or contact us. This may
              include your name, email address, phone number, and vehicle
              information.
            </p>

            <h2 className="font-display mt-8 text-2xl font-bold text-charcoal-900">
              How We Use Your Information
            </h2>
            <p className="text-charcoal-600">
              We use the information we collect to:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-charcoal-600">
              <li>Provide, maintain, and improve our services</li>
              <li>Process and complete transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>
                Communicate with you about services, offers, and events offered
                by us
              </li>
            </ul>

            <h2 className="font-display mt-8 text-2xl font-bold text-charcoal-900">
              Information Sharing
            </h2>
            <p className="text-charcoal-600">
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties. This does not include trusted
              third parties who assist us in operating our website, conducting
              our business, or servicing you, as long as those parties agree to
              keep this information confidential.
            </p>

            <h2 className="font-display mt-8 text-2xl font-bold text-charcoal-900">
              Contact Us
            </h2>
            <p className="text-charcoal-600">
              If you have any questions about this Privacy Policy, please
              contact us at:
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

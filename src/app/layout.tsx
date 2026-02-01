import type { Metadata, Viewport } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { Header, Footer } from '@/components/layout';
import { SmoothScroll } from '@/components/providers';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cpbodywork.com'),
  title: {
    default: 'Collision Pros Body Work | Expert Auto Body Repair in Waldwick, NJ',
    template: '%s | Collision Pros Body Work',
  },
  description:
    'Professional collision repair and auto body work in Waldwick, NJ. Expert technicians, warranty on all repairs, and exceptional service. Free estimates available.',
  keywords: [
    'auto body repair',
    'collision repair',
    'car repair',
    'dent repair',
    'paintless dent removal',
    'auto glass repair',
    'paint protection film',
    'Waldwick NJ',
    'Bergen County',
  ],
  authors: [{ name: 'Collision Pros Body Work' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cpbodywork.com',
    siteName: 'Collision Pros Body Work',
    title: 'Collision Pros Body Work | Expert Auto Body Repair',
    description:
      'Professional collision repair and auto body work in Waldwick, NJ. Expert technicians, warranty on all repairs, and exceptional service.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Collision Pros Body Work',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cpbodywork',
    title: 'Collision Pros Body Work | Expert Auto Body Repair',
    description:
      'Professional collision repair and auto body work in Waldwick, NJ.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#cc3f31',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass border-b border-charcoal-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-width flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo01.png"
            alt="Collision Pros Body Work"
            width={180}
            height={60}
            className="h-24 w-auto sm:h-32"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                isScrolled
                  ? 'text-charcoal-700 hover:text-brand-600'
                  : 'text-white hover:text-brand-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-sm">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className={`h-6 w-6 transition-colors ${
              isScrolled ? 'text-charcoal-900' : 'text-white'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="glass-dark border-t border-charcoal-700 lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-4 py-3 text-base font-medium text-white transition-colors hover:bg-charcoal-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary mt-4 block w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

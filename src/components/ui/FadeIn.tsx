'use client';

import { useRef, useEffect, useState, ReactNode, HTMLAttributes } from 'react';

type AnimationType =
  | 'fade-in'
  | 'fade-in-up'
  | 'fade-in-down'
  | 'slide-in-left'
  | 'slide-in-right'
  | 'scale-in';

interface FadeInProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
}

export function FadeIn({
  children,
  className = '',
  animation = 'fade-in-up',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  ...props
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationStyles = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? 'none'
      : animation === 'fade-in-up'
        ? 'translateY(30px)'
        : animation === 'fade-in-down'
          ? 'translateY(-30px)'
          : animation === 'slide-in-left'
            ? 'translateX(-50px)'
            : animation === 'slide-in-right'
              ? 'translateX(50px)'
              : animation === 'scale-in'
                ? 'scale(0.95)'
                : 'none',
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  };

  return (
    <div ref={ref} className={className} style={animationStyles} {...props}>
      {children}
    </div>
  );
}

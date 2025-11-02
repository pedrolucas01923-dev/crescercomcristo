"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CountdownTimer } from '@/components/countdown-timer';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
          setIsScrolled(currentScrollY > 50);
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-secondary/90 backdrop-blur-sm shadow-md" : "bg-secondary",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/">
          <Logo />
          <span className="sr-only">FaithGrow Kids Home</span>
        </Link>
        <div className="hidden md:flex items-center gap-2 text-sm text-center">
          <p className="font-medium text-secondary-foreground">
            🎁 Oferta especial: desconto imperdível nas próximas <CountdownTimer />
          </p>
        </div>
        <Button asChild>
          <Link href="#final-cta">Quero Garantir Meu Desconto</Link>
        </Button>
      </div>
      <div className="md:hidden bg-secondary/80 py-2 text-center text-sm">
        <p className="font-medium text-secondary-foreground">
          🎁 Oferta especial: <CountdownTimer />
        </p>
      </div>
    </header>
  );
}

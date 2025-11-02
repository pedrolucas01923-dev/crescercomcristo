"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CountdownTimer } from '@/components/countdown-timer';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';

// Início do Cabeçalho
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
        isScrolled ? "bg-white/80 backdrop-blur-sm shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/">
          <Logo />
          <span className="sr-only">FaithGrow Kids Home</span>
        </Link>
        <div className="hidden md:flex items-center gap-2 text-sm text-center">
          <p className="font-medium text-foreground">
            🎁 Oferta especial: desconto imperdível nas próximas <CountdownTimer />
          </p>
        </div>
        <Button asChild>
          <Link href="#final-cta">Quero Garantir Meu Desconto</Link>
        </Button>
      </div>
      <div className={cn("md:hidden py-2 text-center text-sm transition-colors duration-300", isScrolled ? "bg-white/80" : "bg-transparent")}>
        <p className="font-medium text-foreground">
          🎁 Oferta especial: <CountdownTimer />
        </p>
      </div>
    </header>
  );
}
// Fim do Cabeçalho

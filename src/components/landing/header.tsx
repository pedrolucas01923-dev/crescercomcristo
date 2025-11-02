"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CountdownTimer } from '@/components/countdown-timer';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

// Início do Cabeçalho
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0, 1 - scrollY / 300);
      setOpacity(newOpacity);
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      style={{ opacity: opacity }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-secondary/80 backdrop-blur-sm shadow-md" : "bg-secondary/30",
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="h-8 w-8 text-primary" />
          <span className="font-headline text-xl font-bold text-foreground">
            Crescendo com Cristo
          </span>
          <span className="sr-only">Crescendo com Cristo Home</span>
        </Link>
        <div className="hidden md:flex flex-col items-center text-sm text-center">
          <p className="font-bold text-primary tracking-wider">
            OFERTA IMPERDÍVEL
          </p>
          <CountdownTimer />
        </div>
      </div>
      <div className={cn("md:hidden py-2 text-center text-sm transition-colors duration-300 flex flex-col items-center", isScrolled ? "bg-secondary/80" : "bg-transparent")}>
        <p className="font-bold text-primary tracking-wider">
          OFERTA IMPERDÍVEL
        </p>
        <CountdownTimer />
      </div>
    </header>
  );
}
// Fim do Cabeçalho
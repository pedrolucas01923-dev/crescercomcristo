// src/components/scroll-reveal-section.tsx
"use client";

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealSectionProps {
  children: ReactNode;
  className?: string;
}

export function ScrollRevealSection({ children, className }: ScrollRevealSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Atualiza o estado de visibilidade baseado se o elemento está ou não na tela
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // A animação começa quando 10% do elemento está visível
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Limpa o observador quando o componente é desmontado
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={cn(
        'transition-all duration-1000 ease-out',
        'opacity-0 translate-y-8', // Estado inicial: invisível e levemente deslocado para baixo
        isVisible && 'opacity-100 translate-y-0', // Estado final: visível e na posição original
        className
      )}
    >
      {children}
    </div>
  );
}

"use client";

import { useState, useEffect, useRef } from 'react';
import { Hero } from '@/components/landing/hero';
import { PainPoints } from '@/components/landing/pain-points';
import { ProductFeatures } from '@/components/landing/product-features';
import { EmotionalBenefits } from '@/components/landing/emotional-benefits';
import { Purpose } from '@/components/landing/purpose';
import { Bonuses } from '@/components/landing/bonuses';
import { Faq } from '@/components/landing/faq';
import { FinalCTA } from '@/components/landing/final-cta';
import { Footer } from '@/components/landing/footer';
import { ScrollRevealSection } from '@/components/scroll-reveal-section';
import { Header } from '@/components/landing/header';

export default function Home() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Considera visível se 10% estiver na tela
    );

    const currentHeroRef = heroRef.current;
    if (currentHeroRef) {
      observer.observe(currentHeroRef);
    }

    return () => {
      if (currentHeroRef) {
        observer.unobserve(currentHeroRef);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background font-body">
      <Header isVisible={isHeroVisible} />
      
      <main className="flex-grow">
        <div ref={heroRef}>
          <Hero />
        </div>

        <ScrollRevealSection>
          <PainPoints />
        </ScrollRevealSection>

        <ScrollRevealSection>
          <ProductFeatures />
        </ScrollRevealSection>
        
        <ScrollRevealSection>
          <EmotionalBenefits />
        </ScrollRevealSection>

        <ScrollRevealSection>
          <Purpose />
        </ScrollRevealSection>

        <ScrollRevealSection>
          <Bonuses />
        </ScrollRevealSection>
        
        <ScrollRevealSection>
          <Faq />
        </ScrollRevealSection>

        <ScrollRevealSection>
          <FinalCTA />
        </ScrollRevealSection>
      </main>

      <Footer />
    </div>
  );
}

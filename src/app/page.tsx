// Importação dos componentes da página
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

// Componente principal da página Home
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-body">
      {/* Conteúdo principal da página */}
      <main className="flex-grow">
        {/* Início da Seção Hero */}
        <Hero />
        {/* Fim da Seção Hero */}

        {/* Início da Seção de Dor / Identificação */}
        <ScrollRevealSection>
          <PainPoints />
        </ScrollRevealSection>
        {/* Fim da Seção de Dor / Identificação */}

        {/* Início da Seção de Apresentação do Produto */}
        <ScrollRevealSection>
          <ProductFeatures />
        </ScrollRevealSection>
        {/* Fim da Seção de Apresentação do Produto */}
        
        {/* Início do Bloco Emocional (Conexão Familiar) */}
        <ScrollRevealSection>
          <EmotionalBenefits />
        </ScrollRevealSection>
        {/* Fim do Bloco Emocional (Conexão Familiar) */}

        {/* Início da Seção de Transformação / Propósito */}
        <ScrollRevealSection>
          <Purpose />
        </ScrollRevealSection>
        {/* Fim da Seção de Transformação / Propósito */}

        {/* Início da Seção de Bônus */}
        <ScrollRevealSection>
          <Bonuses />
        </ScrollRevealSection>
        {/* Fim da Seção de Bônus */}
        
        {/* Início da Seção de Perguntas Frequentes (FAQ) */}
        <ScrollRevealSection>
          <Faq />
        </ScrollRevealSection>
        {/* Fim da Seção de Perguntas Frequentes (FAQ) */}

        {/* Início da Seção de Chamada Final para Ação (CTA) */}
        <ScrollRevealSection>
          <FinalCTA />
        </ScrollRevealSection>
        {/* Fim da Seção de Chamada Final para Ação (CTA) */}
      </main>
      {/* Fim do Conteúdo principal */}

      {/* Início do Rodapé */}
      <Footer />
      {/* Fim do Rodapé */}
    </div>
  );
}

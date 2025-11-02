// Importação dos componentes da página
import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { ProductFeatures } from '@/components/landing/product-features';
import { Advantages } from '@/components/landing/advantages';
import { Bonuses } from '@/components/landing/bonuses';
import { Testimonials } from '@/components/landing/testimonials';
import { FinalCTA } from '@/components/landing/final-cta';
import { Footer } from '@/components/landing/footer';
import { ScrollRevealSection } from '@/components/scroll-reveal-section';

// Componente principal da página Home
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Início do Cabeçalho */}
      <Header />
      {/* Fim do Cabeçalho */}
      
      {/* Conteúdo principal da página */}
      <main className="flex-grow">
        {/* Início da Seção Hero */}
        <Hero />
        {/* Fim da Seção Hero */}

        {/* Início da Seção de Características do Produto */}
        <ScrollRevealSection>
          <ProductFeatures />
        </ScrollRevealSection>
        {/* Fim da Seção de Características do Produto */}

        {/* Início da Seção de Vantagens */}
        <ScrollRevealSection>
          <Advantages />
        </ScrollRevealSection>
        {/* Fim da Seção de Vantagens */}

        {/* Início da Seção de Bônus */}
        <ScrollRevealSection>
          <Bonuses />
        </ScrollRevealSection>
        {/* Fim da Seção de Bônus */}

        {/* Início da Seção de Depoimentos */}
        <ScrollRevealSection>
          <Testimonials />
        </ScrollRevealSection>
        {/* Fim da Seção de Depoimentos */}

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

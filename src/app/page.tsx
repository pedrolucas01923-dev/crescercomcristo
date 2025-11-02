import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { ProductFeatures } from '@/components/landing/product-features';
import { Advantages } from '@/components/landing/advantages';
import { Bonuses } from '@/components/landing/bonuses';
import { Testimonials } from '@/components/landing/testimonials';
import { FinalCTA } from '@/components/landing/final-cta';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductFeatures />
        <Advantages />
        <Bonuses />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Purpose() {
  return (
    <section id="purpose" className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Transforme a rotina da sua casa com propósito e espiritualidade!
            </h2>
            <p className="text-xl text-muted-foreground">
                Traga Jesus para o dia a dia da sua família com amor e constância.
                Ensinar sobre Deus pode ser simples e alegre – e essa coleção vai te ajudar a fazer isso de forma prática, todos os dias.
            </p>
            <Button asChild size="lg" className="text-lg rounded-full font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                <Link href="#final-cta">QUERO ENSINAR MEU FILHO SOBRE JESUS!</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}

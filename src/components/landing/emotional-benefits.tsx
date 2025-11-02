import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const benefits = [
  {
    id: 'benefit-quality-time',
    title: 'Um tempo de qualidade longe das telas',
    imageHint: 'family reading no screen',
  },
  {
    id: 'benefit-seed-faith',
    title: 'Uma semente de fé plantada com amor',
    imageHint: 'child praying',
  },
  {
    id: 'benefit-memory',
    title: 'Uma lembrança que vai marcar o coração do seu filho para sempre',
    imageHint: 'happy family moment',
  },
];

export function EmotionalBenefits() {
  return (
    <section id="emotional-benefits" className="w-full py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Mais que livros, momentos de fé e amor em família!
          </h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-1 md:grid-cols-3">
          {benefits.map((benefit) => {
            const image = PlaceHolderImages.find((img) => img.id === benefit.id);
            return (
              <Card key={benefit.id} className="overflow-hidden shadow-lg bg-card text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                {image && (
                  <div className="aspect-w-4 aspect-h-3">
                    <Image
                      src={image.imageUrl}
                      alt={benefit.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-foreground">{benefit.title}</CardTitle>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, Users } from 'lucide-react';

// Lista de depoimentos
const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Ana Paula',
    role: 'Catequista',
    rating: 5,
    quote: 'As crianças da catequese ficaram encantadas! O material é lindo e fácil de usar. Uma verdadeira bênção para o nosso ministério.',
  },
  {
    id: 'testimonial-2',
    name: 'Rafael',
    role: 'Pai e Professor',
    rating: 5,
    quote: 'Meu filho aprendeu os 10 mandamentos brincando! A qualidade das ilustrações e a linguagem simples fazem toda a diferença. Recomendo muito.',
  },
  {
    id: 'testimonial-3',
    name: 'Mariana',
    role: 'Mãe',
    rating: 5,
    quote: 'Finalmente encontrei um material que me ajuda a ensinar a Bíblia para minha filha de 5 anos de um jeito que ela entende e ama. Estamos adorando!',
  },
   {
    id: 'testimonial-4',
    name: 'Carlos Alberto',
    role: 'Pai',
    rating: 5,
    quote: 'A coleção é fantástica! Os livros de colorir são um sucesso aqui em casa e as histórias são contadas de uma forma que prende a atenção.',
  },
  {
    id: 'testimonial-5',
    name: 'Lúcia Marques',
    role: 'Professora de Escola Dominical',
    rating: 5,
    quote: 'Material de altíssima qualidade. Didático, bonito e fiel às escrituras. Facilitou muito o meu planejamento de aulas.',
  },
];

// Componente da seção de depoimentos
export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            💖 O que pais e educadores estão dizendo
          </h2>
          <p className="max-w-3xl text-muted-foreground md:text-xl">
            Histórias reais de quem já está transformando a educação cristã com a nossa coleção.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => {
            const image = PlaceHolderImages.find((img) => img.id === testimonial.id);
            return (
              <Card key={testimonial.id} className="bg-card flex flex-col shadow-lg border-border">
                <CardContent className="flex-grow p-6 space-y-4">
                  <div className="flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-foreground">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
                <CardFooter className="flex items-center gap-4 p-6 pt-4 bg-secondary/50 rounded-b-lg">
                  {image && (
                    <Avatar className="border-2 border-accent">
                      <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center gap-4 rounded-full bg-secondary px-8 py-4 shadow-md">
                <Users className="h-8 w-8 text-primary" />
                <p className="text-xl font-bold text-foreground">
                    Mais de <span className="text-primary">1.000 pais e educadores</span> já aprovaram!
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}

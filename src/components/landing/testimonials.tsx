import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Ana Paula',
    role: 'Catequista',
    quote: 'As crianças da catequese ficaram encantadas! O material é lindo e fácil de usar. Uma verdadeira bênção para o nosso ministério.',
  },
  {
    id: 'testimonial-2',
    name: 'Rafael',
    role: 'Pai e Professor',
    quote: 'Meu filho aprendeu os 10 mandamentos brincando! A qualidade das ilustrações e a linguagem simples fazem toda a diferença. Recomendo muito.',
  },
  {
    id: 'testimonial-3',
    name: 'Mariana',
    role: 'Mãe',
    quote: 'Finalmente encontrei um material que me ajuda a ensinar a Bíblia para minha filha de 5 anos de um jeito que ela entende e ama. Estamos adorando!',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24">
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
              <Card key={testimonial.id} className="bg-card flex flex-col">
                <CardContent className="flex-grow p-6">
                  <blockquote className="text-lg text-foreground">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
                <CardFooter className="flex items-center gap-4 p-6 pt-4">
                  {image && (
                    <Avatar>
                      <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

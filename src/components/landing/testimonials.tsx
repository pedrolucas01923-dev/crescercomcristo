// src/components/landing/testimonials.tsx

// Início da Seção de Depoimentos
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, ShieldCheck, StarHalf } from 'lucide-react';

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
  {
    id: 'testimonial-6',
    name: 'Juliana Costa',
    role: 'Educadora Infantil',
    rating: 5,
    quote: 'Um recurso pedagógico incrível! As atividades são criativas e ajudam a fixar os ensinamentos de forma lúdica. Nossos alunos amaram.',
  },
];

// Componente da seção de depoimentos
export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800">
            💖 O que pais e educadores estão dizendo
          </h2>
          <p className="max-w-3xl text-gray-500 md:text-xl">
            Histórias reais de quem já está transformando a educação cristã com a nossa coleção.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => {
            const image = PlaceHolderImages.find((img) => img.id === testimonial.id);
            return (
              <Card key={testimonial.id} className="bg-white flex flex-col shadow-lg rounded-2xl overflow-hidden border-gray-200">
                <CardContent className="flex-grow p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="font-bold text-sm text-gray-500">({testimonial.rating}.0/5.0)</span>
                  </div>
                  <blockquote className="text-lg text-gray-700 italic">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
                <CardFooter className="flex items-center gap-4 p-6 pt-4 bg-blue-50/50 rounded-b-none">
                  {image && (
                    <Avatar className="border-2 border-yellow-400 h-12 w-12">
                      <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <p className="font-semibold text-blue-600">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <div className="mt-16 text-center">
            <div className="inline-flex flex-col md:flex-row items-center justify-center gap-6 rounded-2xl bg-blue-100/50 p-6 shadow-lg">
                <div className="flex flex-col items-center">
                    <span className="font-headline text-4xl font-bold text-blue-600">4.7</span>
                    <div className="flex text-yellow-400">
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                        <StarHalf className="h-5 w-5 fill-current" />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Média de +1.000 avaliações</p>
                </div>
                <div className="h-12 w-px bg-gray-200 hidden md:block"></div>
                <div className="flex items-center gap-3">
                    <ShieldCheck className="h-10 w-10 text-blue-600" />
                    <div>
                        <p className="font-bold text-gray-800 text-lg">Compra Segura e Aprovada</p>
                        <p className="text-sm text-gray-500">Junte-se a milhares de clientes satisfeitos</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
// Fim da Seção de Depoimentos

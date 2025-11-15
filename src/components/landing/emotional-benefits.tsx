import Image from 'next/image';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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

const testimonials = [
    {
        name: "Ana P.",
        role: "Mãe de 2",
        text: "Os livros transformaram nossas noites. Trocamos a TV por histórias cheias de amor e fé. É o nosso momento preferido do dia!",
        avatar: "https://i.pravatar.cc/150?img=3"
    },
    {
        name: "Juliana R.",
        role: "Educadora e mãe",
        text: "Ver os olhos do meu filho brilhando ao aprender sobre Jesus não tem preço. São memórias que vamos guardar para sempre.",
        avatar: "https://i.pravatar.cc/150?img=4"
    }
]

export function EmotionalBenefits() {
  return (
    <section id="emotional-benefits" className="w-full py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Mais que livros, momentos de fé e amor em família!
          </h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {benefits.map((benefit) => {
            const image = PlaceHolderImages.find((img) => img.id === benefit.id);
            return (
              <div key={benefit.id} className="flex justify-center sm:col-span-1">
                <Card className="overflow-hidden shadow-lg bg-card text-center border-2 border-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:border-primary w-full max-w-xs sm:max-w-none">
                  {image && (
                      <div className="relative w-full aspect-[4/5]">
                          <Image
                            src={image.imageUrl}
                            alt={benefit.title}
                            fill
                            className="object-cover"
                            data-ai-hint={image.imageHint}
                          />
                      </div>
                  )}
                  <CardHeader className="p-4">
                    <CardTitle className="font-headline text-sm text-foreground h-10 flex items-center justify-center">{benefit.title}</CardTitle>
                  </CardHeader>
                </Card>
              </div>
            );
          })}
        </div>
        <div className="mt-16 space-y-8">
            <h3 className="text-center font-headline text-2xl font-bold text-primary">O que as famílias estão dizendo:</h3>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md flex gap-4 items-start">
                        <Avatar>
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="italic text-muted-foreground text-sm md:text-base">"{testimonial.text}"</p>
                            <p className="font-bold text-right mt-2 text-primary text-sm">- {testimonial.name}, <span className="font-normal text-xs">{testimonial.role}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}

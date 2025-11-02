import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  "Quadrinhos com histórias bíblicas cativantes",
  "Livros da Bíblia adaptados para crianças",
  "Livros para colorir com temas cristãos",
  "Antigo e Novo Testamento em linguagem acessível",
  "Ensina sobre fé, bondade, amor, perdão e gratidão",
];

const productImages = [
  'product-comics',
  'product-bible-books',
  'product-testaments',
  'product-coloring',
];

export function ProductFeatures() {
  return (
    <section id="features" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Apresentamos a Coleção "Crescendo com Cristo"
          </h2>
          <p className="max-w-3xl text-muted-foreground md:text-xl">
            Uma coleção completa, prática e inspiradora para ajudar pais e educadores a apresentarem os valores cristãos às crianças de forma leve, colorida e divertida.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
                {productImages.map(id => {
                    const image = PlaceHolderImages.find(img => img.id === id);
                    if (!image) return null;
                    return (
                        <div key={id} className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              width={300}
                              height={300}
                              className="w-full h-auto object-cover"
                              data-ai-hint={image.imageHint}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="space-y-4">
                <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-lg text-muted-foreground">{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
}

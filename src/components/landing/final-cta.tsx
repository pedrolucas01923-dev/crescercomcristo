// Início da Seção de Chamada Final para Ação (CTA)
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, Heart, Cross, Bird, Palette, HeartHandshake, Lock, Smartphone, BadgeCheck, Zap } from 'lucide-react';
import { CountdownTimer } from '@/components/countdown-timer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


// Componente da seção de Chamada Final para Ação (CTA)
export function FinalCTA() {
    const finalCtaImage = PlaceHolderImages.find((img) => img.id === 'final-cta-mockup');
    const testimonial1Image = PlaceHolderImages.find((img) => img.id === 'testimonial-5');
    const testimonial2Image = PlaceHolderImages.find((img) => img.id === 'testimonial-2');


  return (
    <section id="final-cta" className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-secondary/30 rounded-2xl shadow-2xl p-8 md:p-12 overflow-hidden relative">
            
            {/* Visual Elements */}
            <Star className="absolute top-10 left-10 text-accent/50 h-6 w-6 animate-pulse" />
            <Heart className="absolute top-20 right-20 text-primary/30 h-8 w-8 animate-pulse delay-500" />
            <Cross className="absolute bottom-10 left-20 text-accent/40 h-5 w-5 animate-pulse delay-1000" />

            <div className="text-center space-y-4 mb-12 relative z-10">
                 <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                    🌟 Ensinar valores cristãos nunca foi tão fácil, bonito e inspirador!
                </h2>
                <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
                    Com a Coleção "Crescendo com Cristo", você oferece às crianças um aprendizado divertido, colorido e cheio de amor a Deus — tudo isso em um único pacote digital completo.
                </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2 md:items-center">
                <div className="flex justify-center relative">
                   {finalCtaImage && (
                        <Image
                            src={finalCtaImage.imageUrl}
                            alt={finalCtaImage.description}
                            width={500}
                            height={450}
                            className="rounded-xl shadow-lg"
                            data-ai-hint={finalCtaImage.imageHint}
                        />
                    )}
                </div>

                <div className="space-y-8">
                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-white rounded-full p-3 shadow-md">
                                <Bird className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-headline text-lg font-semibold">Aprendizado com Propósito</h3>
                            <p className="text-sm text-muted-foreground">As crianças entendem a Bíblia de forma clara, interativa e cheia de significado.</p>
                        </div>
                         <div className="flex flex-col items-center gap-2">
                            <div className="bg-white rounded-full p-3 shadow-md">
                                <Palette className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-headline text-lg font-semibold">Diversão e Criatividade</h3>
                            <p className="text-sm text-muted-foreground">Histórias e atividades que despertam a curiosidade e o amor pela fé.</p>
                        </div>
                         <div className="flex flex-col items-center gap-2">
                            <div className="bg-white rounded-full p-3 shadow-md">
                                <HeartHandshake className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-headline text-lg font-semibold">Conexão Espiritual</h3>
                            <p className="text-sm text-muted-foreground">Pais e educadores reforçam os valores cristãos em casa e na escola.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 text-center space-y-6">
                 <p className="font-headline text-xl font-bold text-primary">
                    ✝️ Leve Agora a Coleção "Crescendo com Cristo" Completa <br/> e receba <span className="text-accent">TODOS os bônus exclusivos</span> + acesso imediato ao conteúdo!
                </p>

                <Button asChild size="lg" className="w-full md:w-auto text-2xl py-8 shadow-lg bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-bold">
                    <Link href="#">👉 Quero Ensinar com Amor!</Link>
                </Button>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-base text-muted-foreground w-full max-w-2xl mx-auto">
                    <div className="flex items-center gap-2">
                        <Lock className="h-5 w-5" />
                        <span>Pagamento 100% seguro</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Smartphone className="h-5 w-5" />
                        <span>Entrega imediata</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <BadgeCheck className="h-5 w-5" />
                        <span>Garantia de satisfação</span>
                    </div>
                </div>

                <div className="bg-white/50 rounded-full px-6 py-3 inline-flex items-center gap-3 text-primary font-bold">
                    <Zap className="h-5 w-5 text-accent animate-pulse" />
                    <span>Oferta especial se encerrando em: <CountdownTimer /></span>
                </div>
            </div>

            <div className="mt-16 border-t-2 border-dashed border-primary/20 pt-12 space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                     <div className="bg-white p-6 rounded-xl shadow-md">
                        <blockquote className="text-muted-foreground italic mb-4">
                           “Nunca vi meus alunos tão empolgados para aprender sobre Deus! Os materiais são lindos e inspiradores.”
                        </blockquote>
                        <div className="flex items-center gap-3">
                            {testimonial1Image && (
                                <Avatar className="h-11 w-11 border-2 border-accent">
                                    <AvatarImage src={testimonial1Image.imageUrl} alt="Luciana M." data-ai-hint={testimonial1Image.imageHint} />
                                    <AvatarFallback>LM</AvatarFallback>
                                </Avatar>
                            )}
                            <div>
                                <p className="font-bold text-primary">Luciana M.</p>
                                <p className="text-sm text-muted-foreground">Professora Cristã</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <blockquote className="text-muted-foreground italic mb-4">
                           “Meu filho aprendeu os 10 mandamentos brincando. É incrível ver ele falando de Jesus com tanta alegria.”
                        </blockquote>
                        <div className="flex items-center gap-3">
                            {testimonial2Image && (
                                <Avatar className="h-11 w-11 border-2 border-accent">
                                    <AvatarImage src={testimonial2Image.imageUrl} alt="Carlos" data-ai-hint={testimonial2Image.imageHint} />
                                    <AvatarFallback>C</AvatarFallback>
                                </Avatar>
                            )}
                            <div>
                                <p className="font-bold text-primary">Carlos</p>
                                <p className="text-sm text-muted-foreground">Pai e líder de célula</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center">
                 <p className="font-headline text-lg text-primary font-semibold">
                    🌈 Eduque o coração e a mente das crianças na Palavra de Deus.
                    <br />
                    Dê esse primeiro passo hoje — o futuro da fé começa no aprendizado de agora.
                 </p>
            </div>
        </div>
      </div>
    </section>
  );
}
// Fim da Seção de Chamada Final para Ação (CTA)

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Star, Heart, Cross, Palette, HeartHandshake, Lock, Smartphone, BadgeCheck, Zap } from 'lucide-react';
import { CountdownTimer } from '@/components/countdown-timer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const benefits = [
    {
        icon: Cross,
        title: "Aprendizado com Propósito",
        description: "As crianças entendem a Bíblia de forma clara, interativa e cheia de significado.",
    },
    {
        icon: Palette,
        title: "Diversão e Criatividade",
        description: "Histórias, ilustrações e atividades que despertam a curiosidade e o amor pela fé.",
    },
    {
        icon: HeartHandshake,
        title: "Conexão Familiar e Espiritual",
        description: "Pais e educadores compartilham momentos especiais, reforçando os valores cristãos.",
    }
];

const testimonials = [
    {
        name: "Luciana M.",
        role: "Professora Cristã",
        text: "Nunca vi meus alunos tão empolgados para aprender sobre Deus! Os materiais são lindos e inspiradores.",
        avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
        name: "Carlos S.",
        role: "Pai e líder de célula",
        text: "Meu filho aprendeu os 10 mandamentos brincando. É incrível ver ele falando de Jesus com tanta alegria.",
        avatar: "https://i.pravatar.cc/150?img=2"
    }
]

export function FinalCTA() {
    const ctaImage = PlaceHolderImages.find(img => img.id === 'final-cta-mockup');

    return (
        <section id="final-cta" className="w-full py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-secondary/30 rounded-2xl shadow-2xl p-8 md:p-12 overflow-hidden relative">
                    <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 text-primary/5 opacity-50">
                        <Star className="h-32 w-32" />
                    </div>
                    <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 text-primary/5 opacity-50">
                        <Heart className="h-40 w-40" />
                    </div>
                    <div className="text-center space-y-4 mb-12 relative z-10">
                        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                            🌟 Ensinar valores cristãos nunca foi tão fácil, bonito e inspirador!
                        </h2>
                        <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
                            Com a Coleção Cristã Infantil, você oferece às crianças um aprendizado divertido, colorido e cheio de amor a Deus — tudo isso em um único pacote digital completo.
                        </p>
                    </div>

                    <div className="relative grid gap-12 md:grid-cols-2 md:items-center mb-16">
                        <div className="relative flex justify-center items-center">
                            {ctaImage && (
                                <Image
                                    src={ctaImage.imageUrl}
                                    alt="Coleção Cristã Infantil Mockup"
                                    width={500}
                                    height={400}
                                    className="rounded-lg shadow-2xl"
                                    data-ai-hint={ctaImage.imageHint}
                                />
                            )}
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="bg-white p-3 rounded-full shadow-md">
                                            <Icon className="h-6 w-6 text-accent" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-foreground">{benefit.title}</h3>
                                            <p className="text-muted-foreground">{benefit.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-12 text-center space-y-6 bg-white/60 p-8 rounded-xl shadow-inner">
                        <h3 className="font-headline text-2xl font-bold text-primary">
                            ✝️ Leve Agora a Coleção Cristã Infantil Completa
                        </h3>
                        <p className="text-muted-foreground">e receba TODOS os bônus exclusivos + acesso imediato ao conteúdo!</p>
                        
                        <Button asChild size="lg" className="w-full md:w-auto text-2xl py-8 shadow-lg bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-bold animate-pulse">
                            <Link href="#">👉 Quero Ensinar com Amor!</Link>
                        </Button>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-base text-muted-foreground w-full max-w-lg mx-auto">
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

                        <div className="mt-6 bg-primary/10 rounded-full px-4 py-3 inline-flex items-center gap-3 text-primary font-bold">
                            <Zap className="h-5 w-5" />
                            <span>Oferta se encerrando em: <CountdownTimer /></span>
                        </div>
                    </div>

                     <div className="mt-16 space-y-8">
                        <div className="grid gap-8 md:grid-cols-2">
                           {testimonials.map((testimonial, index) => (
                               <div key={index} className="bg-white p-6 rounded-lg shadow-md flex gap-4 items-start">
                                    <Avatar>
                                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="italic text-muted-foreground">"{testimonial.text}"</p>
                                        <p className="font-bold text-right mt-2 text-primary">- {testimonial.name}, <span className="font-normal text-sm">{testimonial.role}</span></p>
                                    </div>
                               </div>
                           ))}
                        </div>
                    </div>
                    
                    <div className="mt-16 text-center">
                        <p className="font-headline text-xl text-primary font-semibold">
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
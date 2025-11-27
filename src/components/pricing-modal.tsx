// src/components/pricing-modal.tsx
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const commonFeatures = [
    "Histórias Bíblicas Cativantes",
    "10 mandamentos adaptados",
    "Livros da Bíblia em Desenho",
];

const premiumFeatures = [
    "Histórias Bíblicas Cativantes",
    "Livros para Colorir",
    "Testamentos Adaptados",
    "Livros da Bíblia em Desenho",
    "Guia de Atividades Práticas",
    "Cartões de Versículos para Memorizar",
];

export function PricingModal({ isOpen, onClose }: PricingModalProps) {
  
  const handleCheckoutClick = (checkoutUrl: string) => {
    // 1. Injeta o script do pixel no momento do clique
    const pixelId = "6921f7da921ed0cd2b9afa4f";
    
    // Evita adicionar o script múltiplas vezes se o modal for reaberto e clicado de novo
    if (!document.getElementById(`utmify-pixel-${pixelId}`)) {
      window.pixelId = pixelId;
      const script = document.createElement("script");
      script.id = `utmify-pixel-${pixelId}`;
      script.setAttribute("async", "");
      script.setAttribute("defer", "");
      script.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
      document.head.appendChild(script);
    }
    
    // 2. Redireciona o usuário para o checkout
    window.location.href = checkoutUrl;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-4 sm:p-6 w-[95vw] md:w-full rounded-lg">
        <DialogHeader className="text-center mb-4">
          <DialogTitle className="font-headline text-xl md:text-2xl text-primary">Escolha o seu plano ideal</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Comece hoje a transformar a vida espiritual da sua família.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch w-full">
          {/* Plano Comum */}
          <Card className="flex flex-col">
            <CardHeader className="text-center pb-2">
              <CardTitle className="font-headline text-base sm:text-lg text-foreground">COMUM</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow justify-between p-4">
              <div className="text-center mb-2">
                <p className="text-xl sm:text-2xl font-bold">R$ 9,99</p>
                <p className="text-xs text-muted-foreground">Pagamento único</p>
              </div>
              <ul className="space-y-1 my-4 text-xs flex-grow">
                {commonFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full mt-auto text-sm h-9" 
                variant="outline"
                onClick={() => handleCheckoutClick("https://pay.crescercomcristobr.shop/Pcz9vKwvkZYYRmYggYIM")}
              >
                Comprar Agora
              </Button>
            </CardContent>
          </Card>

          {/* Plano Premium */}
          <Card className="flex flex-col border-2 border-primary shadow-primary/20 relative bg-secondary/20">
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-0.5 rounded-full text-xs font-bold shadow-lg">
              MAIS POPULAR
            </div>
            <CardHeader className="text-center pb-2 pt-6 sm:pt-8">
              <CardTitle className="font-headline text-base sm:text-lg text-foreground">PREMIUM</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow justify-between p-4">
              <div className="text-center mb-2">
                 <p className="text-xs sm:text-sm text-muted-foreground line-through">de R$ 39,99</p>
                <p className="text-xl sm:text-2xl font-bold text-primary">por R$ 19,99</p>
                <p className="text-xs text-muted-foreground">Pagamento único</p>
              </div>
              <ul className="space-y-1 my-4 text-xs flex-grow">
                 {premiumFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
                <Button 
                  className="w-full mt-auto text-sm h-9 bg-accent text-accent-foreground hover:bg-accent/90 animate-pulse" 
                  onClick={() => handleCheckoutClick("https://pay.crescercomcristobr.shop/RYEeBFPxmvyVyEzNEkFU")}
                >
                  Comprar Agora
                </Button>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}

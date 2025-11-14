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

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const commonFeatures = [
    "Histórias Bíblicas Cativantes",
    "Livros para Colorir",
    "Testamentos Adaptados",
];

const premiumFeatures = [
    "Todos os itens do plano Comum",
    "Plano de Aplicação “15 Minutos com Jesus”",
    "Guia de Atividades Práticas",
    "5 Roteiros de Conversas de Fé",
    "Cartões de Versículos para Memorizar",
];

export function PricingModal({ isOpen, onClose }: PricingModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-xl p-6">
        <DialogHeader className="text-center mb-4">
          <DialogTitle className="font-headline text-xl md:text-2xl text-primary">Escolha o seu plano ideal</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Comece hoje a transformar a vida espiritual da sua família.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Plano Comum */}
          <Card className="flex flex-col h-full">
            <CardHeader className="text-center pb-2">
              <CardTitle className="font-headline text-lg text-foreground">COMUM</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow justify-between p-4">
              <div className="text-center mb-4">
                <p className="text-2xl font-bold">R$ 9,99</p>
                <p className="text-xs text-muted-foreground">Pagamento único</p>
              </div>
              <ul className="space-y-1 mb-4 text-xs">
                {commonFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-green-500" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-auto" variant="outline">Comprar Agora</Button>
            </CardContent>
          </Card>

          {/* Plano Premium */}
          <Card className="flex flex-col border-2 border-primary shadow-primary/20 relative transform md:scale-105 bg-secondary/20">
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-0.5 rounded-full text-xs font-bold shadow-lg">
              MAIS POPULAR
            </div>
            <CardHeader className="text-center pb-2 pt-8">
              <CardTitle className="font-headline text-lg text-foreground">PREMIUM</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow justify-between p-4">
              <div className="text-center mb-4">
                 <p className="text-sm text-muted-foreground line-through">de R$ 39,99</p>
                <p className="text-2xl font-bold text-primary">por R$ 19,99</p>
                <p className="text-xs text-muted-foreground">Pagamento único</p>
              </div>
              <ul className="space-y-1 mb-4 text-xs">
                 {premiumFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-green-500" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-auto bg-accent text-accent-foreground hover:bg-accent/90 animate-pulse">Comprar Agora</Button>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}

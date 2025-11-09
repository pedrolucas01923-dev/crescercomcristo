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
      <DialogContent className="max-w-2xl p-6 md:p-8">
        <DialogHeader className="text-center mb-6">
          <DialogTitle className="font-headline text-2xl md:text-3xl text-primary">Escolha o seu plano ideal</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            Comece hoje a transformar a vida espiritual da sua família.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Plano Comum */}
          <Card className="flex flex-col">
            <CardHeader className="text-center pb-2">
              <CardTitle className="font-headline text-xl text-foreground">COMUM</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow justify-between p-4">
              <div className="text-center mb-4">
                <p className="text-3xl font-bold">R$ 9,99</p>
                <p className="text-xs text-muted-foreground">Pagamento único</p>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                {commonFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-auto" variant="outline">Comprar Agora</Button>
            </CardContent>
          </Card>

          {/* Plano Premium */}
          <Card className="flex flex-col border-2 border-primary shadow-primary/20 relative">
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-0.5 rounded-full text-xs font-bold">
              MAIS POPULAR
            </div>
            <CardHeader className="text-center pb-2 pt-8">
              <CardTitle className="font-headline text-xl text-foreground">PREMIUM</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow justify-between p-4">
              <div className="text-center mb-4">
                 <p className="text-base text-muted-foreground line-through">de R$ 39,99</p>
                <p className="text-3xl font-bold text-primary">por R$ 19,99</p>
                <p className="text-xs text-muted-foreground">Pagamento único</p>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                 {premiumFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-auto bg-primary text-primary-foreground hover:bg-primary/90">Comprar Agora</Button>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}

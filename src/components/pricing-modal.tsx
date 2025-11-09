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
      <DialogContent className="max-w-3xl p-8 md:p-12">
        <DialogHeader className="text-center mb-8">
          <DialogTitle className="font-headline text-3xl md:text-4xl text-primary">Escolha o seu plano ideal</DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground">
            Comece hoje a transformar a vida espiritual da sua família.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Plano Comum */}
          <Card className="flex flex-col">
            <CardHeader className="text-center pb-4">
              <CardTitle className="font-headline text-2xl text-foreground">COMUM</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow justify-between">
              <div className="text-center mb-6">
                <p className="text-4xl font-bold">R$ 9,99</p>
                <p className="text-sm text-muted-foreground">Pagamento único</p>
              </div>
              <ul className="space-y-3 mb-8">
                {commonFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-auto" variant="outline">Comprar Agora</Button>
            </CardContent>
          </Card>

          {/* Plano Premium */}
          <Card className="flex flex-col border-2 border-primary shadow-primary/20 relative">
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
              MAIS POPULAR
            </div>
            <CardHeader className="text-center pb-4 pt-10">
              <CardTitle className="font-headline text-2xl text-foreground">PREMIUM</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow justify-between">
              <div className="text-center mb-6">
                 <p className="text-xl text-muted-foreground line-through">de R$ 39,99</p>
                <p className="text-4xl font-bold text-primary">por R$ 19,99</p>
                <p className="text-sm text-muted-foreground">Pagamento único</p>
              </div>
              <ul className="space-y-3 mb-8">
                 {premiumFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
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
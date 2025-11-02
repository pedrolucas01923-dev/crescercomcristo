import Link from 'next/link';
import { Facebook, Instagram, Twitter, Sparkles } from 'lucide-react';

// Componente do rodapé
export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-8 w-8 text-primary" />
                  <span className="font-headline text-xl font-bold text-foreground">
                    Crescendo com Cristo
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Crescendo com Cristo. Todos os direitos reservados.
                </p>
            </div>
            <div className="flex gap-4 text-sm">
                <Link href="#" className="text-muted-foreground hover:text-primary">Política de Privacidade</Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">Termos de Uso</Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">Suporte</Link>
            </div>
            <div className="flex gap-4">
                <Link href="#" aria-label="Facebook">
                    <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary" />
                </Link>
                <Link href="#" aria-label="Instagram">
                    <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary" />
                </Link>
                <Link href="#" aria-label="Twitter">
                    <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary" />
                </Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
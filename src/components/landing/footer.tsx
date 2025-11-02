import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Logo } from '@/components/logo';

// Componente do rodapé
export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
                <Logo />
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Coleção Cristã Kids. Todos os direitos reservados.
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

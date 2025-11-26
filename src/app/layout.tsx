import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

export const metadata: Metadata = {
  title: 'Crescendo com Cristo',
  description: 'Ensine valores cristãos de forma divertida e inesquecível!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/*
          O local ideal para adicionar scripts de análise (como o pixel) seria aqui.
          Para evitar problemas, o ideal seria usar um componente específico 
          para carregar o script apenas depois que a página estivesse interativa.
          Exemplo: <AnalyticsScripts /> 
        */}
        <link rel="icon" href="https://i.imgur.com/h3VeAXl.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400..1000;1,400..1000&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

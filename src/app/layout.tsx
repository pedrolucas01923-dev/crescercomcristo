import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import { AnalyticsScripts } from '@/components/analytics-scripts';

export const metadata: Metadata = {
  title: 'Crescendo com Cristo',
  description: 'Ensine valores cristãos de forma divertida e inesquecível!',
  icons: {
    icon: 'https://i.imgur.com/h3VeAXl.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <AnalyticsScripts />
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

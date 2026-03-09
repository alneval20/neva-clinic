import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Aura Estetik Kliniği | Modern Estetik Çözümleri',
  description: 'Saç ekimi, botoks, ozon terapi ve daha fazlası. Aura Estetik Kliniği ile kendinizi yenileyin.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning className="font-sans bg-zinc-50 text-zinc-900 selection:bg-emerald-100 selection:text-emerald-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

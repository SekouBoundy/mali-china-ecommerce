// UPDATE src/app/layout.tsx
import '../styles/main.css';
import { CartProvider } from '@/contexts/CartContext';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SuguClick - E-commerce au Mali',
  description: 'SuguClick, votre marketplace malienne. Produits de qualité, livraison rapide dans tout le Mali.',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
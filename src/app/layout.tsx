// UPDATE src/app/layout.tsx
import '../styles/main.css';
import { CartProvider } from '@/contexts/CartContext';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mali Premium Store - Produits de qualité au Mali',
  description: 'Votre plateforme premium pour des produits de qualité internationale, livrés directement au Mali. Prix imbattables, garantie complète.',
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
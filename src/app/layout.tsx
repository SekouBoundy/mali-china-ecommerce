// src/app/layout.tsx
import '../styles/main.css';  // Import your CSS
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MaliChina Store - Produits de Chine au Mali',
  description: 'Votre plateforme de confiance pour des produits de qualité de Chine, livrés directement au Mali.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
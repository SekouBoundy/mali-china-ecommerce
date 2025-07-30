// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MaliChina Store - Produits de Qualité de Chine au Mali',
  description: 'E-commerce platform connecting Mali customers with Chinese suppliers. Livraison directe, prix abordables, qualité garantie.',
  keywords: 'Mali, Chine, e-commerce, livraison, produits, téléphones, accessoires',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

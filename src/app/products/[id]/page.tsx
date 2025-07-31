// REPLACE src/app/products/[id]/page.tsx - Remove server functions
'use client';
import React from 'react';
import { ProductDetail } from '@/components/product/ProductDetail';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSidebar } from '@/components/cart/CartSidebar';

// Sample product data - In real app, this would come from your API/database
const sampleProduct = {
  id: '1',
  name: 'iPhone 15 Pro Max 256GB - Titanium Naturel',
  price: {
    cfa: 740000,
    usd: 1199,
    originalCfa: 850000 // Shows 13% discount
  },
  images: [
    'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1605236453806-b465faa04422?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&h=500&fit=crop'
  ],
  description: 'Le iPhone 15 Pro Max redéfinit ce qu\'un smartphone peut accomplir. Avec son châssis en titane ultra-léger, sa puce A17 Pro révolutionnaire et son système de caméra Pro le plus avancé, c\'est l\'iPhone le plus puissant jamais créé.',
  features: [
    'Écran Super Retina XDR de 6,7 pouces',
    'Puce A17 Pro avec GPU 6 cœurs',
    'Système de caméra Pro triple 48 Mpx',
    'Zoom optique 5x',
    'Châssis en titane de qualité aérospatiale',
    'USB-C avec transfert ultra-rapide',
    'Face ID sécurisé',
    'Résistant à l\'eau IP68'
  ],
  specifications: {
    'Écran': '6,7 pouces Super Retina XDR OLED',
    'Processeur': 'Puce A17 Pro',
    'Stockage': '256 GB',
    'Caméra': 'Triple 48 Mpx + 12 Mpx + 12 Mpx',
    'Batterie': 'Jusqu\'à 29h de lecture vidéo',
    'Connectivité': '5G, Wi-Fi 6E, Bluetooth 5.3',
    'Couleurs': 'Titanium Naturel, Bleu, Blanc, Noir',
    'Dimensions': '159,9 × 76,7 × 8,25 mm',
    'Poids': '221 grammes'
  },
  rating: 4.8,
  reviewCount: 2847,
  inStock: 3, // Low stock for urgency
  category: 'Smartphones',
  brand: 'Apple',
  shipping: {
    cost: 15000,
    estimatedDays: '5-7 jours',
    freeShippingThreshold: 500000
  }
};

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  // In a real app, you would fetch the product data based on params.id
  // Example: const { data: product } = useSWR(`/api/products/${params.id}`, fetcher);
  
  return (
    <div>
      {/* Header with cart integration */}
      <Header />
      
      {/* Main Content */}
      <main className="min-h-screen bg-gray-50 pt-20">
        <ProductDetail product={sampleProduct} />
        
        {/* Additional sections */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          
          {/* Product Description Section */}
          <section className="mb-12 bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Description du Produit
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {sampleProduct.description}
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Caractéristiques Principales
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {sampleProduct.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {/* Specifications Section */}
          <section className="mb-12 bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Spécifications Techniques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(sampleProduct.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">{key}:</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </section>
          
          {/* Related Products Section - Placeholder */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Produits Similaires
            </h2>
            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <p className="text-gray-500">
                Section produits similaires à venir...
              </p>
            </div>
          </section>
          
          {/* Customer Reviews Section - Placeholder */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Avis Clients ({sampleProduct.reviewCount})
            </h2>
            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    {i < Math.floor(sampleProduct.rating) ? '★' : '☆'}
                  </span>
                ))}
                <span className="ml-2 text-lg font-semibold">
                  {sampleProduct.rating}/5
                </span>
              </div>
              <p className="text-gray-500">
                Section avis clients à venir...
              </p>
            </div>
          </section>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Cart Sidebar - Always present */}
      <CartSidebar />
    </div>
  );
}
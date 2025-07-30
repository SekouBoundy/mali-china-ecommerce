// src/app/produits/page.tsx
'use client';
import React from 'react';

// Import the ProductCard component (you'll need to create this file with the previous code)
// import { ProductCard } from '@/components/product/ProductCard';

// For demo purposes, including the ProductCard component inline
import { Heart, ShoppingCart, Star, Truck, Shield, Eye } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: { usd: number; cfa: number; };
    originalPrice?: { usd: number; cfa: number; };
    images: string[];
    rating: number;
    reviewCount: number;
    supplier: { name: string; rating: number; verified: boolean; };
    shipping: { days: string; cost: number; };
    inStock: boolean;
    badge?: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice.cfa - product.price.cfa) / product.originalPrice.cfa) * 100)
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-200 overflow-hidden">
      <div className="relative overflow-hidden">
        {product.badge && (
          <div className="absolute top-2 left-2 z-10">
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {product.badge}
            </span>
          </div>
        )}

        {discountPercentage > 0 && (
          <div className="absolute top-2 right-2 z-10">
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              -{discountPercentage}%
            </span>
          </div>
        )}

        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-2 right-2 z-20 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
          style={{ right: discountPercentage > 0 ? '60px' : '8px' }}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </button>

        <div className="aspect-square bg-gray-100 relative group">
          <img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Aperçu rapide
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1">
            <span className="text-gray-500">Fournisseur:</span>
            <span className="font-medium text-gray-700">{product.supplier.name}</span>
            {product.supplier.verified && <Shield className="w-3 h-3 text-blue-500" />}
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-gray-600">{product.supplier.rating}</span>
          </div>
        </div>

        <h3 className="font-semibold text-gray-800 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviewCount})</span>
        </div>

        <div className="space-y-1">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-gray-900">
              {product.price.cfa.toLocaleString('fr-FR')} CFA
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {product.originalPrice.cfa.toLocaleString('fr-FR')} CFA
              </span>
            )}
          </div>
          <div className="text-xs text-gray-500">≈ ${product.price.usd} USD</div>
        </div>

        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 text-green-600">
            <Truck className="w-3 h-3" />
            <span>Livraison {product.shipping.days}</span>
          </div>
          <div className="text-gray-500">+{product.shipping.cost.toLocaleString('fr-FR')} CFA</div>
        </div>

        <div className="flex items-center justify-between">
          <span className={`text-xs font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
            {product.inStock ? '✅ En stock' : '❌ Rupture de stock'}
          </span>
        </div>

        <button
          disabled={!product.inStock}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
            product.inStock
              ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg transform hover:-translate-y-0.5'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          {product.inStock ? 'Ajouter au panier' : 'Indisponible'}
        </button>
      </div>
    </div>
  );
};

// Sample product data optimized for Mali market
const sampleProducts = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max 256GB - Import Direct Chine',
    price: { usd: 899, cfa: 540000 },
    originalPrice: { usd: 1199, cfa: 720000 },
    images: ['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300'],
    rating: 4.8,
    reviewCount: 2847,
    supplier: { name: 'TechGlobal SZ', rating: 4.9, verified: true },
    shipping: { days: '7-10 jours', cost: 15000 },
    inStock: true,
    badge: 'BESTSELLER'
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra 512GB - Débloqué International',
    price: { usd: 799, cfa: 480000 },
    originalPrice: { usd: 999, cfa: 600000 },
    images: ['https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300'],
    rating: 4.7,
    reviewCount: 1923,
    supplier: { name: 'ElectronicsHub CN', rating: 4.8, verified: true },
    shipping: { days: '8-12 jours', cost: 12000 },
    inStock: true,
    badge: 'PROMO'
  },
  {
    id: '3',
    name: 'Laptop Gaming ASUS ROG - RTX 4060, 16GB RAM',
    price: { usd: 1299, cfa: 780000 },
    images: ['https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300'],
    rating: 4.6,
    reviewCount: 567,
    supplier: { name: 'Gaming Pro China', rating: 4.7, verified: true },
    shipping: { days: '10-14 jours', cost: 25000 },
    inStock: true
  },
  {
    id: '4',
    name: 'AirPods Pro 2ème Génération - Réduction de Bruit',
    price: { usd: 199, cfa: 120000 },
    originalPrice: { usd: 249, cfa: 150000 },
    images: ['https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300'],
    rating: 4.9,
    reviewCount: 3421,
    supplier: { name: 'AudioMax Shenzhen', rating: 4.9, verified: true },
    shipping: { days: '5-8 jours', cost: 8000 },
    inStock: true,
    badge: 'TOP VENTE'
  },
  {
    id: '5',
    name: 'Xiaomi Mi Band 8 - Montre Connectée Santé',
    price: { usd: 45, cfa: 27000 },
    images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300'],
    rating: 4.5,
    reviewCount: 8934,
    supplier: { name: 'Xiaomi Official', rating: 4.8, verified: true },
    shipping: { days: '7-10 jours', cost: 5000 },
    inStock: false
  },
  {
    id: '6',
    name: 'Caméra de Sécurité WiFi 4K - Vision Nocturne',
    price: { usd: 89, cfa: 53400 },
    images: ['https://images.unsplash.com/photo-1558002038-1055907df827?w=300'],
    rating: 4.4,
    reviewCount: 1245,
    supplier: { name: 'SecuriTech China', rating: 4.6, verified: false },
    shipping: { days: '9-13 jours', cost: 10000 },
    inStock: true
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Nos Produits</h1>
              <p className="text-gray-600 mt-1">Produits de qualité directement de Chine au Mali</p>
            </div>
            <div className="text-sm text-gray-500">
              {sampleProducts.length} produits disponibles
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="container mx-auto px-4 pb-8">
        <div className="flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Charger plus de produits
          </button>
        </div>
      </div>
    </div>
  );
}
// src/components/product/ProductGrid.tsx
import React from 'react';
import { ProductCard } from './ProductCard';

interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  inStock: boolean;
}

interface ProductGridProps {
  products: Product[];
  onAddToCart?: (product: Product) => void;
  loading?: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onAddToCart,
  loading = false
}) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4">
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="flex space-x-2">
                <div className="flex-1 h-8 bg-gray-200 rounded"></div>
                <div className="flex-1 h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8V4a2 2 0 00-2-2H6a2 2 0 00-2 2v1m16 0h-2M4 5h2" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun produit trouvé</h3>
        <p className="text-gray-500">Essayez de modifier vos critères de recherche.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

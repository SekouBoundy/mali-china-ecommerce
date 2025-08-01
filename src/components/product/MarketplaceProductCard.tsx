// src/components/product/MarketplaceProductCard.tsx
'use client';
import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: { cfa: number };
    originalPrice?: { cfa: number };
    image: string;
    rating: number;
    reviewCount: number;
    badge?: 'sale' | 'choice' | 'new';
    soldCount?: number;
    extraDiscount?: string;
  };
  onAddToCart: (productId: string) => void;
}

export const MarketplaceProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart 
}) => {
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice.cfa - product.price.cfa) / product.originalPrice.cfa) * 100)
    : 0;

  const saveAmount = product.originalPrice 
    ? product.originalPrice.cfa - product.price.cfa
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow duration-200">
      {/* Product Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.badge === 'choice' && (
            <span className="bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded">
              Choice
            </span>
          )}
          {product.badge === 'sale' && (
            <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
              Sale
            </span>
          )}
          {discountPercentage > 0 && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -{discountPercentage}%
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(product.id)}
          className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-50"
          aria-label="Ajouter au panier"
        >
          <ShoppingCart className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Product Title */}
        <Link href={`/products/${product.id}`}>
          <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Price */}
        <div className="mb-2">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              {product.price.cfa.toLocaleString()}CFA
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {product.originalPrice.cfa.toLocaleString()}CFA
              </span>
            )}
          </div>
        </div>

        {/* Rating and Sales */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-600">
              {product.rating}
            </span>
          </div>
          
          {product.soldCount && (
            <span className="text-xs text-gray-500">
              {product.soldCount} vendu{product.soldCount > 1 ? 's' : ''}
            </span>
          )}
        </div>

        {/* Save Amount */}
        {saveAmount > 0 && (
          <div className="text-xs text-red-600 font-medium mb-1">
            💰 Économisez {saveAmount.toLocaleString()}CFA
          </div>
        )}

        {/* Extra Discount */}
        {product.extraDiscount && (
          <div className="text-xs text-green-600 font-medium">
            🪙 {product.extraDiscount}
          </div>
        )}
      </div>
    </div>
  );
};
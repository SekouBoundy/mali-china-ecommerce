// src/components/product/ProductCard.tsx
'use client';
import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Truck, Shield, Eye } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: {
      usd: number;
      cfa: number;
    };
    originalPrice?: {
      usd: number;
      cfa: number;
    };
    images: string[];
    rating: number;
    reviewCount: number;
    supplier: {
      name: string;
      rating: number;
      verified: boolean;
    };
    shipping: {
      days: string;
      cost: number;
    };
    inStock: boolean;
    badge?: string;
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice.cfa - product.price.cfa) / product.originalPrice.cfa) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // Add to cart logic here
    console.log('Added to cart:', product.id);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-200 overflow-hidden">
      {/* Product Image Container */}
      <div className="relative overflow-hidden">
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-2 left-2 z-10">
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {product.badge}
            </span>
          </div>
        )}

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-2 right-2 z-10">
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              -{discountPercentage}%
            </span>
          </div>
        )}

        {/* Favorite Button */}
        <button 
          onClick={toggleFavorite}
          className="absolute top-2 right-2 z-20 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
          style={{ right: discountPercentage > 0 ? '60px' : '8px' }}
        >
          <Heart 
            className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
          />
        </button>

        {/* Product Image */}
        <div className="aspect-square bg-gray-100 relative group">
          <img
            src={product.images[currentImageIndex] || '/api/placeholder/300/300'}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Quick View Button */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Aperçu rapide
            </button>
          </div>

          {/* Image Dots */}
          {product.images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        
        {/* Supplier Info */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1">
            <span className="text-gray-500">Fournisseur:</span>
            <span className="font-medium text-gray-700">{product.supplier.name}</span>
            {product.supplier.verified && (
              <Shield className="w-3 h-3 text-blue-500" />
            )}
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-gray-600">{product.supplier.rating}</span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-gray-800 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating) 
                    ? 'fill-yellow-400 text-yellow-400' 
                    : 'text-gray-300'
                }`} 
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviewCount})</span>
        </div>

        {/* Price */}
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
          <div className="text-xs text-gray-500">
            ≈ ${product.price.usd} USD
          </div>
        </div>

        {/* Shipping Info */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 text-green-600">
            <Truck className="w-3 h-3" />
            <span>Livraison {product.shipping.days}</span>
          </div>
          <div className="text-gray-500">
            +{product.shipping.cost.toLocaleString('fr-FR')} CFA
          </div>
        </div>

        {/* Stock Status */}
        <div className="flex items-center justify-between">
          <span className={`text-xs font-medium ${
            product.inStock ? 'text-green-600' : 'text-red-600'
          }`}>
            {product.inStock ? '✅ En stock' : '❌ Rupture de stock'}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
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
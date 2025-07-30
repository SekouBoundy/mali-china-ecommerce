// src/components/product/ProductCard.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { StarRating } from '../common/StarRating';
import { PriceFormatter } from '../common/PriceFormatter';
import { DeliveryInfo } from '../common/DeliveryInfo';
import { Button } from '../ui/Button';

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

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart
}) => {
  const discountPercentage = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <Image 
          src={product.image} 
          alt={product.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
          <Heart className="w-4 h-4 text-gray-400" />
        </button>
        {discountPercentage > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
            -{discountPercentage}%
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-medium">Rupture de stock</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <StarRating 
          rating={product.rating} 
          totalReviews={product.reviewCount}
          size="sm" 
        />

        <div className="mt-3 mb-3">
          <PriceFormatter 
            price={product.price}
            originalPrice={product.originalPrice}
          />
        </div>

        <DeliveryInfo 
          deliveryTime={product.deliveryTime}
          className="mb-4"
        />

        <div className="flex space-x-2">
          <Link 
            href={/products/}
            className="flex-1"
          >
            <Button variant="outline" className="w-full">
              Voir détails
            </Button>
          </Link>
          <Button
            onClick={() => onAddToCart?.(product)}
            disabled={!product.inStock}
            className="flex-1"
          >
            Ajouter
          </Button>
        </div>
      </div>
    </div>
  );
};

// src/components/cart/CartItem.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import { QuantitySelector } from './QuantitySelector';
import { PriceFormatter } from '../common/PriceFormatter';

interface CartItemData {
  id: number;
  name: string;
  slug: string;
  price: number;
  image: string;
  quantity: number;
  deliveryTime: string;
}

interface CartItemProps {
  item: CartItemData;
  onQuantityChange: (itemId: number, newQuantity: number) => void;
  onRemove: (itemId: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  onQuantityChange,
  onRemove
}) => {
  const itemTotal = item.price * item.quantity;

  return (
    <div className="bg-white rounded-lg p-4 flex items-center space-x-4">
      <Link href={/products/}>
        <Image 
          src={item.image} 
          alt={item.name}
          width={80}
          height={80}
          className="w-20 h-20 object-cover rounded cursor-pointer hover:opacity-75"
        />
      </Link>
      
      <div className="flex-1">
        <Link 
          href={/products/}
          className="font-medium text-gray-900 hover:text-blue-600"
        >
          {item.name}
        </Link>
        <p className="text-sm text-gray-500 mt-1">
          Livraison: {item.deliveryTime}
        </p>
        <div className="mt-2">
          <PriceFormatter price={item.price} className="text-blue-600" />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <QuantitySelector
          quantity={item.quantity}
          onQuantityChange={(newQuantity) => onQuantityChange(item.id, newQuantity)}
        />
        
        <div className="text-right">
          <PriceFormatter 
            price={itemTotal} 
            className="font-semibold text-gray-900"
          />
        </div>
        
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 p-2"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// src/components/layout/CartIcon.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

interface CartIconProps {
  itemCount?: number;
}

export const CartIcon: React.FC<CartIconProps> = ({ itemCount = 0 }) => {
  return (
    <Link href="/cart" className="relative p-2 text-gray-400 hover:text-gray-500">
      <ShoppingCart className="w-6 h-6" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </Link>
  );
};

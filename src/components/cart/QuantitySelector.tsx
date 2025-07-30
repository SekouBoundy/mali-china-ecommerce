// src/components/cart/QuantitySelector.tsx
import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99,
  disabled = false
}) => {
  const handleDecrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg">
      <button
        onClick={handleDecrease}
        disabled={disabled || quantity <= min}
        className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Minus className="w-4 h-4" />
      </button>
      <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
        {quantity}
      </span>
      <button
        onClick={handleIncrease}
        disabled={disabled || quantity >= max}
        className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
};

// src/components/common/PriceFormatter.tsx
import React from 'react';

interface PriceFormatterProps {
  price: number;
  originalPrice?: number;
  className?: string;
}

export const PriceFormatter: React.FC<PriceFormatterProps> = ({
  price,
  originalPrice,
  className = ''
}) => {
  const formatPrice = (amount: number): string => {
    return new Intl.NumberFormat('fr-FR').format(amount) + ' CFA';
  };

  return (
    <div className={className}>
      <span className="text-lg font-bold text-blue-600">
        {formatPrice(price)}
      </span>
      {originalPrice && originalPrice > price && (
        <span className="ml-2 text-sm text-gray-500 line-through">
          {formatPrice(originalPrice)}
        </span>
      )}
    </div>
  );
};

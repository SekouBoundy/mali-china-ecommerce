// src/components/common/StarRating.tsx
import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  totalReviews?: number;
  showReviews?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  totalReviews,
  showReviews = true,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <div className="flex items-center">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={${sizeClasses[size]} }
          />
        ))}
      </div>
      <span className={	ext-gray-600 ml-2 }>
        {rating.toFixed(1)}
      </span>
      {showReviews && totalReviews && (
        <span className={	ext-gray-500 ml-1 }>
          ({totalReviews} avis)
        </span>
      )}
    </div>
  );
};

// src/components/common/CategoryTabs.tsx
'use client';
import React from 'react';
import { clsx } from 'clsx';

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface CategoryTabsProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  selectedCategory,
  onCategoryChange
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Catégories</h3>
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={clsx(
              'flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors',
              selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            )}
          >
            <span>{category.icon}</span>
            <span className="text-sm font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

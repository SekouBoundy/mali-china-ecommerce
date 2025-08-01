// src/components/product/CategoryTabs.tsx
'use client';
import React, { useState } from 'react';
import { 
  Package, 
  Smartphone, 
  Headphones, 
  Monitor, 
  Watch,
  Camera,
  Gamepad2,
  Laptop,
  Speaker,
  Battery
} from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  count: number;
  color: string;
}

interface CategoryTabsProps {
  onCategoryChange: (categoryId: string) => void;
  activeCategory?: string;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ 
  onCategoryChange, 
  activeCategory = 'all' 
}) => {
  const categories: Category[] = [
    {
      id: 'all',
      name: 'Tous',
      icon: <Package className="w-5 h-5" />,
      count: 147,
      color: '#16a34a'
    },
    {
      id: 'phones',
      name: 'Téléphones',
      icon: <Smartphone className="w-5 h-5" />,
      count: 45,
      color: '#2563eb'
    },
    {
      id: 'accessories',
      name: 'Accessoires',
      icon: <Headphones className="w-5 h-5" />,
      count: 32,
      color: '#7c3aed'
    },
    {
      id: 'electronics',
      name: 'Électronique',
      icon: <Monitor className="w-5 h-5" />,
      count: 28,
      color: '#dc2626'
    },
    {
      id: 'watches',
      name: 'Montres',
      icon: <Watch className="w-5 h-5" />,
      count: 18,
      color: '#ea580c'
    },
    {
      id: 'cameras',
      name: 'Caméras',
      icon: <Camera className="w-5 h-5" />,
      count: 12,
      color: '#059669'
    },
    {
      id: 'gaming',
      name: 'Gaming',
      icon: <Gamepad2 className="w-5 h-5" />,
      count: 15,
      color: '#9333ea'
    },
    {
      id: 'laptops',
      name: 'Ordinateurs',
      icon: <Laptop className="w-5 h-5" />,
      count: 8,
      color: '#0891b2'
    }
  ];

  const handleCategoryClick = (categoryId: string) => {
    onCategoryChange(categoryId);
  };

  return (
    <div className="category-tabs-container">
      <div className="category-tabs-header">
        <h3 className="tabs-title">Catégories</h3>
        <p className="tabs-subtitle">Découvrez nos produits par catégorie</p>
      </div>
      
      <div className="category-tabs-wrapper">
        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
              style={{
                '--category-color': category.color
              } as React.CSSProperties}
            >
              <div className="tab-icon-wrapper">
                <div className="tab-icon" style={{ color: category.color }}>
                  {category.icon}
                </div>
              </div>
              
              <div className="tab-content">
                <span className="tab-name">{category.name}</span>
                <span className="tab-count">{category.count} items</span>
              </div>
              
              {activeCategory === category.id && (
                <div className="tab-indicator" style={{ background: category.color }} />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
// src/components/sections/CategoriesShowcase.tsx
'use client';
import React from 'react';
import { 
  Glasses,
  Zap,
  Smartphone,
  ShoppingBag,
  Headphones,
  Laptop
} from 'lucide-react';

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  productCount: string;
  buttonColor: string;
  iconBg: string;
}

export const CategoriesShowcase: React.FC = () => {
  const categories: Category[] = [
    {
      id: 'accessories',
      name: 'Accessories',
      description: 'Sunglasses, headbands, hair clips',
      image: 'https://media.theeverygirl.com/wp-content/uploads/2024/07/the-everygirl-feature-amazon-summer-accessories-2025.jpg',
      icon: <Glasses className="w-4 h-4 text-pink-600" />,
      productCount: '250+',
      buttonColor: 'bg-pink-500 hover:bg-pink-600',
      iconBg: 'bg-pink-100'
    },
    {
      id: 'shoes',
      name: 'Chaussures',
      description: 'Sneakers, sandals, casual footwear',
      image: 'https://cdn.runrepeat.com/storage/gallery/buying_guide_primary/66/66-best-sneakers-001-15275042-main.jpg',
      icon: <Zap className="w-4 h-4 text-blue-600" />,
      productCount: '180+',
      buttonColor: 'bg-blue-500 hover:bg-blue-600',
      iconBg: 'bg-blue-100'
    },
    {
      id: 'smartphones',
      name: 'Smartphones',
      description: 'iPhone, Samsung, Huawei',
      image: 'https://www.compareandrecycle.co.uk/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F27942%2F1741192710-which-phones-have-the-best-cameras.png&w=3840&q=75',
      icon: <Smartphone className="w-4 h-4 text-gray-700" />,
      productCount: '120+',
      buttonColor: 'bg-gray-700 hover:bg-gray-800',
      iconBg: 'bg-gray-100'
    },
    {
      id: 'accessoires-telephone',
      name: 'Accessoires Téléphone',
      description: 'Coques, chargeurs, supports',
      image: 'https://edenphone.fr/wp-content/uploads/2020/12/tendances_2020.jpg',
      icon: <ShoppingBag className="w-4 h-4 text-purple-600" />,
      productCount: '90+',
      buttonColor: 'bg-purple-500 hover:bg-purple-600',
      iconBg: 'bg-purple-100'
    },
    {
      id: 'ecouteurs-audio',
      name: 'Écouteurs & Audio',
      description: 'Écouteurs, casques, haut-parleurs',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=250&fit=crop',
      icon: <Headphones className="w-4 h-4 text-green-600" />,
      productCount: '150+',
      buttonColor: 'bg-green-500 hover:bg-green-600',
      iconBg: 'bg-green-100'
    },
    {
      id: 'ordinateurs-tablettes',
      name: 'Ordinateurs & Tablettes',
      description: 'Laptops, tablettes, TV',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=250&fit=crop',
      icon: <Laptop className="w-4 h-4 text-orange-600" />,
      productCount: '80+',
      buttonColor: 'bg-orange-500 hover:bg-orange-600',
      iconBg: 'bg-orange-100'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
            >
              {/* Card Header with Product Count and Icon */}
              <div className="relative">
                {/* Product Count Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
                    <span className="text-sm font-medium text-gray-700">
                      {category.productCount} produits
                    </span>
                  </div>
                </div>

                {/* Category Icon */}
                <div className="absolute top-4 right-4 z-10">
                  <div className={`w-8 h-8 rounded-full ${category.iconBg} flex items-center justify-center shadow-sm`}>
                    {category.icon}
                  </div>
                </div>

                {/* Category Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Category Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>

                {/* Category Description */}
                <p className="text-sm text-gray-600 mb-4">
                  {category.description}
                </p>

                {/* CTA Button */}
                <button className={`w-full ${category.buttonColor} text-white py-3 px-4 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center justify-center gap-2`}>
                  Explorer la catégorie
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Categories CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-600 text-sm">
            Plus de 1,000+ produits dans toutes les catégories
          </p>
        </div>
      </div>
    </section>
  );
};
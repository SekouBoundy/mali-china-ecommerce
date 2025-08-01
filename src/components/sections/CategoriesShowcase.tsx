// src/components/sections/CategoriesShowcase.tsx
import React from 'react';
import { Smartphone, Headphones, User, Sparkles, Laptop, ShoppingBag, ArrowRight } from 'lucide-react';

export function CategoriesShowcase() {
  const categories = [
    {
      id: 1,
      name: "Smartphones",
      description: "iPhone, Samsung, Huawei",
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
      productCount: "120+ produits",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      id: 2,
      name: "Mode Femme",
      description: "Robes, tops, accessoires",
      icon: User,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop",
      productCount: "200+ produits",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600"
    },
    {
      id: 3,
      name: "Mode Homme",
      description: "T-shirts, pantalons, chaussures",
      icon: User,
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=300&fit=crop",
      productCount: "150+ produits",
      color: "from-gray-600 to-gray-700",
      bgColor: "bg-gray-50",
      textColor: "text-gray-600"
    },
    {
      id: 4,
      name: "Beauté & Cosmétiques",
      description: "Maquillage, soins, parfums",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop",
      productCount: "80+ produits",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      id: 5,
      name: "Électronique",
      description: "Laptops, tablettes, TV",
      icon: Laptop,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
      productCount: "90+ produits",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      id: 6,
      name: "Accessoires",
      description: "Écouteurs, coques, chargeurs",
      icon: Headphones,
      image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=300&fit=crop",
      productCount: "100+ produits",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Découvrez nos catégories
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des dernières technologies aux tendances mode, trouvez tout pour votre style de vie moderne au Mali
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Category Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Icon Overlay */}
                  <div className={`absolute top-4 left-4 ${category.bgColor} p-3 rounded-full`}>
                    <IconComponent className={`w-6 h-6 ${category.textColor}`} />
                  </div>

                  {/* Product Count */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium opacity-90">
                      {category.productCount}
                    </div>
                  </div>
                </div>

                {/* Category Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {category.name}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>

                  {/* CTA Button */}
                  <button className={`w-full bg-gradient-to-r ${category.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform group-hover:scale-105`}>
                    Explorer la catégorie
                  </button>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Vous ne trouvez pas ce que vous cherchez ?
            </h3>
            <p className="text-gray-600 mb-6">
              Contactez notre équipe à Bamako pour des demandes spéciales ou des conseils personnalisés
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contacter le support
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors">
                Voir tous les produits
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
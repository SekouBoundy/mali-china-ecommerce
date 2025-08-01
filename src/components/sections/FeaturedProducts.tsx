// src/components/sections/FeaturedProducts.tsx
import React from 'react';
import { Star, Heart, Eye, ShoppingCart } from 'lucide-react';

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Ensemble Mode Jeune Fille - Robe Tendance",
      price: 35000,
      originalPrice: 49000,
      image: "https://karinemajet.com/wp-content/uploads/2024/05/vetement-kaki-ado-fille-12-a-18-ans.jpg",
      rating: 4.9,
      reviews: 1247,
      badge: "BESTSELLER",
      badgeColor: "bg-yellow-500",
      discount: 29
    },
    {
      id: 2,
      name: "iPhone 15 Pro 128GB - Débloqué",
      price: 740000,
      originalPrice: 890000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVDs7vvXeolyBsD1QTFbdgJD4uBsbvM1C3w&s",
      rating: 4.8,
      reviews: 892,
      badge: "HOT DEAL",
      badgeColor: "bg-red-500",
      discount: 17
    },
    {
      id: 3,
      name: "Kit Maquillage Complet - Jeunes Filles",
      price: 25000,
      originalPrice: 39000,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 1856,
      badge: "TRENDING",
      badgeColor: "bg-purple-500",
      discount: 36
    },
    {
      id: 4,
      name: "T-shirt Premium Homme - Coton Bio",
      price: 22000,
      originalPrice: 28000,
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 543,
      badge: "NOUVEAU",
      badgeColor: "bg-green-600",
      discount: 21
    },
    {
      id: 5,
      name: "AirPods Pro 2 - Réduction de Bruit",
      price: 180000,
      originalPrice: 220000,
      image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 672,
      badge: "POPULAIRE",
      badgeColor: "bg-blue-600",
      discount: 18
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Favoris des Jeunes Maliennes
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos <span className="text-green-600">Coups de Cœur</span> Mali
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mode, beauté et produits tendance sélectionnés pour les jeunes filles et familles maliennes
          </p>
        </div>

        {/* Products Grid - 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3">
                  <span className={`${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                    {product.badge}
                  </span>
                </div>
                
                <div className="absolute top-3 right-3">
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    -{product.discount}%
                  </span>
                </div>

                {/* Quick Actions - Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                    <Heart className="w-4 h-4 text-gray-700" />
                  </button>
                  <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                    <Eye className="w-4 h-4 text-gray-700" />
                  </button>
                  <button className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors">
                    <ShoppingCart className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-3">
                
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                  {product.name}
                </h3>

                {/* Pricing */}
                <div className="space-y-1">
                  <div className="text-lg font-bold text-green-600">
                    {product.price.toLocaleString()} CFA
                  </div>
                  <div className="text-sm text-gray-500 line-through">
                    {product.originalPrice.toLocaleString()} CFA
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold text-sm hover:bg-green-700 transition-colors">
                  VOIR
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Voir tous les produits populaires
          </button>
        </div>
      </div>
    </section>
  );
}
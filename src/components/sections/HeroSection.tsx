// src/components/sections/HeroSection.tsx
import React from 'react';
import { ArrowRight, Truck, Shield, Star } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Technologie premium
                <span className="block text-blue-600">pour le Mali</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Découvrez les derniers smartphones, laptops et accessoires avec livraison rapide à Bamako et dans tout le Mali.
              </p>
            </div>

            {/* Simple trust indicators */}
            <div className="flex flex-wrap gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-green-600" />
                <span className="text-sm">Livraison 3-5 jours</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-sm">Garantie officielle</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-sm">5000+ clients satisfaits</span>
              </div>
            </div>

            {/* Simple CTA */}
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                Voir nos produits
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right content - Multiple products showcase */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-sm text-gray-500 font-medium">Produits populaires</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Product 1 - Electronics */}
              <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center space-y-3">
                  <div className="aspect-square bg-gray-50 rounded-lg p-3">
                    <img 
                      src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop"
                      alt="iPhone 15 Pro"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">iPhone 15 Pro</h4>
                    <div className="text-blue-600 font-bold">740K CFA</div>
                  </div>
                </div>
              </div>

              {/* Product 2 - Accessories */}
              <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center space-y-3">
                  <div className="aspect-square bg-gray-50 rounded-lg p-3">
                    <img 
                      src="https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=300&h=300&fit=crop"
                      alt="AirPods Pro"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">AirPods Pro 2</h4>
                    <div className="text-blue-600 font-bold">180K CFA</div>
                  </div>
                </div>
              </div>

              {/* Product 3 - Men's Clothing */}
              <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center space-y-3">
                  <div className="aspect-square bg-gray-50 rounded-lg p-3">
                    <img 
                      src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=300&h=300&fit=crop"
                      alt="T-shirt Homme"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">T-shirt Premium</h4>
                    <div className="text-blue-600 font-bold">25K CFA</div>
                  </div>
                </div>
              </div>

              {/* Product 4 - Women's Clothing */}
              <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center space-y-3">
                  <div className="aspect-square bg-gray-50 rounded-lg p-3">
                    <img 
                      src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop"
                      alt="Robe Femme"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Robe Élégante</h4>
                    <div className="text-blue-600 font-bold">45K CFA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Single CTA for all products */}
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Voir tous les produits
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
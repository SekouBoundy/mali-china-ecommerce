// src/components/sections/HeroSection.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { Truck, Shield, Star, Clock, Phone, ChevronRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      title: "Produits Premium de Qualité",
      subtitle: "Livraison Rapide au Mali",
      description: "Découvrez des milliers de produits de haute qualité avec livraison garantie en 7-14 jours",
      cta: "Découvrir les Offres",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      badge: "🔥 Trending"
    },
    {
      title: "Économisez Jusqu'à 70%",
      subtitle: "Prix Imbattables Garantis",
      description: "Les meilleurs prix sur électronique, téléphones et accessoires avec garantie internationale",
      cta: "Voir les Promotions",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      badge: "💰 Économies"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-mali-green to-transparent rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500 to-transparent rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] py-12">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Shield className="w-4 h-4 text-mali-green" />
              <span className="text-sm font-semibold text-gray-700">
                Plus de 50,000+ clients satisfaits au Mali
              </span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-4">
              <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                {heroSlides[currentSlide].badge}
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">
                  {heroSlides[currentSlide].title}
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mali-green to-blue-600">
                  {heroSlides[currentSlide].subtitle}
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                {heroSlides[currentSlide].description}
              </p>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="w-10 h-10 bg-mali-green/10 rounded-lg flex items-center justify-center">
                  <Truck className="w-5 h-5 text-mali-green" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">7-14 Jours</div>
                  <div className="text-sm text-gray-600">Livraison Rapide</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">100% Garanti</div>
                  <div className="text-sm text-gray-600">Remboursement</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary group px-8 py-4 text-lg font-semibold bg-gradient-to-r from-mali-green to-green-600 hover:from-green-600 hover:to-mali-green transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                {heroSlides[currentSlide].cta}
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-lg border border-white/20 hover:bg-white transition-all duration-300">
                <Phone className="w-5 h-5" />
                Appelez-nous: +223 XX XX XX XX
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white"></div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">4.9/5 ⭐</div>
                  <div className="text-gray-600">2,847 avis</div>
                </div>
              </div>

              <div className="h-8 w-px bg-gray-300"></div>

              <div className="text-sm">
                <div className="font-semibold text-gray-900">Livraison cette semaine</div>
                <div className="text-gray-600">Pour commandes avant 14h</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroSlides[currentSlide].image}
                alt="Produits de qualité"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-bold text-gray-900">4.9/5</span>
                </div>
                <div className="text-sm text-gray-600">Excellence</div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-mali-green text-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-bold">7-14 jours</span>
                </div>
                <div className="text-sm opacity-90">Livraison rapide</div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-mali-green/20 to-blue-500/20 rounded-2xl transform rotate-3 -z-10"></div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-mali-green scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-auto">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};
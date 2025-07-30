// src/components/sections/CategoriesShowcase.tsx
'use client';
import React, { useState } from 'react';
import { Sparkles, Smartphone, Baby, Home, Heart, GraduationCap, ArrowRight, TrendingUp } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  icon: React.ReactNode;
  productCount: number;
  trending: boolean;
  gradient: string;
  hoverColor: string;
}

export const CategoriesShowcase: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories: Category[] = [
    {
      id: 'mode-beaute',
      name: 'Mode & Beauté',
      subtitle: 'Tendances pour jeunes filles',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      icon: <Sparkles className="w-6 h-6" />,
      productCount: 2847,
      trending: true,
      gradient: 'from-pink-500 to-rose-500',
      hoverColor: 'hover:shadow-pink-200'
    },
    {
      id: 'telephones-accessoires',
      name: 'Téléphones & Accessoires',
      subtitle: 'Derniers smartphones',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop',
      icon: <Smartphone className="w-6 h-6" />,
      productCount: 1543,
      trending: true,
      gradient: 'from-blue-500 to-cyan-500',
      hoverColor: 'hover:shadow-blue-200'
    },
    {
      id: 'enfants-bebes',
      name: 'Enfants & Bébés',
      subtitle: 'Jouets et vêtements enfants',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      icon: <Baby className="w-6 h-6" />,
      productCount: 1876,
      trending: false,
      gradient: 'from-yellow-400 to-orange-500',
      hoverColor: 'hover:shadow-yellow-200'
    },
    {
      id: 'maison-lifestyle',
      name: 'Maison & Lifestyle',
      subtitle: 'Décoration et organisation',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      icon: <Home className="w-6 h-6" />,
      productCount: 923,
      trending: false,
      gradient: 'from-emerald-500 to-green-600',
      hoverColor: 'hover:shadow-green-200'
    },
    {
      id: 'sante-bien-etre',
      name: 'Santé & Bien-être',
      subtitle: 'Fitness et soins personnels',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      icon: <Heart className="w-6 h-6" />,
      productCount: 654,
      trending: false,
      gradient: 'from-purple-500 to-indigo-600',
      hoverColor: 'hover:shadow-purple-200'
    },
    {
      id: 'education-travail',
      name: 'Éducation & Travail',
      subtitle: 'Fournitures scolaires et bureau',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
      icon: <GraduationCap className="w-6 h-6" />,
      productCount: 789,
      trending: false,
      gradient: 'from-slate-600 to-gray-700',
      hoverColor: 'hover:shadow-gray-200'
    }
  ];

  const formatProductCount = (count: number): string => {
    return new Intl.NumberFormat('fr-FR').format(count);
  };

  return (
    <section className="categories-showcase-section">
      <div className="categories-container">
        
        {/* Section Header */}
        <div className="categories-header">
          <div className="categories-badge">
            <TrendingUp className="w-5 h-5 text-mali-green" />
            <span>Parcourir par Catégorie</span>
          </div>
          
          <h2 className="categories-title">
            Trouvez Exactement Ce Que Vous <span className="categories-title-gradient">Cherchez</span>
          </h2>
          
          <p className="categories-description">
            Des produits sélectionnés spécialement pour les jeunes filles et familles maliennes
          </p>
        </div>

        {/* Categories Grid */}
        <div className="categories-grid">
          {categories.map((category) => (
            <div 
              key={category.id}
              className={`category-card ${category.hoverColor}`}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Category Image */}
              <div className="category-image-container">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
                
                {/* Trending Badge */}
                {category.trending && (
                  <div className="trending-badge">
                    <span className="trending-icon">🔥</span>
                    <span>Tendance</span>
                  </div>
                )}
                
                {/* Overlay */}
                <div className="category-overlay">
                  <button className="category-explore-btn">
                    <span>Explorer</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Category Info */}
              <div className="category-info">
                {/* Icon and Title */}
                <div className="category-header-info">
                  <div className={`category-icon bg-gradient-to-r ${category.gradient}`}>
                    {category.icon}
                  </div>
                  <div className="category-text">
                    <h3 className="category-name">{category.name}</h3>
                    <p className="category-subtitle">{category.subtitle}</p>
                  </div>
                </div>

                {/* Product Count */}
                <div className="category-stats">
                  <span className="product-count">
                    {formatProductCount(category.productCount)} produits
                  </span>
                  
                  {/* Price Range */}
                  <div className="price-range">
                    <span className="price-from">À partir de</span>
                    <span className="price-amount">2,500 CFA</span>
                  </div>
                </div>

                {/* Quick Categories */}
                <div className="quick-categories">
                  {category.id === 'mode-beaute' && (
                    <>
                      <span className="quick-tag">Vêtements</span>
                      <span className="quick-tag">Bijoux</span>
                      <span className="quick-tag">Sacs</span>
                    </>
                  )}
                  {category.id === 'telephones-accessoires' && (
                    <>
                      <span className="quick-tag">iPhone</span>
                      <span className="quick-tag">Samsung</span>
                      <span className="quick-tag">Coques</span>
                    </>
                  )}
                  {category.id === 'enfants-bebes' && (
                    <>
                      <span className="quick-tag">Jouets</span>
                      <span className="quick-tag">Vêtements</span>
                      <span className="quick-tag">École</span>
                    </>
                  )}
                  {category.id === 'maison-lifestyle' && (
                    <>
                      <span className="quick-tag">Décoration</span>
                      <span className="quick-tag">Cuisine</span>
                      <span className="quick-tag">Organisation</span>
                    </>
                  )}
                  {category.id === 'sante-bien-etre' && (
                    <>
                      <span className="quick-tag">Fitness</span>
                      <span className="quick-tag">Beauté</span>
                      <span className="quick-tag">Soins</span>
                    </>
                  )}
                  {category.id === 'education-travail' && (
                    <>
                      <span className="quick-tag">Fournitures</span>
                      <span className="quick-tag">Bureau</span>
                      <span className="quick-tag">Livres</span>
                    </>
                  )}
                </div>

                {/* CTA Button */}
                <button className={`category-cta-btn bg-gradient-to-r ${category.gradient}`}>
                  <span>Découvrir</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers Section */}
        <div className="special-offers">
          <div className="special-offer-card offer-girls">
            <div className="offer-content">
              <h3 className="offer-title">Spécial Jeunes Filles</h3>
              <p className="offer-description">Mode, beauté et tech à prix malins</p>
              <div className="offer-discount">Jusqu'à -50%</div>
            </div>
            <div className="offer-image">
              <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=200&fit=crop" alt="Mode jeunes filles" />
            </div>
          </div>

          <div className="special-offer-card offer-kids">
            <div className="offer-content">
              <h3 className="offer-title">Collection Enfants</h3>
              <p className="offer-description">Éducation, jeux et vêtements</p>
              <div className="offer-discount">Livraison gratuite</div>
            </div>
            <div className="offer-image">
              <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=200&fit=crop" alt="Produits enfants" />
            </div>
          </div>
        </div>

        {/* View All Categories CTA */}
        <div className="view-all-categories">
          <button className="view-all-categories-btn">
            <span>Voir Toutes les Catégories</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="categories-count">Plus de 8,000 produits dans 20+ catégories</p>
        </div>
      </div>
    </section>
  );
};
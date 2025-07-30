// src/components/sections/FeaturedProducts.tsx - TYPESCRIPT VERSION FIXED
'use client';
import React, { useState } from 'react';

interface Price {
  cfa: number;
  usd: number;
}

interface Product {
  id: string;
  name: string;
  price: Price;
  originalPrice: Price;
  image: string;
  rating: number;
  reviewCount: number;
  badge: string;
  inStock: boolean;
  fastShipping: boolean;
  verified: boolean;
}

export const FeaturedProducts: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  
  // Featured products data - Updated for Mali young girls & kids market
  const featuredProducts: Product[] = [
    {
      id: '1',
      name: 'Ensemble Mode Jeune Fille - Robe Tendance',
      price: { cfa: 25000, usd: 42 },
      originalPrice: { cfa: 35000, usd: 58 },
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=400&fit=crop',
      rating: 4.9,
      reviewCount: 1247,
      badge: 'BESTSELLER',
      inStock: true,
      fastShipping: true,
      verified: true
    },
    {
      id: '2', 
      name: 'iPhone 15 Pro 128GB - Débloqué',
      price: { cfa: 480000, usd: 799 },
      originalPrice: { cfa: 580000, usd: 965 },
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
      rating: 4.8,
      reviewCount: 892,
      badge: 'HOT DEAL',
      inStock: true,
      fastShipping: true,
      verified: true
    },
    {
      id: '3',
      name: 'Kit Maquillage Complet - Jeunes Filles',
      price: { cfa: 18000, usd: 30 },
      originalPrice: { cfa: 28000, usd: 47 },
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
      rating: 4.7,
      reviewCount: 1856,
      badge: 'TRENDING',
      inStock: true,
      fastShipping: true,
      verified: true
    },
    {
      id: '4',
      name: 'Jouets Éducatifs Enfants - Set Complet',
      price: { cfa: 35000, usd: 58 },
      originalPrice: { cfa: 50000, usd: 83 },
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
      rating: 4.8,
      reviewCount: 743,
      badge: 'KIDS FAVORITE',
      inStock: true,
      fastShipping: true,
      verified: true
    },
    {
      id: '5',
      name: 'Sac à Main Mode - Style Jeune',
      price: { cfa: 22000, usd: 37 },
      originalPrice: { cfa: 32000, usd: 53 },
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      rating: 4.6,
      reviewCount: 634,
      badge: 'POPULAR',
      inStock: true,
      fastShipping: true,
      verified: true
    },
    {
      id: '6',
      name: 'Accessoires Cheveux - Pack Beauté',
      price: { cfa: 12000, usd: 20 },
      originalPrice: { cfa: 18000, usd: 30 },
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop',
      rating: 4.9,
      reviewCount: 1124,
      badge: 'LIMITED',
      inStock: true,
      fastShipping: true,
      verified: true
    }
  ];

  const toggleFavorite = (productId: string): void => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const calculateDiscount = (original: number, current: number): number => {
    return Math.round(((original - current) / original) * 100);
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  const getBadgeClass = (badge: string): string => {
    switch (badge) {
      case 'BESTSELLER': return 'product-badge badge-bestseller';
      case 'HOT DEAL': return 'product-badge badge-hot-deal';
      case 'TRENDING': return 'product-badge badge-trending';
      case 'KIDS FAVORITE': return 'product-badge badge-kids-favorite';
      case 'POPULAR': return 'product-badge badge-popular';
      case 'LIMITED': return 'product-badge badge-limited';
      default: return 'product-badge badge-bestseller';
    }
  };

  return (
    <section className="featured-products-section">
      <div className="featured-container">
        
        {/* Section Header */}
        <div className="featured-header">
          <div className="featured-badge">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
            <span>Favoris des Jeunes Maliennes</span>
          </div>
          
          <h2 className="featured-title">
            Nos <span className="featured-title-gradient">Coups de Cœur</span> Mali
          </h2>
          
          <p className="featured-description">
            Mode, beauté et produits tendance sélectionnés pour les jeunes filles et familles maliennes
          </p>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {featuredProducts.map((product) => {
            const discount = calculateDiscount(product.originalPrice.cfa, product.price.cfa);
            const isFavorite = favorites.includes(product.id);
            
            return (
              <div key={product.id} className="product-card">
                
                {/* Product Image */}
                <div className="product-image-container">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  
                  {/* Badge */}
                  <div className={getBadgeClass(product.badge)}>
                    {product.badge}
                  </div>
                  
                  {/* Discount Badge */}
                  {discount > 0 && (
                    <div className="discount-badge">
                      -{discount}%
                    </div>
                  )}
                  
                  {/* Quick Actions */}
                  <div className="quick-actions">
                    <button 
                      onClick={() => toggleFavorite(product.id)}
                      className={`quick-action-btn favorite-btn ${isFavorite ? 'active' : ''}`}
                    >
                      <svg viewBox="0 0 24 24" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </button>
                    
                    <button className="quick-action-btn view-btn">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                    </button>
                    
                    <button className="quick-action-btn cart-btn">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6 0v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="product-info">
                  {/* Rating */}
                  <div className="product-rating">
                    <div className="star-rating">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`star ${i < Math.floor(product.rating) ? 'filled' : 'empty'}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="rating-text">{product.rating}</span>
                    <span className="review-count">({product.reviewCount})</span>
                  </div>

                  {/* Product Name */}
                  <h3 className="product-name">
                    {product.name}
                  </h3>

                  {/* Trust Badges */}
                  <div className="trust-badges">
                    {product.verified && (
                      <div className="trust-badge verified-badge">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>Vérifié</span>
                      </div>
                    )}
                    {product.fastShipping && (
                      <div className="trust-badge fast-shipping-badge">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                        </svg>
                        <span>Rapide</span>
                      </div>
                    )}
                  </div>

                  {/* Pricing */}
                  <div className="product-pricing">
                    <div className="price-row">
                      <span className="current-price">
                        {formatPrice(product.price.cfa)} CFA
                      </span>
                      {product.originalPrice.cfa > product.price.cfa && (
                        <span className="original-price">
                          {formatPrice(product.originalPrice.cfa)} CFA
                        </span>
                      )}
                    </div>
                    <div className="usd-price">
                      ${formatPrice(product.price.usd)} USD
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button className="add-to-cart-btn">
                    Ajouter au Panier
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Products CTA */}
        <div className="view-all-container">
          <button className="view-all-btn">
            Découvrir Plus de Tendances
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
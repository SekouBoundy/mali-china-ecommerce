// src/components/product/EnhancedProductCard.tsx
'use client';
import React, { useState } from 'react';
import { 
  Heart, 
  ShoppingCart, 
  Eye, 
  Star, 
  Plus, 
  Minus,
  Truck,
  Shield,
  Clock
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: {
    cfa: number;
    usd: number;
  };
  originalPrice?: {
    cfa: number;
  };
  image: string;
  images?: string[];
  category: string;
  rating: number;
  reviewCount?: number;
  inStock: boolean;
  badge?: 'new' | 'sale' | 'popular' | 'limited';
  shipping?: {
    cost: number;
    days: string;
  };
  description?: string;
}

interface EnhancedProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
  onAddToCart?: (productId: string, quantity: number) => void;
  onQuickView?: (productId: string) => void;
  onToggleWishlist?: (productId: string) => void;
  isInWishlist?: boolean;
}

export const EnhancedProductCard: React.FC<EnhancedProductCardProps> = ({
  product,
  viewMode = 'grid',
  onAddToCart,
  onQuickView,
  onToggleWishlist,
  isInWishlist = false
}) => {
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice.cfa - product.price.cfa) / product.originalPrice.cfa) * 100)
    : 0;

  const getBadgeInfo = () => {
    switch (product.badge) {
      case 'new':
        return { text: 'Nouveau', color: 'badge-new', bgColor: '#16a34a' };
      case 'sale':
        return { text: `${discountPercentage}% OFF`, color: 'badge-sale', bgColor: '#ef4444' };
      case 'popular':
        return { text: 'Populaire', color: 'badge-popular', bgColor: '#f59e0b' };
      case 'limited':
        return { text: 'Limité', color: 'badge-limited', bgColor: '#8b5cf6' };
      default:
        return null;
    }
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product.id, quantity);
    }
  };

  const handleQuantityChange = (delta: number) => {
    const newQuantity = Math.max(1, quantity + delta);
    setQuantity(newQuantity);
  };

  const badgeInfo = getBadgeInfo();

  if (viewMode === 'list') {
    return (
      <div className="product-card-list">
        <div className="product-image-list">
          <img src={product.image} alt={product.name} />
          {badgeInfo && (
            <span className={`product-badge ${badgeInfo.color}`}>
              {badgeInfo.text}
            </span>
          )}
        </div>

        <div className="product-info-list">
          <div className="product-header-list">
            <h3 className="product-title-list">{product.name}</h3>
            <div className="product-rating-list">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                  />
                ))}
              </div>
              <span className="rating-text">({product.reviewCount || 0})</span>
            </div>
          </div>

          <p className="product-description-list">{product.description}</p>

          <div className="product-meta-list">
            <div className="shipping-info">
              <Truck className="w-4 h-4" />
              <span>Livraison: {product.shipping?.days || '5-7 jours'}</span>
            </div>
            <div className="stock-info">
              <div className={`stock-indicator ${product.inStock ? 'in-stock' : 'out-stock'}`} />
              <span>{product.inStock ? 'En stock' : 'Rupture'}</span>
            </div>
          </div>
        </div>

        <div className="product-actions-list">
          <div className="price-section-list">
            <div className="price-current">{product.price.cfa.toLocaleString()} CFA</div>
            {product.originalPrice && (
              <div className="price-original">{product.originalPrice.cfa.toLocaleString()} CFA</div>
            )}
            <div className="price-usd">${product.price.usd}</div>
          </div>

          <div className="quantity-controls-list">
            <button onClick={() => handleQuantityChange(-1)} className="qty-btn">
              <Minus className="w-3 h-3" />
            </button>
            <span className="quantity-display">{quantity}</span>
            <button onClick={() => handleQuantityChange(1)} className="qty-btn">
              <Plus className="w-3 h-3" />
            </button>
          </div>

          <div className="action-buttons-list">
            <button onClick={handleAddToCart} className="btn-add-to-cart-list">
              <ShoppingCart className="w-4 h-4" />
              Ajouter
            </button>
            <button 
              onClick={() => onToggleWishlist?.(product.id)} 
              className={`btn-wishlist ${isInWishlist ? 'active' : ''}`}
            >
              <Heart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="product-card-restaurant"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="product-image-container">
        <div className="product-image-wrapper">
          <img 
            src={product.images?.[currentImageIndex] || product.image} 
            alt={product.name}
            className="product-image-main"
          />
          
          {/* Image Navigation Dots */}
          {product.images && product.images.length > 1 && (
            <div className="image-navigation">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`nav-dot ${index === currentImageIndex ? 'active' : ''}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Badges */}
        <div className="product-badges-container">
          {badgeInfo && (
            <span 
              className={`product-badge-restaurant ${badgeInfo.color}`}
              style={{ background: badgeInfo.bgColor }}
            >
              {badgeInfo.text}
            </span>
          )}
          {!product.inStock && (
            <span className="product-badge-restaurant badge-out-stock">
              Rupture
            </span>
          )}
        </div>

        {/* Quick Actions Overlay */}
        <div className={`quick-actions-overlay ${isHovered ? 'visible' : ''}`}>
          <button 
            onClick={() => onToggleWishlist?.(product.id)}
            className={`quick-action-btn wishlist-btn ${isInWishlist ? 'active' : ''}`}
            title="Ajouter aux favoris"
          >
            <Heart className="w-4 h-4" />
          </button>
          <button 
            onClick={() => onQuickView?.(product.id)}
            className="quick-action-btn view-btn"
            title="Aperçu rapide"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="product-info-restaurant">
        {/* Category & Rating */}
        <div className="product-meta-restaurant">
          <span className="product-category">{product.category}</span>
          <div className="product-rating-restaurant">
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                />
              ))}
            </div>
            <span className="rating-value">{product.rating}</span>
          </div>
        </div>

        {/* Product Title */}
        <h3 className="product-title-restaurant">{product.name}</h3>

        {/* Trust Indicators */}
        <div className="trust-indicators">
          <div className="trust-item">
            <Truck className="w-3 h-3" />
            <span>Livraison rapide</span>
          </div>
          <div className="trust-item">
            <Shield className="w-3 h-3" />
            <span>Garantie qualité</span>
          </div>
          <div className="trust-item">
            <Clock className="w-3 h-3" />
            <span>{product.shipping?.days || '5-7 jours'}</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="pricing-section">
          <div className="price-main">
            <span className="current-price">{product.price.cfa.toLocaleString()}</span>
            <span className="currency">CFA</span>
          </div>
          
          {product.originalPrice && (
            <div className="price-comparison">
              <span className="original-price">
                {product.originalPrice.cfa.toLocaleString()} CFA
              </span>
              <span className="discount-badge">
                -{discountPercentage}%
              </span>
            </div>
          )}
          
          <div className="price-usd">
            ${product.price.usd} USD
          </div>
        </div>

        {/* Quantity & Add to Cart */}
        <div className="purchase-section">
          <div className="quantity-controls">
            <button 
              onClick={() => handleQuantityChange(-1)}
              className="quantity-btn minus"
              disabled={quantity <= 1}
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="quantity-value">{quantity}</span>
            <button 
              onClick={() => handleQuantityChange(1)}
              className="quantity-btn plus"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          <button 
            onClick={handleAddToCart}
            className="add-to-cart-btn-restaurant"
            disabled={!product.inStock}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>{product.inStock ? 'Ajouter au panier' : 'Indisponible'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
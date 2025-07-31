// src/components/product/ProductDetail.tsx
'use client';
import React, { useState } from 'react';
import { 
  Star, 
  Heart, 
  Share2, 
  Shield, 
  Truck, 
  Clock, 
  CheckCircle,
  Plus,
  Minus,
  ShoppingCart,
  MessageCircle,
  Award,
  Zap,
  Users
} from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    price: {
      cfa: number;
      usd: number;
      originalCfa?: number;
    };
    images: string[];
    description: string;
    features: string[];
    specifications: { [key: string]: string };
    rating: number;
    reviewCount: number;
    inStock: number;
    category: string;
    brand?: string;
    shipping: {
      cost: number;
      estimatedDays: string;
      freeShippingThreshold?: number;
    };
  };
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem, openCart } = useCart();

  const discountPercentage = product.price.originalCfa 
    ? Math.round(((product.price.originalCfa - product.price.cfa) / product.price.originalCfa) * 100)
    : 0;

  const formatCFA = (amount: number) => {
    return new Intl.NumberFormat('fr-FR').format(amount) + ' CFA';
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= product.inStock) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      shipping: product.shipping,
      supplier: product.brand || 'Premium Store',
      inStock: product.inStock,
      quantity: quantity
    });
    
    // Show success feedback and open cart
    openCart();
    
    // Optional: Show a quick success message
    const successMessage = document.createElement('div');
    successMessage.textContent = `${quantity} ${product.name} ajouté au panier !`;
    successMessage.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: #16a34a;
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      font-weight: 600;
      z-index: 9999;
      box-shadow: 0 4px 12px rgba(22, 163, 74, 0.3);
    `;
    document.body.appendChild(successMessage);
    setTimeout(() => {
      document.body.removeChild(successMessage);
    }, 3000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    // Redirect to checkout could be added here
    // window.location.href = '/checkout';
  };

  return (
    <div className="product-detail-page">
      {/* Product Images Section */}
      <div className="product-images-section">
        <div className="main-image-container">
          <img 
            src={product.images[selectedImageIndex]} 
            alt={product.name}
            className="main-product-image"
          />
          
          {/* Image Overlays */}
          <div className="image-overlays">
            {discountPercentage > 0 && (
              <div className="discount-badge">
                -{discountPercentage}%
              </div>
            )}
            <button 
              className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
              onClick={() => setIsWishlisted(!isWishlisted)}
            >
              <Heart className="w-5 h-5" />
            </button>
            <button className="share-btn">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Thumbnails */}
        <div className="image-thumbnails">
          {product.images.map((image, index) => (
            <button
              key={index}
              className={`thumbnail ${selectedImageIndex === index ? 'active' : ''}`}
              onClick={() => setSelectedImageIndex(index)}
            >
              <img src={image} alt={`${product.name} ${index + 1}`} />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info Section */}
      <div className="product-info-section">
        {/* Trust Indicators */}
        <div className="trust-badges">
          <div className="trust-badge">
            <Shield className="w-4 h-4" />
            <span>Garantie 1 An</span>
          </div>
          <div className="trust-badge">
            <Truck className="w-4 h-4" />
            <span>Livraison Rapide</span>
          </div>
          <div className="trust-badge">
            <Award className="w-4 h-4" />
            <span>Qualité Premium</span>
          </div>
        </div>

        {/* Product Title & Rating */}
        <h1 className="product-title">{product.name}</h1>
        
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="rating-text">
            {product.rating}/5 ({product.reviewCount} avis)
          </span>
        </div>

        {/* Pricing */}
        <div className="pricing-section">
          <div className="price-main">
            <span className="current-price">{formatCFA(product.price.cfa)}</span>
            {product.price.originalCfa && (
              <span className="original-price">{formatCFA(product.price.originalCfa)}</span>
            )}
          </div>
          <div className="price-usd">≈ ${product.price.usd} USD</div>
          {discountPercentage > 0 && (
            <div className="savings-highlight">
              Vous économisez {formatCFA(product.price.originalCfa! - product.price.cfa)} !
            </div>
          )}
        </div>

        {/* Urgency & Scarcity */}
        <div className="urgency-section">
          <div className="stock-indicator">
            {product.inStock <= 5 ? (
              <div className="low-stock">
                <Zap className="w-4 h-4" />
                <span>Plus que {product.inStock} en stock !</span>
              </div>
            ) : (
              <div className="in-stock">
                <CheckCircle className="w-4 h-4" />
                <span>En stock ({product.inStock} disponibles)</span>
              </div>
            )}
          </div>
          
          <div className="social-proof">
            <Users className="w-4 h-4" />
            <span>{Math.floor(Math.random() * 15) + 5} personnes regardent cet article</span>
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="quantity-section">
          <label className="quantity-label">Quantité:</label>
          <div className="quantity-controls">
            <button 
              className="qty-btn"
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="quantity-display">{quantity}</span>
            <button 
              className="qty-btn"
              onClick={() => handleQuantityChange(quantity + 1)}
              disabled={quantity >= product.inStock}
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Purchase Buttons */}
        <div className="purchase-buttons">
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-5 h-5" />
            Ajouter au Panier
          </button>
          
          <button 
            className="buy-now-btn"
            onClick={handleBuyNow}
          >
            Acheter Maintenant
          </button>
        </div>

        {/* Payment Methods */}
        <div className="payment-preview">
          <div className="payment-title">Paiement sécurisé avec:</div>
          <div className="payment-methods">
            <div className="payment-method orange">Orange Money</div>
            <div className="payment-method moov">Moov Money</div>
            <div className="payment-method bank">Virement</div>
          </div>
        </div>

        {/* Shipping Info */}
        <div className="shipping-info-section">
          <div className="shipping-item">
            <Clock className="w-4 h-4" />
            <span>Livraison en {product.shipping.estimatedDays}</span>
          </div>
          <div className="shipping-item">
            <span>Frais de livraison: {formatCFA(product.shipping.cost)}</span>
          </div>
          {product.shipping.freeShippingThreshold && (
            <div className="shipping-item">
              <span>Livraison gratuite dès {formatCFA(product.shipping.freeShippingThreshold)}</span>
            </div>
          )}
        </div>

        {/* Contact Seller */}
        <div className="contact-seller">
          <button className="contact-btn">
            <MessageCircle className="w-5 h-5" />
            Contacter le Vendeur
          </button>
        </div>
      </div>
    </div>
  );
};
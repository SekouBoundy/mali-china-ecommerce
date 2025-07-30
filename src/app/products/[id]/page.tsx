// src/app/products/[id]/page.tsx - NEW FILE
'use client';
import React, { useState } from 'react';
import { ArrowLeft, Heart, Share2, Star, Shield, Truck, CreditCard } from 'lucide-react';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  // Sample product data (in real app, fetch based on params.id)
  const product = {
    id: params.id,
    name: 'iPhone 15 Pro Max 256GB - Débloqué International',
    price: { usd: 899, cfa: 540000 },
    originalPrice: { usd: 1199, cfa: 720000 },
    images: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500',
    ],
    rating: 4.8,
    reviewCount: 2847,
    supplier: { name: 'TechGlobal', rating: 4.9, verified: true },
    shipping: { days: '7-10 jours', cost: 15000 },
    inStock: true,
    badge: 'BESTSELLER',
    description: 'iPhone 15 Pro Max avec puce A17 Pro révolutionnaire, système de caméra Pro avancé et design en titane ultra-résistant. Débloqué pour tous les opérateurs.',
    specifications: {
      'Écran': '6.7" Super Retina XDR OLED',
      'Processeur': 'Apple A17 Pro',
      'Stockage': '256GB',
      'Caméra': 'Triple 48MP + 12MP + 12MP',
      'Batterie': 'Jusqu\'à 29h de lecture vidéo',
      'Connectivité': '5G, WiFi 6E, Bluetooth 5.3'
    },
    warranty: '1 an de garantie internationale'
  };

  const discountPercentage = Math.round(((product.originalPrice.cfa - product.price.cfa) / product.originalPrice.cfa) * 100);

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log('Added to cart:', product.id, 'Quantity:', quantity);
    alert(`${product.name} ajouté au panier (${quantity} article${quantity > 1 ? 's' : ''})`);
  };

  return (
    <div className="product-detail-page">
      {/* Header Navigation */}
      <div className="detail-header">
        <div className="container">
          <div className="header-nav">
            <button onClick={() => window.history.back()} className="back-btn">
              <ArrowLeft /> Retour
            </button>
            <div className="header-actions">
              <button onClick={() => setIsFavorite(!isFavorite)} className="action-btn">
                <Heart className={isFavorite ? 'favorite-active' : ''} />
              </button>
              <button className="action-btn">
                <Share2 />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="product-layout">
          
          {/* Product Images */}
          <div className="product-images">
            <div className="main-image">
              <img src={product.images[selectedImage]} alt={product.name} />
              {product.badge && <div className="product-badge">{product.badge}</div>}
              {discountPercentage > 0 && <div className="discount-badge">-{discountPercentage}%</div>}
            </div>
            
            <div className="image-thumbnails">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                >
                  <img src={image} alt={`Vue ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <div className="supplier-badge">
              <span>Fournisseur: {product.supplier.name}</span>
              {product.supplier.verified && <Shield className="verified-icon" />}
            </div>

            <h1 className="product-title">{product.name}</h1>

            <div className="product-rating">
              <div className="stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'} />
                ))}
              </div>
              <span className="rating-text">{product.rating} ({product.reviewCount} avis)</span>
            </div>

            <div className="product-pricing">
              <div className="current-price">{product.price.cfa.toLocaleString('fr-FR')} CFA</div>
              {product.originalPrice && (
                <div className="original-price">{product.originalPrice.cfa.toLocaleString('fr-FR')} CFA</div>
              )}
              <div className="usd-price">≈ ${product.price.usd} USD</div>
              {discountPercentage > 0 && (
                <div className="savings">Vous économisez {((product.originalPrice.cfa - product.price.cfa) * quantity).toLocaleString('fr-FR')} CFA</div>
              )}
            </div>

            <div className="product-description">
              <p>{product.description}</p>
            </div>

            {/* Trust Indicators */}
            <div className="trust-indicators">
              <div className="trust-item">
                <Truck className="trust-icon" />
                <div>
                  <strong>Livraison rapide</strong>
                  <span>{product.shipping.days} • +{product.shipping.cost.toLocaleString('fr-FR')} CFA</span>
                </div>
              </div>
              <div className="trust-item">
                <Shield className="trust-icon" />
                <div>
                  <strong>Garantie</strong>
                  <span>{product.warranty}</span>
                </div>
              </div>
              <div className="trust-item">
                <CreditCard className="trust-icon" />
                <div>
                  <strong>Paiement sécurisé</strong>
                  <span>Orange Money • Moov Money</span>
                </div>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="purchase-section">
              <div className="quantity-selector">
                <label>Quantité:</label>
                <div className="quantity-controls">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="qty-btn"
                  >-</button>
                  <span className="quantity-value">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="qty-btn"
                  >+</button>
                </div>
              </div>

              <div className="purchase-buttons">
                <button onClick={handleAddToCart} className="add-to-cart-btn">
                  🛒 Ajouter au panier • {(product.price.cfa * quantity).toLocaleString('fr-FR')} CFA
                </button>
                <a href="/checkout" className="buy-now-btn">
                ⚡ Acheter maintenant
                </a>    
              </div>
            </div>

            {/* Specifications */}
            <div className="specifications">
              <h3>Spécifications</h3>
              <div className="spec-grid">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="spec-row">
                    <span className="spec-label">{key}:</span>
                    <span className="spec-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
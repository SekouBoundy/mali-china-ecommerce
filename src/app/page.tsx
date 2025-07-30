// src/app/page.tsx - COMPLETE FILE REPLACEMENT
'use client';
import React, { useState } from 'react';

// Sample cart data
const initialCartItems = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max 256GB',
    price: { usd: 899, cfa: 540000 },
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=80&h=80&fit=crop',
    quantity: 1,
    shipping: { cost: 15000, days: '7-10 jours' },
    supplier: 'TechGlobal'
  }
];

export default function HomePage() {
  // Cart state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
    } else {
      setCartItems(items => 
        items.map(item => 
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        {/* Trust Bar */}
        <div className="header-top">
          📦 Livraison rapide ✅ Qualité premium 🎧 Service client Mali
        </div>
        
        {/* Main Header */}
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <a href="/" className="logo">
              <span className="mali">Mali</span>
              <span className="premium"> Premium</span>
              <span className="store"> Store</span>
            </a>
            
            {/* Navigation */}
            <nav>
              <ul className="nav">
                <li><a href="/">Accueil</a></li>
                <li><a href="/products">Produits</a></li>
                <li><a href="/phones">Téléphones</a></li>
                <li><a href="/accessories">Accessoires</a></li>
                <li><a href="/electronics">Électronique</a></li>
              </ul>
            </nav>
            
            {/* Search */}
            <div className="search-container">
              <input 
                type="text" 
                className="search-input" 
                placeholder="Rechercher des produits..."
              />
              <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            
            {/* Cart & User */}
            <div className="header-actions">
              {/* WORKING CART BUTTON */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="cart-btn"
              >
                🛒
                <span className="cart-badge">{cartItems.length}</span>
              </button>
              <a href="/auth" className="user-btn">👤</a>
            </div>
          </div>
        </div>
      </header>
      {/* NEW HERO SECTION with CSS Classes */}
      <section className="new-hero-section">
        {/* Background Pattern */}
        <div className="bg-pattern">
          <div className="bg-pattern-left"></div>
          <div className="bg-pattern-right"></div>
        </div>

        <div className="container">
          <div className="hero-container">
            
            {/* Left Content */}
            <div className="hero-content">
              {/* Trust Badge */}
              <div className="trust-badge">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Plus de 50,000+ clients satisfaits au Mali</span>
              </div>

              {/* Main Headlines */}
              <div className="hero-headlines">
                <div className="trending-badge">
                  🔥 Trending
                </div>
                
                <h1 className="hero-title">
                  <span className="hero-title-main">Produits Premium</span>
                  <br />
                  <span className="hero-title-gradient">de qualité livrés directement au Mali</span>
                </h1>

                <p className="hero-description">
                  Découvrez des milliers de produits de haute qualité avec livraison garantie en 7-14 jours
                </p>
              </div>

              {/* Trust Signals */}
              <div className="trust-signals">
                <div className="trust-signal">
                  <div className="trust-signal-icon green">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                    </svg>
                  </div>
                  <div className="trust-signal-text">
                    <div className="title">7-14 Jours</div>
                    <div className="subtitle">Livraison Rapide</div>
                  </div>
                </div>

                <div className="trust-signal">
                  <div className="trust-signal-icon blue">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="trust-signal-text">
                    <div className="title">100% Garanti</div>
                    <div className="subtitle">Remboursement</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="hero-cta-buttons">
                <button className="hero-btn-primary">
                  Découvrir les Offres
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
                
                <button className="hero-btn-secondary">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  Appelez-nous: +223 XX XX XX XX
                </button>
              </div>

              {/* Social Proof */}
              <div className="social-proof">
                <div className="user-avatars">
                  <div className="avatar-stack">
                    <div className="avatar"></div>
                    <div className="avatar"></div>
                    <div className="avatar"></div>
                    <div className="avatar"></div>
                  </div>
                  <div className="rating">
                    <div className="title">4.9/5 ⭐</div>
                    <div className="subtitle">2,847 avis</div>
                  </div>
                </div>

                <div className="divider"></div>

                <div className="delivery-info">
                  <div className="title">Livraison cette semaine</div>
                  <div className="subtitle">Pour commandes avant 14h</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="hero-image-container">
              <div className="hero-main-image">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
                  alt="Produits de qualité"
                />
                
                {/* Floating Elements */}
                <div className="floating-rating">
                  <div className="content">
                    <svg className="star" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="score">4.9/5</span>
                  </div>
                  <div className="label">Excellence</div>
                </div>

                <div className="floating-delivery">
                  <div className="content">
                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="time">7-14 jours</span>
                  </div>
                  <div className="label">Livraison rapide</div>
                </div>
              </div>

              {/* Background Decoration */}
              <div className="hero-bg-decoration"></div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="hero-wave">
          <svg viewBox="0 0 1200 120" fill="none">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Development Notice */}
          <div className="dev-notice">
            🚧 Application en cours de développement 🚧
          </div>
          
          {/* Trust Indicators */}
          <div className="trust-bar">
            <div className="trust-item">
              📦 Livraison rapide
            </div>
            <div className="trust-item">
              🛡️ Qualité premium
            </div>
            <div className="trust-item">
              ⏰ Service client Mali
            </div>
          </div>
          
          {/* Page Title */}
          <h1 className="page-title">Mali Premium Store</h1>
          <p className="page-subtitle">
            Votre plateforme premium pour des produits de qualité internationale, livrés directement au Mali.
          </p>
          
          {/* Call to Action */}
          <div style={{ marginBottom: '3rem' }}>
            <a href="/products" className="btn btn-primary">
              🛍️ Découvrir nos produits
            </a>
            <a href="/contact" className="btn btn-secondary" style={{ marginLeft: '1rem' }}>
              📞 Nous contacter
            </a>
          </div>
        </div>
      </main>

      {/* SHOPPING CART COMPONENT */}
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </div>
  );
}

// Shopping Cart Component
function ShoppingCart({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }: any) {
  const subtotal = cartItems.reduce((sum: number, item: any) => sum + (item.price.cfa * item.quantity), 0);
  const shippingTotal = cartItems.reduce((sum: number, item: any) => sum + item.shipping.cost, 0);
  const total = subtotal + shippingTotal;

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={onClose} />}
      
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <div className="cart-title">
            <span>🛒</span>
            <h2>Mon Panier</h2>
            <span className="items-count">({cartItems.length})</span>
          </div>
          <button onClick={onClose} className="close-btn">✕</button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-icon">🛒</div>
              <h3>Votre panier est vide</h3>
              <p>Découvrez nos produits premium!</p>
              <button onClick={onClose} className="btn btn-primary">
                Continuer les achats
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item: any) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>

                    <div className="item-details">
                      <h4 className="item-name">{item.name}</h4>
                      <p className="item-supplier">Par {item.supplier}</p>
                      
                      <div className="item-price">
                        <span className="price-cfa">
                          {item.price.cfa.toLocaleString('fr-FR')} CFA
                        </span>
                        <span className="price-usd">
                          (${item.price.usd})
                        </span>
                      </div>

                      <div className="shipping-info">
                        🚚 {item.shipping.days} • +{item.shipping.cost.toLocaleString('fr-FR')} CFA
                      </div>

                      <div className="quantity-controls">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="qty-btn"
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="qty-btn"
                        >
                          +
                        </button>
                        <button 
                          onClick={() => onRemoveItem(item.id)}
                          className="remove-btn"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>

                    <div className="item-total">
                      <span className="total-price">
                        {(item.price.cfa * item.quantity).toLocaleString('fr-FR')} CFA
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="summary-row">
                  <span>Sous-total</span>
                  <span>{subtotal.toLocaleString('fr-FR')} CFA</span>
                </div>
                <div className="summary-row">
                  <span>Livraison au Mali</span>
                  <span>{shippingTotal.toLocaleString('fr-FR')} CFA</span>
                </div>
                <div className="summary-row total-row">
                  <span>Total</span>
                  <span>{total.toLocaleString('fr-FR')} CFA</span>
                </div>
                <div className="usd-reference">
                  ≈ ${Math.round(total / 600)} USD
                </div>
              </div>

              <div className="payment-methods">
                <div className="payment-title">Paiement sécurisé avec:</div>
                <div className="payment-options">
                  <div className="payment-method orange">Orange Money</div>
                  <div className="payment-method moov">Moov Money</div>
                </div>
              </div>

              <div className="checkout-section">
                <a href="/checkout" className="checkout-btn">
                  🔒 Procéder au paiement
                </a>
                <button onClick={onClose} className="continue-shopping">
                  Continuer les achats
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
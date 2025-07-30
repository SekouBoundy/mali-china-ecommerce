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
              <button className="user-btn">👤</button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            
            {/* Left Side - Main Message */}
            <div className="hero-text">
              <div className="hero-badge">
                🏆 Premium au Mali
              </div>
              
              <h1 className="hero-title">
                Produits <span className="premium-text">Premium</span> de qualité
                <br />
                livrés directement au <span className="mali-text">Mali</span>
              </h1>
              
              <p className="hero-description">
                Économisez jusqu'à <strong>60%</strong> sur l'électronique, les téléphones et accessoires. 
                Livraison rapide et sécurisée avec garantie complète.
              </p>
              
              {/* Value Propositions */}
              <div className="value-props">
                <div className="value-item">
                  <div className="value-icon">💰</div>
                  <div>
                    <strong>Prix imbattables</strong>
                    <br />
                    <span>Importateur direct</span>
                  </div>
                </div>
                
                <div className="value-item">
                  <div className="value-icon">🛡️</div>
                  <div>
                    <strong>Garantie Premium</strong>
                    <br />
                    <span>Produits authentiques</span>
                  </div>
                </div>
                
                <div className="value-item">
                  <div className="value-icon">🚚</div>
                  <div>
                    <strong>Livraison rapide</strong>
                    <br />
                    <span>Partout au Mali</span>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="hero-buttons">
                <a href="/products" className="btn btn-primary btn-large">
                  🛍️ Explorer les produits
                </a>
                <a href="/how-it-works" className="btn btn-outline btn-large">
                  📖 Comment ça marche
                </a>
              </div>
              
              {/* Social Proof */}
              <div className="social-proof">
                <div className="social-stats">
                  <div className="stat">
                    <strong>500+</strong>
                    <span>Clients au Mali</span>
                  </div>
                  <div className="stat">
                    <strong>2,000+</strong>
                    <span>Commandes livrées</span>
                  </div>
                  <div className="stat">
                    <strong>4.8/5</strong>
                    <span>Satisfaction client</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Hero Visual */}
            <div className="hero-visual">
              <div className="hero-image-container">
                {/* Main Product Showcase */}
                <div className="product-showcase">
                  <div className="product-float product-1">
                    <img src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=150&h=150&fit=crop" alt="iPhone Premium" />
                    <div className="product-label">iPhone Premium</div>
                  </div>
                  
                  <div className="product-float product-2">
                    <img src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=150&h=150&fit=crop" alt="Écouteurs Premium" />
                    <div className="product-label">Écouteurs Pro</div>
                  </div>
                  
                  <div className="product-float product-3">
                    <img src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=150&h=150&fit=crop" alt="Smartphone Premium" />
                    <div className="product-label">Smartphone Pro</div>
                  </div>
                </div>
                
                {/* Mali Delivery Visualization */}
                <div className="route-visual">
                  <div className="country source">
                    <div className="flag">📦</div>
                    <div className="label">Entrepôt</div>
                  </div>
                  
                  <div className="route-line">
                    <div className="plane">🚚</div>
                    <div className="timeline">Livraison rapide</div>
                  </div>
                  
                  <div className="country mali">
                    <div className="flag">🇲🇱</div>
                    <div className="label">Mali</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
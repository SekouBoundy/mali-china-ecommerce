// src/app/page.tsx
import React from 'react';

export default function HomePage() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        {/* Trust Bar */}
        <div className="header-top">
          📦 Livraison 7-14 jours ✅ Produits garantis 🎧 Support 24/7
        </div>
        
        {/* Main Header */}
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <a href="/" className="logo">
              <span className="mali">Mali</span>
              <span className="china">China</span>
              <span className="store"> Store</span>
            </a>
            
            {/* Navigation */}
            <nav>
              <ul className="nav">
                <li><a href="/accueil">Accueil</a></li>
                <li><a href="/produits">Produits</a></li>
                <li><a href="/telephones">Téléphones</a></li>
                <li><a href="/accessoires">Accessoires</a></li>
                <li><a href="/electronique">Électronique</a></li>
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
              <button className="cart-btn">
                🛒
                <span className="cart-badge">0</span>
              </button>
              <button className="user-btn">👤</button>
            </div>
          </div>
        </div>
      </header>

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
              📦 Livraison 7-14 jours
            </div>
            <div className="trust-item">
              🛡️ Produits garantis
            </div>
            <div className="trust-item">
              ⏰ Support 24/7
            </div>
          </div>
          
          {/* Page Title */}
          <h1 className="page-title">MaliChina Store</h1>
          <p className="page-subtitle">
            Votre plateforme de confiance pour des produits de qualité de Chine, livrés directement au Mali.
          </p>
          
          {/* Call to Action */}
          <div style={{ marginBottom: '3rem' }}>
            <a href="/produits" className="btn btn-primary">
              🛍️ Découvrir nos produits
            </a>
            <a href="/contact" className="btn btn-secondary" style={{ marginLeft: '1rem' }}>
              📞 Nous contacter
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
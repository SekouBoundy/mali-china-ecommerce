// src/components/sections/HeroSection.tsx
'use client';
import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          
          {/* Left Side - Main Message */}
          <div className="hero-text">
            <div className="hero-badge">
              🚀 Nouveau au Mali
            </div>
            
            <h1 className="hero-title">
              Produits de <span className="china-text">Chine</span> de qualité
              <br />
              livrés directement au <span className="mali-text">Mali</span>
            </h1>
            
            <p className="hero-description">
              Économisez jusqu'à <strong>60%</strong> sur l'électronique, les téléphones et accessoires. 
              Livraison sécurisée en 7-14 jours avec garantie complète.
            </p>
            
            {/* Value Propositions */}
            <div className="value-props">
              <div className="value-item">
                <div className="value-icon">💰</div>
                <div>
                  <strong>Prix imbattables</strong>
                  <br />
                  <span>Direct des fabricants</span>
                </div>
              </div>
              
              <div className="value-item">
                <div className="value-icon">🛡️</div>
                <div>
                  <strong>Garantie 100%</strong>
                  <br />
                  <span>Produits authentiques</span>
                </div>
              </div>
              
              <div className="value-item">
                <div className="value-icon">🚚</div>
                <div>
                  <strong>Livraison rapide</strong>
                  <br />
                  <span>7-14 jours au Mali</span>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="hero-buttons">
              <a href="/produits" className="btn btn-primary btn-large">
                🛍️ Explorer les produits
              </a>
              <a href="/comment-ca-marche" className="btn btn-outline btn-large">
                📖 Comment ça marche
              </a>
            </div>
            
            {/* Social Proof */}
            <div className="social-proof">
              <div className="social-stats">
                <div className="stat">
                  <strong>500+</strong>
                  <span>Clients satisfaits</span>
                </div>
                <div className="stat">
                  <strong>2,000+</strong>
                  <span>Produits livrés</span>
                </div>
                <div className="stat">
                  <strong>4.8/5</strong>
                  <span>Note moyenne</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Hero Image/Visual */}
          <div className="hero-visual">
            <div className="hero-image-container">
              {/* Main Product Showcase */}
              <div className="product-showcase">
                <div className="product-float product-1">
                  <img src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=150&h=150&fit=crop" alt="iPhone" />
                  <div className="product-label">iPhone 15</div>
                </div>
                
                <div className="product-float product-2">
                  <img src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=150&h=150&fit=crop" alt="AirPods" />
                  <div className="product-label">AirPods Pro</div>
                </div>
                
                <div className="product-float product-3">
                  <img src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=150&h=150&fit=crop" alt="Samsung" />
                  <div className="product-label">Galaxy S24</div>
                </div>
              </div>
              
              {/* China to Mali Route Visualization */}
              <div className="route-visual">
                <div className="country china">
                  <div className="flag">🇨🇳</div>
                  <div className="label">Chine</div>
                </div>
                
                <div className="route-line">
                  <div className="plane">✈️</div>
                  <div className="timeline">7-14 jours</div>
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
  );
};
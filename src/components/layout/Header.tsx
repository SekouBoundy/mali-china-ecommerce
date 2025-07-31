// src/components/layout/Header.tsx
'use client';
import React, { useState } from 'react';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X,
  Package,
  CheckCircle,
  Headphones,
  TrendingUp
} from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItemsCount] = useState(1); // This will come from your cart state later

  const navigationItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Produits', href: '/produits' },
    { label: 'Téléphones', href: '/telephones' },
    { label: 'Accessoires', href: '/accessoires' },
    { label: 'Électronique', href: '/electronique' }
  ];

  return (
    <header className="header-container">
      {/* Trust Badges Bar */}
      <div className="trust-bar">
        <div className="trust-badges">
          <div className="trust-badge">
            <Package className="w-4 h-4 text-amber-600" />
            <span>Livraison rapide</span>
          </div>
          <div className="trust-badge">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span>Qualité premium</span>
          </div>
          <div className="trust-badge">
            <Headphones className="w-4 h-4 text-blue-600" />
            <span>Service client Mali</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="header-content">
          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <div className="logo">
            <span className="logo-sugu">Sugu</span>
            <span className="logo-click">Click</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navigationItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Rechercher des produits..."
              className="search-input"
            />
          </div>

          {/* Header Actions */}
          <div className="header-actions">
            <button className="cart-btn">
              <ShoppingCart className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="cart-badge">{cartItemsCount}</span>
              )}
            </button>
            <button className="user-btn">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-nav">
          {navigationItems.map((item) => (
            <a key={item.label} href={item.href} className="mobile-nav-link">
              {item.label}
            </a>
          ))}
        </div>
      )}


      {/* Satisfaction Banner */}
      <div className="satisfaction-banner">
        <div className="satisfaction-content">
          <span className="satisfaction-text">Plus de 50,000+ clients satisfaits - Sugu Click, votre marché digital</span>
          <div className="trending-badge">
            <TrendingUp className="w-4 h-4" />
            <span>Trending</span>
          </div>
        </div>
      </div>
    </header>
  );
};
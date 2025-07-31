// src/components/layout/Header.tsx
'use client';
import React, { useState } from 'react';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X,
  Home,
  Shirt,
  Smartphone,
  Building2,
  Baby,
  Heart,
  TrendingUp
} from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItemsCount] = useState(1); // This will come from your cart state later

  const navigationItems = [
    { label: 'Accueil', href: '/', icon: <Home className="w-4 h-4" /> },
    { label: 'Mode', href: '/mode-beaute', icon: <Shirt className="w-4 h-4" /> },
    { label: 'Tech', href: '/telephones-tech', icon: <Smartphone className="w-4 h-4" /> },
    { label: 'Maison', href: '/maison-lifestyle', icon: <Building2 className="w-4 h-4" /> },
    { label: 'Enfants', href: '/enfants-bebes', icon: <Baby className="w-4 h-4" /> },
    { label: 'Santé', href: '/sante-bien-etre', icon: <Heart className="w-4 h-4" /> }
  ];

  return (
    <header className="header-container">
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
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.label}</span>
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
              <span className="mobile-nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      )}

      {/* Satisfaction Banner */}
      <div className="satisfaction-banner">
        <div className="satisfaction-content">
          <span className="satisfaction-text">Plus de 50,000+ clients satisfaits - Sugu Click, votre marché digital</span>
        </div>
      </div>
    </header>
  );
};
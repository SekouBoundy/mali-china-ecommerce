// UPDATE src/components/layout/Header.tsx - Fix the media query issue
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems, toggleCart } = useCart();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      {/* Top Bar with Trust Indicators */}
      <div className="header-top">
        <div className="container">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '2rem', 
            flexWrap: 'wrap' 
          }}>
            <span style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              fontSize: '0.875rem' 
            }}>
              📦 Livraison rapide
            </span>
            <span style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              fontSize: '0.875rem' 
            }}>
              ✅ Qualité premium  
            </span>
            <span style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              fontSize: '0.875rem' 
            }}>
              🎧 Service client Mali
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="container">
          <div className="header-content">
            
            {/* Mobile Menu Button - Remove the problematic inline styles */}
            <button 
              onClick={toggleMobileMenu}
              className="mobile-menu-btn"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Logo */}
            <Link href="/" className="logo">
              <span className="mali">Mali </span>
              <span className="premium">Premium </span>
              <span className="store">Store</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="nav">
              <Link href="/accueil">Accueil</Link>
              <Link href="/produits">Produits</Link>
              <Link href="/telephones">Téléphones</Link>
              <Link href="/accessoires">Accessoires</Link>
              <Link href="/electronique">Électronique</Link>
            </nav>

            {/* Search Bar */}
            <div className="search-container">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Rechercher des produits..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Header Actions */}
            <div className="header-actions">
              <button className="user-btn">
                <User className="w-6 h-6" />
              </button>

              <button className="cart-btn" onClick={toggleCart}>
                <ShoppingCart className="w-6 h-6" />
                {totalItems > 0 && (
                  <span className="cart-badge">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <Link href="/accueil" onClick={() => setIsMobileMenuOpen(false)}>
                Accueil
              </Link>
              <Link href="/produits" onClick={() => setIsMobileMenuOpen(false)}>
                Produits
              </Link>
              <Link href="/telephones" onClick={() => setIsMobileMenuOpen(false)}>
                Téléphones
              </Link>
              <Link href="/accessoires" onClick={() => setIsMobileMenuOpen(false)}>
                Accessoires
              </Link>
              <Link href="/electronique" onClick={() => setIsMobileMenuOpen(false)}>
                Électronique
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
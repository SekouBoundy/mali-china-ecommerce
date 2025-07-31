// src/components/layout/Header.tsx - Updated with SuguClick branding
'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { HeaderActions } from './HeaderActions';
import React, { useState } from 'react';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Home,
  Shirt,
  Smartphone,
  Building2,
  Baby,
  Heart,
  TrendingUp,
  Package,
  Headphones,
  Laptop
} from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();
  
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleUserClick = () => {
    router.push('/account');
  };

  // Updated navigation with your categories + products link
  const navigationItems = [
    { label: 'Accueil', href: '/', icon: <Home className="w-4 h-4" /> },
    { label: 'Produits', href: '/products', icon: <Package className="w-4 h-4" /> },
    { label: 'Téléphones', href: '/products?category=telephones', icon: <Smartphone className="w-4 h-4" /> },
    { label: 'Accessoires', href: '/products?category=accessoires', icon: <Headphones className="w-4 h-4" /> },
    { label: 'Électronique', href: '/products?category=electronique', icon: <Laptop className="w-4 h-4" /> }
  ];

  const totalItems = 0; // This should come from your cart context

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

          {/* SuguClick Logo */}
          <Link href="/" className="logo">
            <span className="logo-sugu">Sugu</span>
            <span className="logo-click">Click</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navigationItems.map((item) => (
              <Link key={item.label} href={item.href} className="nav-link">
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Header Actions (Cart, User - without search) */}
          <div className="header-actions">
            <button 
              className="user-btn"
              onClick={handleUserClick}
            >
              <User className="w-6 h-6" />
            </button>

            <button 
              className="cart-btn" 
              onClick={toggleCart}
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="cart-badge">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="search-section">
        <div className="search-wrapper">
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="iPhone, Samsung, AirPods..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-nav">
          {navigationItems.map((item) => (
            <Link 
              key={item.label} 
              href={item.href} 
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="mobile-nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
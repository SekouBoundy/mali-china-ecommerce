// src/components/layout/Header.tsx
'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { HeaderActions } from './HeaderActions';
import React, { useState, useEffect } from 'react';
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
  TrendingUp
} from 'lucide-react';


export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ADD THIS STATE FOR SCROLL BEHAVIOR
  const [showSatisfactionBanner, setShowSatisfactionBanner] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // ADD THIS USEEFFECT FOR SCROLL DETECTION
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide banner when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowSatisfactionBanner(false);
      } else if (currentScrollY < lastScrollY) {
        setShowSatisfactionBanner(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const router = useRouter();
  
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleUserClick = () => {
    router.push('/account');
  };

  const navigationItems = [
    { label: 'Accueil', href: '/', icon: <Home className="w-4 h-4" /> },
    { label: 'Mode', href: '/mode-beaute', icon: <Shirt className="w-4 h-4" /> },
    { label: 'Tech', href: '/telephones-tech', icon: <Smartphone className="w-4 h-4" /> },
    { label: 'Maison', href: '/maison-lifestyle', icon: <Building2 className="w-4 h-4" /> },
    { label: 'Enfants', href: '/enfants-bebes', icon: <Baby className="w-4 h-4" /> },
    { label: 'Santé', href: '/sante-bien-etre', icon: <Heart className="w-4 h-4" /> }
  ];
    const totalItems = 0;

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
            <HeaderActions 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            cartItems={totalItems}
            onCartClick={toggleCart}
            onUserClick={handleUserClick}
          />
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

      {/* Satisfaction Banner - ADD THE CONDITIONAL RENDERING */}
      {/* <div className={`header-top ${showSatisfactionBanner ? 'banner-visible' : 'banner-hidden'}`}>
        <div className="satisfaction-text">
          Plus de 50,000+ clients satisfaits - Sugu Click, votre marché digital
        </div>
      </div> */}
    </header>
  );
};
// src/components/layout/Header.tsx - SuguClick Fashion Nova Style Header
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Bell, Smartphone, Laptop, Headphones, Heart, Package } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const cartItemCount = 3; // Example cart count

  const categories = [
    { name: 'TÉLÉPHONES', href: '/products?category=phones', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'ORDINATEURS', href: '/products?category=laptops', icon: <Laptop className="w-4 h-4" /> },
    { name: 'ACCESSOIRES', href: '/products?category=accessories', icon: <Headphones className="w-4 h-4" /> },
    { name: 'NOUVEAUTÉS', href: '/products?filter=new', icon: <Package className="w-4 h-4" /> },
    { name: 'PROMO', href: '/products?filter=sale', icon: <Heart className="w-4 h-4" /> }
  ];

  return (
    <header className="w-full bg-white shadow-lg sticky top-0 z-50">
      {/* Top Promotional Banner - Fashion Nova Style */}
      <div className="bg-gradient-to-r from-green-600 via-green-500 to-blue-600 text-white text-center py-3 font-bold text-sm tracking-wider">
        <div className="flex items-center justify-center gap-2">
          <Bell className="w-4 h-4 animate-pulse" />
          LIVRAISON 24H À BAMAKO | PAIEMENT ORANGE MONEY & MOOV MONEY
          <Bell className="w-4 h-4 animate-pulse" />
        </div>
      </div>

      {/* Main Header */}
      <div className="px-4 lg:px-8">
        <div className="flex items-center justify-between py-4">
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo with SuguClick Branding */}
          <div className="flex items-center gap-3">
            {/* Your logo image */}
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-blue-600 rounded-full relative">
                  <div className="absolute top-1 right-1 w-2 h-2 bg-orange-400 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                Sugu
              </span>
              <span className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Click
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold text-sm tracking-wide transition-colors group"
              >
                <span className="group-hover:text-blue-600 transition-colors">{category.icon}</span>
                {category.name}
              </a>
            ))}
          </nav>

          {/* Search Bar - Fashion Nova Style */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="iPhone 15, MacBook, AirPods..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none font-medium"
              />
            </div>
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            {/* Search Icon for Mobile */}
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Search className="w-6 h-6 text-gray-600" />
            </button>

            {/* User Account */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors group">
              <User className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </button>

            {/* Shopping Cart with Badge */}
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors group">
              <ShoppingCart className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher produits tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-4 py-2">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="flex items-center gap-3 py-4 px-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-gray-500">{category.icon}</span>
                <span className="font-semibold">{category.name}</span>
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Fashion Nova Style Category Bar */}
      <div className="hidden lg:block bg-gray-50 border-t border-gray-200">
        <div className="px-4 lg:px-8">
          <div className="flex items-center justify-center py-3 space-x-8">
            <a href="/products?filter=new" className="text-sm font-bold text-red-600 hover:text-red-700 tracking-wider">
              NOUVEAUTÉS
            </a>
            <a href="/products?category=phones" className="text-sm font-semibold text-gray-700 hover:text-blue-600 tracking-wider">
              TÉLÉPHONES
            </a>
            <a href="/products?filter=sale" className="text-sm font-bold text-green-600 hover:text-green-700 tracking-wider animate-pulse">
              PROMO
            </a>
            <a href="/products?category=accessories" className="text-sm font-semibold text-gray-700 hover:text-blue-600 tracking-wider">
              ACCESSOIRES
            </a>
            <a href="/products?category=laptops" className="text-sm font-semibold text-gray-700 hover:text-blue-600 tracking-wider">
              ORDINATEURS
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
// src/components/layout/HorizontalHeader.tsx - NEW FILE
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  Bell,
  Home,
  Package,
  Smartphone,
  Headphones,
  Monitor,
  Heart
} from 'lucide-react';

export const HorizontalHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();
  const cartItems = 2; // From your cart context

  const categories = [
    { name: 'ACCUEIL', href: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'PRODUITS', href: '/products', icon: <Package className="w-4 h-4" /> },
    { name: 'TÉLÉPHONES', href: '/categories/phones', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'ACCESSOIRES', href: '/categories/accessories', icon: <Headphones className="w-4 h-4" /> },
    { name: 'ÉLECTRONIQUE', href: '/categories/electronics', icon: <Monitor className="w-4 h-4" /> }
  ];

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="w-full bg-white shadow-lg sticky top-0 z-50">
      {/* Top Promotional Banner - Fashion Nova Style */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 text-white text-center py-2 font-bold text-sm">
        <div className="flex items-center justify-center gap-2">
          <Bell className="w-4 h-4 animate-pulse" />
          LIVRAISON 24H BAMAKO | -30% SUR TOUT
          <Bell className="w-4 h-4 animate-pulse" />
        </div>
      </div>

      {/* Main Header */}
      <div className="px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo - Your SuguClick Branding */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-br from-green-500 to-blue-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-black bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                Sugu
              </span>
              <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Click
              </span>
            </div>
            <span className="text-sm text-gray-500 ml-2 hidden md:block">Mali Store</span>
          </Link>

          {/* Desktop Navigation - Fashion Nova Style */}
          <nav className="hidden lg:flex items-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={`flex items-center gap-2 font-bold text-sm tracking-wide transition-all px-3 py-2 rounded-lg ${
                  isActive(category.href)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {category.icon}
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Search + Actions */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="hidden md:flex relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="iPhone 15, Samsung Galaxy..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-80 border-2 border-gray-200 rounded-full focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
              />
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <User className="w-6 h-6 text-gray-600" />
              </button>
              
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Heart className="w-6 h-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
              
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ShoppingCart className="w-6 h-6 text-gray-600" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {cartItems}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher produits..."
              className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-full focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-4 py-2">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="flex items-center gap-3 py-3 px-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.icon}
                <span className="font-semibold">{category.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Fashion Nova Style Secondary Navigation */}
      <div className="hidden lg:block bg-gray-50 border-t border-gray-200">
        <div className="px-4 lg:px-8">
          <div className="flex items-center justify-center py-2 space-x-8">
            <Link href="/products?filter=new" className="text-xs font-bold text-red-600 hover:text-red-700 tracking-wider">
              NOUVEAUTÉS
            </Link>
            <Link href="/products?filter=bestseller" className="text-xs font-bold text-orange-600 hover:text-orange-700 tracking-wider">
              BESTSELLERS
            </Link>
            <Link href="/products?filter=sale" className="text-xs font-bold text-green-600 hover:text-green-700 tracking-wider animate-pulse">
              PROMO -30%
            </Link>
            <Link href="/products?category=premium" className="text-xs font-semibold text-gray-700 hover:text-blue-600 tracking-wider">
              PREMIUM
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
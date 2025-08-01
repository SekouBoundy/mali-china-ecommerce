// src/components/layout/HorizontalHeader.tsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Search,
  User,
  Heart,
  ShoppingCart,
  Menu,
  X,
  Bell,
  Truck,
  Home,
  Package
} from 'lucide-react';

export const HorizontalHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleUserClick = () => {
    router.push('/account');
  };

  const handleCartClick = () => {
    router.push('/cart');
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Promotional Banner */}
      <div className="bg-red-500 text-white text-center py-2 px-4">
        <div className="container mx-auto flex items-center justify-center gap-2 text-sm font-medium">
          <Bell className="w-4 h-4" />
          <span>LIVRAISON 24H BAMAKO | -30% SUR TOUT</span>
          <Bell className="w-4 h-4" />
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 gap-8">
          
          {/* Logo */}
          <Link href="/" className="logo-container flex-shrink-0">
            <img 
                src="/images/logo-suguclick.png" 
                alt="SuguClick - Mali Store"
                className="logo-default"
            />
            <img 
                src="/images/logo-hover-suguclick.png" 
                alt="SuguClick - Mali Store"
                className="logo-hover"
            />
          </Link>

          {/* Desktop Navigation - Simplified */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-2">
              <Home className="w-4 h-4" />
              ACCUEIL
            </Link>
            <Link href="/produits" className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-2">
              <Package className="w-4 h-4" />
              PRODUITS
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="iPhone 15, Samsung Galaxy..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            {/* User Account */}
            <button 
              onClick={handleUserClick}
              className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="text-sm">Compte</span>
            </button>

            {/* Wishlist */}
            <button className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Cart */}
            <button 
              onClick={handleCartClick}
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Rechercher des produits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Secondary Navigation - Value-Driven */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 py-3 overflow-x-auto">
            <Link href="/nouveautes" className="text-red-600 hover:text-red-700 font-medium text-sm whitespace-nowrap transition-colors">
              🔥 NOUVEAUTÉS
            </Link>
            <Link href="/bestsellers" className="text-yellow-600 hover:text-yellow-700 font-medium text-sm whitespace-nowrap transition-colors">
              ⭐ BESTSELLERS
            </Link>
            <Link href="/promo" className="text-green-600 hover:text-green-700 font-medium text-sm whitespace-nowrap transition-colors">
              💰 PROMO -30%
            </Link>
            <Link href="/premium" className="text-purple-600 hover:text-purple-700 font-medium text-sm whitespace-nowrap transition-colors">
              👑 PREMIUM
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Home className="w-4 h-4" />
              <span>ACCUEIL</span>
            </Link>
            <Link 
              href="/produits" 
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Package className="w-4 h-4" />
              <span>PRODUITS</span>
            </Link>
            <Link 
              href="/account" 
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <User className="w-4 h-4" />
              <span>MON COMPTE</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
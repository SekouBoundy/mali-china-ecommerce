// src/components/layout/Header.tsx
'use client';
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center text-sm text-gray-600 space-x-6">
            <span className="flex items-center">
              📦 Livraison 7-14 jours
            </span>
            <span className="flex items-center">
              ✅ Produits garantis
            </span>
            <span className="flex items-center">
              🎧 Support 24/7
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl lg:text-3xl font-bold">
              <span className="text-green-600">Mali</span>
              <span className="text-red-600">China</span>
              <span className="text-gray-800"> Store</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/accueil" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Accueil
            </a>
            <a href="/produits" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Produits
            </a>
            <a href="/telephones" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Téléphones
            </a>
            <a href="/accessoires" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Accessoires
            </a>
            <a href="/electronique" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Électronique
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher des produits..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search */}
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            
            {/* Cart */}
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* User Account */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <User className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher des produits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <a href="/accueil" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Accueil
              </a>
              <a href="/produits" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Produits
              </a>
              <a href="/telephones" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Téléphones
              </a>
              <a href="/accessoires" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Accessoires
              </a>
              <a href="/electronique" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Électronique
              </a>
              <hr className="border-gray-200" />
              <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Contact
              </a>
              <a href="/a-propos" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                À propos
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
// src/components/layout/Header.tsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Navigation } from './Navigation';
import { SearchBar } from './SearchBar';
import { CartIcon } from './CartIcon';
import { UserMenu } from './UserMenu';

export const Header: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button 
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500"
          >
            {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-xl font-bold text-blue-600 ml-2 lg:ml-0">
              MaliChina Store
            </h1>
          </Link>
          
          {/* Desktop Navigation */}
          <Navigation />
          
          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-lg">
            <SearchBar />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <CartIcon itemCount={0} />
            <UserMenu isAuthenticated={false} />
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden pb-4">
          <SearchBar />
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Accueil
            </Link>
            <Link href="/products" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Produits
            </Link>
            <Link href="/categories/phones" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Téléphones
            </Link>
            <Link href="/categories/accessories" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Accessoires
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              À propos
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

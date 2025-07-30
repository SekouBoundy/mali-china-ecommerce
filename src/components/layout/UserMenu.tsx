// src/components/layout/UserMenu.tsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { User, ChevronDown, LogOut, Package, Settings } from 'lucide-react';

interface UserMenuProps {
  isAuthenticated?: boolean;
  user?: {
    name: string;
    email: string;
  };
}

export const UserMenu: React.FC<UserMenuProps> = ({ 
  isAuthenticated = false, 
  user 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isAuthenticated) {
    return (
      <Link 
        href="/auth/login"
        className="p-2 text-gray-400 hover:text-gray-500"
      >
        <User className="w-6 h-6" />
      </Link>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 text-gray-700 hover:text-gray-900"
      >
        <User className="w-6 h-6" />
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-900">{user?.name}</p>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>
          
          <Link
            href="/account"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Settings className="w-4 h-4 mr-3" />
            Mon compte
          </Link>
          
          <Link
            href="/account/orders"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Package className="w-4 h-4 mr-3" />
            Mes commandes
          </Link>
          
          <button
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <LogOut className="w-4 h-4 mr-3" />
            Déconnexion
          </button>
        </div>
      )}
    </div>
  );
};

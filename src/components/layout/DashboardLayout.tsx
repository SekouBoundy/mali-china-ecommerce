// src/components/layout/DashboardLayout.tsx
'use client';
import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Search, Bell, ShoppingCart, User } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  breadcrumb?: string[];
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, 
  title = "Accueil", 
  breadcrumb = [] 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { totalItems, toggleCart } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search logic here
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className={`main-layout ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        {/* Top Bar */}
        <header className="main-topbar">
          <div className="topbar-left">
            <div>
              <h1 className="page-title">{title}</h1>
              {breadcrumb.length > 0 && (
                <nav className="breadcrumb">
                  <span>Accueil</span>
                  {breadcrumb.map((item, index) => (
                    <React.Fragment key={index}>
                      <span>/</span>
                      <span>{item}</span>
                    </React.Fragment>
                  ))}
                </nav>
              )}
            </div>
          </div>

          <div className="topbar-right">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="topbar-search">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Rechercher des produits..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>

            {/* Action Buttons */}
            <div className="topbar-actions">
              <button className="topbar-btn">
                <Bell className="w-5 h-5" />
              </button>
              
              <button className="topbar-btn cart-btn" onClick={toggleCart}>
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="action-badge">{totalItems}</span>
                )}
              </button>
              
              <button className="topbar-btn profile-btn">
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};
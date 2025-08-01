// src/components/layout/Sidebar.tsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Package, 
  Smartphone, 
  Headphones, 
  Monitor, 
  Settings, 
  User, 
  ShoppingCart,
  Heart,
  Clock,
  Menu,
  X,
    Info,        // <- ADD THIS
  MessageCircle
} from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  badge?: number;
}

export const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const mainNavItems: NavItem[] = [
  {
    href: '/',
    label: 'Accueil',
    icon: <Home className="w-5 h-5" />
  },
  {
    href: '/products',
    label: 'Tous Produits',
    icon: <Package className="w-5 h-5" />
  },
  {
    href: '/categories/phones',
    label: 'Téléphones',
    icon: <Smartphone className="w-5 h-5" />
  },
  {
    href: '/categories/accessories', 
    label: 'Accessoires',
    icon: <Headphones className="w-5 h-5" />
  },
  {
    href: '/categories/electronics',
    label: 'Électronique', 
    icon: <Monitor className="w-5 h-5" />
  },
  // ADD THESE TWO NEW ITEMS:
  {
    href: '/about',
    label: 'À propos',
    icon: <Info className="w-5 h-5" />
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: <MessageCircle className="w-5 h-5" />
  }
];
  
  

  const userNavItems: NavItem[] = [
    {
      href: '/profile',
      label: 'Mon Profil',
      icon: <User className="w-5 h-5" />
    },
    {
      href: '/orders',
      label: 'Mes Commandes',
      icon: <Clock className="w-5 h-5" />
    },
    {
      href: '/wishlist',
      label: 'Favoris',
      icon: <Heart className="w-5 h-5" />,
      badge: 3
    },
    {
      href: '/cart',
      label: 'Panier',
      icon: <ShoppingCart className="w-5 h-5" />,
      badge: 2
    }
  ];

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div className={`sidebar-overlay ${isCollapsed ? '' : 'active'}`} 
           onClick={() => setIsCollapsed(true)} />
      
      {/* Sidebar */}
      <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div className="logo-icon">
              <Package className="w-8 h-8 text-green-600" />
            </div>
            {!isCollapsed && (
              <div className="logo-text">
                <span className="logo-main">SuguClick</span>
                <span className="logo-sub">Mali Store</span>
              </div>
            )}
          </div>
          
          <button 
            className="sidebar-toggle"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="sidebar-nav">
          <div className="nav-section">
            <div className="nav-title">
              {!isCollapsed && <span>Navigation</span>}
            </div>
            <ul className="nav-list">
              {mainNavItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                  >
                    <div className="nav-icon">{item.icon}</div>
                    {!isCollapsed && (
                      <>
                        <span className="nav-text">{item.label}</span>
                        {item.badge && (
                          <span className="nav-badge">{item.badge}</span>
                        )}
                      </>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* User Section */}
          <div className="nav-section">
            <div className="nav-title">
              {!isCollapsed && <span>Mon Compte</span>}
            </div>
            <ul className="nav-list">
              {userNavItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                  >
                    <div className="nav-icon">{item.icon}</div>
                    {!isCollapsed && (
                      <>
                        <span className="nav-text">{item.label}</span>
                        {item.badge && (
                          <span className="nav-badge">{item.badge}</span>
                        )}
                      </>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="sidebar-footer">
          <Link href="/settings" className="nav-link">
            <div className="nav-icon">
              <Settings className="w-5 h-5" />
            </div>
            {!isCollapsed && <span className="nav-text">Paramètres</span>}
          </Link>
        </div>
      </aside>
    </>
  );
};
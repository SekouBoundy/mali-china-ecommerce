// src/components/layout/Sidebar.tsx - Fashion Nova Style Enhanced
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
  Info,
  MessageCircle,
  Zap,
  TrendingUp
} from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  badge?: number;
  isHot?: boolean;
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
      icon: <Package className="w-5 h-5" />,
      isHot: true
    },
    {
      href: '/categories/phones',
      label: 'Téléphones',
      icon: <Smartphone className="w-5 h-5" />,
      badge: 12
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
      badge: 2,
      isHot: true
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
        {/* Fashion Nova Style Header with Gradient */}
        <div className="sidebar-header" style={{
          background: 'linear-gradient(135deg, #16a34a 0%, #059669 30%, #2563eb 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Animated background pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%)',
            backgroundSize: '20px 20px',
            animation: 'shimmer 20s linear infinite',
            opacity: 0.3
          }} />
          
          <div className="sidebar-logo">
          <img 
            src="/images/logo-suguclick.png" 
            alt="SuguClick"
            className="h-8 w-auto object-contain"
          />
          {!isCollapsed && (
            <div className="logo-text">
              <span className="logo-sub">Mali Store</span>
            </div>
          )}
        </div>

          
          <button 
            className="sidebar-toggle"
            onClick={() => setIsCollapsed(!isCollapsed)}
            style={{
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              border: 'none',
              position: 'relative',
              zIndex: 2
            }}
          >
            {isCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
          </button>
        </div>

        {/* Fashion Nova Style Promotional Banner */}
        {!isCollapsed && (
          <div style={{
            background: 'linear-gradient(90deg, #ef4444, #dc2626)',
            color: 'white',
            padding: '0.75rem 1.25rem',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            borderBottom: '1px solid #f3f4f6'
          }}>
            <Zap className="w-4 h-4 animate-pulse" />
            LIVRAISON 24H BAMAKO
            <Zap className="w-4 h-4 animate-pulse" />
          </div>
        )}

        {/* Main Navigation */}
        <nav className="sidebar-nav">
          <div className="nav-section">
            {!isCollapsed && (
              <div className="nav-title">
                <span>NAVIGATION</span>
              </div>
            )}
            <ul className="nav-list">
              {mainNavItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                    style={{
                      background: isActive(item.href) 
                        ? 'linear-gradient(90deg, #16a34a, #059669)' 
                        : 'transparent',
                      color: isActive(item.href) ? 'white' : '#6b7280',
                      borderRadius: '12px',
                      margin: '0 0.75rem',
                      fontWeight: isActive(item.href) ? '600' : '500',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Hot item glow effect */}
                    {item.isHot && (
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.1), transparent)',
                        animation: 'pulse 2s infinite'
                      }} />
                    )}
                    
                    <div className="nav-icon" style={{
                      color: isActive(item.href) ? 'white' : (item.isHot ? '#2563eb' : '#6b7280'),
                      position: 'relative',
                      zIndex: 2
                    }}>
                      {item.icon}
                    </div>
                    {!isCollapsed && (
                      <>
                        <span className="nav-text" style={{ position: 'relative', zIndex: 2 }}>
                          {item.label}
                        </span>
                        {item.badge && (
                          <span style={{
                            background: item.isHot ? '#ef4444' : '#6b7280',
                            color: 'white',
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                            padding: '0.125rem 0.5rem',
                            borderRadius: '12px',
                            marginLeft: 'auto',
                            animation: item.isHot ? 'pulse 2s infinite' : 'none'
                          }}>
                            {item.badge}
                          </span>
                        )}
                        {item.isHot && (
                          <TrendingUp className="w-4 h-4 text-red-500 animate-pulse" style={{
                            marginLeft: item.badge ? '0.5rem' : 'auto'
                          }} />
                        )}
                      </>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* User Section with Fashion Nova style */}
          <div className="nav-section">
            {!isCollapsed && (
              <div className="nav-title">
                <span>MON COMPTE</span>
              </div>
            )}
            <ul className="nav-list">
              {userNavItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                    style={{
                      background: isActive(item.href) 
                        ? 'linear-gradient(90deg, #2563eb, #1d4ed8)' 
                        : 'transparent',
                      color: isActive(item.href) ? 'white' : '#6b7280',
                      borderRadius: '12px',
                      margin: '0 0.75rem',
                      fontWeight: isActive(item.href) ? '600' : '500',
                      position: 'relative'
                    }}
                  >
                    <div className="nav-icon" style={{
                      color: isActive(item.href) ? 'white' : (item.isHot ? '#ef4444' : '#6b7280')
                    }}>
                      {item.icon}
                    </div>
                    {!isCollapsed && (
                      <>
                        <span className="nav-text">{item.label}</span>
                        {item.badge && (
                          <span style={{
                            background: item.isHot ? '#ef4444' : '#16a34a',
                            color: 'white',
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                            padding: '0.125rem 0.5rem',
                            borderRadius: '12px',
                            marginLeft: 'auto',
                            animation: item.isHot ? 'bounce 1s infinite' : 'none'
                          }}>
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Enhanced Sidebar Footer */}
        <div className="sidebar-footer" style={{
          padding: '1rem',
          borderTop: '1px solid #f3f4f6',
          background: '#f8fafc'
        }}>
          <Link 
            href="/settings" 
            className="nav-link"
            style={{
              background: isActive('/settings') ? '#374151' : 'transparent',
              color: isActive('/settings') ? 'white' : '#6b7280',
              borderRadius: '12px',
              fontWeight: '500'
            }}
          >
            <div className="nav-icon">
              <Settings className="w-5 h-5" />
            </div>
            {!isCollapsed && <span className="nav-text">Paramètres</span>}
          </Link>
        </div>
      </aside>

      {/* Add these CSS animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
          40%, 43% { transform: translateY(-8px); }
          70% { transform: translateY(-4px); }
          90% { transform: translateY(-2px); }
        }
        
        .nav-link {
          transition: all 0.3s ease;
        }
        
        .nav-link:hover {
          transform: translateX(4px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
      `}</style>
    </>
  );
};
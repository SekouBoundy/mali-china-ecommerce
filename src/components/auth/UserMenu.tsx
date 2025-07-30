// src/components/auth/UserMenu.tsx - NEW FILE
'use client';
import React, { useState } from 'react';
import { User, ShoppingBag, Heart, Settings, LogOut, ChevronDown } from 'lucide-react';

interface UserMenuProps {
  user: {
    firstName: string;
    lastName: string;
    phone: string;
  };
  onLogout: () => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="user-menu">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="user-menu-btn"
      >
        <div className="user-avatar">
          {user.firstName.charAt(0)}{user.lastName.charAt(0)}
        </div>
        <span className="user-name">{user.firstName}</span>
        <ChevronDown className={`chevron ${isOpen ? 'open' : ''}`} />
      </button>

      {isOpen && (
        <div className="user-dropdown">
          <div className="user-info">
            <div className="user-avatar large">
              {user.firstName.charAt(0)}{user.lastName.charAt(0)}
            </div>
            <div>
              <div className="user-full-name">
                {user.firstName} {user.lastName}
              </div>
              <div className="user-phone">{user.phone}</div>
            </div>
          </div>

          <div className="menu-divider" />

          <div className="menu-items">
            <a href="/profile" className="menu-item">
              <User className="menu-icon" />
              Mon profil
            </a>
            <a href="/orders" className="menu-item">
              <ShoppingBag className="menu-icon" />
              Mes commandes
            </a>
            <a href="/favorites" className="menu-item">
              <Heart className="menu-icon" />
              Mes favoris
            </a>
            <a href="/settings" className="menu-item">
              <Settings className="menu-icon" />
              Paramètres
            </a>
          </div>

          <div className="menu-divider" />

          <button onClick={onLogout} className="menu-item logout">
            <LogOut className="menu-icon" />
            Se déconnecter
          </button>
        </div>
      )}

      {isOpen && (
        <div 
          className="user-menu-overlay" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};
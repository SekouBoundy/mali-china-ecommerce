// src/components/layout/HeaderActions.tsx

import React, { useState } from 'react';
import { Search, ShoppingCart, User, TrendingUp } from 'lucide-react';

interface HeaderActionsProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  cartItems: number;
  onCartClick: () => void;
  onUserClick: () => void;
}

export const HeaderActions: React.FC<HeaderActionsProps> = ({
  searchQuery,
  setSearchQuery,
  cartItems,
  onCartClick,
  onUserClick
}) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Popular search suggestions for Mali market
  const popularSearches = [
    { term: "iPhone 15", trend: true },
    { term: "Samsung Galaxy", trend: false },
    { term: "AirPods Pro", trend: true },
    { term: "Xiaomi Redmi", trend: false },
    { term: "Power Bank", trend: false }
  ];

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
    setShowSuggestions(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
    // Delay hiding suggestions to allow clicks
    setTimeout(() => setShowSuggestions(false), 200);
  };

  const handleSuggestionClick = (term: string) => {
    setSearchQuery(term);
    setShowSuggestions(false);
  };

  return (
    <div className="header-right-section">
      {/* Enhanced Search Section */}
      <div className="search-container">
        <div className="search-wrapper">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="iPhone, Samsung, AirPods..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
          />
        </div>

        {/* Search Suggestions */}
        {showSuggestions && (
          <div className="search-suggestions">
            {popularSearches.map((item, index) => (
              <div 
                key={index}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(item.term)}
              >
                <Search className="w-4 h-4 text-gray-400" />
                <span className="flex-1">{item.term}</span>
                {item.trend && (
                  <span className="popular-tag">
                    <TrendingUp className="w-3 h-3 inline mr-1" />
                    Populaire
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="header-actions">
        {/* User Button */}
        <button 
          className="action-btn user-btn"
          onClick={onUserClick}
          aria-label="Mon compte"
        >
          <User className="action-icon" />
        </button>

        {/* Cart Button */}
        <button 
          className="action-btn cart-btn"
          onClick={onCartClick}
          aria-label={`Panier (${cartItems} articles)`}
        >
          <ShoppingCart className="action-icon" />
          {cartItems > 0 && (
            <span className="cart-badge">
              {cartItems > 99 ? '99+' : cartItems}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
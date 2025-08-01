// src/components/product/EnhancedFilterBar.tsx
'use client';
import React, { useState } from 'react';
import { Search, Grid3X3, List, SlidersHorizontal } from 'lucide-react';

interface FilterOptions {
  sortBy: string;
  priceRange: string;
  brand: string;
  rating: string;
}

interface EnhancedFilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onFilterChange: (filters: FilterOptions) => void;
  onViewChange: (view: 'grid' | 'list') => void;
  currentView: 'grid' | 'list';
  resultsCount: number;
}

export const EnhancedFilterBar: React.FC<EnhancedFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  onFilterChange,
  onViewChange,
  currentView,
  resultsCount
}) => {
  const [filters, setFilters] = useState<FilterOptions>({
    sortBy: 'popularity',
    priceRange: 'all',
    brand: 'all',
    rating: 'all'
  });

  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const sortOptions = [
    { value: 'popularity', label: 'Popularité' },
    { value: 'price-low', label: 'Prix croissant' },
    { value: 'price-high', label: 'Prix décroissant' },
    { value: 'newest', label: 'Plus récents' },
    { value: 'rating', label: 'Mieux notés' },
    { value: 'name', label: 'Nom A-Z' }
  ];

  const priceRanges = [
    { value: 'all', label: 'Tous les prix' },
    { value: '0-50000', label: '0 - 50 000 CFA' },
    { value: '50000-100000', label: '50 000 - 100 000 CFA' },
    { value: '100000-250000', label: '100 000 - 250 000 CFA' },
    { value: '250000-500000', label: '250 000 - 500 000 CFA' },
    { value: '500000+', label: '500 000+ CFA' }
  ];

  const brands = [
    { value: 'all', label: 'Toutes les marques' },
    { value: 'apple', label: 'Apple' },
    { value: 'samsung', label: 'Samsung' },
    { value: 'xiaomi', label: 'Xiaomi' },
    { value: 'huawei', label: 'Huawei' },
    { value: 'sony', label: 'Sony' },
    { value: 'other', label: 'Autres' }
  ];

  const ratings = [
    { value: 'all', label: 'Toutes les notes' },
    { value: '4+', label: '4+ étoiles' },
    { value: '3+', label: '3+ étoiles' },
    { value: '2+', label: '2+ étoiles' }
  ];

  return (
    <div className="enhanced-filter-container">
      {/* Main Filter Bar */}
      <div className="filters-bar">
        {/* Search */}
        <div className="category-search">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        {/* Primary Filters */}
        <div className="filter-group">
          <label className="filter-label">Trier par:</label>
          <select 
            className="filter-select"
            value={filters.sortBy}
            onChange={(e) => handleFilterChange('sortBy', e.target.value)}
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">Prix:</label>
          <select 
            className="filter-select"
            value={filters.priceRange}
            onChange={(e) => handleFilterChange('priceRange', e.target.value)}
          >
            {priceRanges.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Advanced Filters Toggle */}
        <button 
          className={`filter-toggle-btn ${showAdvanced ? 'active' : ''}`}
          onClick={() => setShowAdvanced(!showAdvanced)}
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span>Filtres</span>
        </button>

        {/* View Toggle */}
        <div className="view-toggle">
          <button 
            className={`view-btn ${currentView === 'grid' ? 'active' : ''}`}
            onClick={() => onViewChange('grid')}
            title="Vue grille"
          >
            <Grid3X3 className="w-4 h-4" />
          </button>
          <button 
            className={`view-btn ${currentView === 'list' ? 'active' : ''}`}
            onClick={() => onViewChange('list')}
            title="Vue liste"
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Advanced Filters Panel */}
      {showAdvanced && (
        <div className="advanced-filters">
          <div className="advanced-filters-content">
            <div className="filter-group">
              <label className="filter-label">Marque:</label>
              <select 
                className="filter-select"
                value={filters.brand}
                onChange={(e) => handleFilterChange('brand', e.target.value)}
              >
                {brands.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label">Note:</label>
              <select 
                className="filter-select"
                value={filters.rating}
                onChange={(e) => handleFilterChange('rating', e.target.value)}
              >
                {ratings.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-actions">
              <button 
                className="reset-filters-btn"
                onClick={() => {
                  const resetFilters = {
                    sortBy: 'popularity',
                    priceRange: 'all',
                    brand: 'all',
                    rating: 'all'
                  };
                  setFilters(resetFilters);
                  onFilterChange(resetFilters);
                  onSearchChange('');
                }}
              >
                Réinitialiser
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Results Info */}
      <div className="results-info">
        <div className="results-count">
          <strong>{resultsCount}</strong> produit{resultsCount !== 1 ? 's' : ''} trouvé{resultsCount !== 1 ? 's' : ''}
        </div>
      </div>
    </div>
  );
};
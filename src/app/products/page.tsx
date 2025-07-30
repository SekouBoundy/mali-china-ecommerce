// src/app/produits/page.tsx
'use client';
import React, { useState } from 'react';
import { Filter, Grid, List, Search, ChevronDown } from 'lucide-react';

// Sample Mali-focused product data
const sampleProducts = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max 256GB - Débloqué International',
    price: { usd: 899, cfa: 540000 },
    originalPrice: { usd: 1199, cfa: 720000 },
    images: ['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300'],
    rating: 4.8,
    reviewCount: 2847,
    supplier: { name: 'TechGlobal', rating: 4.9, verified: true },
    shipping: { days: '7-10 jours', cost: 15000 },
    inStock: true,
    badge: 'BESTSELLER',
    category: 'telephones'
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra 512GB - Garantie Internationale',
    price: { usd: 799, cfa: 480000 },
    originalPrice: { usd: 999, cfa: 600000 },
    images: ['https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300'],
    rating: 4.7,
    reviewCount: 1923,
    supplier: { name: 'ElectronicsHub', rating: 4.8, verified: true },
    shipping: { days: '8-12 jours', cost: 12000 },
    inStock: true,
    badge: 'PROMO',
    category: 'telephones'
  },
  {
    id: '3',
    name: 'MacBook Air M3 13" - 256GB SSD, 8GB RAM',
    price: { usd: 1099, cfa: 660000 },
    images: ['https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=300'],
    rating: 4.9,
    reviewCount: 1456,
    supplier: { name: 'Apple Authorized', rating: 4.9, verified: true },
    shipping: { days: '10-14 jours', cost: 25000 },
    inStock: true,
    category: 'electronique'
  },
  {
    id: '4',
    name: 'AirPods Pro 2ème Génération - Réduction de Bruit Active',
    price: { usd: 199, cfa: 120000 },
    originalPrice: { usd: 249, cfa: 150000 },
    images: ['https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300'],
    rating: 4.9,
    reviewCount: 3421,
    supplier: { name: 'AudioMax', rating: 4.9, verified: true },
    shipping: { days: '5-8 jours', cost: 8000 },
    inStock: true,
    badge: 'TOP VENTE',
    category: 'accessoires'
  },
  {
    id: '5',
    name: 'iPad Pro 11" M4 - 128GB WiFi + Cellular',
    price: { usd: 899, cfa: 540000 },
    images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300'],
    rating: 4.8,
    reviewCount: 987,
    supplier: { name: 'TabletPro', rating: 4.7, verified: true },
    shipping: { days: '9-13 jours', cost: 20000 },
    inStock: true,
    category: 'electronique'
  },
  {
    id: '6',
    name: 'Apple Watch Series 9 GPS + Cellular 45mm',
    price: { usd: 399, cfa: 240000 },
    originalPrice: { usd: 499, cfa: 300000 },
    images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300'],
    rating: 4.6,
    reviewCount: 1876,
    supplier: { name: 'WearableTech', rating: 4.8, verified: true },
    shipping: { days: '7-11 jours', cost: 10000 },
    inStock: false,
    category: 'accessoires'
  }
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [sortBy, setSortBy] = useState('popularite');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on category and search
  const filteredProducts = sampleProducts.filter(product => {
    const matchesCategory = selectedCategory === 'tous' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'prix-croissant':
        return a.price.cfa - b.price.cfa;
      case 'prix-decroissant':
        return b.price.cfa - a.price.cfa;
      case 'note':
        return b.rating - a.rating;
      case 'nouveautes':
        return b.reviewCount - a.reviewCount;
      default: // popularité
        return b.reviewCount - a.reviewCount;
    }
  });

  return (
    <div className="products-page">
      {/* Page Header */}
      <div className="products-header">
        <div className="container">
          <div className="header-content">
            <div className="header-text">
              <h1 className="page-title">Nos Produits Premium</h1>
              <p className="page-subtitle">
                Découvrez notre sélection de produits de qualité internationale au Mali
              </p>
            </div>
            <div className="results-count">
              {sortedProducts.length} produit{sortedProducts.length > 1 ? 's' : ''} trouvé{sortedProducts.length > 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="products-controls">
        <div className="container">
          <div className="controls-wrapper">
            
            {/* Search Bar */}
            <div className="search-section">
              <div className="search-container">
                <Search className="search-icon" />
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="filter-section">
              <label className="filter-label">Catégorie:</label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                <option value="tous">Tous les produits</option>
                <option value="telephones">📱 Téléphones</option>
                <option value="electronique">💻 Électronique</option>
                <option value="accessoires">🎧 Accessoires</option>
              </select>
            </div>

            {/* Sort Options */}
            <div className="sort-section">
              <label className="filter-label">Trier par:</label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                <option value="popularite">Popularité</option>
                <option value="prix-croissant">Prix croissant</option>
                <option value="prix-decroissant">Prix décroissant</option>
                <option value="note">Meilleures notes</option>
                <option value="nouveautes">Nouveautés</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="view-toggle">
              <button 
                onClick={() => setViewMode('grid')}
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              >
                <Grid className="view-icon" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              >
                <List className="view-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-section">
        <div className="container">
          {sortedProducts.length === 0 ? (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3>Aucun produit trouvé</h3>
              <p>Essayez de modifier vos critères de recherche</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('tous');
                }}
                className="btn btn-primary"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className={`products-grid ${viewMode}`}>
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Load More */}
      {sortedProducts.length > 0 && (
        <div className="load-more-section">
          <div className="container">
            <button className="btn btn-secondary btn-large">
              Charger plus de produits
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Product Card Component (embedded for demo)
function ProductCard({ product }: { product: any }) {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice.cfa - product.price.cfa) / product.originalPrice.cfa) * 100)
    : 0;

    // UPDATE: Replace the ProductCard return statement in src/app/products/page.tsx
// Find the ProductCard function and replace its return with this:

return (
  <a href={`/products/${product.id}`} className="product-card-link">
    <div className="product-card">
      <div className="product-image-container">
        {product.badge && (
          <div className="product-badge">
            {product.badge}
          </div>
        )}
        
        {discountPercentage > 0 && (
          <div className="discount-badge">
            -{discountPercentage}%
          </div>
        )}
        
        <button 
          onClick={(e) => {
            e.preventDefault();
            setIsFavorite(!isFavorite);
          }}
          className="favorite-btn"
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
        
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-image"
        />
        
        <div className="product-overlay">
          <button 
            onClick={(e) => {
              e.preventDefault();
              // Quick view logic here
            }}
            className="quick-view-btn"
          >
            👁️ Aperçu rapide
          </button>
        </div>
      </div>

      <div className="product-info">
        <div className="supplier-info">
          <span className="supplier-name">{product.supplier.name}</span>
          {product.supplier.verified && <span className="verified-badge">✅</span>}
        </div>

        <h3 className="product-name">{product.name}</h3>

        <div className="product-rating">
          <div className="stars">
            {'⭐'.repeat(Math.floor(product.rating))}
          </div>
          <span className="review-count">({product.reviewCount})</span>
        </div>

        <div className="product-pricing">
          <div className="current-price">
            {product.price.cfa.toLocaleString('fr-FR')} CFA
          </div>
          {product.originalPrice && (
            <div className="original-price">
              {product.originalPrice.cfa.toLocaleString('fr-FR')} CFA
            </div>
          )}
          <div className="usd-price">
            ≈ ${product.price.usd} USD
          </div>
        </div>

        <div className="shipping-info">
          🚚 Livraison {product.shipping.days} • +{product.shipping.cost.toLocaleString('fr-FR')} CFA
        </div>

        <div className="stock-status">
          {product.inStock ? (
            <span className="in-stock">✅ En stock</span>
          ) : (
            <span className="out-stock">❌ Rupture de stock</span>
          )}
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            // Add to cart logic here
            alert('Produit ajouté au panier!');
          }}
          disabled={!product.inStock}
          className={`add-to-cart-btn ${product.inStock ? 'available' : 'unavailable'}`}
        >
          🛒 {product.inStock ? 'Ajouter au panier' : 'Indisponible'}
        </button>
      </div>
    </div>
  </a>
);

 
}
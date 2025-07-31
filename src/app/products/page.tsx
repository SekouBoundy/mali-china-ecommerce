// src/app/products/page.tsx - Complete Products Page
'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { Search, Filter, Grid, List, Star, Heart, Truck, Shield } from 'lucide-react';

// Sample products data
const sampleProducts = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max 256GB - Titanium Naturel',
    price: { usd: 1199, cfa: 740000 },
    originalPrice: { usd: 1399, cfa: 850000 },
    images: ['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300'],
    rating: 4.8,
    reviewCount: 2847,
    supplier: { name: 'TechPremium', rating: 4.9, verified: true },
    shipping: { days: '5-7 jours', cost: 15000 },
    inStock: true,
    badge: 'BESTSELLER',
    category: 'telephones'
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra 512GB',
    price: { usd: 999, cfa: 620000 },
    originalPrice: { usd: 1199, cfa: 750000 },
    images: ['https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300'],
    rating: 4.7,
    reviewCount: 1923,
    supplier: { name: 'PhoneMax', rating: 4.8, verified: true },
    shipping: { days: '6-9 jours', cost: 12000 },
    inStock: true,
    badge: 'NOUVEAU',
    category: 'telephones'
  },
  {
    id: '3',
    name: 'MacBook Pro M3 14" 16GB RAM 512GB SSD',
    price: { usd: 1999, cfa: 1240000 },
    images: ['https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300'],
    rating: 4.9,
    reviewCount: 1456,
    supplier: { name: 'LaptopPro', rating: 4.7, verified: true },
    shipping: { days: '7-12 jours', cost: 25000 },
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
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get('category') || 'tous';
  const searchFromUrl = searchParams.get('search') || '';
  
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [sortBy, setSortBy] = useState('popularite');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState(searchFromUrl);

  // Update state when URL changes
  useEffect(() => {
    const urlCategory = searchParams.get('category') || 'tous';
    const urlSearch = searchParams.get('search') || '';
    setSelectedCategory(urlCategory);
    setSearchQuery(urlSearch);
  }, [searchParams]);

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
      {/* Header */}
      <Header />

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
                <option value="tous">🛍️ Tous les produits</option>
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

      {/* Footer */}
      <Footer />
      
      {/* Cart Sidebar */}
      <CartSidebar />
    </div>
  );
}

// Product Card Component
function ProductCard({ product }: { product: any }) {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice.cfa - product.price.cfa) / product.originalPrice.cfa) * 100)
    : 0;

  const formatCFA = (amount: number) => {
    return new Intl.NumberFormat('fr-FR').format(amount) + ' CFA';
  };

  return (
    <Link href={`/products/${product.id}`} className="product-card-link">
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
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
          </button>
          
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="product-image"
          />
          
          {!product.inStock && (
            <div className="out-of-stock-overlay">
              <span>Rupture de stock</span>
            </div>
          )}
        </div>

        <div className="product-info">
          {/* Supplier Info */}
          <div className="supplier-info">
            <span className="supplier-name">{product.supplier.name}</span>
            {product.supplier.verified && (
              <Shield className="w-3 h-3 text-blue-500" />
            )}
          </div>

          {/* Product Name */}
          <h3 className="product-name">{product.name}</h3>

          {/* Rating */}
          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="rating-text">
              {product.rating} ({product.reviewCount})
            </span>
          </div>

          {/* Pricing */}
          <div className="product-pricing">
            <div className="current-price">{formatCFA(product.price.cfa)}</div>
            {product.originalPrice && (
              <div className="original-price">{formatCFA(product.originalPrice.cfa)}</div>
            )}
            <div className="usd-price">≈ ${product.price.usd}</div>
          </div>

          {/* Shipping */}
          <div className="shipping-info">
            <Truck className="w-4 h-4 text-green-600" />
            <span>Livraison {product.shipping.days}</span>
          </div>

          {/* Stock Status */}
          {product.inStock ? (
            <div className="stock-status in-stock">
              ✅ En stock
            </div>
          ) : (
            <div className="stock-status out-of-stock">
              ❌ Rupture de stock
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
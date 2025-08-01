// UPDATE src/app/products/page.tsx - Replace your current products grid section
'use client';
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { CategoryTabs } from '@/components/product/CategoryTabs';
import { EnhancedFilterBar } from '@/components/product/EnhancedFilterBar';
import { EnhancedProductCard } from '@/components/product/EnhancedProductCard';

// Enhanced sample products data
const enhancedProducts = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max 256GB Titanium Naturel',
    price: { cfa: 740000, usd: 1199 },
    originalPrice: { cfa: 850000 },
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1605236453806-b465faa04422?w=400&h=400&fit=crop'
    ],
    category: 'Smartphones',
    rating: 4.8,
    reviewCount: 2847,
    inStock: true,
    badge: 'sale' as const,
    shipping: { cost: 15000, days: '5-7 jours' },
    description: 'Le smartphone le plus avancé avec puce A17 Pro et système de caméra révolutionnaire.'
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra 512GB',
    price: { cfa: 650000, usd: 999 },
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop'
    ],
    category: 'Smartphones',
    rating: 4.6,
    reviewCount: 1923,
    inStock: true,
    badge: 'popular' as const,
    shipping: { cost: 15000, days: '7-10 jours' },
    description: 'Galaxy AI révolutionne votre façon de communiquer, créer et travailler.'
  },
  {
    id: '3',
    name: 'MacBook Pro 14" M3 Pro 1TB Space Black',
    price: { cfa: 1250000, usd: 1999 },
    originalPrice: { cfa: 1350000 },
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop'
    ],
    category: 'Ordinateurs',
    rating: 4.9,
    reviewCount: 856,
    inStock: true,
    badge: 'new' as const,
    shipping: { cost: 25000, days: '3-5 jours' },
    description: 'Performance professionnelle avec la puce M3 Pro ultra-rapide.'
  },
  {
    id: '4',
    name: 'AirPods Pro 2ème génération USB-C',
    price: { cfa: 145000, usd: 249 },
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop',
    category: 'Accessoires',
    rating: 4.7,
    reviewCount: 3241,
    inStock: true,
    badge: 'popular' as const,
    shipping: { cost: 10000, days: '3-5 jours' },
    description: 'Audio spatial personnalisé et réduction de bruit adaptative.'
  },
  {
    id: '5',
    name: 'iPad Pro 12.9" M2 1TB WiFi + Cellular',
    price: { cfa: 890000, usd: 1449 },
    originalPrice: { cfa: 950000 },
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
    category: 'Tablettes',
    rating: 4.8,
    reviewCount: 1456,
    inStock: false,
    badge: 'limited' as const,
    shipping: { cost: 20000, days: '7-14 jours' },
    description: 'L\'expérience iPad la plus avancée avec la puce M2.'
  },
  {
    id: '6',
    name: 'Apple Watch Series 9 45mm GPS + Cellular',
    price: { cfa: 290000, usd: 479 },
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=400&fit=crop',
    category: 'Montres',
    rating: 4.5,
    reviewCount: 2156,
    inStock: true,
    badge: 'new' as const,
    shipping: { cost: 12000, days: '5-7 jours' },
    description: 'La montre connectée la plus avancée avec puce S9.'
  }
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentView, setCurrentView] = useState<'grid' | 'list'>('grid');
  const [filteredProducts, setFilteredProducts] = useState(enhancedProducts);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    filterProducts(categoryId, searchQuery);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    filterProducts(activeCategory, query);
  };

  const filterProducts = (category: string, search: string) => {
    let filtered = enhancedProducts;
    
    if (category !== 'all') {
      const categoryMap: { [key: string]: string } = {
        'phones': 'Smartphones',
        'accessories': 'Accessoires',
        'electronics': 'Électronique',
        'watches': 'Montres',
        'cameras': 'Caméras',
        'gaming': 'Gaming',
        'laptops': 'Ordinateurs'
      };
      
      const categoryName = categoryMap[category];
      if (categoryName) {
        filtered = filtered.filter(product => product.category === categoryName);
      }
    }
    
    if (search) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    setFilteredProducts(filtered);
  };

  const handleFilterChange = (filters: any) => {
    // Implement your filtering logic here
    console.log('Applied filters:', filters);
  };

  const handleAddToCart = (productId: string, quantity: number) => {
    // Implement add to cart logic
    console.log(`Added ${quantity} of product ${productId} to cart`);
    // You could show a toast notification here
    alert(`Produit ajouté au panier! Quantité: ${quantity}`);
  };

  const handleQuickView = (productId: string) => {
    // Implement quick view modal logic
    console.log(`Quick view for product ${productId}`);
    // You could open a modal with product details here
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <DashboardLayout title="Nos Produits Premium" breadcrumb={['Produits']}>
      
      {/* Category Tabs */}
      <CategoryTabs 
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      
      {/* Enhanced Filter Bar */}
      <EnhancedFilterBar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onFilterChange={handleFilterChange}
        onViewChange={setCurrentView}
        currentView={currentView}
        resultsCount={filteredProducts.length}
      />
      
      {/* Enhanced Products Grid */}
      <div className={`enhanced-products-container ${currentView}-view`}>
        <div className={`products-grid-restaurant ${currentView === 'grid' ? 'grid-mode' : 'list-mode'}`}>
          {filteredProducts.map((product) => (
            <EnhancedProductCard
              key={product.id}
              product={product}
              viewMode={currentView}
              onAddToCart={handleAddToCart}
              onQuickView={handleQuickView}
              onToggleWishlist={handleToggleWishlist}
              isInWishlist={wishlist.includes(product.id)}
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="no-products-found">
            <div className="no-products-content">
              <div className="no-products-icon">🔍</div>
              <h3>Aucun produit trouvé</h3>
              <p>Essayez de modifier vos filtres ou votre recherche</p>
              <button 
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                  setFilteredProducts(enhancedProducts);
                }}
                className="reset-search-btn"
              >
                Voir tous les produits
              </button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
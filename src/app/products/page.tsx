// src/app/products/page.tsx
'use client';
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { CategoryTabs } from '@/components/product/CategoryTabs';
import { EnhancedFilterBar } from '@/components/product/EnhancedFilterBar';
import { MarketplaceProductCard } from '@/components/product/MarketplaceProductCard';
import { Footer } from '@/components/layout/Footer';


// Enhanced sample products data
const enhancedProducts = [
  {
    id: '1',
    name: 'Men Shoes Summer Sneakers Mesh Breathable Sport Running',
    price: { cfa: 595250, usd: 1199 },
    originalPrice: { cfa: 850000 },
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop'
    ],
    category: 'Chaussures',
    rating: 5,
    reviewCount: 27,
    inStock: true,
    badge: 'choice' as const,
    shipping: { cost: 15000, days: '5-7 jours' },
    description: 'Chaussures de sport respirantes pour hommes, parfaites pour la course et les activités estivales.',
    extraDiscount: 'Extra 1% off with coins'
  },
  {
    id: '2',
    name: 'Non-slip Men\'s Summer Sneakers Comfortable Walking Shoes',
    price: { cfa: 546310, usd: 999 },
    originalPrice: { cfa: 1511470 },
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop'
    ],
    category: 'Chaussures',
    rating: 4.5,
    reviewCount: 3,
    inStock: true,
    badge: 'choice' as const,
    shipping: { cost: 15000, days: '7-10 jours' },
    description: 'Baskets antidérapantes pour hommes, confort optimal pour la marche quotidienne.'
  },
  {
    id: '3',
    name: 'Big Size 46 47 Sneakers Summer Men Running Sports Shoes',
    price: { cfa: 755940, usd: 1999 },
    image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1520256862855-398228c41684?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop'
    ],
    category: 'Chaussures',
    rating: 5,
    reviewCount: 11,
    inStock: true,
    badge: 'sale' as const,
    shipping: { cost: 25000, days: '3-5 jours' },
    description: 'Grandes tailles disponibles, chaussures de sport pour hommes, parfaites pour la course.'
  },
  {
    id: '4',
    name: 'High Quality Sneakers Men Summer Breathable Mesh Running',
    price: { cfa: 706070, usd: 249 },
    originalPrice: { cfa: 850000 },
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop',
    category: 'Chaussures',
    rating: 4.3,
    reviewCount: 212,
    inStock: true,
    badge: 'sale' as const,
    shipping: { cost: 10000, days: '3-5 jours' },
    description: 'Baskets de haute qualité pour hommes, mesh respirant pour l\'été.',
    extraDiscount: 'Extra 1% off with coins'
  },
  {
    id: '5',
    name: 'Professional Gaming Headset RGB LED Wireless Bluetooth',
    price: { cfa: 890000, usd: 1449 },
    originalPrice: { cfa: 950000 },
    image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=400&fit=crop',
    category: 'Accessoires',
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    badge: 'choice' as const,
    shipping: { cost: 20000, days: '7-14 jours' },
    description: 'Casque gaming professionnel avec éclairage RGB et connexion sans fil.'
  },
  {
    id: '6',
    name: 'Wireless Bluetooth Earbuds Pro Max Noise Cancelling',
    price: { cfa: 290000, usd: 479 },
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    category: 'Accessoires',
    rating: 4.5,
    reviewCount: 89,
    inStock: true,
    badge: 'new' as const,
    shipping: { cost: 12000, days: '5-7 jours' },
    description: 'Écouteurs sans fil avec réduction de bruit active et autonomie longue durée.'
  },
  {
    id: '7',
    name: 'Smart Watch Series 9 GPS Health Monitoring Fitness Tracker',
    price: { cfa: 450000, usd: 399 },
    originalPrice: { cfa: 500000 },
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=400&fit=crop',
    category: 'Montres',
    rating: 4.7,
    reviewCount: 243,
    inStock: true,
    badge: 'choice' as const,
    shipping: { cost: 15000, days: '5-7 jours' },
    description: 'Montre connectée avec suivi de santé avancé et GPS intégré.'
  },
  {
    id: '8',
    name: 'Premium Leather Wallet RFID Blocking Multiple Card Slots',
    price: { cfa: 125000, usd: 89 },
    originalPrice: { cfa: 180000 },
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    category: 'Accessoires',
    rating: 4.6,
    reviewCount: 67,
    inStock: true,
    badge: 'sale' as const,
    shipping: { cost: 8000, days: '3-5 jours' },
    description: 'Portefeuille en cuir premium avec protection RFID et multiples compartiments.',
    extraDiscount: 'Extra 1% off with coins'
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
        'shoes': 'Chaussures',
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

  const handleAddToCart = (productId: string, quantity: number = 1) => {
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
      
      {/* Marketplace Products Grid - 4 per row */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <MarketplaceProductCard
              key={product.id}
              product={{
                ...product,
                soldCount: product.reviewCount // Using reviewCount as soldCount for now
              }}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucun produit trouvé</h3>
            <p className="text-gray-600 mb-6">Essayez de modifier vos filtres ou votre recherche</p>
            <button 
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setFilteredProducts(enhancedProducts);
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Voir tous les produits
            </button>
          </div>
        )}
      </div>
      <Footer />
    </DashboardLayout>
    
  );
}
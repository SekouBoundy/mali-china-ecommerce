// src/app/page.tsx - Complete Homepage
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';
import { CategoriesShowcase } from '@/components/sections/CategoriesShowcase';
import { ValuePropositions } from '@/components/sections/ValuePropositions';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { DashboardLayout } from '@/components/layout/DashboardLayout';

import { 
  ArrowRight, 
  ShoppingBag, 
  Star, 
  Truck, 
  Shield, 
  Clock,
  CheckCircle,
  Gift,
  Users,
  Heart
} from 'lucide-react';

export default function HomePage() {
  return (
    <DashboardLayout title="Accueil" breadcrumb={[]}>
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="new-hero-section">
        <div className="container">
          <div className="hero-container">
            
            {/* Left Content */}
            <div className="hero-content">
              <div className="hero-badge">
                <Gift className="w-5 h-5" />
                <span>Nouveau au Mali 🇲🇱</span>
              </div>
              
              <h1 className="hero-title">
                Produits <span className="title-gradient">Premium</span>
                <br />
                Directement au <span className="mali-text">Mali</span>
              </h1>
              
              <p className="hero-description">
                Découvrez des milliers de produits de qualité internationale, 
                livrés rapidement à Bamako et dans tout le Mali. 
                Prix imbattables, garantie complète.
              </p>

              {/* CTA Buttons */}
              <div className="hero-cta-buttons">
                <Link 
                  href="/products" 
                  className="hero-btn-primary"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Découvrir nos Produits
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link 
                  href="/products?category=telephones" 
                  className="hero-btn-secondary"
                >
                  📱 Téléphones Premium
                </Link>
              </div>

              {/* Trust Signals */}
              <div className="trust-signals">
                <div className="trust-item">
                  <CheckCircle className="w-5 h-5" />
                  <span>Livraison 5-14 jours</span>
                </div>
                <div className="trust-item">
                  <Shield className="w-5 h-5" />
                  <span>Garantie complète</span>
                </div>
                <div className="trust-item">
                  <Users className="w-5 h-5" />
                  <span>Service client Mali</span>
                </div>
              </div>

              {/* Social Proof */}
              <div className="social-proof">
                <div className="customer-avatars">
                  <div className="avatar"></div>
                  <div className="avatar"></div>
                  <div className="avatar"></div>
                  <div className="avatar"></div>
                </div>
                <div className="social-text">
                  <div className="rating-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span><strong>2,400+</strong> clients satisfaits au Mali</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hero-visual">
              <div className="hero-main-image">
                <img 
                  src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop" 
                  alt="iPhone Premium"
                  className="main-product-image"
                />

                {/* Floating Product Cards */}
                <div className="product-float product-float-1">
                  <img 
                    src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=60&h=60&fit=crop" 
                    alt="AirPods"
                  />
                  <div className="float-info">
                    <div className="float-name">AirPods Pro</div>
                    <div className="float-price">120,000 CFA</div>
                  </div>
                </div>

                <div className="product-float product-float-2">
                  <img 
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=60&h=60&fit=crop" 
                    alt="Apple Watch"
                  />
                  <div className="float-info">
                    <div className="float-name">Apple Watch</div>
                    <div className="float-price">240,000 CFA</div>
                  </div>
                </div>

                {/* Route Visual */}
                <div className="route-visual">
                  <div className="route-point route-start">🇨🇳</div>
                  <div className="route-line"></div>
                  <div className="route-point route-end">🇲🇱</div>
                </div>

                {/* Floating Delivery Badge */}
                <div className="floating-delivery">
                  <div className="content">
                    <Clock className="icon" />
                    <span className="time">5-14 jours</span>
                  </div>
                  <div className="label">Livraison rapide</div>
                </div>
              </div>

              {/* Background Decoration */}
              <div className="hero-bg-decoration"></div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="hero-wave">
          <svg viewBox="0 0 1200 120" fill="none">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Featured Products Section */}
      <FeaturedProducts />
      
      {/* Add CTA after Featured Products */}
      <section style={{ padding: '2rem 0', textAlign: 'center', background: '#f9fafb' }}>
        <div className="container">
          <Link 
            href="/products"
            style={{
              background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
              color: 'white',
              padding: '1.25rem 3rem',
              borderRadius: '50px',
              fontSize: '1.125rem',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)',
              transition: 'all 0.3s ease'
            }}
          >
            Voir Tous les Produits Premium
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Categories Showcase */}
      <CategoriesShowcase />
      
      {/* Add another CTA after Categories */}
      <section style={{ padding: '3rem 0', background: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
            Prêt à commencer vos achats ?
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Rejoignez des milliers de Maliens qui font confiance à notre plateforme 
            pour leurs achats en ligne.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href="/products?category=telephones"
              style={{
                background: 'linear-gradient(135deg, #16a34a, #15803d)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              📱 Téléphones
            </Link>
            <Link 
              href="/products?category=electronique"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              💻 Électronique
            </Link>
            <Link 
              href="/products?category=accessoires"
              style={{
                background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              🎧 Accessoires
            </Link>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <ValuePropositions />
      
      {/* Newsletter Signup */}
      <NewsletterSignup />
      
      {/* Footer */}
      <Footer />

      {/* Cart Sidebar */}
      <CartSidebar />
    </div>
    </DashboardLayout>
  );
}
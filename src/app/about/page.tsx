// src/app/about/page.tsx
'use client';
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Shield, Truck, Heart, Users, Award, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <DashboardLayout title="À propos de nous" breadcrumb={['À propos']}>
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="sugu-gradient">SuguClick</span> - 
            <span className="mali-text"> Votre marketplace malienne</span>
          </h1>
          <p className="hero-subtitle">
            Nous connectons les familles maliennes aux meilleurs produits technologiques 
            du monde, avec la confiance et la proximité que vous méritez.
          </p>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop" 
            alt="Équipe SuguClick Mali"
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="story-content">
          <h2>Notre Histoire</h2>
          <p>
            Née au cœur de Bamako, SuguClick a été fondée par des entrepreneurs maliens 
            passionnés de technologie. Nous avons remarqué que nos compatriotes avaient 
            des difficultés à accéder aux derniers smartphones, ordinateurs et accessoires 
            de qualité à des prix abordables.
          </p>
          <p>
            Notre mission est simple : <strong>démocratiser l'accès à la technologie au Mali</strong>. 
            Nous sélectionnons rigoureusement chaque produit pour garantir la qualité, 
            et nous nous engageons à offrir les meilleurs prix du marché malien.
          </p>
        </div>
        <div className="story-stats">
          <div className="stat-item">
            <div className="stat-number">5,000+</div>
            <div className="stat-label">Clients satisfaits</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15,000+</div>
            <div className="stat-label">Produits livrés</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">48h</div>
            <div className="stat-label">Livraison moyenne</div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="our-values">
        <h2>Nos Valeurs</h2>
        <div className="values-grid">
          
          <div className="value-card">
            <div className="value-icon">
              <Heart className="icon" />
            </div>
            <h3>Passion Mali</h3>
            <p>
              Nous sommes fiers d'être maliens et nous nous engageons à servir 
              notre communauté avec excellence et proximité.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <Shield className="icon" />
            </div>
            <h3>Confiance Totale</h3>
            <p>
              Tous nos produits sont testés et garantis. Votre satisfaction 
              est notre priorité absolue.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <Award className="icon" />
            </div>
            <h3>Qualité Premium</h3>
            <p>
              Nous ne proposons que des produits de marques reconnues 
              mondialement, authentiques et durables.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <Truck className="icon" />
            </div>
            <h3>Livraison Rapide</h3>
            <p>
              Livraison dans tout le Mali en 24-48h à Bamako, 
              3-5 jours dans les autres régions.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Pourquoi Choisir SuguClick ?</h2>
        <div className="reasons-grid">
          
          <div className="reason-item">
            <div className="reason-number">01</div>
            <h4>Paiement 100% Malien</h4>
            <p>Orange Money, Moov Money, et paiement à la livraison. 
               Pas besoin de carte bancaire internationale.</p>
          </div>

          <div className="reason-item">
            <div className="reason-number">02</div>
            <h4>Support en Français & Bambara</h4>
            <p>Notre équipe vous aide dans votre langue, du lundi au samedi, 
               de 8h à 20h.</p>
          </div>

          <div className="reason-item">
            <div className="reason-number">03</div>
            <h4>Garantie Locale</h4>
            <p>Service après-vente au Mali. Plus besoin d'envoyer 
               votre produit à l'étranger en cas de problème.</p>
          </div>

          <div className="reason-item">
            <div className="reason-number">04</div>
            <h4>Prix Transparents</h4>
            <p>Pas de frais cachés. Le prix affiché inclut la livraison 
               et toutes les taxes.</p>
          </div>

        </div>
      </section>

      {/* Our Commitment */}
      <section className="our-commitment">
        <div className="commitment-content">
          <h2>Notre Engagement pour le Mali</h2>
          <p>
            Chez SuguClick, nous ne vendons pas seulement des produits - nous investissons 
            dans l'avenir technologique du Mali. Une partie de nos bénéfices est réinvestie 
            dans l'éducation numérique et le développement technologique local.
          </p>
          
          <div className="commitment-actions">
            <div className="action-item">
              <Users className="action-icon" />
              <div>
                <h4>Formation Gratuite</h4>
                <p>Ateliers gratuits sur l'utilisation des nouvelles technologies</p>
              </div>
            </div>
            
            <div className="action-item">
              <MapPin className="action-icon" />
              <div>
                <h4>Emploi Local</h4>
                <p>100% de notre équipe est malienne et basée à Bamako</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <h2>Une Question ? Parlons !</h2>
        <p>
          Notre équipe est là pour vous accompagner dans vos achats technologiques.
        </p>
        <div className="cta-buttons">
          <a href="/contact" className="btn-primary">
            Nous Contacter
          </a>
          <a href="tel:+22370000000" className="btn-secondary">
            <span>Appeler Maintenant</span>
            <span className="phone">+223 70 00 00 00</span>
          </a>
        </div>
      </section>

    </DashboardLayout>
  );
}
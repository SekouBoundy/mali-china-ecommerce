// src/components/sections/ValuePropositions.tsx
'use client';
import React, { useState } from 'react';
import { 
  Shield, 
  Truck, 
  HeartHandshake, 
  Clock, 
  Award, 
  Phone, 
  CreditCard, 
  RefreshCw,
  CheckCircle,
  Star,
  Globe,
  Zap
} from 'lucide-react';

interface ValueProp {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  color: string;
  bgColor: string;
}

export const ValuePropositions: React.FC = () => {
  const [activeValue, setActiveValue] = useState<string>('quality');

  const valueProps: ValueProp[] = [
    {
      id: 'quality',
      icon: <Shield className="w-8 h-8" />,
      title: 'Qualité Garantie 100%',
      description: 'Produits authentiques vérifiés avec garantie internationale complète',
      details: [
        'Tous nos produits sont authentiques et neufs',
        'Garantie internationale de 1 à 2 ans',
        'Contrôle qualité avant expédition',
        'Remboursement intégral si non conforme'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'shipping',
      icon: <Truck className="w-8 h-8" />,
      title: 'Livraison Rapide au Mali',
      description: 'Expédition sécurisée en 7-14 jours directement à Bamako et régions',
      details: [
        'Livraison en 7-14 jours maximum',
        'Suivi en temps réel de votre colis',
        'Livraison à domicile ou point relais',
        'Assurance transport incluse'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'support',
      icon: <HeartHandshake className="w-8 h-8" />,
      title: 'Support Client Mali',
      description: 'Équipe locale en français disponible 6j/7 pour vous accompagner',
      details: [
        'Support en français par des Maliens',
        'Disponible 6 jours sur 7',
        'WhatsApp, appels et email',
        'Résolution rapide des problèmes'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'pricing',
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Prix Imbattables',
      description: 'Économisez jusqu\'à 60% par rapport aux magasins locaux',
      details: [
        'Prix direct fabricant sans intermédiaires',
        'Paiement sécurisé en CFA',
        'Orange Money et Moov Money acceptés',
        'Promotions exclusives pour le Mali'
      ],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const trustStats = [
    { number: '50,000+', label: 'Clients Satisfaits', icon: <Star className="w-5 h-5" /> },
    { number: '99.2%', label: 'Taux de Satisfaction', icon: <Award className="w-5 h-5" /> },
    { number: '7-14j', label: 'Délai Livraison', icon: <Clock className="w-5 h-5" /> },
    { number: '24/7', label: 'Support Client', icon: <Phone className="w-5 h-5" /> }
  ];

  const guarantees = [
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'Retour Gratuit',
      description: 'Retour gratuit sous 30 jours si non satisfait'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Paiement Sécurisé',
      description: 'Transactions 100% sécurisées et protégées'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Livraison Express',
      description: 'Option livraison express 5-7 jours disponible'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Garantie Internationale',
      description: 'Garantie valable dans le monde entier'
    }
  ];

  return (
    <section className="value-propositions-section">
      <div className="value-container">
        
        {/* Section Header */}
        <div className="value-header">
          <div className="value-badge">
            <Award className="w-5 h-5 text-mali-green" />
            <span>Pourquoi Choisir SuguClick ?</span>
          </div>
          
          <h2 className="value-title">
            Votre <span className="value-title-gradient">Confiance</span> est Notre Priorité
          </h2>
          
          <p className="value-description">
            Nous comprenons vos préoccupations sur les achats en ligne. 
            C'est pourquoi nous garantissons une expérience 100% sécurisée et satisfaisante.
          </p>
        </div>

        {/* Trust Stats */}
        <div className="trust-stats">
          {trustStats.map((stat, index) => (
            <div key={index} className="trust-stat">
              <div className="stat-icon">
                {stat.icon}
              </div>
              <div className="stat-content">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Value Props */}
        <div className="value-props-container">
          
          {/* Value Props Navigation */}
          <div className="value-nav">
            {valueProps.map((prop) => (
              <button
                key={prop.id}
                onClick={() => setActiveValue(prop.id)}
                className={`value-nav-item ${activeValue === prop.id ? 'active' : ''}`}
              >
                <div className={`nav-icon ${prop.color} ${prop.bgColor}`}>
                  {prop.icon}
                </div>
                <div className="nav-content">
                  <h3 className="nav-title">{prop.title}</h3>
                  <p className="nav-description">{prop.description}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Active Value Prop Details */}
          <div className="value-details">
            {valueProps.map((prop) => (
              <div
                key={prop.id}
                className={`value-detail ${activeValue === prop.id ? 'active' : ''}`}
              >
                <div className="detail-header">
                  <div className={`detail-icon ${prop.color} ${prop.bgColor}`}>
                    {prop.icon}
                  </div>
                  <div>
                    <h3 className="detail-title">{prop.title}</h3>
                    <p className="detail-description">{prop.description}</p>
                  </div>
                </div>

                <div className="detail-list">
                  {prop.details.map((detail, index) => (
                    <div key={index} className="detail-item">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Visual Element */}
                <div className="detail-visual">
                  {prop.id === 'quality' && (
                    <div className="quality-visual">
                      <div className="quality-badge">
                        <Shield className="w-6 h-6" />
                        <span>Certifié Authentique</span>
                      </div>
                      <div className="quality-steps">
                        <div className="step">✓ Vérification</div>
                        <div className="step">✓ Contrôle</div>
                        <div className="step">✓ Expédition</div>
                      </div>
                    </div>
                  )}
                  
                  {prop.id === 'shipping' && (
                    <div className="shipping-visual">
                      <div className="shipping-route">
                        <div className="route-point">🇨🇳 Chine</div>
                        <div className="route-line">
                          <div className="plane">✈️</div>
                          <div className="timeline">7-14 jours</div>
                        </div>
                        <div className="route-point">🇲🇱 Mali</div>
                      </div>
                    </div>
                  )}
                  
                  {prop.id === 'support' && (
                    <div className="support-visual">
                      <div className="support-channels">
                        <div className="channel">📱 WhatsApp</div>
                        <div className="channel">📞 Appel</div>
                        <div className="channel">✉️ Email</div>
                      </div>
                      <div className="support-time">Réponse en moins de 2h</div>
                    </div>
                  )}
                  
                  {prop.id === 'pricing' && (
                    <div className="pricing-visual">
                      <div className="price-comparison">
                        <div className="price-item local">
                          <span>Magasin Local</span>
                          <span className="price">50,000 CFA</span>
                        </div>
                        <div className="vs">VS</div>
                        <div className="price-item online">
                          <span>Mali-China Store</span>
                          <span className="price">30,000 CFA</span>
                          <span className="savings">-40%</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees Grid */}
        <div className="guarantees-section">
          <h3 className="guarantees-title">Nos Engagements Envers Vous</h3>
          <div className="guarantees-grid">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="guarantee-card">
                <div className="guarantee-icon">
                  {guarantee.icon}
                </div>
                <h4 className="guarantee-title">{guarantee.title}</h4>
                <p className="guarantee-description">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonial */}
        {/* <div className="testimonial-section">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="testimonial-text">
                "J'étais sceptique au début, mais Mali-China Store a dépassé toutes mes attentes. 
                Livraison rapide, produits authentiques et excellent service client. 
                Je recommande à toutes mes amies !"
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">A</div>
                <div className="author-info">
                  <div className="author-name">Aminata Traoré</div>
                  <div className="author-location">Bamako, Mali</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="value-cta">
          <h3 className="cta-title">Prête à Faire Vos Achats en Toute Confiance ?</h3>
          <p className="cta-description">
            Rejoignez des milliers de Maliennes satisfaites qui font confiance à Mali-China Store
          </p>
          <button className="cta-button">
            <span>Commencer mes Achats</span>
            <CheckCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
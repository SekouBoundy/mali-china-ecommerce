// src/components/layout/Footer.tsx
'use client';
import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Truck, 
  Shield, 
  Clock, 
  CreditCard,
  Star,
  Heart,
  Facebook,
  Instagram,
  MessageCircle,
  ArrowUp,
  CheckCircle,
  Award,
  Users,
  Globe
} from 'lucide-react';

interface FooterLink {
  title: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface PaymentMethod {
  name: string;
  icon: string;
  color: string;
}

export const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      title: 'Catégories',
      links: [
        { title: 'Mode & Beauté', href: '/categories/mode-beaute' },
        { title: 'Téléphones & Accessoires', href: '/categories/telephones' },
        { title: 'Enfants & Bébés', href: '/categories/enfants' },
        { title: 'Maison & Lifestyle', href: '/categories/maison' },
        { title: 'Santé & Bien-être', href: '/categories/sante' },
        { title: 'Éducation & Travail', href: '/categories/education' }
      ]
    },
    {
      title: 'Service Client',
      links: [
        { title: 'Centre d\'Aide', href: '/aide' },
        { title: 'Suivi de Commande', href: '/suivi' },
        { title: 'Retours & Remboursements', href: '/retours' },
        { title: 'Guide des Tailles', href: '/tailles' },
        { title: 'FAQ', href: '/faq' },
        { title: 'Contactez-nous', href: '/contact' }
      ]
    },
    {
      title: 'À Propos',
      links: [
        { title: 'Notre Histoire', href: '/about' },
        { title: 'Comment ça Marche', href: '/comment-ca-marche' },
        { title: 'Garanties', href: '/garanties' },
        { title: 'Partenaires', href: '/partenaires' },
        { title: 'Carrières', href: '/carrieres' },
        { title: 'Blog Mode', href: '/blog' }
      ]
    },
    {
      title: 'Légal',
      links: [
        { title: 'Conditions d\'Utilisation', href: '/conditions' },
        { title: 'Politique de Confidentialité', href: '/confidentialite' },
        { title: 'Politique de Cookies', href: '/cookies' },
        { title: 'Mentions Légales', href: '/mentions-legales' },
        { title: 'Protection des Données', href: '/donnees' },
        { title: 'Signaler un Problème', href: '/signaler' }
      ]
    }
  ];

  const paymentMethods: PaymentMethod[] = [
    { name: 'Orange Money', icon: '🧡', color: '#FF6600' },
    { name: 'Moov Money', icon: '💙', color: '#0066CC' },
    { name: 'Carte Bancaire', icon: '💳', color: '#4B5563' },
    { name: 'PayPal', icon: '🌐', color: '#0070BA' },
    { name: 'Western Union', icon: '💰', color: '#FFD700' },
    { name: 'Virement', icon: '🏦', color: '#6B7280' }
  ];

  const trustFeatures = [
    {
      icon: <Truck className="w-5 h-5" />,
      title: 'Livraison 7-14 jours',
      description: 'Partout au Mali'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Garantie 100%',
      description: 'Produits authentiques'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'Support 24/7',
      description: 'En français'
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: '50,000+ Clients',
      description: 'Satisfaits au Mali'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Trust Banner */}
      <div className="trust-banner">
        <div className="footer-container">
          <div className="trust-features">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="trust-feature">
                <div className="trust-icon">
                  {feature.icon}
                </div>
                <div className="trust-content">
                  <div className="trust-title">{feature.title}</div>
                  <div className="trust-description">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            
            {/* Company Info */}
            <div className="footer-company">
              <div className="company-logo">
                <h3 className="logo-text">
                  <span className="mali-text">Mali</span>
                  <span className="china-text">China</span>
                  <span className="store-text"> Store</span>
                </h3>
                <div className="logo-tagline">Votre partenaire mode & tech</div>
              </div>

              <p className="company-description">
                Mali-China Store est votre destination de confiance pour des produits 
                de qualité à prix imbattables. Nous connectons les jeunes Maliennes 
                aux dernières tendances mondiales.
              </p>

              {/* Contact Info */}
              <div className="contact-info">
                <div className="contact-item">
                  <Phone className="w-4 h-4" />
                  <span>+223 XX XX XX XX</span>
                </div>
                <div className="contact-item">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: +223 XX XX XX XX</span>
                </div>
                <div className="contact-item">
                  <Mail className="w-4 h-4" />
                  <span>contact@malichinastore.com</span>
                </div>
                <div className="contact-item">
                  <MapPin className="w-4 h-4" />
                  <span>Bamako, Mali 🇲🇱</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="social-media">
                <div className="social-title">Suivez-nous</div>
                <div className="social-links">
                  <a href="#" className="social-link facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="social-link instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="social-link whatsapp">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={index} className="footer-section">
                <h4 className="section-title">{section.title}</h4>
                <ul className="section-links">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href} className="footer-link">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="payment-section">
        <div className="footer-container">
          <div className="payment-content">
            <div className="payment-header">
              <CreditCard className="w-6 h-6" />
              <h4>Méthodes de Paiement Acceptées</h4>
            </div>
            <div className="payment-methods">
              {paymentMethods.map((method, index) => (
                <div key={index} className="payment-method">
                  <span className="payment-icon">{method.icon}</span>
                  <span className="payment-name">{method.name}</span>
                </div>
              ))}
            </div>
            <div className="payment-security">
              <Shield className="w-4 h-4" />
              <span>Paiements 100% sécurisés et protégés</span>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="footer-testimonials">
        <div className="footer-container">
          <div className="testimonials-header">
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <h4>Ce que disent nos clientes</h4>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="testimonial-text">
                "Livraison rapide et produits de qualité. Je recommande à toutes mes amies !"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">F</div>
                <div className="author-info">
                  <div className="author-name">Fatou S.</div>
                  <div className="author-location">Bamako</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="testimonial-text">
                "Excellent service client en français. Très professionnel !"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">A</div>
                <div className="author-info">
                  <div className="author-name">Aminata T.</div>
                  <div className="author-location">Sikasso</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="testimonial-text">
                "Mes enfants adorent leurs nouveaux jouets. Merci Mali-China Store !"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">M</div>
                <div className="author-info">
                  <div className="author-name">Mariam K.</div>
                  <div className="author-location">Mopti</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="footer-newsletter">
        <div className="footer-container">
          <div className="newsletter-content">
            <div className="newsletter-info">
              <h4 className="newsletter-title">Ne ratez aucune promotion !</h4>
              <p className="newsletter-description">
                Recevez nos offres exclusives et nouveautés directement dans votre boîte mail
              </p>
            </div>
            <div className="newsletter-form">
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Votre email..."
                  className="newsletter-input"
                />
                <button className="newsletter-btn">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="bottom-content">
            <div className="bottom-left">
              <p className="copyright">
                © 2024 Mali-China Store. Tous droits réservés.
              </p>
              <div className="certifications">
                <div className="cert-item">
                  <CheckCircle className="w-4 h-4" />
                  <span>Entreprise Certifiée</span>
                </div>
                <div className="cert-item">
                  <Award className="w-4 h-4" />
                  <span>Commerce Vérifié</span>
                </div>
              </div>
            </div>

            <div className="bottom-right">
              <div className="stats">
                <div className="stat-item">
                  <Users className="w-4 h-4" />
                  <span>50,000+ Clients</span>
                </div>
                <div className="stat-item">
                  <Globe className="w-4 h-4" />
                  <span>Livraison dans tout le Mali</span>
                </div>
              </div>

              <button onClick={scrollToTop} className="scroll-top">
                <ArrowUp className="w-5 h-5" />
                <span>Haut de page</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
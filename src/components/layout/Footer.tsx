// src/components/layout/Footer.tsx - MVP Version
'use client';
import React from 'react';
import { 
  Shield, 
  CreditCard, 
  Phone, 
  MessageCircle, 
  Mail,
  MapPin,
  ArrowUp
} from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const paymentMethods = [
    { name: 'Orange Money', icon: '🧡' },
    { name: 'Moov Money', icon: '💙' },
    { name: 'Carte Bancaire', icon: '💳' },
    { name: 'Virement', icon: '🏦' }
  ];

  return (
    <footer className="mvp-footer">
      {/* Main Footer Content */}
      <div className="mvp-footer-main">
        <div className="mvp-footer-container">
          <div className="mvp-footer-grid">
            
            {/* Company Info */}
            <div className="mvp-company-section">
              <div className="mvp-logo">
                <h3 className="mvp-logo-text">
                  <span className="mali-text">Mali</span>
                  <span className="china-text">China</span>
                  <span className="store-text"> Store</span>
                </h3>
                <p className="mvp-tagline">Mode & Tech à prix imbattables</p>
              </div>

              <div className="mvp-contact-grid">
                <div className="mvp-contact-item">
                  <Phone className="w-4 h-4" />
                  <span>+223 XX XX XX XX</span>
                </div>
                <div className="mvp-contact-item">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Support</span>
                </div>
                <div className="mvp-contact-item">
                  <Mail className="w-4 h-4" />
                  <span>contact@malichinastore.com</span>
                </div>
                <div className="mvp-contact-item">
                  <MapPin className="w-4 h-4" />
                  <span>Bamako, Mali 🇲🇱</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mvp-links-section">
              <h4 className="mvp-section-title">Liens Rapides</h4>
              <ul className="mvp-links-list">
                <li><a href="/livraison" className="mvp-link">Livraison</a></li>
                <li><a href="/retours" className="mvp-link">Retours</a></li>
                <li><a href="/support" className="mvp-link">Support</a></li>
                <li><a href="/faq" className="mvp-link">FAQ</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="mvp-newsletter-section">
              <h4 className="mvp-section-title">Offres Exclusives</h4>
              <p className="mvp-newsletter-text">
                Recevez nos promos par email
              </p>
              <div className="mvp-newsletter-form">
                <input
                  type="email"
                  placeholder="Votre email..."
                  className="mvp-email-input"
                />
                <button className="mvp-subscribe-btn">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <div className="mvp-payment-section">
        <div className="mvp-footer-container">
          <div className="mvp-payment-content">
            <div className="mvp-payment-header">
              <CreditCard className="w-5 h-5" />
              <span>Paiements Sécurisés</span>
              <Shield className="w-4 h-4 text-green-500" />
            </div>
            <div className="mvp-payment-methods">
              {paymentMethods.map((method, index) => (
                <div key={index} className="mvp-payment-method">
                  <span className="mvp-payment-icon">{method.icon}</span>
                  <span className="mvp-payment-name">{method.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mvp-footer-bottom">
        <div className="mvp-footer-container">
          <div className="mvp-bottom-content">
            <div className="mvp-bottom-left">
              <p className="mvp-copyright">
                © 2024 Mali-China Store. Tous droits réservés.
              </p>
              <div className="mvp-legal-links">
                <a href="/conditions" className="mvp-legal-link">Conditions</a>
                <a href="/confidentialite" className="mvp-legal-link">Confidentialité</a>
              </div>
            </div>

            <div className="mvp-bottom-right">
              <div className="mvp-trust-badge">
                <Shield className="w-4 h-4" />
                <span>Commerce Vérifié</span>
              </div>

              <button onClick={scrollToTop} className="mvp-scroll-top">
                <ArrowUp className="w-4 h-4" />
                <span>Haut</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
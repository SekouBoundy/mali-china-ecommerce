// src/app/contact/page.tsx
'use client';
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Headphones,
  CreditCard,
  Package,
  HelpCircle,
  Send,
  CheckCircle
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'general',
    message: '',
    orderNumber: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, send to your backend API
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'general',
        message: '',
        orderNumber: ''
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <MessageCircle className="contact-method-icon" />,
      title: 'WhatsApp (Recommandé)',
      subtitle: 'Réponse en moins d\'1 heure',
      value: '+223 70 00 00 00',
      action: 'Discuter maintenant',
      href: 'https://wa.me/22370000000',
      color: 'green'
    },
    {
      icon: <Phone className="contact-method-icon" />,
      title: 'Appel Direct',
      subtitle: 'Lun-Sam: 8h-20h (GMT)',
      value: '+223 20 00 00 00',
      action: 'Appeler maintenant',
      href: 'tel:+22320000000',
      color: 'blue'
    },
    {
      icon: <Mail className="contact-method-icon" />,
      title: 'Email',
      subtitle: 'Réponse sous 4h',
      value: 'support@suguclick.com',
      action: 'Envoyer un email',
      href: 'mailto:support@suguclick.com',
      color: 'purple'
    }
  ];

  const supportCategories = [
    {
      icon: <Package className="support-icon" />,
      title: 'Commandes & Livraison',
      description: 'Suivi de commande, délais de livraison, modifications',
      examples: ['Où est ma commande?', 'Modifier une adresse', 'Annuler une commande']
    },
    {
      icon: <CreditCard className="support-icon" />,
      title: 'Paiements',
      description: 'Orange Money, Moov Money, problèmes de paiement',
      examples: ['Problème Orange Money', 'Remboursement', 'Facture']
    },
    {
      icon: <Headphones className="support-icon" />,
      title: 'Support Produit',
      description: 'Questions sur les produits, garantie, retours',
      examples: ['Garantie iPhone', 'Retour produit', 'Mode d\'emploi']
    },
    {
      icon: <HelpCircle className="support-icon" />,
      title: 'Aide Générale',
      description: 'Création de compte, navigation site, autres questions',
      examples: ['Créer un compte', 'Comment commander?', 'Autres questions']
    }
  ];

  return (
    <DashboardLayout title="Nous Contacter" breadcrumb={['Contact']}>
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Une Question ? Nous Sommes Là !</h1>
          <p>
            Notre équipe malienne vous accompagne du lundi au samedi. 
            Choisissez le moyen de contact qui vous convient le mieux.
          </p>
          
          {/* Quick Stats */}
          <div className="contact-stats">
            <div className="stat-item">
              <div className="stat-number">&lt; 1h</div>
              <div className="stat-label">Réponse WhatsApp</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">96%</div>
              <div className="stat-label">Satisfaction client</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24h/7j</div>
              <div className="stat-label">Support commandes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods">
        <h2>Choisissez Votre Moyen de Contact</h2>
        <div className="methods-grid">
          {contactMethods.map((method, index) => (
            <div key={index} className={`contact-card ${method.color}`}>
              <div className="contact-card-header">
                {method.icon}
                <div>
                  <h3>{method.title}</h3>
                  <p>{method.subtitle}</p>
                </div>
              </div>
              <div className="contact-value">{method.value}</div>
              <a href={method.href} className="contact-action">
                {method.action}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Support Categories */}
      <section className="support-categories">
        <h2>Comment Pouvons-Nous Vous Aider ?</h2>
        <div className="categories-grid">
          {supportCategories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-header">
                {category.icon}
                <div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              </div>
              <div className="category-examples">
                <strong>Exemples de questions :</strong>
                <ul>
                  {category.examples.map((example, i) => (
                    <li key={i}>{example}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="contact-form-section">
        <div className="form-and-info">
          
          {/* Contact Form */}
          <div className="contact-form-container">
            <h2>Envoyez-Nous un Message</h2>
            
            {isSubmitted ? (
              <div className="form-success">
                <CheckCircle className="success-icon" />
                <h3>Message Envoyé !</h3>
                <p>Nous vous répondrons dans les plus brefs délais. Merci !</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                
                {/* Name and Phone */}
                <div className="form-row">
                  <div className="form-group">
                    <label>Nom Complet *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Votre nom complet"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Téléphone *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+223 XX XX XX XX"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="form-group">
                  <label>Email (optionnel)</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="votre@email.com"
                  />
                </div>

                {/* Subject */}
                <div className="form-group">
                  <label>Sujet *</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    required
                  >
                    <option value="general">Question générale</option>
                    <option value="order">Commande & Livraison</option>
                    <option value="payment">Problème de paiement</option>
                    <option value="product">Support produit</option>
                    <option value="refund">Remboursement</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                {/* Order Number (conditional) */}
                {(formData.subject === 'order' || formData.subject === 'payment' || formData.subject === 'refund') && (
                  <div className="form-group">
                    <label>Numéro de commande (si applicable)</label>
                    <input
                      type="text"
                      value={formData.orderNumber}
                      onChange={(e) => handleInputChange('orderNumber', e.target.value)}
                      placeholder="SC-XXXXXX"
                    />
                  </div>
                )}

                {/* Message */}
                <div className="form-group">
                  <label>Votre Message *</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Décrivez votre question ou problème en détail..."
                    rows={5}
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  <Send className="btn-icon" />
                  Envoyer le Message
                </button>
              </form>
            )}
          </div>

          {/* Office Info */}
          <div className="office-info">
            <h3>Notre Bureau à Bamako</h3>
            
            <div className="office-details">
              <div className="office-item">
                <MapPin className="office-icon" />
                <div>
                  <strong>Adresse</strong>
                  <p>Quartier Hippodrome<br />Rue 123, Bamako, Mali</p>
                </div>
              </div>

              <div className="office-item">
                <Clock className="office-icon" />
                <div>
                  <strong>Heures d'ouverture</strong>
                  <p>Lundi - Samedi : 8h00 - 20h00<br />Dimanche : 10h00 - 18h00</p>
                </div>
              </div>

              <div className="office-item">
                <Phone className="office-icon" />
                <div>
                  <strong>Urgences</strong>
                  <p>Pour les urgences de livraison :<br />+223 70 00 00 00 (24h/24)</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="map-placeholder">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=250&fit=crop" 
                alt="Carte de Bamako"
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <div className="map-overlay">
                <p>📍 Visitez-nous à Bamako</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="faq-section">
        <h2>Questions Fréquentes</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>Comment suivre ma commande ?</h4>
            <p>Utilisez votre numéro de commande sur notre page de suivi ou contactez-nous via WhatsApp.</p>
          </div>
          <div className="faq-item">
            <h4>Problème avec Orange Money ?</h4>
            <p>Vérifiez votre solde et réessayez. Si le problème persiste, appelez-nous directement.</p>
          </div>
          <div className="faq-item">
            <h4>Délais de livraison ?</h4>
            <p>24-48h à Bamako, 3-5 jours dans les autres régions du Mali.</p>
          </div>
          <div className="faq-item">
            <h4>Garantie des produits ?</h4>
            <p>Tous nos produits sont garantis. Service après-vente local à Bamako.</p>
          </div>
        </div>
      </section>

    </DashboardLayout>
  );
}
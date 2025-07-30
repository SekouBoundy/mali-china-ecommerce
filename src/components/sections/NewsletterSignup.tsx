// src/components/sections/NewsletterSignup.tsx
'use client';
import React, { useState } from 'react';
import { 
  Mail, 
  Gift, 
  Star, 
  Sparkles, 
  Bell, 
  Crown, 
  Heart,
  CheckCircle,
  ArrowRight,
  ShoppingBag,
  Zap,
  Users
} from 'lucide-react';

interface NewsletterBenefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const benefits: NewsletterBenefit[] = [
    {
      icon: <Gift className="w-5 h-5" />,
      title: 'Code Promo Exclusif',
      description: 'Obtenez immédiatement -20% sur votre première commande'
    },
    {
      icon: <Crown className="w-5 h-5" />,
      title: 'Accès VIP',
      description: 'Découvrez les nouveautés mode et beauté en avant-première'
    },
    {
      icon: <Bell className="w-5 h-5" />,
      title: 'Alertes Flash Sales',
      description: 'Soyez prévenue des promotions avant tout le monde'
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: 'Conseils Beauté',
      description: 'Recevez nos tips mode et beauté spécial jeunes filles'
    }
  ];

  const handleSubmit = async (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    if (!email || !validateEmail(email)) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setEmail('');
    }, 2000);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  if (isSubmitted) {
    return (
      <section className="newsletter-section">
        <div className="newsletter-container">
          <div className="success-card">
            <div className="success-animation">
              <CheckCircle className="w-16 h-16 text-green-500" />
              <div className="success-sparkles">
                <Sparkles className="sparkle sparkle-1" />
                <Sparkles className="sparkle sparkle-2" />
                <Sparkles className="sparkle sparkle-3" />
              </div>
            </div>
            
            <h3 className="success-title">🎉 Félicitations !</h3>
            <p className="success-message">
              Vous venez de rejoindre plus de <strong>15,000 Maliennes</strong> qui profitent de nos offres exclusives !
            </p>
            
            <div className="promo-code-card">
              <div className="promo-header">
                <Gift className="w-6 h-6" />
                <span>Votre Code Promo</span>
              </div>
              <div className="promo-code">MALI20</div>
              <div className="promo-description">
                Utilisez ce code pour <strong>-20% sur votre première commande</strong>
              </div>
            </div>

            <div className="success-actions">
              <button className="shop-now-btn">
                <ShoppingBag className="w-5 h-5" />
                <span>Commencer mes Achats</span>
              </button>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="close-btn"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-card">
          
          {/* Left Side - Content */}
          <div className="newsletter-content">
            {/* Header */}
            <div className="newsletter-header">
              <div className="header-badge">
                <Crown className="w-5 h-5" />
                <span>Rejoignez le Club VIP</span>
              </div>
              
              <h2 className="newsletter-title">
                Recevez nos <span className="title-gradient">Offres Exclusives</span>
                <br />
                Spécial Mali 🇲🇱
              </h2>
              
              <p className="newsletter-description">
                Inscrivez-vous à notre newsletter et bénéficiez d'avantages réservés 
                aux Maliennes : promotions flash, nouveautés mode et conseils beauté !
              </p>
            </div>

            {/* Benefits */}
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-icon">
                    {benefit.icon}
                  </div>
                  <div className="benefit-text">
                    <h4 className="benefit-title">{benefit.title}</h4>
                    <p className="benefit-description">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Email Form */}
            <div className="newsletter-form">
              <div className="form-group">
                <div className="email-input-container">
                  <Mail className="input-icon" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre adresse email..."
                    className="email-input"
                    onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={!email || !validateEmail(email) || isLoading}
                  className="submit-btn"
                >
                  {isLoading ? (
                    <div className="loading-spinner"></div>
                  ) : (
                    <>
                      <span>Obtenir -20%</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Trust Elements */}
            <div className="trust-elements">
              <div className="trust-item">
                <Users className="w-4 h-4" />
                <span>15,000+ Maliennes inscrites</span>
              </div>
              <div className="trust-item">
                <Zap className="w-4 h-4" />
                <span>Code promo immédiat</span>
              </div>
              <div className="trust-item">
                <CheckCircle className="w-4 h-4" />
                <span>Pas de spam, promis !</span>
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="newsletter-visual">
            <div className="visual-content">
              
              {/* Main Image */}
              <div className="main-visual">
                <img 
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&h=600&fit=crop" 
                  alt="Mode jeune fille Mali"
                  className="main-image"
                />
                
                {/* Floating Elements */}
                <div className="floating-element discount-tag">
                  <div className="tag-content">
                    <span className="discount-percent">-20%</span>
                    <span className="discount-text">Immédiat</span>
                  </div>
                </div>

                <div className="floating-element notification-card">
                  <div className="notification-content">
                    <div className="notification-avatar">👩</div>
                    <div className="notification-text">
                      <div className="notification-name">Fatoumata vient de recevoir</div>
                      <div className="notification-action">son code promo !</div>
                    </div>
                  </div>
                </div>

                <div className="floating-element stats-card">
                  <div className="stats-content">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="stats-text">4.9/5 - 2,847 avis</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="decorative-elements">
                <div className="sparkle sparkle-1">✨</div>
                <div className="sparkle sparkle-2">💎</div>
                <div className="sparkle sparkle-3">🌟</div>
                <div className="sparkle sparkle-4">💫</div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="social-proof">
          <div className="proof-text">
            <span className="proof-highlight">Déjà 15,000+ Maliennes</span> profitent de nos offres exclusives
          </div>
          <div className="proof-avatars">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="proof-avatar" style={{animationDelay: `${i * 0.2}s`}}>
                <div className="avatar-inner"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="privacy-notice">
          <p>
            <CheckCircle className="w-4 h-4 text-green-500" />
            Vos données sont protégées. Nous respectons votre vie privée et ne partageons jamais vos informations.
          </p>
        </div>
      </div>
    </section>
  );
};
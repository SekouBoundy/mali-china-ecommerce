// src/app/auth/page.tsx - NEW FILE
'use client';
import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff, Smartphone, Mail, User, Lock } from 'lucide-react';

export default function AuthPage() {
  const [mode, setMode] = useState('login'); // 'login' or 'register'
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    city: 'Bamako',
    agreeTerms: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, implement authentication
    console.log('Login:', formData.phone, formData.password);
    alert('Connexion réussie! (Demo)');
    window.location.href = '/';
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    if (!formData.agreeTerms) {
      alert('Veuillez accepter les conditions d\'utilisation');
      return;
    }
    // In real app, implement registration
    console.log('Register:', formData);
    alert('Compte créé avec succès! (Demo)');
    window.location.href = '/';
  };

  return (
    <div className="auth-page">
      {/* Header */}
      <div className="auth-header">
        <div className="container">
          <button onClick={() => window.history.back()} className="back-btn">
            <ArrowLeft /> Retour
          </button>
          <div className="auth-logo">
            <span className="mali">Mali</span>
            <span className="premium"> Premium</span>
            <span className="store"> Store</span>
          </div>
        </div>
      </div>

      <div className="auth-container">
        <div className="auth-card">
          
          {/* Mode Toggle */}
          <div className="auth-toggle">
            <button 
              onClick={() => setMode('login')}
              className={`toggle-btn ${mode === 'login' ? 'active' : ''}`}
            >
              Se connecter
            </button>
            <button 
              onClick={() => setMode('register')}
              className={`toggle-btn ${mode === 'register' ? 'active' : ''}`}
            >
              Créer un compte
            </button>
          </div>

          {/* Welcome Message */}
          <div className="auth-welcome">
            <h1>
              {mode === 'login' ? 'Bon retour!' : 'Bienvenue!'}
            </h1>
            <p>
              {mode === 'login' 
                ? 'Connectez-vous pour accéder à votre compte et suivre vos commandes'
                : 'Créez votre compte pour profiter de nos produits premium'
              }
            </p>
          </div>

          {/* Login Form */}
          {mode === 'login' && (
            <form onSubmit={handleLogin} className="auth-form">
              
              {/* Phone Number */}
              <div className="form-group">
                <label>Numéro de téléphone</label>
                <div className="input-group">
                  <Smartphone className="input-icon" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+223 XX XX XX XX"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="form-group">
                <label>Mot de passe</label>
                <div className="input-group">
                  <Lock className="input-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="Votre mot de passe"
                    className="form-input"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="password-toggle"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  Se souvenir de moi
                </label>
                <a href="/forgot-password" className="forgot-link">
                  Mot de passe oublié?
                </a>
              </div>

              <button type="submit" className="submit-btn">
                Se connecter
              </button>
            </form>
          )}

          {/* Register Form */}
          {mode === 'register' && (
            <form onSubmit={handleRegister} className="auth-form">
              
              {/* Name Fields */}
              <div className="form-row">
                <div className="form-group">
                  <label>Prénom</label>
                  <div className="input-group">
                    <User className="input-icon" />
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Votre prénom"
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Nom</label>
                  <div className="input-group">
                    <User className="input-icon" />
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Votre nom"
                      className="form-input"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div className="form-group">
                <label>Numéro de téléphone</label>
                <div className="input-group">
                  <Smartphone className="input-icon" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+223 XX XX XX XX"
                    className="form-input"
                    required
                  />
                </div>
                <span className="input-help">
                  Requis pour Orange Money et les notifications SMS
                </span>
              </div>

              {/* Email */}
              <div className="form-group">
                <label>Email (optionnel)</label>
                <div className="input-group">
                  <Mail className="input-icon" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="votre@email.com"
                    className="form-input"
                  />
                </div>
              </div>

              {/* City */}
              <div className="form-group">
                <label>Ville</label>
                <select
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="form-select"
                  required
                >
                  <option value="Bamako">Bamako</option>
                  <option value="Sikasso">Sikasso</option>
                  <option value="Segou">Ségou</option>
                  <option value="Mopti">Mopti</option>
                  <option value="Gao">Gao</option>
                  <option value="Kayes">Kayes</option>
                  <option value="Tombouctou">Tombouctou</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              {/* Password */}
              <div className="form-group">
                <label>Mot de passe</label>
                <div className="input-group">
                  <Lock className="input-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="Créer un mot de passe"
                    className="form-input"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="password-toggle"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
                <span className="input-help">
                  Minimum 6 caractères
                </span>
              </div>

              {/* Confirm Password */}
              <div className="form-group">
                <label>Confirmer le mot de passe</label>
                <div className="input-group">
                  <Lock className="input-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    placeholder="Confirmer votre mot de passe"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="form-group">
                <label className="checkbox-label terms-label">
                  <input 
                    type="checkbox" 
                    checked={formData.agreeTerms}
                    onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                    required
                  />
                  J'accepte les <a href="/terms">conditions d'utilisation</a> et la <a href="/privacy">politique de confidentialité</a>
                </label>
              </div>

              <button type="submit" className="submit-btn">
                Créer mon compte
              </button>
            </form>
          )}

          {/* Alternative Login Methods */}
          <div className="auth-alternatives">
            <div className="divider">
              <span>ou</span>
            </div>
            
            <button className="social-btn orange-money">
              📱 Continuer avec Orange Money
            </button>
            
            <button className="social-btn google">
              🌐 Continuer avec Google
            </button>
          </div>

          {/* Benefits */}
          <div className="auth-benefits">
            <h3>Avantages du compte Mali Premium Store</h3>
            <ul>
              <li>🎯 Suivi en temps réel de vos commandes</li>
              <li>💖 Liste de souhaits et favoris</li>
              <li>⚡ Checkout express pour les prochains achats</li>
              <li>🎁 Offres exclusives et réductions membres</li>
              <li>📱 Notifications SMS des nouveautés</li>
              <li>🏆 Programme de fidélité Mali Premium</li>
            </ul>
          </div>

          {/* Help */}
          <div className="auth-help">
            <p>Besoin d'aide? <a href="/contact">Contactez notre équipe Mali</a></p>
            <p>Disponible 7j/7 de 8h à 20h (heure de Bamako)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
// src/app/checkout/page.tsx - NEW FILE
'use client';
import React, { useState } from 'react';
import { ArrowLeft, Shield, CreditCard, Smartphone, CheckCircle } from 'lucide-react';

export default function CheckoutPage() {
  const [step, setStep] = useState(1); // 1: Info, 2: Payment, 3: Confirmation
  const [paymentMethod, setPaymentMethod] = useState('orange');
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: 'Bamako'
  });

  // Sample cart items (in real app, get from cart state)
  const cartItems = [
    {
      id: '1',
      name: 'iPhone 15 Pro Max 256GB',
      price: { cfa: 540000 },
      quantity: 1,
      shipping: { cost: 15000 },
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=80'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price.cfa * item.quantity), 0);
  const shippingTotal = cartItems.reduce((sum, item) => sum + item.shipping.cost, 0);
  const total = subtotal + shippingTotal;

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleProceedToPayment = () => {
    if (customerInfo.firstName && customerInfo.lastName && customerInfo.phone) {
      setStep(2);
    } else {
      alert('Veuillez remplir tous les champs obligatoires');
    }
  };

  const handlePayment = () => {
    // In real app, integrate with Orange Money/Moov Money APIs
    setStep(3);
  };

  return (
    <div className="checkout-page">
      {/* Header */}
      <div className="checkout-header">
        <div className="container">
          <div className="header-nav">
            <button onClick={() => window.history.back()} className="back-btn">
              <ArrowLeft /> Retour au panier
            </button>
            <div className="checkout-steps">
              <div className={`step ${step >= 1 ? 'active' : ''}`}>1. Informations</div>
              <div className={`step ${step >= 2 ? 'active' : ''}`}>2. Paiement</div>
              <div className={`step ${step >= 3 ? 'active' : ''}`}>3. Confirmation</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="checkout-layout">
          
          {/* Main Content */}
          <div className="checkout-main">
            
            {/* Step 1: Customer Information */}
            {step === 1 && (
              <div className="checkout-step">
                <h2>Informations de livraison</h2>
                
                <div className="form-section">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Prénom *</label>
                      <input
                        type="text"
                        value={customerInfo.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="Votre prénom"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label>Nom *</label>
                      <input
                        type="text"
                        value={customerInfo.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Votre nom"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Téléphone *</label>
                    <input
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+223 XX XX XX XX"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Email (optionnel)</label>
                    <input
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="votre@email.com"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Adresse de livraison</label>
                    <textarea
                      value={customerInfo.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="Votre adresse complète au Mali"
                      className="form-textarea"
                      rows={3}
                    />
                  </div>

                  <div className="form-group">
                    <label>Ville</label>
                    <select
                      value={customerInfo.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="form-select"
                    >
                      <option value="Bamako">Bamako</option>
                      <option value="Sikasso">Sikasso</option>
                      <option value="Segou">Ségou</option>
                      <option value="Mopti">Mopti</option>
                      <option value="Gao">Gao</option>
                      <option value="Kayes">Kayes</option>
                      <option value="Tombouctou">Tombouctou</option>
                    </select>
                  </div>
                </div>

                <button onClick={handleProceedToPayment} className="continue-btn">
                  Continuer vers le paiement
                </button>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="checkout-step">
                <h2>Méthode de paiement</h2>
                
                <div className="payment-methods">
                  
                  {/* Orange Money */}
                  <div 
                    className={`payment-option ${paymentMethod === 'orange' ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod('orange')}
                  >
                    <div className="payment-icon orange-bg">📱</div>
                    <div className="payment-details">
                      <h3>Orange Money</h3>
                      <p>Paiement sécurisé via Orange Money Mali</p>
                    </div>
                    <div className="payment-radio">
                      <input 
                        type="radio" 
                        checked={paymentMethod === 'orange'} 
                        onChange={() => setPaymentMethod('orange')}
                      />
                    </div>
                  </div>

                  {/* Moov Money */}
                  <div 
                    className={`payment-option ${paymentMethod === 'moov' ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod('moov')}
                  >
                    <div className="payment-icon moov-bg">📱</div>
                    <div className="payment-details">
                      <h3>Moov Money</h3>
                      <p>Paiement sécurisé via Moov Money Mali</p>
                    </div>
                    <div className="payment-radio">
                      <input 
                        type="radio" 
                        checked={paymentMethod === 'moov'} 
                        onChange={() => setPaymentMethod('moov')}
                      />
                    </div>
                  </div>

                  {/* Cash on Delivery */}
                  <div 
                    className={`payment-option ${paymentMethod === 'cash' ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod('cash')}
                  >
                    <div className="payment-icon cash-bg">💵</div>
                    <div className="payment-details">
                      <h3>Paiement à la livraison</h3>
                      <p>Payez en espèces lors de la réception</p>
                    </div>
                    <div className="payment-radio">
                      <input 
                        type="radio" 
                        checked={paymentMethod === 'cash'} 
                        onChange={() => setPaymentMethod('cash')}
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Instructions */}
                <div className="payment-instructions">
                  {paymentMethod === 'orange' && (
                    <div className="instruction-card">
                      <h4>Instructions Orange Money</h4>
                      <ol>
                        <li>Composez #144# sur votre téléphone Orange</li>
                        <li>Sélectionnez "Paiement marchand"</li>
                        <li>Entrez le montant: {total.toLocaleString('fr-FR')} CFA</li>
                        <li>Confirmez avec votre code PIN</li>
                      </ol>
                    </div>
                  )}
                  
                  {paymentMethod === 'moov' && (
                    <div className="instruction-card">
                      <h4>Instructions Moov Money</h4>
                      <ol>
                        <li>Composez *880# sur votre téléphone Moov</li>
                        <li>Sélectionnez "Paiement"</li>
                        <li>Entrez le montant: {total.toLocaleString('fr-FR')} CFA</li>
                        <li>Confirmez la transaction</li>
                      </ol>
                    </div>
                  )}
                </div>

                <div className="payment-buttons">
                  <button onClick={() => setStep(1)} className="back-payment-btn">
                    Retour
                  </button>
                  <button onClick={handlePayment} className="pay-now-btn">
                    {paymentMethod === 'cash' 
                      ? `Confirmer la commande • ${total.toLocaleString('fr-FR')} CFA`
                      : `Payer maintenant • ${total.toLocaleString('fr-FR')} CFA`
                    }
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="checkout-step">
                <div className="confirmation-content">
                  <div className="success-icon">
                    <CheckCircle />
                  </div>
                  <h2>Commande confirmée!</h2>
                  <p>Votre commande #ML{Date.now().toString().slice(-6)} a été enregistrée avec succès.</p>
                  
                  <div className="order-details">
                    <h3>Détails de la commande</h3>
                    <div className="detail-row">
                      <span>Client:</span>
                      <span>{customerInfo.firstName} {customerInfo.lastName}</span>
                    </div>
                    <div className="detail-row">
                      <span>Téléphone:</span>
                      <span>{customerInfo.phone}</span>
                    </div>
                    <div className="detail-row">
                      <span>Ville:</span>
                      <span>{customerInfo.city}</span>
                    </div>
                    <div className="detail-row">
                      <span>Paiement:</span>
                      <span>
                        {paymentMethod === 'orange' ? 'Orange Money' : 
                         paymentMethod === 'moov' ? 'Moov Money' : 
                         'Paiement à la livraison'}
                      </span>
                    </div>
                    <div className="detail-row total">
                      <span>Total:</span>
                      <span>{total.toLocaleString('fr-FR')} CFA</span>
                    </div>
                  </div>

                  <div className="next-steps">
                    <h3>Prochaines étapes</h3>
                    <ul>
                      <li>📞 Nous vous contacterons dans les 24h pour confirmer</li>
                      <li>📦 Préparation et expédition sous 2-3 jours</li>
                      <li>🚚 Livraison estimée: 7-14 jours au Mali</li>
                      <li>📱 Suivi par SMS tout au long du processus</li>
                    </ul>
                  </div>

                  <div className="confirmation-buttons">
                    <a href="/products" className="continue-shopping-btn">
                      Continuer les achats
                    </a>
                    <button className="track-order-btn">
                      Suivre ma commande
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="order-summary">
            <h3>Récapitulatif</h3>
            
            <div className="summary-items">
              {cartItems.map((item) => (
                <div key={item.id} className="summary-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-info">
                    <span className="item-name">{item.name}</span>
                    <span className="item-qty">Qté: {item.quantity}</span>
                  </div>
                  <span className="item-price">
                    {(item.price.cfa * item.quantity).toLocaleString('fr-FR')} CFA
                  </span>
                </div>
              ))}
            </div>

            <div className="summary-totals">
              <div className="total-row">
                <span>Sous-total:</span>
                <span>{subtotal.toLocaleString('fr-FR')} CFA</span>
              </div>
              <div className="total-row">
                <span>Livraison:</span>
                <span>{shippingTotal.toLocaleString('fr-FR')} CFA</span>
              </div>
              <div className="total-row final-total">
                <span>Total:</span>
                <span>{total.toLocaleString('fr-FR')} CFA</span>
              </div>
              <div className="usd-total">
                ≈ ${Math.round(total / 600)} USD
              </div>
            </div>

            <div className="security-notice">
              <Shield className="security-icon" />
              <div>
                <strong>Paiement 100% sécurisé</strong>
                <span>Vos informations sont protégées</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
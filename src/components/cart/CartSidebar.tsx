// src/components/cart/CartSidebar.tsx
'use client';
import React from 'react';
import { 
  X, 
  Plus, 
  Minus, 
  Trash2, 
  ShoppingBag, 
  Shield, 
  Truck, 
  CreditCard,
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import Link from 'next/link';

export const CartSidebar: React.FC = () => {
  const { 
    items, 
    isOpen, 
    totalItems, 
    subtotal, 
    shippingTotal, 
    total, 
    updateQuantity, 
    removeItem, 
    closeCart 
  } = useCart();

  const formatCFA = (amount: number) => {
    return new Intl.NumberFormat('fr-FR').format(amount) + ' CFA';
  };

  const formatUSD = (amount: number) => {
    return '$' + Math.round(amount).toLocaleString();
  };

  // Convert CFA to USD (approximate rate: 1 USD = 620 CFA)
  const totalUSD = Math.round(total / 620);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="cart-overlay"
          onClick={closeCart}
        />
      )}

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        {/* Cart Header */}
        <div className="cart-header">
          <div className="cart-title-section">
            <div className="cart-icon-wrapper">
              <ShoppingBag className="cart-icon" />
            </div>
            <div>
              <h2 className="cart-title">Mon Panier</h2>
              <span className="items-count">
                {totalItems} article{totalItems > 1 ? 's' : ''}
              </span>
            </div>
          </div>
          <button onClick={closeCart} className="close-btn">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Content */}
        <div className="cart-content">
          {items.length === 0 ? (
            // Empty Cart
            <div className="empty-cart">
              <div className="empty-icon">🛒</div>
              <h3>Votre panier est vide</h3>
              <p>Découvrez nos produits premium de qualité internationale !</p>
              <button onClick={closeCart} className="shop-now-btn">
                <ShoppingBag className="w-5 h-5" />
                Découvrir nos Produits
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="cart-items">
                {items.map((item) => (
                  <div key={item.id} className="cart-item">
                    {/* Product Image */}
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>

                    {/* Product Info */}
                    <div className="item-details">
                      <h4 className="item-name">{item.name}</h4>
                      <p className="item-supplier">Par {item.supplier}</p>
                      
                      <div className="item-price">
                        <span className="price-cfa">{formatCFA(item.price.cfa)}</span>
                        <span className="price-usd">≈ {formatUSD(item.price.usd)}</span>
                      </div>

                      <div className="shipping-info">
                        <Clock className="w-3 h-3" />
                        <span>Livraison {item.shipping.estimatedDays}</span> {/* Changed from days to estimatedDays */}
                        </div>

                      {/* Quantity Controls */}
                      <div className="quantity-section">
                        <div className="quantity-controls">
                          <button 
                            className="qty-btn"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="qty-icon" />
                          </button>
                          <span className="quantity">{item.quantity}</span>
                          <button 
                            className="qty-btn"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            disabled={item.quantity >= item.inStock}
                          >
                            <Plus className="qty-icon" />
                          </button>
                        </div>
                        <button 
                          className="remove-btn"
                          onClick={() => removeItem(item.id)}
                          title="Supprimer"
                        >
                          <Trash2 className="remove-icon" />
                        </button>
                      </div>

                      {/* Stock Warning */}
                      {item.quantity >= item.inStock && (
                        <div className="stock-warning">
                          Stock maximum atteint
                        </div>
                      )}
                    </div>

                    {/* Item Total */}
                    <div className="item-total">
                      <div className="total-price">
                        {formatCFA(item.price.cfa * item.quantity)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="cart-summary">
                <div className="summary-row">
                  <span>Sous-total:</span>
                  <span>{formatCFA(subtotal)}</span>
                </div>
                <div className="summary-row">
                  <span>Livraison:</span>
                  <span>{formatCFA(shippingTotal)}</span>
                </div>
                <div className="summary-row total-row">
                  <span>Total:</span>
                  <span>{formatCFA(total)}</span>
                </div>
                <div className="usd-reference">
                  ≈ {formatUSD(totalUSD)} USD
                </div>
              </div>

              {/* Payment Methods Preview */}
              <div className="payment-methods">
                <div className="payment-title">Paiement sécurisé avec:</div>
                <div className="payment-options">
                  <div className="payment-method orange">
                    Orange Money
                  </div>
                  <div className="payment-method moov">
                    Moov Money
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="cart-trust-indicators">
                <div className="trust-item">
                  <Shield className="w-4 h-4" />
                  <span>Paiement sécurisé</span>
                </div>
                <div className="trust-item">
                  <Truck className="w-4 h-4" />
                  <span>Livraison rapide au Mali</span>
                </div>
                <div className="trust-item">
                  <MapPin className="w-4 h-4" />
                  <span>Livraison à Bamako</span>
                </div>
              </div>

              {/* Checkout Section */}
              <div className="checkout-section">
                <Link href="/checkout" className="checkout-btn" onClick={closeCart}>
                  <span>Finaliser ma Commande</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button 
                  className="continue-shopping"
                  onClick={closeCart}
                >
                  Continuer mes achats
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
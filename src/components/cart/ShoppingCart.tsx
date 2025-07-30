// src/components/cart/ShoppingCart.tsx
'use client';
import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: {
    usd: number;
    cfa: number;
  };
  image: string;
  quantity: number;
  shipping: {
    cost: number;
    days: string;
  };
  supplier: string;
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export const ShoppingCart: React.FC<ShoppingCartProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem
}) => {
  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price.cfa * item.quantity), 0);
  const shippingTotal = cartItems.reduce((sum, item) => sum + item.shipping.cost, 0);
  const total = subtotal + shippingTotal;

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      onRemoveItem(itemId);
    } else {
      onUpdateQuantity(itemId, newQuantity);
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="cart-overlay"
          onClick={onClose}
        />
      )}

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        {/* Cart Header */}
        <div className="cart-header">
          <div className="cart-title">
            <ShoppingBag className="cart-icon" />
            <h2>Mon Panier</h2>
            <span className="items-count">({cartItems.length})</span>
          </div>
          <button onClick={onClose} className="close-btn">
            <X />
          </button>
        </div>

        {/* Cart Content */}
        <div className="cart-content">
          {cartItems.length === 0 ? (
            // Empty Cart
            <div className="empty-cart">
              <div className="empty-icon">🛒</div>
              <h3>Votre panier est vide</h3>
              <p>Découvrez nos produits premium et ajoutez-en à votre panier!</p>
              <button onClick={onClose} className="btn btn-primary">
                Continuer les achats
              </button>
            </div>
          ) : (
            // Cart Items
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
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
                        <span className="price-cfa">
                          {item.price.cfa.toLocaleString('fr-FR')} CFA
                        </span>
                        <span className="price-usd">
                          (${item.price.usd})
                        </span>
                      </div>

                      <div className="shipping-info">
                        🚚 Livraison: {item.shipping.days} • +{item.shipping.cost.toLocaleString('fr-FR')} CFA
                      </div>

                      {/* Quantity Controls */}
                      <div className="quantity-controls">
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="qty-btn"
                        >
                          <Minus className="qty-icon" />
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="qty-btn"
                        >
                          <Plus className="qty-icon" />
                        </button>

                        {/* Remove Item */}
                        <button 
                          onClick={() => onRemoveItem(item.id)}
                          className="remove-btn"
                        >
                          <Trash2 className="remove-icon" />
                        </button>
                      </div>
                    </div>

                    {/* Item Total */}
                    <div className="item-total">
                      <span className="total-price">
                        {(item.price.cfa * item.quantity).toLocaleString('fr-FR')} CFA
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="cart-summary">
                <div className="summary-row">
                  <span>Sous-total ({cartItems.length} article{cartItems.length > 1 ? 's' : ''})</span>
                  <span>{subtotal.toLocaleString('fr-FR')} CFA</span>
                </div>
                
                <div className="summary-row">
                  <span>Livraison au Mali</span>
                  <span>{shippingTotal.toLocaleString('fr-FR')} CFA</span>
                </div>
                
                <div className="summary-row total-row">
                  <span>Total</span>
                  <span>{total.toLocaleString('fr-FR')} CFA</span>
                </div>

                <div className="usd-reference">
                  ≈ ${Math.round(total / 600)} USD
                </div>
              </div>

              {/* Payment Methods */}
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

              {/* Checkout Button */}
              <div className="checkout-section">
                <button className="checkout-btn">
                  🔒 Procéder au paiement
                </button>
                <button onClick={onClose} className="continue-shopping">
                  Continuer les achats
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

// Demo component to show how to use the cart
export const CartDemo: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'iPhone 15 Pro Max 256GB',
      price: { usd: 899, cfa: 540000 },
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=80&h=80&fit=crop',
      quantity: 1,
      shipping: { cost: 15000, days: '7-10 jours' },
      supplier: 'TechGlobal'
    },
    {
      id: '2',
      name: 'AirPods Pro 2ème Génération',
      price: { usd: 199, cfa: 120000 },
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=80&h=80&fit=crop',
      quantity: 2,
      shipping: { cost: 8000, days: '5-8 jours' },
      supplier: 'AudioMax'
    }
  ]);

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div>
      {/* Cart Trigger Button */}
      <button 
        onClick={() => setIsCartOpen(true)}
        className="cart-btn"
      >
        🛒
        <span className="cart-badge">{cartItems.length}</span>
      </button>

      {/* Shopping Cart */}
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </div>
  );
};
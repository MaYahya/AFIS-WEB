import React from 'react';
import { FiX, FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiCreditCard } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { siteConfig } from '../../data/siteData';
import './CartDrawer.css';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <div className="cart-header-title">
            <FiShoppingBag size={20} />
            <h2>Your Cart ({cartItems.length})</h2>
          </div>
          <button className="cart-close" onClick={onClose} aria-label="Close cart">
            <FiX size={24} />
          </button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <FiShoppingBag size={48} />
              <p>Your cart is empty</p>
              <button className="btn btn-primary" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-image">
                    {item.icon ? (
                      <div className="cart-item-icon-placeholder">{item.icon}</div>
                    ) : (
                      <div className="cart-item-img-placeholder">POS</div>
                    )}
                  </div>
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="cart-item-brand">{item.brand}</p>
                    <div className="cart-item-price-row">
                      <span className="cart-item-price">
                        {siteConfig.currency} {item.price}
                      </span>
                    </div>
                    <div className="cart-item-actions">
                      <div className="cart-qty-controls">
                        <button onClick={() => updateQuantity(item.id, -1)}>
                          <FiMinus size={14} />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}>
                          <FiPlus size={14} />
                        </button>
                      </div>
                      <button className="cart-remove" onClick={() => removeFromCart(item.id)}>
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-row">
              <span>Subtotal</span>
              <span className="cart-total-amount">
                {siteConfig.currency} {cartTotal.toLocaleString()}
              </span>
            </div>
            <p className="cart-tax-info">Taxes and shipping calculated at checkout.</p>
            <div className="cart-footer-buttons">
              <button 
                className="btn btn-outline cart-clear-btn" 
                onClick={clearCart}
                style={{ width: '100%', marginBottom: '12px' }}
              >
                Clear Cart
              </button>
              <button className="btn btn-primary cart-checkout-btn" style={{ width: '100%' }}>
                Proceed to Payment <FiCreditCard size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;

import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart()

  if (items.length === 0) {
    return (
      <main className="container cart-page">
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Add some delicious items to your cart to get started!</p>
          <Link to="/menu" className="cta-button" style={{ marginTop: '2rem' }}>
            Browse Menu
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="container cart-page">
      <div className="cart-header">
        <h1>Your Cart</h1>
      </div>

      <div className="cart-items">
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <img 
              src={item.image} 
              alt={item.name} 
              className="cart-item-image"
            />
            <div className="cart-item-info">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-price">₹{item.price}</p>
            </div>
            <div className="cart-item-controls">
              <div className="quantity-controls">
                <button 
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="quantity-display">{item.quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button 
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>₹{getTotalPrice()}</span>
        </div>
        <div className="summary-row">
          <span>Delivery Fee:</span>
          <span>₹50</span>
        </div>
        <div className="summary-row">
          <span>Total:</span>
          <span>₹{getTotalPrice() + 50}</span>
        </div>
        <Link to="/checkout" className="checkout-btn">
          Proceed to Checkout
        </Link>
      </div>
    </main>
  )
}

export default CartPage

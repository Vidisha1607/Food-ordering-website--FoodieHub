import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

const CheckoutPage = () => {
  const { items, getTotalPrice, clearCart } = useCart()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'card'
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate order processing
    alert('Order placed successfully! Thank you for your purchase.')
    clearCart()
    // In a real app, you would redirect to an order confirmation page
  }

  if (items.length === 0) {
    return (
      <main className="container">
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <h2>No items in cart</h2>
          <p>Please add items to your cart before checkout.</p>
        </div>
      </main>
    )
  }

  return (
    <main className="container" style={{ padding: '2rem 0' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Checkout</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '2rem' }}>
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2 style={{ marginBottom: '1.5rem' }}>Delivery Information</h2>
          
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              rows="3"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>ZIP Code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <h2 style={{ marginTop: '2rem', marginBottom: '1.5rem' }}>Payment Method</h2>
          
          <div className="form-group">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={formData.paymentMethod === 'card'}
                onChange={handleInputChange}
                style={{ marginRight: '0.5rem' }}
              />
              Credit/Debit Card
            </label>
          </div>
          
          <div className="form-group">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={formData.paymentMethod === 'cod'}
                onChange={handleInputChange}
                style={{ marginRight: '0.5rem' }}
              />
              Cash on Delivery
            </label>
          </div>

          <button type="submit" className="checkout-btn">
            Place Order
          </button>
        </form>

        <div className="cart-summary">
          <h3 style={{ marginBottom: '1.5rem' }}>Order Summary</h3>
          
          {items.map(item => (
            <div key={item.id} style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginBottom: '1rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid #eee'
            }}>
              <div>
                <div style={{ fontWeight: '500' }}>{item.name}</div>
                <div style={{ color: '#666', fontSize: '0.9rem' }}>
                  Qty: {item.quantity}
                </div>
              </div>
              <div style={{ fontWeight: '600' }}>
                ₹{item.price * item.quantity}
              </div>
            </div>
          ))}

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
        </div>
      </div>
    </main>
  )
}

export default CheckoutPage

import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Delicious Food Delivered</h1>
          <p>Order your favorite meals from the comfort of your home</p>
          <Link to="/menu" className="cta-button">
            Browse Menu
          </Link>
        </div>
      </section>

      <section className="container" style={{ padding: '4rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>
            Why Choose FoodieHub?
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            We bring you the best dining experience with fresh ingredients, 
            quick delivery, and exceptional service.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginTop: '3rem'
        }}>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '15px', 
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}>
            <div style={{ 
              fontSize: '3rem', 
              marginBottom: '1rem' 
            }}>🍕</div>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>Fresh Ingredients</h3>
            <p style={{ color: '#666' }}>
              We use only the freshest ingredients to prepare your meals with love and care.
            </p>
          </div>

          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '15px', 
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}>
            <div style={{ 
              fontSize: '3rem', 
              marginBottom: '1rem' 
            }}>🚚</div>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>Fast Delivery</h3>
            <p style={{ color: '#666' }}>
              Quick and reliable delivery service to get your food to you hot and fresh.
            </p>
          </div>

          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '15px', 
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}>
            <div style={{ 
              fontSize: '3rem', 
              marginBottom: '1rem' 
            }}>⭐</div>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>Quality Service</h3>
            <p style={{ color: '#666' }}>
              Exceptional customer service and quality food that exceeds your expectations.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage

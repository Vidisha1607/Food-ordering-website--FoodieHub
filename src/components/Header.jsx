import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Header = () => {
  const location = useLocation()
  const { getTotalItems } = useCart()

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            FoodieHub
          </Link>
          
          <nav>
            <ul className="nav-links">
              <li>
                <Link 
                  to="/" 
                  className={location.pathname === '/' ? 'active' : ''}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/menu" 
                  className={location.pathname === '/menu' ? 'active' : ''}
                >
                  Menu
                </Link>
              </li>
            </ul>
          </nav>

          <Link to="/cart" className="cart-icon">
            Cart
            {getTotalItems() > 0 && (
              <span className="cart-count">{getTotalItems()}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header

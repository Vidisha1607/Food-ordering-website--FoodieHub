import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

const FoodCard = ({ item }) => {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: quantity
    })
    setQuantity(1) // Reset quantity after adding to cart
  }

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const decrementQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1)
  }

  return (
    <div className="food-card">
      <img 
        src={item.image} 
        alt={item.name} 
        className="food-image"
      />
      <div className="food-info">
        <div className="food-header">
          <h3 className="food-name">{item.name}</h3>
          <span className={`food-type ${item.type}`}>
            {item.type === 'veg' ? 'VEG' : 'NON-VEG'}
          </span>
        </div>
        
        <p className="food-description">{item.description}</p>
        
        <div className="food-footer">
          <span className="food-price">₹{item.price}</span>
        </div>

        <div className="quantity-controls">
          <button 
            className="quantity-btn"
            onClick={decrementQuantity}
          >
            -
          </button>
          <span className="quantity-display">{quantity}</span>
          <button 
            className="quantity-btn"
            onClick={incrementQuantity}
          >
            +
          </button>
        </div>

        <button 
          className="add-to-cart-btn"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default FoodCard

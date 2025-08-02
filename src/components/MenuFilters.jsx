import React, { useState } from 'react'

const MenuFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    search: '',
    foodType: 'all',
    cuisine: 'all'
  })

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  return (
    <div className="menu-filters">
      <div className="container">
        <div className="filter-section">
          <input
            type="text"
            placeholder="Search for dishes..."
            className="search-bar"
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
          />
        </div>

        <div className="filter-section">
          <h3>Food Type</h3>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filters.foodType === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterChange('foodType', 'all')}
            >
              All
            </button>
            <button
              className={`filter-btn ${filters.foodType === 'veg' ? 'active' : ''}`}
              onClick={() => handleFilterChange('foodType', 'veg')}
            >
              Vegetarian
            </button>
            <button
              className={`filter-btn ${filters.foodType === 'non-veg' ? 'active' : ''}`}
              onClick={() => handleFilterChange('foodType', 'non-veg')}
            >
              Non-Vegetarian
            </button>
          </div>
        </div>

        <div className="filter-section">
          <h3>Cuisine</h3>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filters.cuisine === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterChange('cuisine', 'all')}
            >
              All
            </button>
            <button
              className={`filter-btn ${filters.cuisine === 'indian' ? 'active' : ''}`}
              onClick={() => handleFilterChange('cuisine', 'indian')}
            >
              Indian
            </button>
            <button
              className={`filter-btn ${filters.cuisine === 'chinese' ? 'active' : ''}`}
              onClick={() => handleFilterChange('cuisine', 'chinese')}
            >
              Chinese
            </button>
            <button
              className={`filter-btn ${filters.cuisine === 'italian' ? 'active' : ''}`}
              onClick={() => handleFilterChange('cuisine', 'italian')}
            >
              Italian
            </button>
            <button
              className={`filter-btn ${filters.cuisine === 'mexican' ? 'active' : ''}`}
              onClick={() => handleFilterChange('cuisine', 'mexican')}
            >
              Mexican
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuFilters

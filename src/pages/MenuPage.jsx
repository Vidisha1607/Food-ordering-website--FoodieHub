import React, { useState } from 'react'
import FoodCard from '../components/FoodCard'
import MenuFilters from '../components/MenuFilters'
import { menuItems } from '../data/menuData'

const MenuPage = () => {
  const [filteredItems, setFilteredItems] = useState(menuItems)

  const handleFilterChange = (filters) => {
    let filtered = menuItems

    // Filter by search term
    if (filters.search) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        item.description.toLowerCase().includes(filters.search.toLowerCase())
      )
    }

    // Filter by food type
    if (filters.foodType !== 'all') {
      filtered = filtered.filter(item => item.type === filters.foodType)
    }

    // Filter by cuisine
    if (filters.cuisine !== 'all') {
      filtered = filtered.filter(item => item.cuisine === filters.cuisine)
    }

    setFilteredItems(filtered)
  }

  return (
    <main className="container">
      <div style={{ padding: '2rem 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>
          Our Menu
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#666' }}>
          Discover our delicious selection of freshly prepared meals
        </p>
      </div>

      <MenuFilters onFilterChange={handleFilterChange} />

      <div className="menu-grid">
        {filteredItems.map(item => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem 0', color: '#666' }}>
          <h3>No items found</h3>
          <p>Try adjusting your filters to see more results.</p>
        </div>
      )}
    </main>
  )
}

export default MenuPage

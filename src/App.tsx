import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RestaurantProfile from './pages/RestaurantProfile'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant-profile" element={<RestaurantProfile />} />
      </Routes>
    </Router>
  )
}

export default App

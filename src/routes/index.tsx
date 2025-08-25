import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Restaurant from '../pages/Restaurant'
import Cart from '../pages/Cart'
import Login from '../pages/Login'

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurant/:id" element={<Restaurant />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

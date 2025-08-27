import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header, Logo, Title, Cart, Container } from './styles'
import MenuCards from '../../components/MenuCards'
import MenuModal from '../../components/MenuModal'
import CartSideBar from '../../components/CartSideBar'
import Footer from '../../components/Footer'

import logo from '../../assets/images/logo.png'

type CartItem = {
  title: string
  price: string
  image: string
  description: string
}

const RestaurantProfile: React.FC = () => {
  const navigate = useNavigate()

  const [selectedItem, setSelectedItem] = useState<CartItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Abrir o modal do produto
  const handleOpenModal = (item: CartItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }

  // Adicionar ao carrinho
  const handleAddToCart = () => {
    if (!selectedItem) return
    setCartItems((prev) => [...prev, selectedItem])
    setIsCartOpen(true)
    handleCloseModal()
  }

  // Remover item do carrinho
  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <>
      <Header>
        <Title onClick={() => navigate('/')}>Restaurantes</Title>
        <Logo src={logo} alt="efood" />
        <Cart>{cartItems.length} produto(s) no carrinho</Cart>
      </Header>

      <Container>
        <MenuCards
          onOpenModal={(item) => handleOpenModal({ ...item, price: '60,90' })}
        />
      </Container>

      {selectedItem && (
        <MenuModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedItem.title}
          description={selectedItem.description}
          image={selectedItem.image}
          onAddToCart={handleAddToCart}
        />
      )}

      <CartSideBar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemove={handleRemoveItem}
      />

      <Footer />
    </>
  )
}

export default RestaurantProfile

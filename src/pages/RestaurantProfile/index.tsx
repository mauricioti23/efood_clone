import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header, InnerHeader, Logo, Title, Cart, Container } from './styles'
import MenuCards from '../../components/MenuCards'
import MenuModal from '../../components/MenuModal'
import CartSideBar from '../../components/CartSideBar'
import DeliverySideBar from '../../components/DeliverySideBar'
import PaymentSideBar from '../../components/PaymentSideBar'
import OrderConfirmationSideBar from '../../components/OrderConfirmationSideBar'
import Footer from '../../components/Footer'
import RestaurantHero from '../../components/RestaurantHero'

import logo from '../../assets/images/logo.png'

export type CartItem = {
  title: string
  price: string
  image: string
  description: string
}

const RestaurantProfile: React.FC = () => {
  const navigate = useNavigate()
  const [selectedItem, setSelectedItem] = useState<CartItem | null>(null)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false)
  const [isPaymentOpen, setIsPaymentOpen] = useState(false)
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const [orderId, setOrderId] = useState('')

  const handleOpenModal = (item: CartItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }

  const handleAddToCart = () => {
    if (!selectedItem) return
    setCartItems((prev) => [...prev, selectedItem])
    setIsCartOpen(true)
    handleCloseModal()
  }

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index))
  }

  const totalValue = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price.replace(',', '.')),
    0
  )

  return (
    <>
      <Header>
        <InnerHeader>
          <Title onClick={() => navigate('/')}>Restaurantes</Title>
          <Cart onClick={() => setIsCartOpen(true)}>
            {cartItems.length > 0
              ? `${cartItems.length} produto(s) no carrinho`
              : 'Carrinho vazio'}
          </Cart>
        </InnerHeader>
        <Logo src={logo} alt="efood" />
      </Header>

      <RestaurantHero />

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
        onContinue={() => {
          setIsCartOpen(false)
          setIsDeliveryOpen(true)
        }}
      />

      <DeliverySideBar
        isOpen={isDeliveryOpen}
        onClose={() => setIsDeliveryOpen(false)}
        onBackToCart={() => {
          setIsDeliveryOpen(false)
          setIsCartOpen(true)
        }}
        onContinue={() => {
          setIsDeliveryOpen(false)
          setIsPaymentOpen(true)
        }}
      />

      <PaymentSideBar
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        total={totalValue}
        onBackToDelivery={() => {
          setIsPaymentOpen(false)
          setIsDeliveryOpen(true)
        }}
        onFinish={() => {
          setIsPaymentOpen(false)
          setOrderId(String(new Date().getTime()))
          setIsConfirmationOpen(true)
        }}
      />

      <OrderConfirmationSideBar
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
        orderId={orderId}
        onFinish={() => {
          setIsConfirmationOpen(false)
          setCartItems([])
        }}
      />

      <Footer />
    </>
  )
}

export default RestaurantProfile

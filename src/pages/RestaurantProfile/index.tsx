import React from 'react'
import { Header, Logo, Title, Cart, Container } from './styles'
import Hero from '../../components/Hero'
import RestaurantCard from '../../components/RestaurantCard'

const RestaurantProfile: React.FC = () => {
  return (
    <>
      <Header>
        <Logo src="/assets/images/logo.png" alt="efood" />
        <Title onClick={() => (window.location.href = '/')}>Restaurantes</Title>
        <Cart>0 produto(s) no carrinho</Cart>
      </Header>
      <Hero />
      <Container>
        <RestaurantCard
          name="Italian Bistro"
          description="Autêntica culinária italiana"
          image="/assets/images/restaurants/massa.png"
          cuisine="Italiana"
          showHighlightButton={true}
        />
      </Container>
    </>
  )
}

export default RestaurantProfile

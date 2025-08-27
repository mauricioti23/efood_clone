import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Header, Logo, Title, Cart, Container } from './styles'
import RestaurantHero from '../../components/RestaurantHero'
import MenuCards from '../../components/MenuCards'
import Footer from '../../components/Footer'

import logo from '../../assets/images/logo.png'

const RestaurantProfile: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header>
        <Title onClick={() => navigate('/')}>Restaurantes</Title>
        <Logo src={logo} alt="efood" />
        <Cart>0 produto(s) no carrinho</Cart>
      </Header>

      <RestaurantHero />

      <Container>
        <MenuCards />
      </Container>

      <Footer />
    </>
  )
}

export default RestaurantProfile

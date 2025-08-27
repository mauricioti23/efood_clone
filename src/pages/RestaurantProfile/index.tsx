import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Header, Logo, Title, Cart, Container } from './styles'
import RestaurantHero from '../../components/RestaurantHero'
import RestaurantCard from '../../components/RestaurantCard'
import Footer from '../../components/Footer'

import logo from '../../assets/images/logo.png'
import massaImg from '../../assets/images/restaurants/massa.png'

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
        <RestaurantCard
          name="Italian Bistro"
          description="Autêntica culinária italiana"
          image={massaImg}
          cuisine="Italiana"
          showHighlightButton={true}
        />
      </Container>

      <Footer />
    </>
  )
}

export default RestaurantProfile

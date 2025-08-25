import React from 'react'
import { Container } from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RestaurantCard from '../../components/RestaurantCard'

const RestaurantPage: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h2>Detalhes do Restaurante</h2>
        <RestaurantCard
          name="Italian Bistro"
          description="Authentic Italian cuisine"
          image="/assets/images/restaurants/massa.png.png"
        />
      </Container>
      <Footer />
    </>
  )
}

export default RestaurantPage

import React from 'react'
import RestaurantCard from '../../components/RestaurantCard'
import { Container } from './styles'

const Restaurant: React.FC = () => {
  return (
    <Container>
      <h2>Detalhes do Restaurante</h2>
      <RestaurantCard
        name="Italian Bistro"
        description="Autêntica culinária italiana"
        image="/assets/images/restaurants/massa.png"
        cuisine="Italiana"
      />
    </Container>
  )
}

export default Restaurant

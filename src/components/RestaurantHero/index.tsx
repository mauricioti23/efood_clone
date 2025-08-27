import React from 'react'
import { Container, Cuisine, Name } from './styles'
import massaImg from '../../assets/images/restaurants/massa.png'

const RestaurantHero: React.FC = () => {
  return (
    <Container style={{ backgroundImage: `url(${massaImg})` }}>
      <Cuisine>Italiana</Cuisine>
      <Name>Italian Bistro</Name>
    </Container>
  )
}

export default RestaurantHero

import React from 'react'
import Hero from '../../components/Hero'
import RestaurantCard from '../../components/RestaurantCard'
import { HomeContainer, RestaurantList } from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <Hero />
        <RestaurantList>
          <RestaurantCard
            name="Italian Bistro"
            description="Authentic Italian cuisine"
            image="/assets/images/restaurants/massa.png.png"
          />
          <RestaurantCard
            name="Sushi World"
            description="Fresh sushi and sashimi"
            image="/assets/images/restaurants/sushi.png.png"
          />
        </RestaurantList>
      </HomeContainer>
      <Footer />
    </>
  )
}

export default Home

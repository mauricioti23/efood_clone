import React from 'react'
import Hero from '../../components/Hero'
import RestaurantCard from '../../components/RestaurantCard'
import { HomeContainer, RestaurantList } from './styles'
import Footer from '../../components/Footer'

import massaImg from '../../assets/images/restaurants/massa.png'
import sushiImg from '../../assets/images/restaurants/sushi.png'

const Home: React.FC = () => {
  return (
    <>
      <HomeContainer>
        <Hero />
        <RestaurantList>
          <RestaurantCard
            name="Italian Bistro"
            description="Autêntica culinária italiana"
            image={massaImg}
            cuisine="Italiana"
            showHighlightButton={true}
          />
          <RestaurantCard
            name="Sushi World"
            description="Sushi e sashimi frescos"
            image={sushiImg}
            cuisine="Japonesa"
          />
          <RestaurantCard
            name="Burger House"
            description="Hambúrgueres artesanais"
            image={massaImg}
            cuisine="Italiana"
          />
          <RestaurantCard
            name="Steak Grill"
            description="Carnes nobres e grelhados"
            image={massaImg}
            cuisine="Italiana"
          />
          <RestaurantCard
            name="Vegan Life"
            description="Comida saudável e vegana"
            image={massaImg}
            cuisine="Italiana"
          />
          <RestaurantCard
            name="Dessert Heaven"
            description="Sobremesas e doces incríveis"
            image={massaImg}
            cuisine="Italiana"
          />
        </RestaurantList>
      </HomeContainer>
      <Footer />
    </>
  )
}

export default Home

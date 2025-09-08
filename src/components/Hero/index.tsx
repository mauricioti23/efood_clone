import React from 'react'
import {
  HeroContainer,
  VectorBackground,
  InnerContainer,
  Logo,
  HeroText
} from './styles'
import logoImg from '../../assets/images/logo.png'
import vectorImg from '../../assets/images/Vector.png'

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <VectorBackground src={vectorImg} alt="Fundo Hero" />
      <InnerContainer>
        <Logo src={logoImg} alt="efood logo" />
        <HeroText>
          Viva experiências gastronômicas no conforto da sua casa
        </HeroText>
      </InnerContainer>
    </HeroContainer>
  )
}

export default Hero

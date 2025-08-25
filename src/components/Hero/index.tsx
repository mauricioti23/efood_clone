import React from 'react'
import { Container, HeroImage } from './styles'
import heroImg from '../../assets/images/Hero.png'

const Hero: React.FC = () => {
  return (
    <Container>
      <HeroImage src={heroImg} alt="Hero" />
    </Container>
  )
}

export default Hero

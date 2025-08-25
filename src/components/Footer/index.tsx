import React from 'react'
import { FooterBar, Inner, Logo, SocialImg, Text } from './styles'
import logoImg from '../../assets/images/logo.png'
import socialImg from '../../assets/images/redes-sociais.png'

const Footer: React.FC = () => {
  return (
    <FooterBar>
      <Inner>
        <Logo src={logoImg} alt="efood logo" />
        <SocialImg src={socialImg} alt="Redes sociais" />
        <Text>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </Text>
      </Inner>
    </FooterBar>
  )
}

export default Footer

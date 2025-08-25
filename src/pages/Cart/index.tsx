import React from 'react'
import { Container } from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Cart: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h2>Meu Carrinho</h2>
        <p>Seu carrinho está vazio.</p>
      </Container>
      <Footer />
    </>
  )
}

export default Cart

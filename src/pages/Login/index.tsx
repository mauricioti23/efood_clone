import React from 'react'
import { Container } from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Login: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h2>Login</h2>
        <p>Formulário de login aqui</p>
      </Container>
      <Footer />
    </>
  )
}

export default Login

export {}

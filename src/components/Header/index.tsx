import { Link } from 'react-router-dom'
import { Bar, Wrapper, Logo, Actions } from './styles'

export default function Header() {
  return (
    <Bar>
      <Wrapper>
        <Link to="/">
          <Logo src="/images/logo.png" alt="efood" />
        </Link>
        <Actions>
          <Link to="/login">Entrar</Link>
          <Link to="/cart">Carrinho</Link>
        </Actions>
      </Wrapper>
    </Bar>
  )
}

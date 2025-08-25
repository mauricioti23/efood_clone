import styled from 'styled-components'
import Container from '../Container'

export const Bar = styled.header`
  background: #000; /* Ajuste conforme Figma: se for claro, trocar */
  color: #fff;
`

export const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(6)} 0;
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px; /* respeitando proporção informada */
`

export const Actions = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
`

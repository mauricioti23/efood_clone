import styled from 'styled-components'
import Container from '../Container'

export const Section = styled.section`
  background: url('/images/hero.png') center/cover no-repeat;
  color: #fff;
`

export const Inner = styled(Container)`
  min-height: 280px; /* ajuste conforme Figma */
  display: grid;
  align-content: center;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(14)} 0;
  text-align: center;

  h1 {
    font-size: ${({ theme }) => theme.fonts.size.h1};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }
  p {
    font-size: ${({ theme }) => theme.fonts.size.lg};
    opacity: 0.95;
  }
`

import styled from 'styled-components'
import heroImg from '../../assets/images/Hero.png' // Caminho original mantido

export const HeroContainer = styled.section`
  width: 100%;
  height: 300px;
  background: url(${heroImg}) center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;

  @media (max-width: 1024px) {
    height: 250px;
    padding: 0 16px;
  }

  @media (max-width: 768px) {
    height: 220px;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    height: 180px;
    padding: 0 10px;
  }
`

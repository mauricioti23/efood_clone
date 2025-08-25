import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff8f0; /* bege claro semelhante ao Figma */
  min-height: 100vh;
`

export const RestaurantList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* espaçamento entre os cards */
  justify-content: center;
  margin-top: 20px;
  width: 1024px; /* largura do container de cards */
`

export {}

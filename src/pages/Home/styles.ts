import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 20px;

  @media (max-width: 768px) {
    gap: 24px;
    padding: 16px;
  }

  @media (max-width: 480px) {
    gap: 16px;
    padding: 10px;
  }
`

export const RestaurantList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* duas colunas */
  gap: 24px;
  justify-items: center;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* uma coluna em tablet/mobile */
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`

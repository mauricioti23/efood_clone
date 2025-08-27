import styled from 'styled-components'

export const CardsContainer = styled.div`
  width: 1024px;
  height: 708px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  margin: 40px auto 0; /* centraliza horizontalmente */
`

export const Card = styled.div`
  width: 320px;
  height: 338px;
  background-color: #e66767;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinha o conteúdo à esquerda */
  padding: 8px;
  box-sizing: border-box;
`

export const CardImage = styled.img`
  width: 304px;
  height: 167px;
  object-fit: cover;
  margin-bottom: 8px;
`

export const CardTitle = styled.h3`
  font-family: Roboto, sans-serif;
  font-weight: 900;
  font-size: 16px;
  line-height: 100%;
  text-align: left; /* alinhado à esquerda */
  width: 100%;
  padding: 4px 8px;
  color: #ffebd9;
  margin-bottom: 4px;
`

export const CardDescription = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: left; /* alinhado à esquerda */
  width: 100%;
  color: #ffebd9;
  flex: 1;
  padding: 4px 8px;
  margin-bottom: 8px;
`

export const CardButton = styled.button`
  width: 100%; /* ocupa toda a largura do card */
  height: 36px; /* ajustado para melhor proporção */
  background: #ffebd9;
  color: #e66767;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  border: none;
  cursor: pointer;
`

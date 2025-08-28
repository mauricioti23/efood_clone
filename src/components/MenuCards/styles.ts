import styled from 'styled-components'

export const CardsContainer = styled.div`
  width: 1024px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  margin: 40px auto 0;

  @media (max-width: 1024px) {
    width: 90%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    margin: 20px auto 0;
  }
`

export const Card = styled.div`
  width: 320px;
  height: 338px;
  background-color: #e66767;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`

export const CardImage = styled.img`
  width: 304px;
  height: 167px;
  object-fit: cover;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    width: 100%;
    height: 160px;
  }

  @media (max-width: 480px) {
    height: 140px;
  }
`

export const CardTitle = styled.h3`
  font-family: Roboto, sans-serif;
  font-weight: 900;
  font-size: 16px;
  line-height: 100%;
  text-align: left;
  width: 100%;
  padding: 4px 8px;
  color: #ffebd9;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`

export const CardDescription = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: left;
  width: 100%;
  color: #ffebd9;
  flex: 1;
  padding: 4px 8px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 20px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 18px;
  }
`

export const CardButton = styled.button`
  width: 100%;
  height: 36px;
  background: #ffebd9;
  color: #e66767;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 34px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    height: 32px;
    font-size: 12px;
  }
`

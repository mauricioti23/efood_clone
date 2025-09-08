import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative;

  @media (max-width: 1024px) {
    height: 240px;
  }

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`

export const Cuisine = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 100;
  font-size: 32px;
  color: #ffffff;
  position: absolute;
  top: 25px;
  left: 170px;

  @media (max-width: 1024px) {
    left: 20px;
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`

export const Name = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 900;
  font-size: 32px;
  color: #ffffff;
  position: absolute;
  bottom: 10px;
  left: 170px;

  @media (max-width: 1024px) {
    left: 20px;
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`

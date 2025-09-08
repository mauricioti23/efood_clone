import styled from 'styled-components'

export const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 384px;
  overflow: hidden;
  background-color: #f8f8f8;
`

export const VectorBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`

export const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1366px;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
  z-index: 1;
`

export const Logo = styled.img`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 125px;
  height: 57.5px;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100px;
    height: 46px;
    top: 30px;
  }

  @media (max-width: 480px) {
    width: 90px;
    height: 36px;
    top: 20px;
  }
`

export const HeroText = styled.h1`
  position: absolute;
  top: 236px; /* especificação exata */
  left: 50%;
  transform: translateX(-50%);
  width: 539px;
  height: 84px;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 36px;
  line-height: 100%;
  text-align: center;
  color: #e66767;

  @media (max-width: 768px) {
    width: 80%;
    font-size: 28px;
    top: 200px;
  }

  @media (max-width: 480px) {
    width: 90%;
    font-size: 22px;
    top: 160px;
  }
`

import styled from 'styled-components'
import vector from '../../assets/images/Vector.png'

export const Header = styled.header`
  width: 100%;
  height: 186px;
  background-color: #ffebd9;
  background-image: url(${vector});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`

export const InnerHeader = styled.div`
  width: 1024px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  padding-top: 59px;

  @media (max-width: 1024px) {
    width: 90%;
    padding-top: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: row; /* manter linha no tablet */
    justify-content: space-between;
    padding-top: 30px;
  }

  @media (max-width: 480px) {
    flex-direction: row; /* manter linha no mobile */
    justify-content: space-between;
    padding-top: 20px;
  }
`

export const Title = styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: 900;
  font-size: 18px;
  color: #e66767;
  cursor: pointer;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    width: 100px;
    height: 46px;
    top: 30px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 36px;
    top: 20px;
  }
`

export const Cart = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 900;
  font-size: 18px;
  color: #e66767;
  cursor: pointer;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`

export const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`

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
    height: 150px;
  }

  @media (max-width: 480px) {
    height: 120px;
  }
`

export const Title = styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: 900;
  font-size: 18px;
  color: #e66767;
  position: absolute;
  top: 59px;
  left: 171px;
  cursor: pointer;

  @media (max-width: 1024px) {
    left: 20px;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    top: 40px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    top: 30px;
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
  position: absolute;
  top: 59px;
  right: 171px;
  cursor: pointer;

  @media (max-width: 1024px) {
    right: 20px;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    top: 40px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    top: 30px;
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

import styled from 'styled-components'
import vector from '../../assets/images/Vector.png'

export const Header = styled.header`
  width: 100%;
  height: 186px;
  background-color: #ffebd9; /* mesma cor do Hero */
  background-image: url(${vector});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
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
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
`

export const Cart = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 900;
  font-size: 18px;
  color: #e66767;
  position: absolute;
  top: 59px;
  right: 171px;
  cursor: pointer; /* adicionado para UX */
`

export const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`

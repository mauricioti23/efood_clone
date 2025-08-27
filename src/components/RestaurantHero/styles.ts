import styled from 'styled-components'

export const Container = styled.div`
  width: 100%; /* mesma largura do header */
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative;
`

export const Cuisine = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 100; /* Thin */
  font-style: normal;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #ffffff;
  position: absolute;
  top: 25px;
  left: 170px;
  width: 101px;
  height: 33.25px;
  padding: 4px 8px;
`

export const Name = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 900; /* Black */
  font-style: normal;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #ffffff;
  position: absolute;
  bottom: 10px; /* Quase no limite inferior do hero */
  left: 170px;
  width: 676px;
  height: 33.25px;
  padding: 4px 8px;
`

import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center; /* centraliza horizontalmente */
  align-items: flex-start;
  z-index: 1000;
  overflow-y: auto; /* permite scroll se necessário */
`

export const ModalContainer = styled.div`
  width: 1024px;
  height: 344px;
  background: #e66767;
  margin-top: 100px; /* ajusta a distância do topo, logo abaixo do Hero */
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
`
export const CloseButton = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`

export const ProductImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin-right: 40px;
`

export const ProductTitle = styled.h2`
  font-family: Roboto, sans-serif;
  font-weight: 900;
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 16px;
`

export const ProductDescription = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
  margin-bottom: 24px;
  max-width: 656px;
`

export const AddButton = styled.button`
  width: 218px;
  height: 24px;
  background: #ffffff;
  color: #e66767;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  border: none;
  cursor: pointer;
`

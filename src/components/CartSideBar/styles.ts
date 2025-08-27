import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0; /* colado no lado direito */
  width: 360px;
  height: 100%;
  background: #e66767;
  padding: 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const Product = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 24px;
  background: #ffebd9;
  padding: 8px;
  border-radius: 4px;
  align-items: center; /* centraliza verticalmente os itens */
`

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 16px;
  position: relative;
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* centraliza verticalmente o preço */
  align-items: flex-start; /* título e preço alinhados à esquerda */
  flex: 1;
  height: 100%;
`

export const ProductTitle = styled.span`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #e66767;
  margin-bottom: auto; /* empurra para o topo */
`

export const ProductPrice = styled.span`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #e66767;
  margin-top: auto; /* centraliza verticalmente em relação à imagem */
`

export const RemoveButton = styled.button`
  position: absolute;
  bottom: 8px; /* canto inferior direito do card */
  right: 8px;
  width: 16px;
  height: 16px;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between; /* texto à esquerda, valor à direita */
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  margin-top: auto;
  margin-bottom: 16px;
`

export const CheckoutButton = styled.button`
  width: 100%;
  height: 36px;
  background: #ffebd9;
  color: #e66767;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`

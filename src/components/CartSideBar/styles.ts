import styled, { keyframes } from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  background: #e66767;
  padding: 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.3s forwards;
`

export const Product = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 24px;
  background: #ffebd9;
  padding: 8px;
  align-items: center;
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
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  height: 100%;
`

export const ProductTitle = styled.span`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #e66767;
  margin-bottom: auto;
`

export const ProductPrice = styled.span`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #e66767;
  margin-top: auto;
`

export const RemoveButton = styled.button`
  position: absolute;
  bottom: 8px;
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
  justify-content: space-between;
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
`

export const EmptyMessage = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  margin-top: 50%;
`

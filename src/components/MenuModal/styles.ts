import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 1000;
  overflow-y: auto;
  padding: 20px 0;
`

export const ModalContainer = styled.div`
  width: 1024px;
  max-width: 95%;
  background: #e66767;
  margin-top: 100px;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
  }

  @media (max-width: 768px) {
    margin-top: 60px;
    padding: 16px;
  }

  @media (max-width: 480px) {
    margin-top: 40px;
    padding: 12px;
  }
`

export const CloseButton = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 14px;
    height: 14px;
    top: 12px;
    right: 12px;
  }
`

export const ProductImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin-right: 40px;

  @media (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    width: 220px;
    height: 220px;
  }
`

export const ProductTitle = styled.h2`
  font-family: Roboto, sans-serif;
  font-weight: 900;
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`

export const ProductDescription = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
  margin-bottom: 24px;
  max-width: 656px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 20px;
  }
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

  @media (max-width: 480px) {
    width: 100%;
    height: 32px;
    font-size: 13px;
  }
`

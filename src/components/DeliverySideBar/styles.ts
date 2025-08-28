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
  max-width: 100%;
  height: 100%;
  background: #e66767;
  padding: 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.3s forwards;

  @media (max-width: 480px) {
    width: 100%;
    padding: 20px;
  }
`

export const Title = styled.h2`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`

export const FormLabel = styled.label`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  margin-top: 16px;
  display: block;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`

export const FormInput = styled.input`
  width: 100%;
  height: 32px;
  margin-top: 4px;
  padding: 4px 8px;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  border: none;

  @media (max-width: 480px) {
    height: 28px;
    font-size: 12px;
    padding: 4px 6px;
  }
`

export const FormRow = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;

  div {
    flex: 1;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
  }
`

export const FormButton = styled.button`
  width: 100%;
  height: 36px;
  margin-top: 16px;
  background: #ffebd9;
  color: #e66767;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  border: none;
  cursor: pointer;

  @media (max-width: 480px) {
    height: 32px;
    font-size: 12px;
  }
`

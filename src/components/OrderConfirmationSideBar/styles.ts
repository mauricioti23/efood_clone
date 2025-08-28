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
  animation: ${({ isOpen }) => (isOpen ? slideIn : '')} 0.3s forwards;
`

export const Title = styled.h2`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 24px;
`

export const Message = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  color: #ffffff;
  line-height: 1.5;
  flex: 1;
  overflow-wrap: break-word;
`

export const ConfirmButton = styled.button`
  width: 100%;
  height: 36px;
  background: #ffebd9;
  color: #e66767;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  border: none;
  cursor: pointer;
  margin-top: 24px;
`

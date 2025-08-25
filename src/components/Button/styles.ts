import styled from 'styled-components'

export const ButtonContainer = styled.button`
  position: absolute;
  bottom: 16px;
  left: 16px;
  width: 82px;
  height: 24px;
  background-color: #e66767;
  color: #ffebd9;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`

export {}

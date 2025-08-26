import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  label: string
  onClick?: () => void
}

const StyledButton = styled.button`
  background-color: #e66767;
  color: #ffebd9;
  border: none;
  padding: 8px 16px;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  cursor: pointer;
  margin-top: 8px;
`

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>
}

export default Button

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
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-style: bold; /* garante bold explícito */
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  cursor: pointer;
  margin-top: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>
}

export default Button

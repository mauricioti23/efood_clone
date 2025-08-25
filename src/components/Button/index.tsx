import React from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps {
  label: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <ButtonContainer onClick={onClick}>{label}</ButtonContainer>
)

export default Button

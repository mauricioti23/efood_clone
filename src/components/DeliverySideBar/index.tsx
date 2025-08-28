import React, { useState } from 'react'
import {
  Overlay,
  SidebarContainer,
  Title,
  FormLabel,
  FormInput,
  FormRow,
  FormButton
} from './styles'

type Props = {
  isOpen: boolean
  onClose: () => void
  onBackToCart: () => void
}

const DeliverySideBar: React.FC<Props> = ({
  isOpen,
  onClose,
  onBackToCart
}) => {
  const [formData, setFormData] = useState({
    recipient: '',
    address: '',
    city: '',
    cep: '',
    number: '',
    complement: ''
  })

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <Overlay onClick={onClose}>
      <SidebarContainer onClick={(e) => e.stopPropagation()} isOpen={isOpen}>
        <Title>Entrega</Title>

        <FormLabel>Quem irá receber</FormLabel>
        <FormInput
          type="text"
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
        />

        <FormLabel>Endereço</FormLabel>
        <FormInput
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        <FormLabel>Cidade</FormLabel>
        <FormInput
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />

        <FormRow>
          <div>
            <FormLabel>CEP</FormLabel>
            <FormInput
              type="text"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormLabel>Número</FormLabel>
            <FormInput
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />
          </div>
        </FormRow>

        <FormLabel>Complemento (opcional)</FormLabel>
        <FormInput
          type="text"
          name="complement"
          value={formData.complement}
          onChange={handleChange}
        />

        <FormButton>Continuar com o pagamento</FormButton>
        <FormButton onClick={onBackToCart}>Voltar para o carrinho</FormButton>
      </SidebarContainer>
    </Overlay>
  )
}

export default DeliverySideBar

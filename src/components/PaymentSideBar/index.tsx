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
  total: number
  onBackToDelivery: () => void
  onFinish: () => void
}

const PaymentSideBar: React.FC<Props> = ({
  isOpen,
  onClose,
  total,
  onBackToDelivery,
  onFinish
}) => {
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    cvv: '',
    month: '',
    year: ''
  })

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <Overlay onClick={onClose}>
      <SidebarContainer onClick={(e) => e.stopPropagation()} isOpen={isOpen}>
        <Title>Pagamento - Valor a pagar (R${total.toFixed(2)})</Title>

        <FormLabel>Nome do cartão</FormLabel>
        <FormInput
          type="text"
          name="cardName"
          value={formData.cardName}
          onChange={handleChange}
        />

        <FormRow>
          <div>
            <FormLabel>Número do cartão</FormLabel>
            <FormInput
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormLabel>CVV</FormLabel>
            <FormInput
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
            />
          </div>
        </FormRow>

        <FormRow>
          <div>
            <FormLabel>Mês de vencimento</FormLabel>
            <FormInput
              type="text"
              name="month"
              value={formData.month}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormLabel>Ano de vencimento</FormLabel>
            <FormInput
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
            />
          </div>
        </FormRow>

        <FormButton onClick={onFinish}>Finalizar pagamento</FormButton>
        <FormButton onClick={onBackToDelivery}>
          Voltar para a edição de endereço
        </FormButton>
      </SidebarContainer>
    </Overlay>
  )
}

export default PaymentSideBar

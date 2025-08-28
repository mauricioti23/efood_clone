import React from 'react'
import {
  Overlay,
  SidebarContainer,
  Title,
  Message,
  ConfirmButton
} from './styles'

type Props = {
  isOpen: boolean
  onClose: () => void
  orderId: string
  onFinish: () => void
}

const OrderConfirmationSideBar: React.FC<Props> = ({
  isOpen,
  onClose,
  orderId,
  onFinish
}) => {
  if (!isOpen) return null

  return (
    <Overlay onClick={onClose}>
      <SidebarContainer onClick={(e) => e.stopPropagation()} isOpen={isOpen}>
        <Title>Pedido realizado - {orderId}</Title>

        <Message>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
          <br />
          <br />
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
          <br />
          <br />
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
          <br />
          <br />
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </Message>

        <ConfirmButton onClick={onFinish}>Concluir</ConfirmButton>
      </SidebarContainer>
    </Overlay>
  )
}

export default OrderConfirmationSideBar

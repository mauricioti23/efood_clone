import React from 'react'
import {
  Overlay,
  SidebarContainer,
  Product,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  RemoveButton,
  Total,
  CheckoutButton,
  EmptyMessage
} from './styles'

import trashIcon from '../../assets/images/lixeira.png'

export type CartItem = {
  title: string
  price: string
  image: string
}

type Props = {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onRemove: (index: number) => void
  onContinue?: () => void // ADICIONADO
}

const CartSideBar: React.FC<Props> = ({
  isOpen,
  onClose,
  items,
  onRemove,
  onContinue
}) => {
  if (!isOpen) return null

  const total = items.reduce(
    (acc, item) => acc + parseFloat(item.price.replace(',', '.')),
    0
  )

  return (
    <Overlay onClick={onClose}>
      <SidebarContainer onClick={(e) => e.stopPropagation()} isOpen={isOpen}>
        {items.length === 0 && <EmptyMessage>Carrinho vazio</EmptyMessage>}

        {items.map((item, index) => (
          <Product key={index}>
            <ProductImage src={item.image} alt={item.title} />
            <ProductInfo>
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>R$ {item.price}</ProductPrice>
            </ProductInfo>
            <RemoveButton onClick={() => onRemove(index)}>
              <img src={trashIcon} alt="Remover" />
            </RemoveButton>
          </Product>
        ))}

        {items.length > 0 && (
          <>
            <Total>
              <span>Valor total</span>
              <span>R$ {total.toFixed(2)}</span>
            </Total>

            <CheckoutButton onClick={onContinue}>
              Continuar com a entrega
            </CheckoutButton>
          </>
        )}
      </SidebarContainer>
    </Overlay>
  )
}

export default CartSideBar

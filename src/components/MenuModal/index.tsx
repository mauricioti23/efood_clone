import React from 'react'
import {
  Overlay,
  ModalContainer,
  CloseButton,
  ProductImage,
  ProductTitle,
  ProductDescription,
  AddButton
} from './styles'

import closeImg from '../../assets/images/close.png'
import pizzaImg from '../../assets/images/restaurants/pizza.png' // import da imagem

type Props = {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  image?: string
}

const MenuModal: React.FC<Props> = ({
  isOpen,
  onClose,
  title,
  description,
  image = pizzaImg // usa a pizza.png como padrão
}) => {
  if (!isOpen) return null

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton src={closeImg} alt="Fechar" onClick={onClose} />
        <ProductImage src={image} alt={title} />
        <div>
          <ProductTitle>{title}</ProductTitle>
          <ProductDescription>{description}</ProductDescription>
          <AddButton>Adicionar ao carrinho - R$60,90</AddButton>
        </div>
      </ModalContainer>
    </Overlay>
  )
}

export default MenuModal

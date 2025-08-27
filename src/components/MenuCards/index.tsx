import React, { useState } from 'react'
import {
  CardsContainer,
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  CardButton
} from './styles'

import pizzaImg from '../../assets/images/restaurants/pizza.png' // imagem para os 6 cards
import MenuModal from '../MenuModal'

type CardType = {
  title: string
  description: string
  image: string
}

const MenuCards: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null)

  const cardsData = [
    {
      title: 'Pizza Marguerita',
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.'
    },
    {
      title: 'Pizza Calabresa',
      description:
        'Pizza de calabresa com cebola, molho especial e muito queijo. Deliciosa e tradicional.'
    },
    {
      title: 'Pizza Portuguesa',
      description:
        'Mussarela, presunto, ovo, cebola e azeitonas. Uma pizza completa para todos os gostos.'
    },
    {
      title: 'Pizza Frango com Catupiry',
      description:
        'Frango desfiado com catupiry cremoso e toque de ervas finas. Um clássico irresistível.'
    },
    {
      title: 'Pizza Quatro Queijos',
      description:
        'Mussarela, provolone, gorgonzola e parmesão. Para os amantes de queijo!'
    },
    {
      title: 'Pizza Vegana',
      description:
        'Mussarela vegana, legumes frescos e molho especial. Sabor sem abrir mão da saúde.'
    }
  ]

  const handleAddToCart = (card: { title: string; description: string }) => {
    setSelectedCard({ ...card, image: pizzaImg }) // adiciona a imagem padrão
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedCard(null)
  }

  return (
    <>
      <CardsContainer>
        {cardsData.map((card, index) => (
          <Card key={index}>
            <CardImage src={pizzaImg} alt={card.title} />
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
            <CardButton onClick={() => handleAddToCart(card)}>
              Adicionar ao carrinho
            </CardButton>
          </Card>
        ))}
      </CardsContainer>

      {selectedCard && (
        <MenuModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedCard.title}
          description={selectedCard.description}
          image={selectedCard.image}
        />
      )}
    </>
  )
}

export default MenuCards

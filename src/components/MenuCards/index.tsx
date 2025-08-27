import React from 'react'
import {
  CardsContainer,
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  CardButton
} from './styles'

import pizzaImg from '../../assets/images/restaurants/pizza.png'

type CardData = {
  title: string
  description: string
  image: string
}

type MenuCardsProps = {
  onOpenModal: (item: CardData) => void
}

const MenuCards: React.FC<MenuCardsProps> = ({ onOpenModal }) => {
  const cardsData: CardData[] = [
    {
      title: 'Pizza Marguerita',
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
      image: pizzaImg
    },
    {
      title: 'Pizza Calabresa',
      description:
        'Pizza de calabresa com cebola, molho especial e muito queijo. Deliciosa e tradicional.',
      image: pizzaImg
    },
    {
      title: 'Pizza Portuguesa',
      description:
        'Mussarela, presunto, ovo, cebola e azeitonas. Uma pizza completa para todos os gostos.',
      image: pizzaImg
    },
    {
      title: 'Pizza Frango com Catupiry',
      description:
        'Frango desfiado com catupiry cremoso e toque de ervas finas. Um clássico irresistível.',
      image: pizzaImg
    },
    {
      title: 'Pizza Quatro Queijos',
      description:
        'Mussarela, provolone, gorgonzola e parmesão. Para os amantes de queijo!',
      image: pizzaImg
    },
    {
      title: 'Pizza Vegana',
      description:
        'Mussarela vegana, legumes frescos e molho especial. Sabor sem abrir mão da saúde.',
      image: pizzaImg
    }
  ]

  return (
    <CardsContainer>
      {cardsData.map((card, index) => (
        <Card key={index}>
          <CardImage src={card.image} alt={card.title} />
          <CardTitle>{card.title}</CardTitle>
          <CardDescription>{card.description}</CardDescription>
          <CardButton onClick={() => onOpenModal(card)}>
            Adicionar ao carrinho
          </CardButton>
        </Card>
      ))}
    </CardsContainer>
  )
}

export default MenuCards

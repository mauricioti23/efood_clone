import React from 'react'
import {
  CardsContainer,
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  CardButton
} from './styles'

import pizzaImg from '../../assets/images/restaurants/massa.png'

const MenuCards: React.FC = () => {
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

  return (
    <CardsContainer>
      {cardsData.map((card, index) => (
        <Card key={index}>
          <CardImage src={pizzaImg} alt={card.title} />
          <CardTitle>{card.title}</CardTitle>
          <CardDescription>{card.description}</CardDescription>
          <CardButton>Adiconar ao carrinho</CardButton>
        </Card>
      ))}
    </CardsContainer>
  )
}

export default MenuCards

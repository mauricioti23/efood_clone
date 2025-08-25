import React from 'react'
import { Card, Cover, Content, Title, Description } from './styles'

export interface RestaurantCardProps {
  name: string
  description: string
  image: string
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  description,
  image
}) => {
  return (
    <Card>
      <Cover src={image} alt={name} />
      <Content>
        <Title>{name}</Title>
        <Description>{description}</Description>
      </Content>
    </Card>
  )
}

export default RestaurantCard

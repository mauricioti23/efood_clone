import React from 'react'
import {
  Card,
  Cover,
  Content,
  Title,
  Description,
  CuisineButton,
  HighlightButton
} from './styles'
import Button from '../Button'

export interface RestaurantCardProps {
  name: string
  description: string
  image: string
  cuisine: string
  showHighlightButton?: boolean
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  description,
  image,
  cuisine,
  showHighlightButton
}) => {
  return (
    <Card>
      <Cover src={image} alt={name} />
      <div
        style={{
          position: 'absolute',
          top: 8,
          right: 8,
          display: 'flex',
          gap: 4
        }}
      >
        {showHighlightButton && (
          <HighlightButton>Destaque do dia</HighlightButton>
        )}
        <CuisineButton>{cuisine}</CuisineButton>
      </div>
      <Content>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Button label="Saiba mais" />
      </Content>
    </Card>
  )
}

export default RestaurantCard

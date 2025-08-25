import React from 'react'
import {
  Card,
  Cover,
  Content,
  Title,
  Description,
  CuisineButton,
  RatingContainer,
  Star
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
  const rating = (Math.random() * 5).toFixed(1)

  return (
    <Card>
      {showHighlightButton && (
        <CuisineButton style={{ left: 8, right: 'auto' }}>
          Destaque do dia
        </CuisineButton>
      )}
      <Cover src={image} alt={name} />
      <CuisineButton style={{ top: 8, right: 8 }}>{cuisine}</CuisineButton>
      <Content>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Title>{name}</Title>
          <RatingContainer>
            {rating} <Star>★</Star>
          </RatingContainer>
        </div>
        <Description>{description}</Description>
        <Button label="Saiba mais" />
      </Content>
    </Card>
  )
}

export default RestaurantCard

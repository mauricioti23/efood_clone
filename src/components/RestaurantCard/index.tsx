import React from 'react'
import {
  Card,
  Cover,
  Content,
  Title,
  Description,
  CuisineButton,
  RatingContainer,
  Star,
  CuisineWrapper,
  SaibaMaisButton
} from './styles'

export interface RestaurantCardProps {
  name: string
  description: string
  image: string
  cuisine: string
  showHighlightButton?: boolean
  onClick?: () => void
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  description,
  image,
  cuisine,
  showHighlightButton,
  onClick
}) => {
  const rating = (Math.random() * 5).toFixed(1)

  return (
    <Card>
      <Cover src={image} alt={name} />

      <CuisineWrapper>
        {showHighlightButton && (
          <CuisineButton>Destaque da semana</CuisineButton>
        )}
        <CuisineButton>{cuisine}</CuisineButton>
      </CuisineWrapper>

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
        <SaibaMaisButton onClick={onClick}>Saiba mais</SaibaMaisButton>
      </Content>
    </Card>
  )
}

export default RestaurantCard

import { Link } from 'react-router-dom'
import Button from '../Button'
import Tag from '../Tag'
import { Card, Cover, Content } from './styles'

export type Restaurant = {
  id: number
  name: string
  description: string
  image: string
  score?: number
  category?: string
}

type Props = { data: Restaurant }

export default function RestaurantCard({ data }: Props) {
  const { id, name, description, image, score, category } = data

  return (
    <Card>
      <Cover>
        <img src={image} alt={name} />
        {category && (
          <span className="badge">
            <Tag>{category}</Tag>
          </span>
        )}
      </Cover>

      <Content>
        <div className="row">
          <h3>{name}</h3>

          {typeof score === 'number' && (
            <div className="rating" aria-label="nota do restaurante">
              <strong>{score.toFixed(1)}</strong>
              <img
                src="/images/star.svg"
                alt="estrela"
                width={18}
                height={18}
              />
            </div>
          )}
        </div>

        <p>{description}</p>

        <Link to={`/restaurant/${id}`} className="cta">
          <Button>Saiba mais</Button>
        </Link>
      </Content>
    </Card>
  )
}

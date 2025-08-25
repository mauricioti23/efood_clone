import styled from 'styled-components'

export const Card = styled.div`
  width: 280px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`

export const Cover = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`

export const Content = styled.div`
  padding: 16px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
`

export const Description = styled.p`
  font-size: 14px;
  color: #666;
`

export {}

import styled from 'styled-components'

export const Card = styled.div`
  width: 472px;
  height: 398px;
  border: 1px solid #e66767;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  opacity: 1;
  transform: rotate(0deg);
  border-radius: 0;

  &:hover {
    transform: translateY(-4px);
  }
`

export const Cover = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  position: relative;
`

export const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #e66767;
`

export const Description = styled.p`
  font-size: 14px;
  margin: 0;
  color: #e66767;
`

export const CuisineButton = styled.div`
  background-color: #e66767;
  color: #ffebd9;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  padding: 2px 8px;
  text-align: center;
`

export const HighlightButton = styled.div`
  background-color: #e66767;
  color: #ffebd9;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  padding: 2px 8px;
  text-align: center;
`

export {}

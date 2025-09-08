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

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 1024px) {
    width: 380px;
    height: 360px;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 340px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`

export const Cover = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
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

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  margin: 0;
  color: #e66767;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`

export const CuisineWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
    top: 4px;
    right: 4px;
    gap: 4px;
  }
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

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 2px 6px;
  }
`

export const RatingContainer = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #e66767;
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`

export const Star = styled.span`
  color: gold;
  font-size: 18px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`

export const SaibaMaisButton = styled.button`
  width: 82px;
  height: 24px;
  background-color: #e66767;
  color: #ffebd9;
  font-family: Roboto, sans-serif;
  font-weight: 700; /* Bold */
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  border: none;
  cursor: pointer;
  margin-top: auto;

  &:hover {
    transform: translateY(-2px);
    transition: transform 0.2s;
  }

  @media (max-width: 480px) {
    width: 70px;
    height: 22px;
    font-size: 12px;
  }
`

import styled from 'styled-components'

export const Card = styled.article`
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  overflow: hidden;
  display: grid;
`

export const Cover = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .badge {
    position: absolute;
    top: 12px;
    right: 12px;
  }
`

export const Content = styled.div`
  padding: ${({ theme }) => theme.spacing(4)};
  display: grid;
  gap: ${({ theme }) => theme.spacing(2)};

  h3 {
    font-size: 18px;
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  }

  p {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 14px;
    line-height: 1.5;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .rating {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .cta {
    justify-self: start;
  }
`

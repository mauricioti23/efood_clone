import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    padding: 16px;

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;

    h2 {
      font-size: 18px;
    }

    p {
      font-size: 12px;
    }
  }
`

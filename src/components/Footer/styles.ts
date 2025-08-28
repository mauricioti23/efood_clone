// src/components/Footer/styles.ts
import styled from 'styled-components'

export const FooterBar = styled.footer`
  width: 100%;
  min-height: 298px;
  background-color: #ffebd9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  @media (max-width: 1024px) {
    min-height: 250px;
    padding: 15px 0;
  }

  @media (max-width: 768px) {
    min-height: 220px;
    padding: 10px 0;
  }

  @media (max-width: 480px) {
    min-height: 200px;
    padding: 8px 0;
  }
`

export const Inner = styled.div`
  width: 100%;
  max-width: 1366px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100px;
    height: 46px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 36px;
  }
`

export const SocialImg = styled.img`
  margin-bottom: 20px;
  max-width: 200px;

  @media (max-width: 480px) {
    max-width: 150px;
  }
`

export const Text = styled.p`
  width: 100%;
  max-width: 480px;
  font-size: 14px;
  color: #e66767;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`

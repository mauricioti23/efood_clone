import styled from 'styled-components'

export const FooterBar = styled.footer`
  width: 100%; /* ocupa toda a largura da tela */
  height: 298px;
  background-color: #ffebd9;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Inner = styled.div`
  width: 1366px; /* conteúdo centralizado */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-bottom: 20px;
`

export const SocialImg = styled.img`
  margin-bottom: 20px;
`

export const Text = styled.p`
  width: 480px;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`

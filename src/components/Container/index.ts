import styled from 'styled-components'

const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.gutter};
`
export default Container

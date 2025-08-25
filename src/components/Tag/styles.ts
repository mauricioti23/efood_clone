import styled from 'styled-components'
import { cores } from '../../styles/theme'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${(props) => cores[props.color || 'verde']};
  color: white;
  padding: 4px 10px;
  border-radius: 4px;
`

export {}

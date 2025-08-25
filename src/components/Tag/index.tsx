import React from 'react'

export type Props = {
  color?: 'verde' | 'vermelho' | 'amarelo'
  children: React.ReactNode
}

const Tag: React.FC<Props> = ({ color, children }) => <div>{children}</div>

export default Tag

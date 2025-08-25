import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family:'Roboto', sans-serif; background:#f4f4f4; color:#333; }
  a { text-decoration:none; color:inherit; }
  button { font-family:inherit; }
`

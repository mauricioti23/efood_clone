import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after { box-sizing: border-box; }
html, body, #root { height: 100%; }
body {
margin: 0;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
background: ${({ theme }) => theme.colors.bg};
color: ${({ theme }) => theme.colors.text};
font-family: ${({ theme }) => theme.fonts.family.body};
font-size: ${({ theme }) => theme.fonts.size.base};
}
img { display: block; max-width: 100%; height: auto; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; padding: 0; margin: 0; }
h1, h2, h3, h4, h5, h6 { font-family: ${({ theme }) =>
  theme.fonts.family.heading}; margin: 0; }
.container { max-width: ${({ theme }) =>
  theme.layout.container}; margin: 0 auto; padding: 0 ${({ theme }) =>
  theme.layout.gutter}; }
`

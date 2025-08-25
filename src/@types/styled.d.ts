import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      primaryDark: string
      bg: string
      text: string
      muted: string
      surface: string
      border: string
      star: string
    }
    fonts: {
      family: { heading: string; body: string }
      size: {
        xs: string
        sm: string
        base: string
        lg: string
        xl: string
        h2: string
        h1: string
      }
      weight: {
        regular: number
        medium: number
        semibold: number
        bold: number
      }
    }
    radii: { sm: string; md: string; lg: string; pill: string }
    spacing: (n: number) => string
    layout: { container: string; gutter: string }
    shadow: { sm: string; md: string }
    breakpoints: { sm: string; md: string; lg: string; xl: string }
  }
}

import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    primary: '#E66767', // ajuste para a cor principal do Figma
    primaryDark: '#C05050',
    bg: '#FFF',
    text: '#262626',
    muted: '#6B7280',
    surface: '#FAFAFA',
    border: '#E5E7EB',
    star: '#FFB300'
  },
  fonts: {
    family: {
      heading: 'Montserrat, Arial, sans-serif', // ajuste conforme Figma
      body: 'Inter, Arial, sans-serif'
    },
    size: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '24px',
      h2: '32px',
      h1: '40px'
    },
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  radii: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    pill: '9999px'
  },
  spacing: (n: number) => `${4 * n}px`, // 4px grid
  layout: {
    container: '1200px', // ajuste conforme Figma
    gutter: '24px'
  },
  shadow: {
    sm: '0 2px 8px rgba(0,0,0,0.06)',
    md: '0 6px 16px rgba(0,0,0,0.08)'
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  }
}

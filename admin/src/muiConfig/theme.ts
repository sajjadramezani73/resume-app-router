import { createTheme } from '@mui/material/styles'

// add new breakpoint
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    '2xl': true
    '3xl': true
  }
}

// add new color
declare module '@mui/material/styles' {
  interface Palette {
    titr: Palette['primary']
    caption: Palette['primary']
    body: Palette['primary']
    border: Palette['primary']
  }

  interface PaletteOptions {
    titr?: PaletteOptions['primary']
    caption?: PaletteOptions['primary']
    body?: PaletteOptions['primary']
    border?: PaletteOptions['primary']
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    titr: true
    caption: true
    body: true
    border: true
  }
}

const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#3d4977',
    },
    secondary: {
      main: '#35A6EF',
    },
    titr: { main: '#424242' },
    caption: { main: '#3c3c3c' },
    body: { main: '#F9F9F9' },
    border: { main: '#07091920' },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 600,
      lg: 768,
      xl: 992,
      '2xl': 1140,
      '3xl': 1300,
    },
  },
  typography: {
    fontFamily: ['iranyekan'].join(','),
  },
})

export default theme

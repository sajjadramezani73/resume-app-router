import { ThemeProvider } from '@material-tailwind/react'
import Layout from './container/layout/Layout'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

const App = () => {
  const customTheme = {
    list: {
      styles: {
        base: {
          list: {
            fontFamily: 'iranyekan',
          },
        },
      },
    },
    typography: {
      styles: {
        variants: {
          h1: {
            fontFamily: 'iranyekan',
          },
          h2: {
            fontFamily: 'iranyekan',
          },
          h3: {
            fontFamily: 'iranyekan',
          },
          h4: {
            fontFamily: 'iranyekan',
          },
          h5: {
            fontFamily: 'iranyekan',
          },
          h6: {
            fontFamily: 'iranyekan',
          },
          lead: {
            fontFamily: 'iranyekan',
          },
          paragraph: {
            fontFamily: 'iranyekan',
          },
          small: {
            fontFamily: 'iranyekan',
          },
        },
      },
    },
    tooltip: {
      styles: {
        base: {
          fontFamily: 'iranyekan',
        },
      },
    },
    dialog: {
      styles: {
        base: {
          container: {
            fontFamily: 'iranyekan',
          },
        },
      },
    },
    button: {
      styles: {
        base: {
          initial: {
            fontFamily: 'iranyekan',
          },
        },
      },
    },
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={customTheme}>
        <Layout />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App

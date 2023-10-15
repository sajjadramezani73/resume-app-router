import Layout from './container/layout/Layout'
import { QueryClientProvider, QueryClient } from 'react-query'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from './muiConfig/theme'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout />
        </ThemeProvider>
      </StyledEngineProvider>
    </QueryClientProvider>
  )
}

export default App

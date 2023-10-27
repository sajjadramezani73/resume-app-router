import Layout from './container/layout/Layout'
import { QueryClientProvider, QueryClient } from 'react-query'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from './muiConfig/theme'
import { Provider } from 'react-redux'
import { store } from './store/store'

const queryClient = new QueryClient()

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout />
          </ThemeProvider>
        </StyledEngineProvider>
      </QueryClientProvider>
    </Provider>
  )
}

export default App

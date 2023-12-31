import { QueryClientProvider, QueryClient } from 'react-query'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from './muiConfig/theme'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { CacheProvider } from '@emotion/react'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'
import createCache from '@emotion/cache'
import { setupAxios } from './services/axios/axios'
import axios from 'axios'
import MainLayout from './layouts/mainLayout'
import { Toaster } from 'sonner'

const App = () => {
  setupAxios(axios)
  const queryClient = new QueryClient()

  // Create rtl cache
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  })

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CacheProvider value={cacheRtl}>
              <CssBaseline />
              <MainLayout />
              <Toaster expand={false} position="top-center" richColors />
            </CacheProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </QueryClientProvider>
    </Provider>
  )
}

export default App

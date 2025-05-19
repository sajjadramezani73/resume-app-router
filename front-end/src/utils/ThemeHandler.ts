import { getCookie, setCookie } from 'cookies-next'

export const getCurrentScheme = async () => {
  // The `getCookie` function is not available on the server, imagine that
  // we have to access the scheme while Next.js is rendering the `<RootLayout />`
  // component (this happens server side). We can use the `cookies` function
  // from the `next/headers` package to access the cookies from the request headers.
  if (typeof window === 'undefined') {
    return import('next/headers').then(async ({ cookies }) => {
      const cookieStore = await cookies()
      return cookieStore.has('theme')
        ? cookieStore.get('theme')?.value
        : 'light'
    })
  }

  return getCookie('theme', { path: '/' })
}

export const toggleTheme = async () => {
  const theme = await getCurrentScheme()

  const newTheme = theme === 'dark' ? 'light' : 'dark'

  setCookie('theme', newTheme, {
    path: '/',
  })

  return newTheme
}

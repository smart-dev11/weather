import '@/styles/globals.css'
import createEmotionCache from '@/util/createEmotionCache'
import { theme } from '@/util/theme'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'

const clientSideEmotionCache = createEmotionCache()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

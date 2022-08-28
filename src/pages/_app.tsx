import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import '@/styles/globals.css'
import AppProvider from '@/providers/AppProvider'
import { GoogleTagManager, GoogleTagManagerId } from '@/components/functional'
import * as gtag from '@/libs/gtag'
import { googleTagManagerId } from '@/libs/gtm'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <AppProvider>
      {googleTagManagerId && (
        <GoogleTagManager
          googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
        />
      )}
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp

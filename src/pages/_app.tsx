import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/styles/theme'
import GoogleTagManager, {
  GoogleTagManagerId,
} from '@/components/google-tag-manager'
import * as gtag from '@/utils/gtag'
import { googleTagManagerId } from '@/utils/gtm'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
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
    <ChakraProvider theme={theme}>
      {googleTagManagerId && (
        <GoogleTagManager
        googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
      />
      )}
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

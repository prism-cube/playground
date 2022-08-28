import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '@/styles/theme'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="format-detection"
          content="telephone=no,email=no,address=no"
        />
        <meta
          name="google-site-verification"
          content="jefF9xTvBbtoEWgehqWi5V5foWJNEuISsZgSu2CebFA"
        />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

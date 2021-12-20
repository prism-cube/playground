import { Html, Head, Main, NextScript } from 'next/document'

const MyDocument = () => {
  return (
    <Html lang="ja">
      <Head>
        <meta name="theme-color" content="#333" />
        <meta
          property="og:site_name"
          content={process.env.NEXT_PUBLIC_SITE_NAME}
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="format-detection"
          content="telephone=no,email=no,address=no"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument

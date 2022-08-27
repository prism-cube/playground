import NextHead from 'next/head'
import { config } from '@/constants'

interface HeadProps {
  title?: string
  description?: string
  isAdmin?: boolean
  ogUrl?: string
  ogImage?: string
}

export const Head: React.FC<HeadProps> = ({
  title = '',
  description = '',
  isAdmin = false,
  ogUrl = '',
  ogImage = '/ogp.jpg',
}) => {
  return (
    <NextHead>
      <title>
        {title === '' ? config.SITE_NAME : `${title} - ${config.SITE_NAME}`}
      </title>
      <meta name="description" content={description} />

      <meta property="og:title" content={`${title} - ${config.SITE_NAME}`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={config.SITE_URL + ogUrl} />
      <meta property="og:image" content={config.SITE_URL + ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={config.SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={config.TWITTER_ACCOUNT} />

      {isAdmin && (
        <>
          <meta name="robots" content="noindex" />
          <meta name="googlebot" content="noindex" />
        </>
      )}
    </NextHead>
  )
}

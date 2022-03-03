import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { Box, Button, Stack } from '@chakra-ui/react'
import { Layout } from '@/components/layout'
import { Meta } from '@/types/meta'

const meta: Meta = {
  title: `${process.env.NEXT_PUBLIC_SITE_NAME}`,
  description: '',
  url: `${process.env.NEXT_PUBLIC_URL}`,
  ogp: `${process.env.NEXT_PUBLIC_URL}/ogp.jpg`,
}

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:url" content={meta.url} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.ogp} />
        <meta property="og:type" content="website" />
      </Head>

      <Stack p={2} align={'center'}>
        <Box>
          <Link href="/predictions/j1-2022" passHref>
            <Button as="a">J1 2022 順位予想メーカー</Button>
          </Link>
        </Box>

        <Box>
          <Link href="/predictions/j2-2022" passHref>
            <Button as="a">J2 2022 順位予想メーカー</Button>
          </Link>
        </Box>
      </Stack>
    </Layout>
  )
}

export default Home

import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import {
  Box,
  chakra,
  Button,
  Avatar,
  Stack,
  HStack,
  Heading,
} from '@chakra-ui/react'
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

      <Box>
        <chakra.h1 color="tomato">Hello World!</chakra.h1>
        <Link href="https://google.com" passHref>
          <Button as="a">Google</Button>
        </Link>
      </Box>

      <Stack>
        <Link href="/predictions/j1-2022">
          <a>J1 2022 順位予想</a>
        </Link>
      </Stack>

      <Stack>
        <HStack>
          <Avatar />
          <Stack>
            <Heading size="sm">Some member</Heading>
            <Box>こんにちは これはコメントですねん</Box>
          </Stack>
        </HStack>
        <HStack>
          <Avatar />
          <Stack>
            <Heading size="sm">Some member</Heading>
            <Box>こんにちは これはコメントなのねん</Box>
          </Stack>
        </HStack>
      </Stack>
    </Layout>
  )
}

export default Home

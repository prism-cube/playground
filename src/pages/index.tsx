import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { Box, chakra, Button, Avatar, Stack, HStack, Heading } from '@chakra-ui/react'
import { Layout } from 'src/components/layout'

const Home: NextPage = () => {
  return (
    <Layout>

      <Box>
        <chakra.h1 color="tomato">Hello World!</chakra.h1>
        <chakra.h2>こんにちは！</chakra.h2>
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

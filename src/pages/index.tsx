import type { NextPage } from 'next'
import NextLink from 'next/link'
import { Heading, Container, VStack, Link } from '@chakra-ui/react'
import { Head } from '@/components/functional'
import { Layout } from '@/components/layouts'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head />
      <Container centerContent>
        <VStack spacing={12} w="100%">
          <Heading pt={4}>Hello, World!</Heading>
          <NextLink href="/probability" passHref>
            <Link>確率シミュレーター</Link>
          </NextLink>
        </VStack>
      </Container>
    </Layout>
  )
}

export default Home

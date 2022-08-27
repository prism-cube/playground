import type { NextPage } from 'next'
import NextLink from 'next/link'
import { Heading, Container, VStack, Link } from '@chakra-ui/react'
import { Head } from '@/components/functional'
import { Layout } from '@/components/layouts'

const Page: NextPage = () => {
  return (
    <Layout>
      <Head title="メモ" />
    </Layout>
  )
}

export default Page

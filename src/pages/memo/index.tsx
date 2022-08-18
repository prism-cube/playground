import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { Container, Box, Heading, Textarea } from '@chakra-ui/react'
import { Layout } from '@/components/layout'
import { db } from '@/utils/db'
import { Meta } from '@/types/meta'
import { Memo } from '@/types/memo'

const meta: Meta = {
  title: `ブラウザメモ - ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  description: '',
  url: `${process.env.NEXT_PUBLIC_URL}/predictions/memo`,
  ogp: `${process.env.NEXT_PUBLIC_URL}/api/ogp?title=ブラウザメモ`,
}

const addMemo = async () => {
  try {
    const id = await db.memos.add({
      content: 'contentです',
      updatedAt: new Date(),
    })
  } catch (error) {
    console.log(error)
  }
}

const Memo: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:url" content={meta.url} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.ogp} />
      </Head>

      <Container maxW="container.xl">
        <Box mt={3}>
          <Textarea size="lg" resize="none" height="85vh" />
          <button onClick={addMemo}>Add</button>
          <Heading mt={3}>ブラウザ メモ</Heading>
        </Box>
      </Container>
    </Layout>
  )
}

export default Memo

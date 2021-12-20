import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { Container, Center, Heading } from '@chakra-ui/react'
import { Layout } from '@/components/layout'
import TeamList from '@/components/predictions/team-list'
import { Meta } from '@/types/meta'
import { Team } from '@/types/predictions'

const meta: Meta = {
  title: `J2 順位予想メーカー 2022 - ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  description: '',
  url: `${process.env.NEXT_PUBLIC_URL}/predictions/j2-2022`,
  ogp: `${process.env.NEXT_PUBLIC_URL}/api/ogp/predictions`,
}

const J2_2022: NextPage = () => {
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

      <Container maxW="container.lg">
        <Heading p={3}>J2 順位予想メーカー 2022</Heading>
        <Center p={1}>
          <TeamList teams={teams} />
        </Center>
      </Container>
    </Layout>
  )
}

export default J2_2022

const teams: Team[] = [
  { id: 1, name: '徳島ヴォルティス', order: 0 },
  { id: 2, name: '大分トリニータ', order: 1 },
  { id: 3, name: 'ベガルタ仙台', order: 2 },
  { id: 4, name: '横浜FC', order: 3 },
  { id: 5, name: 'ヴァンフォーレ甲府', order: 4 },
  { id: 6, name: 'V・ファーレン長崎', order: 5 },
  { id: 7, name: 'FC町田ゼルビア', order: 6 },
  { id: 8, name: 'アルビレックス新潟', order: 7 },
  { id: 9, name: 'モンテディオ山形', order: 8 },
  { id: 10, name: 'ジェフユナイテッド千葉', order: 9 },
  { id: 11, name: 'FC琉球', order: 10 },
  { id: 12, name: '水戸ホーリーホック', order: 11 },
  { id: 13, name: 'ファジアーノ岡山', order: 12 },
  { id: 14, name: '東京ヴェルディ', order: 13 },
  { id: 15, name: 'ブラウブリッツ秋田', order: 14 },
  { id: 16, name: '栃木SC', order: 15 },
  { id: 17, name: 'レノファ山口FC', order: 16 },
  { id: 18, name: '大宮アルディージャ', order: 17 },
  { id: 19, name: 'ツエーゲン金沢', order: 18 },
  { id: 20, name: 'ザスパクサツ群馬', order: 19 },
  { id: 21, name: 'ロアッソ熊本', order: 20 },
  { id: 22, name: 'いわてグルージャ盛岡', order: 21 },
]

import React, { useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {
  Box,
  chakra,
  Container,
  Button,
  Center,
  Stack,
  HStack,
  Heading,
  VStack,
  Spacer,
  Flex,
  Badge,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Container as ContainerDnd,
  Draggable,
  DropResult,
} from '@mndzielski/react-smooth-dnd'
import { Layout } from '@/components/layout'
import { Meta } from '@/types/meta'
import { Team } from '@/types/predictions'
import { ArrayMoveImmutable } from '@/utils/array-move'

const meta: Meta = {
  title: `J1 順位予想メーカー 2022 - ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  description: '',
  url: `${process.env.NEXT_PUBLIC_URL}/predictions/j1-2022`,
  ogp: `${process.env.NEXT_PUBLIC_URL}/api/ogp/predictions`,
}

const J1_2022: NextPage = () => {
  const [items, setItems] = useState(teams)

  const onDrop = (dropResult: DropResult) => {
    const { removedIndex, addedIndex } = dropResult
    const updater = (itemsArray: Team[]) =>
      ArrayMoveImmutable(itemsArray, removedIndex, addedIndex).map(
        (item: Team, idx: number) => {
          return { ...item, order: idx }
        }
      )
    setItems(updater)
  }

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
        <Heading p={3}>J1 順位予想メーカー 2022</Heading>
        <Center p={1}>
          <VStack>
            <ContainerDnd onDrop={onDrop}>
              {items.map((team: Team) => (
                <Draggable key={team.id}>
                  <HStack w="100%" p={2} cursor="grab">
                    {team.order + 1 === 1 || team.order + 1 === 2 ? (
                      <Badge colorScheme="orange">{team.order + 1}</Badge>
                    ) : team.order + 1 === items.length ||
                      team.order + 1 === items.length - 1 ? (
                      <Badge colorScheme="white">{team.order + 1}</Badge>
                    ) : (
                      <Badge>{team.order + 1}</Badge>
                    )}
                    <Spacer />
                    <Box>{team.name}</Box>
                    <Spacer />
                    <HamburgerIcon />
                  </HStack>
                </Draggable>
              ))}
            </ContainerDnd>
          </VStack>
        </Center>
      </Container>
    </Layout>
  )
}

export default J1_2022

const teams: Team[] = [
  { id: 1, name: '川崎フロンターレ', order: 0 },
  { id: 2, name: '横浜F・マリノス', order: 1 },
  { id: 3, name: 'ヴィッセル神戸', order: 2 },
  { id: 4, name: '鹿島アントラーズ', order: 3 },
  { id: 5, name: '名古屋グランパス', order: 4 },
  { id: 6, name: '浦和レッズ', order: 5 },
  { id: 7, name: 'サガン鳥栖', order: 6 },
  { id: 8, name: 'アビスパ福岡', order: 7 },
  { id: 9, name: 'FC東京', order: 8 },
  { id: 10, name: 'コンサドーレ札幌', order: 9 },
  { id: 11, name: 'サンフレッチェ広島', order: 10 },
  { id: 12, name: 'セレッソ大阪', order: 11 },
  { id: 13, name: 'ガンバ大阪', order: 12 },
  { id: 14, name: '清水エスパルス', order: 13 },
  { id: 15, name: '柏レイソル', order: 14 },
  { id: 16, name: '湘南ベルマーレ', order: 15 },
  { id: 17, name: 'ジュビロ磐田', order: 16 },
  { id: 18, name: '京都サンガF.C.', order: 17 },
]

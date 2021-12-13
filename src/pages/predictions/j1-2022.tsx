import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { Box, chakra, Button, Avatar, Stack, HStack, Heading } from '@chakra-ui/react'
import { Layout } from 'src/components/layout'

const J1_2022: NextPage = () => {
  return (
    <Layout>
      <Box>
        <chakra.h1 color="tomato">Hello World!</chakra.h1>
      </Box>
    </Layout>
  )
}

export default J1_2022

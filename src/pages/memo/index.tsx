import { useState } from 'react'
import type { NextPage } from 'next'
import {
  HStack,
  VStack,
  Text,
  Textarea,
  Flex,
  Icon,
  IconButton,
} from '@chakra-ui/react'
import { BiSave, BiTrash } from 'react-icons/bi'
import { MdAdd } from 'react-icons/md'
import { Head } from '@/components/functional'
import { Layout } from '@/components/layouts'
import { Memo } from '@/features/memo/types'

const Page: NextPage = () => {
  // const memos = useLiveQuery(() => db.memos.toArray()) || []
  const memos: Memo[] = []

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Layout>
      <Head title="メモ" />

      <HStack h="calc(100vh - 64px)">
        <VStack
          w="320px"
          h="100%"
          display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
          overflow="scroll"
        >
          <Flex justify="space-between" w="100%">
            <HStack>
              <IconButton
                variant="outline"
                colorScheme="gray"
                aria-label="Add memo"
                icon={<Icon as={MdAdd} w={6} h={6} color="gray.100" />}
              />
            </HStack>
            <HStack>
              <IconButton
                variant="outline"
                colorScheme="gray"
                aria-label="Delete memo"
                icon={<Icon as={BiTrash} w={6} h={6} color="gray.100" />}
              />
            </HStack>
          </Flex>
          <VStack
            p={2}
            alignItems="flex-start"
            borderRadius="lg"
            bg="yellow.500"
          >
            <Text fontWeight="bold">1行目の内容</Text>
            <Text color="gray.50">2022/08/29</Text>
          </VStack>
          {memos.map((memo) => (
            <VStack
              key={memo.id}
              p={2}
              alignItems="flex-start"
              borderRadius="lg"
              _hover={{ bg: 'gray.700' }}
              cursor="pointer"
            >
              <Text fontWeight="bold">{memo.content}</Text>
              <Text color="gray.100">
                {memo.updatedAt.toLocaleDateString()}
              </Text>
            </VStack>
          ))}
          {[...Array(20)].map((_, i) => (
            <VStack
              key={i}
              p={2}
              alignItems="flex-start"
              borderRadius="lg"
              _hover={{ bg: 'gray.700' }}
              cursor="pointer"
            >
              <Text fontWeight="bold">文字数文字数文字数</Text>
              <Text color="gray.100">2022/08/29</Text>
            </VStack>
          ))}
        </VStack>
        <VStack h="100%" w="100%">
          <Flex justify="center" w="100%">
            <HStack>
              <Text color="gray.100">2022/08/29 02:56</Text>
              <IconButton
                variant="outline"
                colorScheme="gray"
                aria-label="Save memo"
                icon={<Icon as={BiSave} w={6} h={6} color="gray.100" />}
              />
            </HStack>
          </Flex>
          <Textarea h="100%" />
        </VStack>
      </HStack>
    </Layout>
  )
}

export default Page

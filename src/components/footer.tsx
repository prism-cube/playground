import {
  useColorModeValue,
  Box,
  Container,
  Stack,
  Text,
} from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box bg={useColorModeValue('white', 'black')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'center' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© 2021 Playground.PrismCube</Text>
      </Container>
    </Box>
  )
}

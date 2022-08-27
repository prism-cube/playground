import { ReactNode } from 'react'
import NextLink from 'next/link'
import { Box, Text, Link } from '@chakra-ui/react'

interface Props {
  children: ReactNode
  href: string
}

const Logo = ({ children, href }: Props) => {
  return (
    <NextLink href={href} passHref>
      <Box as="a">
        <Text fontSize="lg" fontWeight="bold">
          {children}
        </Text>
      </Box>
    </NextLink>
  )
}

export default Logo

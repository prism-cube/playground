import { ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'

interface Props {
  children: ReactNode
}

const HeaderContainer = ({ children }: Props) => {
  return (
    <header>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        px={4}
        py={2}
      >
        {children}
      </Flex>
    </header>
  )
}

export default HeaderContainer

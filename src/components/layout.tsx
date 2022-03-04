import { ReactNode } from 'react'
import { useColorModeValue, Box } from '@chakra-ui/react'
import Header from 'src/components/header'
import Footer from 'src/components/footer'

type Props = {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Box bg={useColorModeValue('white', 'black')} minH={'100vh'}>
        <main>{children}</main>
      </Box>
      <Footer />
    </>
  )
}

export default Layout

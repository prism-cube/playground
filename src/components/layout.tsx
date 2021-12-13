import { ReactNode } from 'react'
import { Container } from '@chakra-ui/react'
import Header from 'src/components/header'
import Footer from 'src/components/footer'

type Props = {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <>
      <Header />

      <Container maxW="container.lg">
        <main>{children}</main>
      </Container>

      <Footer />
    </>
  )
}

export default Layout
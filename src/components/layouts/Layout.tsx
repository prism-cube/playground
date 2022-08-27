import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'
import Header from '@/components/layouts/Header'

interface LayoutProps {
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Box px={4} py={2}>
          {children}
        </Box>
      </main>
    </>
  )
}

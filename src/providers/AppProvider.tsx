import { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/styles/theme'
import { Notification, SwrConfig } from '@/components/functional'

type AppProviderProps = {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <RecoilRoot>
      <SwrConfig>
        <ChakraProvider theme={theme}>
          <Notification />
          {children}
        </ChakraProvider>
      </SwrConfig>
    </RecoilRoot>
  )
}

export default AppProvider

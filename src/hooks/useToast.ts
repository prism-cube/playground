import { useCallback } from 'react'
import { useToast as useToastChakra } from '@chakra-ui/react'

type Props = {
  title: string
  status: 'info' | 'warning' | 'success' | 'error'
}

export const useToast = () => {
  const toast = useToastChakra()

  const showToast = useCallback(
    (props: Props) => {
      const { title, status } = props
      toast({
        title,
        status,
        position: 'bottom-left',
        duration: 5000,
        isClosable: true,
      })
    },
    [toast]
  )

  return { showToast }
}

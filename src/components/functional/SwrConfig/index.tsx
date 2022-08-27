import React, { ReactNode, useCallback } from 'react'
import { SWRConfig } from 'swr'

interface SwrConfigProps {
  children: ReactNode
}

export const SwrConfig: React.FC<SwrConfigProps> = ({ children }) => {
  const onError = () => {
    // TODO: Notificationに追加
  }

  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        shouldRetryOnError: false,
        onError,
      }}
    >
      {children}
    </SWRConfig>
  )
}

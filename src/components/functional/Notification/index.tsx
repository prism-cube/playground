import { useEffect, useMemo, useCallback } from 'react'
import { useToast } from '@/hooks'
import { useNotificationState } from '@/stores/notificationState'

export const Notification = () => {
  const { state, removeNotification } = useNotificationState()
  const { showToast } = useToast()

  const getState = useMemo(() => {
    return state && state
  }, [state])

  const removeState = useCallback(() => {
    removeNotification()
  }, [removeNotification])

  const notification = getState
  useEffect(() => {
    if (notification) {
      showToast({
        title: notification.message,
        status: notification.type,
      })

      removeState()
    }
  }, [notification])

  return <></>
}

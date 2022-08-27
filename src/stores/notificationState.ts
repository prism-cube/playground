import { useMemo } from 'react'
import { atom, selector, useRecoilValue, useRecoilCallback } from 'recoil'

export type NotificationType = 'info' | 'warning' | 'success' | 'error'

export type Notification = {
  type: NotificationType
  message: string
}

const notificationsState = atom<Notification[]>({
  key: 'notificationsState',
  default: [],
})

export const notificationState = selector<Notification>({
  key: 'notificationState',
  get: ({ get }) => {
    const notifications = get(notificationsState)
    return notifications && notifications[0]
  },
})

export const useNotificationState = () => {
  const notification = useRecoilValue(notificationState)

  const state = useMemo(() => {
    return notification
  }, [notification])

  const addNotification = useRecoilCallback(
    ({ set }) =>
      (notification: Notification) => {
        set(notificationsState, (state) => [...state, notification])
      }
  )

  const removeNotification = useRecoilCallback(({ set }) => () => {
    set(notificationsState, (notifications) => notifications.slice(1))
  })

  return {
    state,
    addNotification,
    removeNotification,
  }
}

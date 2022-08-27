import { useCallback } from 'react'

type Method = 'get' | 'post' | 'put' | 'delete'

export const useFetcher = () => {
  const fetcher = useCallback((url: string, fetchArg?: RequestInit) => {
    return fetch(url, fetchArg)
      .then(async (res) => {
        if (!res.ok) {
          const errorData = await res.json()
          const error = new Error(
            errorData.message ??
              '何らかのエラーが発生しました。もう一度お試しください。'
          )
          throw error
        }
        return res.json()
      })
      .catch((error) => {
        console.log(error)
        throw error
      })
  }, [])

  const request = (method: Method, data: any): RequestInit => {
    return {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  }

  return { fetcher, request }
}

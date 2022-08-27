import { NextApiRequest, NextApiResponse } from 'next'
import { createRouter } from 'next-connect'

import { setResponse } from '@/libs/api'
import { ApiErrorResponseType, ApiSuccessResponseType } from '@/types'

export const router = createRouter<
  NextApiRequest,
  NextApiResponse<ApiSuccessResponseType<unknown> | ApiErrorResponseType>
>()

export const onError = (
  err: unknown,
  req: NextApiRequest,
  res: NextApiResponse
) => {
  setResponse.InternalServerError(res)
}

export const onNoMatch = (req: NextApiRequest, res: NextApiResponse) => {
  setResponse.NotFound(res)
}

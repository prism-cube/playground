import { NextApiResponse } from 'next'
import * as z from 'zod'
import { setResponse } from '@/libs/api'

export const schemaForType =
  <T>() =>
  <S extends z.ZodType<T, any, any>>(arg: S) => {
    return arg
  }

export const validation = <T extends z.ZodRawShape>(
  schema: z.ZodObject<T>,
  requestBody: any,
  res: NextApiResponse
) => {
  try {
    return schema.parse(requestBody)
  } catch (err) {
    setResponse.BadRequest(res)
  }
}

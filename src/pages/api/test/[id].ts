import type { NextApiRequest, NextApiResponse } from 'next'
import { setResponse } from '@/libs/api'
import { router, onError, onNoMatch } from '@/libs/next-connect'

router.get(
  'api/test/:id',
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    try {
      setResponse.OK(res, { id })
    } catch (error) {
      setResponse.InternalServerError(
        res,
        `失敗しました。しばらく待ってからもう一度やりなおしてください。`
      )
    }
  }
)

router.post(
  'api/test/:id',
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    try {
      setResponse.OK(res, { id })
    } catch (error) {
      setResponse.InternalServerError(
        res,
        `失敗しました。しばらく待ってからもう一度やりなおしてください。`
      )
    }
  }
)

export default router.handler({ onError, onNoMatch })

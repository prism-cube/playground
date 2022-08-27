import * as z from 'zod'
import { ProbabilityCalc } from '@/features/probability/types'
import { schemaForType } from '@/libs/zod'
import { validationMessages } from '@/constants'

export const probabilityCalcSchema = schemaForType<ProbabilityCalc>()(
  z.object({
    numerator: z.number().min(1, validationMessages.required('分子')),
    denominator: z.number().min(1, validationMessages.required('分母')),
    frequency: z
      .number()
      .min(1, validationMessages.required('確率を満たす回数')),
  })
)

import { useState } from 'react'
import type { NextPage } from 'next'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Heading, Stack, Button, Text, Box, Spinner } from '@chakra-ui/react'

import { probabilityCalcSchema } from '@/features/probability/schemas'
import {
  ProbabilityCalc,
  ProbabilityCalcResult,
} from '@/features/probability/types'
import { Head } from '@/components/functional'
import { FormInputNumber } from '@/components/forms'
import { Layout } from '@/components/layouts'
import { sleep, random } from '@/utils'

const Page: NextPage = () => {
  const [calcResult, setCalcResult] = useState<ProbabilityCalcResult>()
  const [isCalculating, setIsCalculating] = useState<Boolean>(false)

  const methods = useForm<ProbabilityCalc>({
    mode: 'onChange',
    resolver: zodResolver(probabilityCalcSchema),
    defaultValues: {
      numerator: 1,
      frequency: 1,
    },
  })

  const onSubmit: SubmitHandler<ProbabilityCalc> = async (formData) => {
    setIsCalculating(true)

    await sleep(1)
    const trialCount = await calculation(formData)

    setCalcResult({
      ...formData,
      trialCount: trialCount,
    })
    setIsCalculating(false)
  }

  const calculation = async (data: ProbabilityCalc) => {
    let trialCount = 0
    let frequency = 0
    while (frequency < data.frequency) {
      const r = random(1, data.denominator)
      const n = Array.from(Array(data.numerator).keys(), (x) => x + 1)
      if (n.includes(r)) {
        frequency++
      }
      trialCount++
    }
    return trialCount
  }

  return (
    <Layout>
      <Head title="確率シミュレーター" />

      <Heading as="h1" size="lg" pb={2}>
        確率シミュレーター
      </Heading>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <FormInputNumber<ProbabilityCalc>
              name="numerator"
              label="分子"
              fieldError={methods.formState.errors.numerator}
            />
            <FormInputNumber<ProbabilityCalc>
              name="denominator"
              label="分母"
              fieldError={methods.formState.errors.denominator}
            />
            <FormInputNumber<ProbabilityCalc>
              name="frequency"
              label="確率を引く回数"
              fieldError={methods.formState.errors.frequency}
            />
            <Button
              colorScheme="green"
              isLoading={methods.formState.isSubmitting}
              type="submit"
            >
              実行
            </Button>
          </Stack>
        </form>
      </FormProvider>

      {isCalculating ? (
        <Box p={4} textAlign="center">
          <Spinner size="xl" />
        </Box>
      ) : (
        calcResult && (
          <Stack spacing={4} p={4} textAlign="center">
            <Text>{`${calcResult.numerator}/${calcResult.denominator}を${calcResult.frequency}回引くためにかかった回数は`}</Text>
            <Text
              fontSize="2xl"
              fontWeight="bold"
            >{`${calcResult.trialCount} 回`}</Text>
          </Stack>
        )
      )}
    </Layout>
  )
}

export default Page

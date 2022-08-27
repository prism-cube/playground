export type ProbabilityCalc = {
  numerator: number
  denominator: number
  frequency: number
}

export type ProbabilityCalcResult = ProbabilityCalc & {
  trialCount: number
}

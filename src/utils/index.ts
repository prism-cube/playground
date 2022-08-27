export const sleep = async (millisecond: number) => {
  await new Promise((resolve) => setTimeout(resolve, millisecond))
}

export const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

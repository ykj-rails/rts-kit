import { sample } from './sample'

const hello = async () => {
  const result = sum(2, 2)
  console.log(`hello ${result}`)
}

const sum = (x: number, y: number) => {
  return x + y
}

hello()
sample()

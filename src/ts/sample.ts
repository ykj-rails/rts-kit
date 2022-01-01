type Sample = {
  sample: string
  sample2: number
}

export const sample = () => {
  const object: Sample = {
    sample: 'sample',
    sample2: 9999,
  }
  console.log(object)
  asyncHello()
  replaceAllFunc()
}

const asyncHello = async () => {
  const result = await sum(2, 2)
  console.log(`hello ${result}`)
}

const sum = (x: number, y: number) => {
  return x + y
}

// ES2021
const replaceAllFunc = () => {
  const hoge = 'hoge hoge'
  const fuga = hoge.replaceAll('hoge', 'fuga')
  console.log(fuga)
}

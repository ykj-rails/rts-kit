const hello = async () => {
  const result = sum(2, 2)
  console.log(`hello ${result}`)
}

const sum = (x, y) => {
  return x + y
}

hello()

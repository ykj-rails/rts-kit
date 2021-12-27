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
}

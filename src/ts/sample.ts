/*
  - ES2015以降の構文
    - constとlet
    - アロー関数
    - スプレッド構文
  - ES2016
    - Array.prototype.includes()
  - ES2019
    - Array.flat()
  - ES2015以降の機能
    - Promise
    - async / await
*/

// 型定義
type Human = {
  name: string
  age: number
  gender?: 'male' | 'female'
}

// letで定義
let human: Human = {
  name: 'yukiji',
  age: 32,
}

// スプレッド構文
let newHuman: Human = {
  ...human,
  gender: 'male',
}

// Promise
const promiseSum = (x: number, y: number) => {
  return new Promise((resolve) => {
    let value = x + y
    setTimeout(() => {
      resolve(value)
    }, 2000)
  })
}

// async / await
const asyncSum = async () => {
  const result = await promiseSum(2, 2)
  console.log(result)
}

export const sample = () => {
  console.log(newHuman)
  asyncSum()
}

const aaa = (aaa: any) => {

}
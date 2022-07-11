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

// // letで定義
// let human: Human = {
//   name: 'yukiji',
//   age: 32,
// }

// // スプレッド構文
// let newHuman: Human = {
//   ...human,
//   gender: 'male',
// }

// Promise
const promiseSum = (x: number, y: number) => {
  return new Promise((resolve) => {
    const value = x + y
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
  // console.log(newHuman)
  asyncSum()
}

const body = document.querySelector('body')
const div = document.createElement('div')
div.textContent = 'sampleeee'
if (body) {
  body.appendChild(div)
}

type MyErrorEvent<T = Error> = {
  error: T
  type: string
}

class NetworkError extends Error {
  constructor(e?: string) {
    super(e)
    this.name = new.target.name
  }
}

const errorEvent: MyErrorEvent = {
  error: new Error('エラーです'),
  type: 'syntax',
}

const networkErrorEvent: MyErrorEvent<NetworkError> = {
  error: new NetworkError('ネットワークエラーです'),
  type: 'nextwork',
}

const strArray = ['1', '2', '3']

const convertStrArrayToNumArray = (strArray: readonly string[]): number[] => {
  // strArray.push('4')
  const numArray = strArray.map((str) => {
    return Number(str)
  })

  return numArray
}

// TODO インデックス型
let obj: {
  [K: string]: string
}

// TODO インデックス型はRecord<K, T>ユーティリティ型を用いても表現できる
let obj2: Record<string, string>

obj2 = {
  name: 'yukiji',
  age: '33',
}

let sw
switch (sw) {
  case 'aa':
  case 'bb':
}

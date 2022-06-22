import React from 'react'
import { useRecoilState } from 'recoil'

import { sampleState } from '@/store/sampleState'

export const RecoilSample = () => {
  const [sample, setSample] = useRecoilState(sampleState)

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSample(event.target.value)
  }

  return (
    <main>
      <h1>RecoilSample</h1>
      <input type="text" value={sample} onChange={handleOnChange}></input>
    </main>
  )
}

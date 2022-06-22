import React from 'react'
import { useRecoilValue } from 'recoil'

import { getSamlpeState } from '@/store/sampleState'

export const Top = () => {
  const text = useRecoilValue(getSamlpeState)
  return (
    <main>
      <h1>Top</h1>
      <p>sampleRecoil: {text}</p>
    </main>
  )
}

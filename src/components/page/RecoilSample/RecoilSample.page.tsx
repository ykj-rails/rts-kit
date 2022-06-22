import React from 'react'
import { Link } from 'react-router-dom'

import { Footer, Header } from '@/components/common'

import { RecoilSample } from './RecoilSample'

export const RecoilSamplePage = () => {
  return (
    <>
      <Header />
      <RecoilSample />
      <Link to="/">Top</Link>
      <Footer />
    </>
  )
}

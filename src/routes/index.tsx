import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const TopPage = lazy(() => import('@/pages'))
const RecoilPage = lazy(() => import('@/pages/recoil'))

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/recoil" element={<RecoilPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

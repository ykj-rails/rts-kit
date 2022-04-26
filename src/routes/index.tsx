import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const TopPage = lazy(() => import('@/pages'))

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<TopPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

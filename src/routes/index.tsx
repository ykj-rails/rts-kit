import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import TopPage from '@/pages'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage />} />
      </Routes>
    </BrowserRouter>
  )
}

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {/* Normal app (keep any existing auth/redirects you have) */}
      <Route path="/" element={<App />} />

      {/* NEW: public route for iframe embed */}
      <Route path="/embed" element={<App embed />} />
    </Routes>
  </BrowserRouter>
)

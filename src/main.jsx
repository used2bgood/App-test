// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {/* Normal app entry (keep whatever auth you have elsewhere) */}
      <Route path="/" element={<App />} />
      {/* Public embed route */}
      <Route path="/embed" element={<App embed />} />
    </Routes>
  </BrowserRouter>
)

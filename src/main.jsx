import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/embed" element={<App embed />} />
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
);

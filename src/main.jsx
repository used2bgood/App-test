import { BrowserRouter, Routes, Route } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/embed" element={<App embed />} />
    </Routes>
  </BrowserRouter>
);

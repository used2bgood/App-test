// src/App.jsx
import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"
import { useLocation } from 'react-router-dom'

function App({ embed = false }) {
  // belt & suspenders: also detect by URL
  const { pathname } = useLocation()
  const isEmbed = embed || pathname.startsWith('/embed')

  return (
    <>
      <Pages embed={isEmbed} />
      <Toaster />
    </>
  )
}
export default App

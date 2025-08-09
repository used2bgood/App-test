import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"
import { useLocation } from 'react-router-dom'

function App({ embed = false }) {
  // belt-and-suspenders: also detect via URL
  const { pathname } = useLocation?.() || { pathname: window.location.pathname }
  const isEmbed = embed || pathname.startsWith('/embed')

  // You can pass this down as a prop or via context
  return (
    <>
      <Pages embed={isEmbed} />
      <Toaster />
    </>
  )
}
export default App
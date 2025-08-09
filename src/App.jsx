// src/App.jsx
import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"
import { useLocation } from 'react-router-dom'

function App({ embed = false }) {
  const { pathname } = useLocation()
  const isEmbed = embed || pathname.startsWith('/embed')

  // TEMP: prove embed route renders
  if (isEmbed) {
    return (
      <>
        <div style={{padding:'1rem', background:'#e1f2e3', borderRadius:8}}>
          <h2 style={{marginTop:0}}>Embed route loaded ✅</h2>
          <p>If this shows up, the issue is in your normal UI. Next we’ll re-add pieces until it works.</p>
        </div>
        <Toaster/>
      </>
    );
  }

  // Normal app path
  return (
    <>
      <Pages embed={isEmbed} />
      <Toaster />
    </>
  )
}
export default App

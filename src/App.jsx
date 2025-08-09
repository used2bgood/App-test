import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"
import { useLocation } from 'react-router-dom'

export default function App({ embed = false }) {
  const { pathname } = useLocation()
  const isEmbed = embed || pathname.startsWith('/embed')

  // (optional) temporary embed proof block:
  // if (isEmbed) {
  //   return (
  //     <>
  //       <div style={{padding:'1rem', background:'#e1f2e3', borderRadius:8}}>
  //         <h2 style={{marginTop:0}}>Embed route loaded ✅</h2>
  //       </div>
  //       <Toaster />
  //     </>
  //   )
  // }

  return (
    <>
      <Pages embed={isEmbed} />
      <Toaster />
    </>
  )
}

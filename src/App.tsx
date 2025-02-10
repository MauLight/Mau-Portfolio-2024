
import Layout from './Layout'
import Topbar from './components/Topbar/Topbar'
import { useLocation } from 'react-router'

const App = () => {
  const { pathname } = useLocation()

  const updateBgColor = () => {
    if (pathname.includes('humans')) return 'bg-[#fff0e2]'
    if (pathname.includes('about')) return 'bg-[#f1eee5]'
    if (pathname.includes('distortion')) return 'bg-red-600'
    if (pathname.includes('video')) return 'bg-[#10100e]'
  }



  return (
    <div className="w-screen flex flex-col items-center justify-center">
      <Topbar />
      <Layout />
      <div className={`fixed top-0 left-0 ${updateBgColor()} w-screen h-screen -z-10`}></div>
    </div>
  )
}

export default App

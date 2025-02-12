
import Layout from './Layout'
import Topbar from './components/Topbar/Topbar'
import { useLocation } from 'react-router'

const App = () => {
  const { pathname } = useLocation()

  const updateBgColor = () => {
    switch (true) {
      case pathname.includes('humans'):
        return 'bg-[#fff0e2]'
      case pathname.includes('about'):
        return 'bg-[#f1eee5]'
      case pathname.includes('distortion'):
        return 'bg-red-600'
      case pathname.includes('video'):
        return 'bg-[#10100e]'
      default:
        return 'hidden'
    }
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

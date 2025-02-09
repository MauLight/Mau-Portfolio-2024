
import Layout from './Layout'
import { motion } from 'framer-motion'
import { useFollowPointer } from './hooks/useFollowPointer'
import { useRef } from 'react'
import Topbar from './components/Topbar/Topbar'
import video from '@/assets/end of time.webm'
import { useLocation } from 'react-router'
import { Loader } from './components/Common/Loader'

const App = () => {
  const ref = useRef(null)
  const { pathname } = useLocation()
  const { x, y } = useFollowPointer(ref)

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
      {
        pathname === '/' && (
          <motion.div ref={ref} className='absolute w-[200px] z-0 h-[200px] rounded-full overflow-hidden mix-blend-color-multiply' style={{ x, y }}>
            <video src={video} autoPlay loop muted className='w-full h-full object-cover' />
          </motion.div>
        )
      }
      {
        !(pathname.length > 1) && (
          <Loader />
        )
      }
    </div>
  )
}

export default App

import Layout from './Layout'
import bg from './assets/bg_2.jpg'
import { motion } from 'framer-motion'
import { useFollowPointer } from './hooks/useFollowPointer'
import { useEffect, useRef } from 'react'
import Topbar from './components/Topbar/Topbar'
import video from '@/assets/end of time.mp4'
import { useLocation } from 'react-router'

const App = () => {
  const ref = useRef(null)
  const location = useLocation()
  const { x, y } = useFollowPointer(ref)

  useEffect(() => {
    console.log(y)
  }, [y])

  return (
    <div className="w-screen flex flex-col items-center justify-center">
      <Topbar />
      <Layout />
      {
        location.pathname.length === 1 ? (
          <img src={bg} className='w-screen h-screen fixed top-0 left-0 object-cover opacity-100 -z-10' />
        )
          :
          (
            <div className='fixed top-0 left-0 bg-red-600 w-screen h-screen -z-10'></div>
          )
      }
      <motion.div ref={ref} className='absolute w-[200px] z-0 h-[200px] rounded-full overflow-hidden' style={{ x, y }}>
        <video src={video} autoPlay loop muted className='w-full h-full object-cover' />
      </motion.div>
    </div>
  )
}

export default App

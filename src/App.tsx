import Layout from './Layout'
import bg from './assets/bg_2.jpg'
import { motion } from 'framer-motion'
import { useFollowPointer } from './utils/useFollowPointer'
import { useRef } from 'react'
import Topbar from './components/Topbar/Topbar'

const App = () => {
  const ref = useRef(null)
  const { x, y } = useFollowPointer(ref)

  return (
    <div className="w-screen flex flex-col items-center justify-center border">
      <Topbar />
      <Layout />
      <img src={bg} className='w-screen h-screen fixed top-0 left-0 object-cover opacity-100 -z-10' />
      <motion.div ref={ref} className='absolute w-[200px] z-0 h-[200px] rounded-full bg-[#ff0066]' style={{ x, y }}></motion.div>
    </div>
  )
}

export default App

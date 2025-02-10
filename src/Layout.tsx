import { lazy, Suspense, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Fallback from './components/Common/Fallback'
import { Loader } from './components/Common/Loader'

import { motion } from 'framer-motion'
import { useFollowPointer } from './hooks/useFollowPointer'
import video from '@/assets/end of time.webm'

const Home = lazy(async () => await import('@/components/Home/Home'))
const Humans = lazy(async () => await import('@/components/Photo/Galleries/Humans'))
const Distortion = lazy(async () => await import('@/components/Photo/Galleries/Distortion'))
const AuthHome = lazy(async () => await import('@/components/Dev/Auth/AuthHome'))
const AppHome = lazy(async () => await import('@/components/Dev/Apps/AppHome'))
const ViralHome = lazy(async () => await import('@/components/Video/Viral/ViralHome'))
const ShortFilmsHome = lazy(async () => await import('@/components/Video/Shortfilms/ShortFilmsHome'))
const MotionHome = lazy(async () => await import('@/components/Video/Motion/MotionHome'))
const About = lazy(async () => await import('@/components/About/About'))
const Contact = lazy(async () => await import('@/components/Contact/Contact'))



const Layout = () => {

  const ref = useRef(null)
  const { pathname } = useLocation()
  const { x, y } = useFollowPointer(ref)

  return (
    <div className='w-full max-w-[1440px] h-full'>
      <Suspense fallback={<div className='w-full min-h-screen flex justify-center items-center'>
        <Fallback />
      </div>
      }>
        {
          !(pathname.length > 1) && (
            <Loader />
          )
        }
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/photo/humans' element={<Humans />} />
          <Route path='/photo/distortion' element={<Distortion />} />
          <Route path='/dev/auth' element={<AuthHome />} />
          <Route path='/dev/app' element={<AppHome />} />
          <Route path='/video/viral' element={<ViralHome />} />
          <Route path='/video/shortfilms' element={<ShortFilmsHome />} />
          <Route path='/video/motion' element={<MotionHome />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        {
          pathname === '/' && (
            <motion.div ref={ref} className='absolute w-[200px] z-0 h-[200px] rounded-full overflow-hidden mix-blend-color-multiply' style={{ x, y }}>
              <video src={video} autoPlay loop muted className='w-full h-full object-cover' />
            </motion.div>
          )
        }
      </Suspense>
    </div>
  )
}

export default Layout

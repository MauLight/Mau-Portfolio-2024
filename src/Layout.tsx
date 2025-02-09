import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import Fallback from './components/Common/Fallback'

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
  return (
    <div className='w-full max-w-[1440px] h-full'>
      <Suspense fallback={<div className='w-full min-h-screen flex justify-center items-center'>
        <Fallback />
      </div>}>
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
      </Suspense>
    </div>
  )
}

export default Layout

import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'

const Home = lazy( async () => await import ('@/components/Home/Home') )
const Humans = lazy( async () => await import ('@/components/Photo/Galleries/Humans') )
const Distortion = lazy( async () => await import ('@/components/Photo/Galleries/Distortion') )
const AuthHome = lazy( async () => await import ('@/components/Dev/Auth/AuthHome'))



const Layout = () => {
  return (
    <div className='w-[1440px] h-full'>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/photo/humans' element={<Humans />} />
          <Route path='/photo/distortion' element={<Distortion />} />
          <Route path='/dev/auth' element={<AuthHome />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default Layout

import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'

const Home = lazy( async () => await import ('@/components/Home/Home') )
const Humans = lazy( async () => await import ('@/components/Photo/Galleries/Humans') )



const Layout = () => {
  return (
    <div className='w-[1440px] h-full'>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/photo/humans' element={<Humans />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default Layout

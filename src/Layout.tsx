import { lazy } from 'react'
import { Route, Routes } from 'react-router'

const Home = lazy( async () => await import ('@/components/Home/Home') )



const Layout = () => {
  return (
    <div className='w-[1440px] h-full border border-red-500'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default Layout

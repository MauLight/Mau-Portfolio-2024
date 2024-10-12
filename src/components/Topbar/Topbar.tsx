import { Cross as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/functions'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { WideMenu } from './WideMenu'
import { WideMenuOptions } from './WideMenuOptions'
import { WideMenuOptionsVertical } from './WideMenuOptionsVertical'

const Topbar = () => {
  const [isOpen, setOpen] = useState(false)
  const [isUpperMenuOpen, setUpperMenuOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <><motion.div
      variants={fadeIn('top', 0.8)}
      initial={'hidden'}
      whileInView={'show'}
      viewport={{ once: false, amount: 0.1 }}
      className={`fixed top-0 w-full max-w-[1440px] flex justify-between sm:grid sm:grid-cols-5 pt-2 px-1 z-50 ${pathname !== '/' ? 'bg-blue-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0' : ''}`}>
      <Link to={'/'} className="flex justify-start items-center">
        <img alt='logo' src='https://i.postimg.cc/rsbQbsy2/icon.png' className='w-9 h-9' />
      </Link>
      <WideMenu setUpperMenuOpen={setUpperMenuOpen} isUpperMenuOpen={isUpperMenuOpen} />
      <div className="hidden max-sm:flex justify-end items-center">
        <Hamburger toggled={isOpen} toggle={setOpen} color={pathname.includes('video') ? '#e7eee7' : '#231c1e'} />
      </div>
    </motion.div>
    {
      isUpperMenuOpen && (
        <WideMenuOptions setUpperMenuOpen={setUpperMenuOpen} isUpperMenuOpen={isUpperMenuOpen} />
      )
    }
    {
      isUpperMenuOpen && (
        <button onClick={() => { setUpperMenuOpen(false) }} className="fixed top-0 left-0 w-screen h-screen z-30"></button>
      )
    }
    {
      isOpen && (
        <WideMenuOptionsVertical setUpperMenuOpen={setOpen} isUpperMenuOpen={isOpen} />
      )
    }
    </>
  )
}

export default Topbar

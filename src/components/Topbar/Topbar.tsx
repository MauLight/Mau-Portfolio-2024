import { Cross as Hamburger } from 'hamburger-react'
import { useRef, useState } from 'react'
import { FlipLink } from '../Common/FlipText'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/functions'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

const Topbar = () => {
  const [isOpen, setOpen] = useState(false)
  const [isUpperMenuOpen, setUpperMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const ref = useRef(null)

  return (
    <><motion.div
      variants={fadeIn('top', 0.8)}
      initial={'hidden'}
      whileInView={'show'}
      viewport={{ once: false, amount: 0.1 }}
      className={`fixed z-30 top-0 w-full max-w-[1440px] grid grid-cols-5 pt-2 px-1 ${pathname !== '/' ? 'bg-blue-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0' : ''}`}>
      <Link to={'/'} className="flex justify-start items-center">
        <img src='https://i.postimg.cc/rsbQbsy2/icon.png' className='w-9 h-9' />
      </Link>
      <div className="col-span-3 flex justify-between items-center">
        <FlipLink href='#' fontColor={pathname.includes('video') ? 'text-[#e7eee7]' : 'text-[#231c1e]'} textSize='text-lg'>About</FlipLink>
        <FlipLink onClick={() => { setUpperMenuOpen(!isUpperMenuOpen) } } href='#' fontColor={pathname.includes('video') ? 'text-[#e7eee7]' : 'text-[#231c1e]'} textSize='text-lg'>dev</FlipLink>
        <FlipLink onClick={() => { setUpperMenuOpen(!isUpperMenuOpen) } } href='#' fontColor={pathname.includes('video') ? 'text-[#e7eee7]' : 'text-[#231c1e]'} textSize='text-lg'>photo</FlipLink>
        <FlipLink onClick={() => { setUpperMenuOpen(!isUpperMenuOpen) } } href='#' fontColor={pathname.includes('video') ? 'text-[#e7eee7]' : 'text-[#231c1e]'} textSize='text-lg'>video</FlipLink>
        <FlipLink href='#' fontColor={pathname.includes('video') ? 'text-[#e7eee7]' : 'text-[#231c1e]'} textSize='text-lg'>fiction</FlipLink>
        <FlipLink href='#' fontColor={pathname.includes('video') ? 'text-[#e7eee7]' : 'text-[#231c1e]'} textSize='text-lg'>Contact</FlipLink>
      </div>
      <div className="flex justify-end items-center">
        <Hamburger toggled={isOpen} toggle={setOpen} color={pathname.includes('video') ? '#e7eee7' : '#231c1e'} />
      </div>
    </motion.div>
    {
      isUpperMenuOpen && (
        <motion.div
          ref={ref}
          variants={fadeIn('bottom', 0.2)}
          initial={isUpperMenuOpen ? 'show' : 'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className={`w-screen h-[300px] ${pathname.includes('video') ? 'bg-[#10100e] border-b' : 'bg-[#ffffff]'} ${isUpperMenuOpen ? 'fixed' : 'hidden'} top-0 left-0 z-20`}
        >
          <div className="w-full h-full flex justify-center">
            <div className="h-full w-[1440px] flex justify-center">
              <div className="h-full w-4/6 grid grid-cols-6">
                <div id='about' className="col-span-1 flex flex-col"></div>

                <div id='dev' className="col-span-1 flex flex-col pt-[70px] px-8 gap-y-2">
                  <h1 className={`font-body text-[16px] ${pathname.includes('video') ? 'text-[#e7eee7]' : ''}`}>Libraries</h1>
                  <div className="flex flex-col">
                    <Link to={'/dev/auth'} onClick={() => { setUpperMenuOpen(!isUpperMenuOpen) }} className={`pl-5 font-light ${pathname.includes('video') ? 'text-[#d0d6d0]' : 'text-gray-600'} text-[14px]`}>Auth</Link>
                    <Link to={'/dev/app'} onClick={() => { setUpperMenuOpen(!isUpperMenuOpen) }} className={`pl-5 font-light ${pathname.includes('video') ? 'text-[#d0d6d0]' : 'text-gray-600'} text-[14px]`}>Apps</Link>
                    <Link to={'/photo/distortion'} onClick={() => { setUpperMenuOpen(!isUpperMenuOpen) }} className={`pl-5 font-light ${pathname.includes('video') ? 'text-[#d0d6d0]' : 'text-gray-600'} text-[14px]`}>Components</Link>
                  </div>
                </div>

                <div id='photo' className="col-span-1 flex flex-col pt-[70px] px-8 gap-y-2">
                  <h1 className={`font-body text-[16px] ${pathname.includes('video') ? 'text-[#e7eee7]' : ''}`}>Galleries</h1>
                  <div className="flex flex-col">
                    <Link to={'/photo/humans'} onClick={() => { setUpperMenuOpen(!isUpperMenuOpen) }} className={`pl-5 font-light ${pathname.includes('video') ? 'text-[#d0d6d0]' : 'text-gray-600'} text-[14px]`}>Humans</Link>
                    <Link to={'/photo/distortion'} onClick={() => { setUpperMenuOpen(!isUpperMenuOpen) }} className={`pl-5 font-light ${pathname.includes('video') ? 'text-[#d0d6d0]' : 'text-gray-600'} text-[14px]`}>Distortion</Link>
                  </div>
                </div>

                <div id='video' className="col-span-1 flex flex-col pt-[70px] px-8 gap-y-2">
                  <h1 className={`font-body text-[16px] ${pathname.includes('video') ? 'text-[#e7eee7]' : ''}`}>Galleries</h1>
                  <div className="flex flex-col">
                    <Link to={'/video/viral'} onClick={() => { setUpperMenuOpen(!isUpperMenuOpen) }} className={`pl-5 font-light ${pathname.includes('video') ? 'text-[#d0d6d0]' : 'text-gray-600'} text-[14px]`}>Viral</Link>
                    <Link to={'/video/motion'} onClick={() => { setUpperMenuOpen(!isUpperMenuOpen) }} className={`pl-5 font-light ${pathname.includes('video') ? 'text-[#d0d6d0]' : 'text-gray-600'} text-[14px]`}>Motion</Link>
                    <Link to={'/video/Shortfilms'} onClick={() => { setUpperMenuOpen(!isUpperMenuOpen) }} className={`pl-5 font-light ${pathname.includes('video') ? 'text-[#d0d6d0]' : 'text-gray-600'} text-[14px]`}>Shortfilms</Link>
                  </div>
                </div>
                <div id='fiction' className="col-span-1 flex flex-col"></div>
                <div id='contact' className="col-span-1 flex flex-col"></div>
              </div>
            </div>
          </div>
        </motion.div>
      )
    }
    {
      isUpperMenuOpen && (
        <div onClick={() => { setUpperMenuOpen(false) }} className="fixed top-0 left-0 w-screen h-screen"></div>
      )
    }
    </>
  )
}

export default Topbar

import { Cross as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { FlipLink } from '../Common/FlipText'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/functions'

const Topbar = () => {
  const [isOpen, setOpen] = useState(false)
  const [isUpperMenuOpen, setUpperMenuOpen] = useState(false)

  return (
    <motion.div
      variants={fadeIn('top', 0.8)}
      initial={'hidden'}
      whileInView={'show'}
      viewport={{ once: false, amount: 0.1 }}
      className="fixed z-30 top-0 w-full max-w-[1440px] grid grid-cols-5 pt-2">
      <div className="flex justify-start items-center">
        <img src='https://i.postimg.cc/rsbQbsy2/icon.png' className='w-9 h-9' />
      </div>
      <div className="col-span-3 flex justify-between items-center">
        <FlipLink href='#' fontColor='text-[#231c1e]' textSize='text-lg'>About</FlipLink>
        <FlipLink href='#' fontColor='text-[#231c1e]' textSize='text-lg'>dev</FlipLink>
        <FlipLink onClick={() => { setUpperMenuOpen(!isUpperMenuOpen) }} href='#' fontColor='text-[#231c1e]' textSize='text-lg'>photo</FlipLink>
        <FlipLink href='#' fontColor='text-[#231c1e]' textSize='text-lg'>video</FlipLink>
        <FlipLink href='#' fontColor='text-[#231c1e]' textSize='text-lg'>fiction</FlipLink>
        <FlipLink href='#' fontColor='text-[#231c1e]' textSize='text-lg'>Contact</FlipLink>
      </div>
      <div className="flex justify-end items-center">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#231c1e" />
      </div>
      <motion.div
        variants={fadeIn('bottom', 0.2)}
        initial={isUpperMenuOpen ? 'show' : 'hidden'}
        whileInView={'show'}
        viewport={{ once: false, amount: 0.1 }}
        className={`w-screen h-[300px] bg-[#ffffff] ${isUpperMenuOpen ? 'fixed' : 'hidden'} top-0 left-0 -z-20`}
      ></motion.div>
    </motion.div>
  )
}

export default Topbar

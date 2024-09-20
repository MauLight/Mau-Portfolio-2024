import { Cross as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { FlipLink } from '../Common/FlipText'

const Topbar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="fixed z-30 top-0 w-full max-w-[1440px] grid grid-cols-5 pt-2">
      <div className="flex justify-start items-center">
        <img src='https://i.postimg.cc/rsbQbsy2/icon.png' className='w-9 h-9' />
      </div>
      <div className="col-span-3 flex justify-between items-center">
        <FlipLink href='#' fontColor='text-[#231c1e]' textSize='text-lg'>About</FlipLink>
        <FlipLink href='#' fontColor='text-[#231c1e]' textSize='text-lg'>dev</FlipLink>
        <FlipLink href='#' fontColor='text-[#231c1e]' textSize='text-lg'>photo</FlipLink>
        <FlipLink href='#' fontColor='text-[#231c1e]' textSize='text-lg'>video</FlipLink>
        <FlipLink href='#' fontColor='text-[#231c1e]' textSize='text-lg'>fiction</FlipLink>
        <FlipLink href='#' fontColor='text-[#231c1e]' textSize='text-lg'>Contact</FlipLink>
      </div>
      <div className="flex justify-end items-center">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#231c1e" />
      </div>
    </div>
  )
}

export default Topbar

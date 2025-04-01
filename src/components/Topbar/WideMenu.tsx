import type { ReactElement } from 'react'
import { FlipLink } from '../Common/FlipText'
import { useLocation } from 'react-router'
import { WideMenuProps } from '@/utils/types'

const animatedGradientText = 'inline-block text-transparent bg-clip-text animated-background bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'

export const WideMenu = ({ isUpperMenuOpen, setUpperMenuOpen }: WideMenuProps): ReactElement => {
  const { pathname } = useLocation()
  return (
    <div className="hidden col-span-3 sm:flex justify-between items-center">
      <FlipLink onClick={() => { }} href='/about' fontColor={pathname.includes('video') ? 'text-[#e7eee7]' : 'text-[#231c1e]'} textSize='text-lg'>About</FlipLink>
      <FlipLink onClick={() => { setUpperMenuOpen(!isUpperMenuOpen) }} href='#' fontColor={pathname.includes('video') ? 'text-[#e7eee7]' : 'text-[#231c1e]'} textSize='text-lg'>dev</FlipLink>
      <FlipLink onClick={() => { setUpperMenuOpen(!isUpperMenuOpen) }} href='#' fontColor={pathname.includes('video') ? 'text-[#e7eee7]' : 'text-[#231c1e]'} textSize='text-lg'>photo</FlipLink>
      <FlipLink onClick={() => { setUpperMenuOpen(!isUpperMenuOpen) }} href='#' fontColor={pathname.includes('video') ? 'text-[#e7eee7]' : 'text-[#231c1e]'} textSize='text-lg'>video</FlipLink>
      <a href='https://ctlst.cc' className={`${animatedGradientText} text-lg`}>CTLST</a>
      <FlipLink onClick={() => { }} href='/contact' fontColor={pathname.includes('video') ? 'text-[#e7eee7]' : 'text-[#231c1e]'} textSize='text-lg'>Contact</FlipLink>
    </div>
  )
}

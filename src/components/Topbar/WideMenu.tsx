import type { ReactElement } from 'react'
import { FlipLink } from '../Common/FlipText'
import { useLocation } from 'react-router'
import { WideMenuProps } from '@/utils/types'

export const WideMenu = ({ isUpperMenuOpen, setUpperMenuOpen } : WideMenuProps): ReactElement => {
  const { pathname } = useLocation()
  return (
    <div className="hidden col-span-3 sm:flex justify-between items-center">
      <FlipLink href='#' fontColor={pathname.includes('video') ? 'text-[#e7eee7]' : 'text-[#231c1e]'} textSize='text-lg'>About</FlipLink>
      <FlipLink onClick={() => { setUpperMenuOpen(!isUpperMenuOpen) } } href='#' fontColor={pathname.includes('video') ? 'text-[#e7eee7]' : 'text-[#231c1e]'} textSize='text-lg'>dev</FlipLink>
      <FlipLink onClick={() => { setUpperMenuOpen(!isUpperMenuOpen) } } href='#' fontColor={pathname.includes('video') ? 'text-[#e7eee7]' : 'text-[#231c1e]'} textSize='text-lg'>photo</FlipLink>
      <FlipLink onClick={() => { setUpperMenuOpen(!isUpperMenuOpen) } } href='#' fontColor={pathname.includes('video') ? 'text-[#e7eee7]' : 'text-[#231c1e]'} textSize='text-lg'>video</FlipLink>
      <FlipLink href='#' fontColor={pathname.includes('video') ? 'text-[#e7eee7]' : 'text-[#231c1e]'} textSize='text-lg'>fiction</FlipLink>
      <FlipLink href='#' fontColor={pathname.includes('video') ? 'text-[#e7eee7]' : 'text-[#231c1e]'} textSize='text-lg'>Contact</FlipLink>
    </div>
  )
}

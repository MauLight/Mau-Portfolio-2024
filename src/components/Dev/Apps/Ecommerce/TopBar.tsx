import Hamburger from 'hamburger-react'
import { type ReactElement } from 'react'

export const TopBar = (): ReactElement => {
  return (
    <div className="absolute top-0 h-[50px] w-full bg-transparent z-20">
      <div className="flex h-full w-full justify-between items-center px-20">
        <div className="block">
          <h1 className='neue-bold leading-none text-[18px] text-[#ffffff] antialiased'>eMOTIONs</h1>
        </div>
        <Hamburger color='#ffffff' size={25} direction='left' />
      </div>
    </div>
  )
}

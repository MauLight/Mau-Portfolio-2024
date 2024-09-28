import { useState, type ReactElement } from 'react'

export const Pricing = (): ReactElement => {
  const[clicked, setClicked] = useState<boolean>(false)
  const handleClick = (): void => {
    setClicked(!clicked)
  }
  return (
    <div className='w-full h-full border px-10 py-12'>
      <div className="flex justify-between">
        <h1 className='font-body text-[22px] text-[#40403e]'>Find the best plan for you.</h1>
        <div className="flex items-center gap-x-5">
          <p className='font-light text-[16px] text-[]#40403e'>Billed monthly</p>
          <div onClick={handleClick} className={`relative w-[65px] h-full flex ${clicked ? 'pl-[34px] bg-indigo-500' : 'pr-[28px] bg-[#10100e]'} items-center px-[1px] border rounded-full transition-all duration-200 cursor-pointer`}>
            <div className="w-[28px] h-[28px] bg-[#ffffff] rounded-full"></div>
          </div>
          <p className={`font-light text-[16px] ${clicked ? 'text-indigo-500' : 'text-[]#40403e'}`}>Billed anually</p>
        </div>
      </div>
    </div>
  )
}

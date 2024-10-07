import { type ReactElement } from 'react'
import banner from '@/assets/apps/banner_2.png'
import { BannerProps } from './types'


export const Banner = ({ title, price, discount, handleClick } : BannerProps): ReactElement => {

  const item = { title, price, discount, image: banner }
  return (
    <div className="w-full min-h-[1000px] flex flex-col">
      <div className="relative w-full h-full flex justify-center items-center bg-[#fdfdfd]">
        <div className="h-full flex flex-col justify-start items-center pt-[250px]">
          <h1 className='aktiv text-[240px] leading-none uppercase animated-background bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text z-10'>Emotions</h1>
          <div className="w-full flex justify-between mt-2 px-5">
            <p className='text-[16px] neue text-[#ffffff] z-10 uppercase'>Captured</p>
            <p className='text-[16px] neue text-[#ffffff] z-10 uppercase'>In</p>
            <p className='text-[16px] neue text-[#ffffff] z-10 uppercase'>Time</p>
          </div>
        </div>
        {/* <div className="absolute w-full h-full z-0 opacity-30 animated-background bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div> */}
        <img src={banner} alt="banner" className='absolute top-0 w-full h-full object-cover' />
        <div className="w-full absolute bottom-5 flex justify-end gap-x-10 px-5 z-10 transition-all duration-300">
          <div className="flex flex-col">
            <h1 className='text-[18px] uppercase neue antialiazed text-[#ffffff] leading-tight'>{title}</h1>
            <div className="flex gap-x-2">
              <p className='text-[12px] uppercase neue antialiazed text-[#ffffff]'>{`${price}$`}</p>
              <p className='text-[10px] uppercase neue antialiazed text-gray-100 line-through'>{`${discount}$`}</p>
            </div>
          </div>
          <div onClick={() => { handleClick(item) }} className='h-[50px] w-[50px] antialiased rounded-full bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 flex justify-center items-center pb-1 cursor-pointer'>
            <i className="fa-solid fa-bag-shopping text-[#ffffff]"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

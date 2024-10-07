import { type ReactElement } from 'react'
import banner1 from '@/assets/apps/surreal_1.png'

export const BannerCollection = (): ReactElement => {
  return (
    <div className="relative w-full grid grid-cols-3">
      <div className="col-span-2 relative w-full h-[600px] flex justify-center items-center overflow-hidden">
        <img src={banner1} className='w-full object-cover' />
      </div>
      <div className='col-span-1 flex justify-center items-center bg-[#9ed6f7]'>
        <h1 className='absolute right-[12%] neue text-[42px] animated-background bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text'>Surreal Collection</h1>
      </div>
    </div>
  )
}

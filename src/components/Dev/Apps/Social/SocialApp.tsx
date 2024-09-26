import { useEffect, type ReactElement } from 'react'
import { Navbar } from './Navbar'

export const SocialApp = (): ReactElement => {

  useEffect(() => {
    const stickySections = [...document.querySelectorAll('.sticky')]
    console.log(stickySections)
  }, [])

  return (
    <div className='w-full h-full relative flex justify-center items-center px-20'>
      {/* topbar */}
      <div className="absolute top-0 left-0 w-full h-[60px] flex items-center justify-between px-20 bg-[#ffffff]">
        <div className='w-[40px] h-[40px] flex justify-center items-center rounded-[5px] bg-[#282826]'>
          <i className="fa-solid fa-xl fa-hurricane text-[#ffffff]"></i>
        </div>
        <div className="flex gap-x-2">
          <button className='h-[40px] px-3 bg-[#40403e] hover:bg-[#585856] rounded-[5px] font-body text-[14px] text-[#ffffff]'>Be a Pro</button>
          <button className='h-[40px] px-3 bg-[#ffffff] hover:bg-indigo-500 border hover:border-transparent rounded-[5px] font-body text-[14px] text-[#40403e] hover:text-[#ffffff] transition-color duration-200'>Submit Project</button>
        </div>
      </div>
      <div className="w-full h-full overflow-scroll scrollbar-hide pt-32">
        <img src='https://images.unsplash.com/photo-1500491460312-c32fc2dbc751' className='w-full h-[1000px] object-cover' />
      </div>
      {/* navbar */}
      <Navbar />
    </div>
  )
}

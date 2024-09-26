import { useState, type SetStateAction } from 'react'


export const Navbar = ({ setStep } : { setStep: React.Dispatch<SetStateAction<number>> }) => {
  const [expand, setExpand] = useState<boolean>(false)

  const handleSteps = (step: number): void => {
    setStep(step)
  }

  const handleNavWidth = () => {
    setExpand(!expand)
  }

  return (
    <div className={`absolute bottom-5 left-0 ${expand ? 'w-full' : 'w-[223px]'} h-[60px] flex justify-center transition-all duration-200`}>
      <div className="relative rounded-[8px] overflow-hidden flex mx-20">
        <div className="flex gap-x-2 w-full h-full z-10 p-2">
          <div onClick={handleNavWidth} className='min-w-[48px] h-full flex justify-center items-center rounded-[5px] bg-[#282826]'>
            <i className={`fa-solid fa-xl fa-hurricane text-[#ffffff] hover:text-indigo-500 ${expand ? 'rotate-45' : ''} transition-all duration-500`}></i>
          </div>
          <div className="flex gap-x-2 bg-[#40403e] py-1 px-2 rounded-[5px]">
            <div className='h-full flex justify-center items-center px-3 rounded-[5px] border border-[#585856] hover:border-[#888887] transition-color duration-200 cursor-pointer'>
              <p className='font-body text-[16px] text-[#ffffff]'>Search</p>
            </div>
            <div className='h-full flex justify-center items-center px-3 rounded-[5px] border border-[#585856] hover:border-[#888887] transition-color duration-200 cursor-pointer'>
              <p className='font-body text-[16px] text-[#ffffff]'>Projects</p>
            </div>
            <div className='h-full flex justify-center items-center px-3 rounded-[5px] border border-[#585856] hover:border-[#888887] transition-color duration-200 cursor-pointer'>
              <p className='font-body text-[16px] text-[#ffffff]'>Contests</p>
            </div>
            <div className='h-full flex justify-center items-center px-3 rounded-[5px] border border-[#585856] hover:border-[#888887] transition-color duration-200 cursor-pointer'>
              <p className='font-body text-[16px] text-[#ffffff]'>Courses</p>
            </div>
          </div>
          <div className='h-full flex justify-center items-center px-3 bg-[#ffffff] hover:bg-indigo-500 border hover:border-transparent rounded-[5px] font-body text-[16px] text-[#40403e] hover:text-[#ffffff] transition-color duration-200 cursor-pointer'>
            <p>Profile</p>
          </div>
        </div>
        <div className="absolute w-full h-full bg-[#40403e] opacity-90 z-0"></div>
      </div>
    </div>
  )
}

import { SetStateAction, type ReactElement } from 'react'

interface TopbarProps {
    prompt: string
    setPrompt: React.Dispatch<SetStateAction<string>>
    setStep: React.Dispatch<SetStateAction<number>>
    handlePro: () => void
}

export const Topbar = ({ prompt, setPrompt, setStep, handlePro } : TopbarProps): ReactElement => {
  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setPrompt(e.target.value)
  }
  const handleEnterEvent = (e: { key: string }) => {
    if (e.key === 'Enter' && prompt.length > 0) {
      setStep(2)
      setPrompt('')
    }
  }

  return (
    <div className="absolute top-0 left-0 w-full h-[60px] flex items-center justify-between px-20 bg-[#fdfdfd] z-20">
      <div onClick={() => { setStep(1) }} className='min-w-[40px] h-[40px] flex justify-center items-center rounded-[5px] bg-[#282826]'>
        <i className="fa-solid fa-xl fa-hurricane text-[#ffffff]"></i>
      </div>
      <div className="w-full flex justify-end gap-x-5">
        <div className="flex">
          <input onKeyDown={handleEnterEvent} value={prompt} onChange={handleChange} placeholder='What do you want to write about?' type="text" className='w-[400px] h-[40px] bg-[#f3f3f3] ring-0 focus:ring-0 focus:outline-none px-5 rounded-[5px] font-body text-[14px]' />
        </div>
        <div className="flex items-center gap-x-2">
          <img className='w-[38px] h-[38px] rounded-full' src="https://images.unsplash.com/photo-1702482527875-e16d07f0d91b?q=80&w=1974&auto=format" alt="profile pic" />
          <button onClick={handlePro} className='h-[40px] px-3 bg-[#40403e] hover:bg-[#585856] rounded-[5px] font-body text-[14px] text-[#ffffff]'>Be a Pro</button>
          <button className='h-[40px] px-3 bg-[#ffffff] hover:bg-indigo-500 border hover:border-transparent rounded-[5px] font-body text-[14px] text-[#40403e] hover:text-[#ffffff] transition-color duration-200'>Submit Project</button>
        </div>
      </div>
    </div>
  )
}

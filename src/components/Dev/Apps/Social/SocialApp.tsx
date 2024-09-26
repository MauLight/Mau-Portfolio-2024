import { useEffect, useState, type ReactElement } from 'react'
import { Navbar } from './Navbar'
import { Topbar } from './Topbar'
import { Creator } from './Creator'

export const SocialApp = (): ReactElement => {
  const [step, setStep] = useState<number>(1)
  const [prompt, setPrompt] = useState<string>('')

  useEffect(() => {
    const stickySections = [...document.querySelectorAll('.sticky')]
    console.log(stickySections)
  }, [])

  return (
    <div className='w-full h-full bg-[#fdfdfd] relative flex justify-center items-center px-20'>
      {/* topbar */}
      <Topbar prompt={prompt} setPrompt={setPrompt} setStep={setStep} />
      <div className="w-full h-full overflow-scroll scrollbar-hide pt-32">
        {
          step === 1 && (
            <img src='https://images.unsplash.com/photo-1500491460312-c32fc2dbc751' className='w-full h-[1000px] object-cover' />
          )
        }
        {
          step === 2 && (
            <Creator prompt={prompt} />
          )
        }
      </div>
      {/* navbar */}
      <Navbar setStep={setStep} />
    </div>
  )
}

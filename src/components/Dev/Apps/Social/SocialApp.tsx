import { useState, type ReactElement } from 'react'
import { Navbar } from './Navbar'
import { Topbar } from './Topbar'
import { Creator } from './Creator'
import { ScreenHome } from './ScreenHome'
import { Pricing } from './Pricing'

export const SocialApp = (): ReactElement => {
  const [step, setStep] = useState<number>(1)
  const [prompt, setPrompt] = useState<string>('')

  const handlePro = () => {
    if (step === 3) setStep(1)
    else setStep(3)
  }

  return (
    <div className='w-full h-full bg-[#fdfdfd] relative flex justify-center items-center px-20'>
      {/* topbar */}
      <Topbar handlePro={handlePro} prompt={prompt} setPrompt={setPrompt} setStep={setStep} />
      <div className="w-full h-full overflow-scroll scrollbar-hide pt-20 pb-20">
        {
          step === 1 && (
            <ScreenHome />
          )
        }
        {
          step === 2 && (
            <Creator prompt={prompt} />
          )
        }
        {
          step === 3 && (
            <Pricing handlePro={handlePro} />
          )
        }
      </div>
      {/* navbar */}
      <Navbar />
    </div>
  )
}

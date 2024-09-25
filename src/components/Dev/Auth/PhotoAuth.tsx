import { useEffect, useState, type ReactElement } from 'react'
import bg from '@/assets/auth/bg_auth2.png'
import { ClockLoader } from 'react-spinners'

const footerItems = [
  { name: 'Help', link: '#' },
  { name: 'Privacy', link: '#' },
  { name: 'Terms', link: '#' }
]

export const PhotoAuth = (): ReactElement => {
  const [currStep, setCurrStep] = useState(1)

  const handleLogin = (): void => {
    if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/.test(fieldValuePassword)) {
      setCurrStep(3)
      setFieldValueEmail('')
      setFieldValuePassword('')
    }
    else setCurrStep(0)
  }

  const [fieldValueEmail, setFieldValueEmail] = useState<string>('')
  const [fieldValuePassword, setFieldValuePassword] = useState<string>('')
  const [labelAnimationEmail, setLabelAnimationEmail] = useState<boolean>(false)
  const [labelAnimationPassword, setLabelAnimationPassword] = useState<boolean>(false)

  const handleNextStep = (): void => {
    if (/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,5}$/.test(fieldValueEmail)) setCurrStep(2)
    else setCurrStep(0)
  }

  const handleTryAgain = (): void => {
    if (fieldValuePassword.length > 0) setCurrStep(2)
    else setCurrStep(1)
  }

  useEffect(() => {
    if (currStep === 3) {
      setTimeout(() => {
        setCurrStep(1)
      }, 5000)
    }
  }, [currStep])

  return (
    <div className='relative w-full h-full flex justify-center items-center'>
      <div className="absolute top-0 left-0 w-full h-[60px] flex justify-start px-10 bg-[#10100e]">
        <div className="flex items-center gap-x-2">
          <i className="fa-solid fa-circle text-blue-500"></i>
          <h1 className='font-heading text-[24px] text-[#ffffff]'>Photo</h1>
        </div>
      </div>
      {
        currStep === 3 ? (
          <div className="w-full h-full flex items-center justify-center gap-x-3 overflow-hidden">
            <ClockLoader color='#ffffff' />
            <h1 className='font-body text-4xl text-[#ffffff]'>Thank you.</h1>
          </div>
        )
          :
          (
            <div className="w-[300px] flex flex-col gap-y-2">
              <div className="w-[320px] min-h-[250px] bg-[#ffffff] flex flex-col rounded-[5px] px-5 pt-7 pb-4 gap-y-4">
                <div className="flex flex-col items-center gap-y-1">
                  <i className="fa-solid fa-circle text-blue-500"></i>
                  <h1 className='font-light text-[22px] text-[#10100e]'>Log in to Photo</h1>
                </div>
                <div className='flex flex-col gap-y-3'>
                  <div className='relative w-full h-[50px] border border-blue-500 rounded-[5px] px-2 overflow-hidden'>
                    <label className={`absolute ${labelAnimationEmail || fieldValueEmail.length > 0 ? 'top-1 pl-2 text-[12px] text-blue-400' : 'top-3 pl-2 text-[16px] text-gray-600'} font-light transition-all duration-200`}>Email</label>
                    <input value={fieldValueEmail} onChange={({ target }) => { setFieldValueEmail(target.value) }} onMouseDown={() => { setLabelAnimationEmail(true) }} onBlur={() => { setLabelAnimationEmail(false) }} type="email" className='absolute font-light text-gray-600 bg-transparent bottom-1 px-2 w-full h-5 ring-0 focus:ring-0 focus:outline-none' />
                  </div>
                  <div className={`relative w-full ${currStep === 2 ? 'h-[50px]' : 'h-0 hidden'} border border-blue-500 rounded-[5px] px-2 overflow-hidden transition-all duration-200`}>
                    <label className={`absolute ${labelAnimationPassword || fieldValuePassword.length > 0 ? 'top-1 pl-2 text-[12px] text-blue-400' : 'top-3 pl-2 text-[16px] text-gray-600'} font-light transition-all duration-200`}>Password</label>
                    <input value={fieldValuePassword} onChange={({ target }) => { setFieldValuePassword(target.value) }} onMouseDown={() => { setLabelAnimationPassword(true) }} onBlur={() => { setLabelAnimationPassword(false) }} type="password" className='absolute font-light text-gray-600 bg-transparent bottom-1 px-2 w-full h-5 ring-0 focus:ring-0 focus:outline-none' />
                  </div>
                  {
                    currStep === 1 ? (
                      <button onClick={handleNextStep} className='w-full h-10 bg-blue-500 text-[#ffffff] rounded-[5px]'>Next</button>
                    )
                      :
                      (
                        <button onClick={handleLogin} className='w-full h-10 bg-blue-500 text-[#ffffff] rounded-[5px]'>Sign in</button>
                      )
                  }
                </div>
                <div className="flex justify-center gap-x-1">
                  <p className='text-[14px] font-light text-gray-600'>Not a Photo member?</p>
                  <a href="#" className='text-[14px] text-blue-500 font-light'>Sign up here.</a>
                </div>
              </div>
              <div className="flex justify-end gap-x-2">
                {
                  footerItems.map((item, i) => (
                    <a key={i} href={item.link} className='text-[#ffffff] font-light text-[14px]'>{item.name}</a>
                  ) )
                }
              </div>
            </div>
          )
      }
      <img src={bg} className='absolute w-full h-full object-cover opacity-90 -z-10' />
      <div className='absolute w-full h-full object-cover bg-[#10100e] opacity-20 -z-10'></div>
      {
        currStep === 0 && (
          <div className='absolute w-full h-full flex flex-col justify-center items-center bg-transparent'>
            <div className="relative w-full h-full flex flex-col justify-center items-center">
              <div className='z-10 flex flex-col gap-y-6 bg-[#ffffff] p-5 rounded-[5px] shadow-xl shadow-gray-400 border-t border-gray-50'>
                <p className='font-light text-gray-600 text-[18px]'>{fieldValuePassword.length > 0 ? 'Password must contain at least one uppercase, one number and one special character.' : 'A valid Email address must be provided.'}</p>
                <div className="flex justify-end gap-x-2">
                  <button className='h-10 w-[150px] rounded-[5px] bg-[#ffffff] flex gap-x-1 items-center justify-center border'>
                    <i className="fa-brands fa-md fa-google"></i>
                    <p className='font-light text-[15px] text-gray-600'>Try with Google</p>
                  </button>
                  <button onClick={handleTryAgain} className='h-10 w-[150px] rounded-[5px] bg-blue-500 hover:bg-blue-400 active:bg-blue-500 font-light text-[15px] text-[#ffffff]'>Try again</button>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-[#ffffff] bg-blue-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60 opacity-60 z-0"></div>
            </div>
          </div>
        )
      }
    </div>
  )
}

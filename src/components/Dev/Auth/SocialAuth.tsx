import { useEffect, useState, type ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '@/utils/auth'
import mock1 from '@/assets/auth/iphone_mockup.webp'
import { ClockLoader } from 'react-spinners'

export const SocialAuth = (): ReactElement => {
  const [currStep, setCurrStep] = useState(1)
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema)
  })

  const handleLogin = (): void => {
    reset()
    setCurrStep(2)
  }

  useEffect(() => {
    if (currStep === 2) {
      setTimeout(() => {
        setCurrStep(1)
      }, 5000)
    }
  }, [currStep])

  return (
    <>
      {
        currStep === 1 ? (
          <div className="w-full h-full flex justify-center overflow-hidden">
            <div className="w-4/5 flex justify-center lg:grid lg:grid-cols-2">
              <div className="col-span-1 h-[700px] hidden lg:flex items-center justify-end px-10">
                <img alt='phone' src={mock1} className='h-2/3 object-cover' />
              </div>
              <div className="h-full col-span-1 flex flex-col items-start justify-center px-10 gap-y-3">
                <div className="min-h-[400px] w-[300px] flex flex-col border border-gray-300 pt-12 gap-y-5 px-7 pb-2">
                  <h1 className='font-body text-[#10100e] text-4xl text-center'>Welcome</h1>
                  <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-y-2 pt-5">
                    <input {...register('email')} type='text' className={`w-full h-9 bg-gray-50 rounded-[3px] border border-gray-300 ring-0 focus:ring-0 focus:outline-none text-[12px] px-2 ${errors.email !== undefined ? 'ring-1 ring-red-500' : ''}`} placeholder='Phone number, username, or email' />
                    <input {...register('password')} type='password' className={`w-full h-9 bg-gray-50 rounded-[3px] border border-gray-300 ring-0 focus:ring-0 focus:outline-none text-[12px] px-2 ${errors.password !== undefined ? 'ring-1 ring-red-500' : ''}`} placeholder='Password' />
                    <button type='submit' className='w-full h-8 font-body text-[16px] text-[#ffffff] bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-500 rounded-[10px] mt-1'>Log in</button>
                    <div className="flex justify-center items-center pt-2">
                      <div className="w-full border-b border-gray-300"></div>
                      <p className='text-[14px] font-body text-gray-500 px-5 uppercase'>or</p>
                      <div className="w-full border-b border-gray-300"></div>
                    </div>
                  </form>
                  <div className="flex flex-col gap-y-2">
                    <div className="flex items-center justify-center gap-x-1 cursor-pointer">
                      <i className="fa-brands fa-google text-[#4285f4]"></i>
                      <p className='font-body text-[16px] text-[#4285f4]'>Continue with Google</p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex justify-center">
                        {
                          errors.email !== undefined ? <small className='text-red-500'>{errors.email.message}</small> : null
                        }
                      </div>
                      <div className="flex justify-center">
                        {
                          errors.password !== undefined ? <small className='text-red-500'>{errors.password.message}</small> : null
                        }
                      </div>
                    </div>
                    <p className='text-center font-light text-[14px] text-gray-600 cursor-pointer'>Forgot password?</p>
                  </div>
                </div>
                <div className="w-[300px] h-[60px] border border-gray-300">
                  <div className="flex h-full items-center justify-center gap-x-1">
                    <p className='font-body text-[15px] text-[#10100e]'>Don't have an account?</p>
                    <p className='font-body text-[15px] text-indigo-500'>Sign up</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
          :
          (
            <div className="w-full h-full flex items-center justify-center gap-x-3 overflow-hidden">
              <ClockLoader color='#10100e' />
              <h1 className='font-body text-4xl text-[#101003]'>Thank you.</h1>
            </div>
          )
      }
    </>
  )
}

import { useEffect, useState, type ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaEcommerce } from '@/utils/auth'
import { ClockLoader } from 'react-spinners'

export const EcommerceAuth = ():ReactElement => {
  const [currStep, setCurrStep] = useState(1)
  const { register, reset, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: ''
    },
    resolver: yupResolver(schemaEcommerce)
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
    <div className="w-full h-full flex justify-center items-center animated-background bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {
        currStep === 1 ? (
          <div className="w-[400px] min-h-[500px] bg-[#ffffff] flex flex-col gap-y-8 rounded-[15px] p-10">
            <div className="flex items-center gap-x-1">
              <i className="fa-solid fa-lg fa-bag-shopping"></i>
              <h1 className='font-body text-[20px]'>eCommerce</h1>
            </div>
            <div className="flex flex-col">
              <h1 className='font-heading leading-tight text-[28px] animated-background bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text'>Log in</h1>
              <p className='leading-tight font-light text-[16px] text-gray-600'>Continue to eCommerce</p>
            </div>
            <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-1">
                <label className='font-light text-[14px]' htmlFor="email">Email</label>
                <input {...register('email')} type="text" className={`h-10 rounded-[8px] font-body border px-5 ring-0 focus:ring-0 focus:outline-none ${errors.email !== undefined ? 'ring-1 ring-red-500' : ''}`} />
              </div>
              <button type='submit' className='h-10 text-[#ffffff] border rounded-[8px] animated-background bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'> Continue with email</button>
              <div className="flex justify-center items-center">
                {
                  errors.email !== undefined && errors.email.message !== undefined ? <small className='text-red-500'>{errors.email.message[0].toUpperCase() + errors.email.message.slice(1)}</small> : null
                }
              </div>
            </form>
            <div className="flex justify-center items-center pt-2 px-5">
              <div className="w-full border-b border-gray-300"></div>
              <p className='text-[12px] font-body text-gray-500 px-5 uppercase'>or</p>
              <div className="w-full border-b border-gray-300"></div>
            </div>
            <div className="w-full grid grid-cols-3 gap-x-2">
              <button className='h-12 w-full border rounded-[5px] bg-gray-50 hover:bg-gray-100 flex justify-center items-center gap-x-1'>
                <i className="fa-brands fa-xl fa-apple"></i>
              </button>
              <button className='h-12 w-full border rounded-[5px] bg-gray-50 hover:bg-gray-100 flex justify-center items-center gap-x-1'>
                <i className="fa-brands fa-lg fa-facebook"></i>
              </button>
              <button className='h-12 w-full border rounded-[5px] bg-gray-50 hover:bg-gray-100 flex justify-center items-center gap-x-1'>
                <i className="fa-brands fa-lg fa-google"></i>
              </button>
            </div>
          </div>
        )
          :
          (
            <div className="w-full h-full flex items-center justify-center gap-x-3 overflow-hidden">
              <ClockLoader color='#ffffff' />
              <h1 className='font-body text-4xl text-[#ffffff]'>Thank you.</h1>
            </div>
          )
      }
    </div>
  )
}

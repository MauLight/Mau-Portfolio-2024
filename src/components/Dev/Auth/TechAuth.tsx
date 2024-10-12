// @ts-expect-error: Unreachable code error
import random from 'canvas-sketch-util/random'
// @ts-expect-error: Unreachable code error
import math from 'canvas-sketch-util/math'
import { Dispatch, SetStateAction, useEffect, useState, type ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaTech } from '@/utils/auth'
import { ClockLoader } from 'react-spinners'

interface TechFormProps {
  id: string
  setCurrStep: Dispatch<SetStateAction<number>>
}

const TechForm = ({ id, setCurrStep } : TechFormProps) => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schemaTech)
  })

  const handleLogin = (): void => {
    reset()
    setCurrStep(2)
  }

  return (
    <div className="w-full min-h-[400px] flex flex-col gap-y-5">
      <h1 className='text-[22px] font-body text-indigo-400'>Sign in to TechApp</h1>
      <div className="grid grid-cols-4 gap-x-2">
        <button className="h-10 col-span-1 flex items-center justify-center gap-x-1 border bg-[#ffffff]">
          <i className="fa-brands fa-github"></i>
          <span className='text-gray-600 font-light text-[14px]'>Github</span>
        </button>
        <button className="h-10 col-span-1 flex items-center justify-center gap-x-1 border bg-[#ffffff]">
          <i className="fa-brands fa-gitlab text-[#fc6d26]"></i>
          <span className='text-gray-600 font-light text-[14px]'>Gitlab</span>
        </button>
        <button className="h-10 col-span-1 flex items-center justify-center gap-x-1 border bg-[#ffffff]">
          <i className="fa-brands fa-bitbucket text-[#0747a6]"></i>
          <span className='text-gray-600 font-light text-[14px]'>Bitbucket</span>
        </button>
        <button className="h-10 col-span-1 flex items-center justify-center gap-x-1 border bg-[#ffffff]">
          <i className="fa-brands fa-google text-[#4285f4]"></i>
          <span className='text-gray-600 font-light text-[14px]'>Google</span>
        </button>
      </div>
      <p className='text-light text-gray-200 text-center'>or</p>
      <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-1">
            <label htmlFor='email' className='text-[14px] font-light text-gray-200'>Email</label>
            <input {...register('email')} id={`email-${id}`} placeholder='your@email.com' type='text' className={`h-10 border border-gray-200 px-3 text-[15px] font-light ring-0 focus:ring-0 focus:outline-none ${errors.email !== undefined ? 'ring-1 ring-red-500' : ''}`} />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor='password' className='text-[14px] font-light text-gray-200'>Password</label>
            <input {...register('password')} id={`password-${id}`} placeholder='correct horse battery staple' type='password' className={`h-10 border border-gray-200 px-3 text-[15px] font-light ring-0 focus:ring-0 focus:outline-none ${errors.password !== undefined ? 'ring-1 ring-red-500' : ''}`} />
          </div>
        </div>
        <div className="w-full flex gap-x-5">
          <button type='submit' className='h-[60px] text-[14px] min-w-20 px-2 bg-[#ffffff] hover:text-[#ffffff] active:text-[#10100e] hover:bg-indigo-400 active:bg-[#ffffff] mt-1 transition-color duration-200'>Sign in</button>
          <div className="flex flex-col justify-center">
            {
              errors.email !== undefined ? <small className='text-red-500'>{errors.email.message}</small> : null
            }
            {
              errors.password !== undefined ? <small className='text-red-500'>{errors.password.message}</small> : null
            }
          </div>
        </div>
      </form>
      <div className="flex flex-col gap-y-1 pt-2">
        <div className="flex gap-x-1">
          <p className='font-light text text-gray-300'>Need an account?</p>
          <button className='text-indigo-400 font-light underline'>Sign up</button>
        </div>
        <div className="flex gap-x-1">
          <p className='font-light text text-gray-300'>Forgot your password?</p>
          <button className='text-indigo-400 font-light underline'>Reset it</button>
        </div>
      </div>
    </div>
  )
}

export const TechAuth = (): ReactElement => {
  const [currStep, setCurrStep] = useState(1)

  const [width] = useState(920)
  const [height] = useState(850)

  useEffect(() => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

    let num = 0
    let frame = 0

    const render = () => {
      ctx.clearRect(0, 0, width, height)


      const cols = 35
      const rows = 28
      const numCells = cols * rows

      const gridW = width * 0.9
      const gridH = height * 0.9
      const cellW = gridW / cols
      const cellH = gridH / rows
      const margX = (width - gridW) * 0.5
      const margY = (height - gridH) * 0.5

      for (let i = 0; i < numCells; i++) {
        const col = i % cols
        const row = Math.floor(i / cols)

        const x = col * cellW
        const y = row * cellH
        const w = cellW * 0.9
        //const h = cellH * 0.9

        const n = random.noise2D(x + frame * 5, y, 0.0015)
        const angle = n * Math.PI * 0.9
        const scale = math.mapRange(n, -1, 1, 1, 30)

        ctx.save()
        ctx.translate(x, y)
        ctx.translate(margX, margY)
        ctx.translate(cellW * 0.5, cellH * 0.5)
        ctx.rotate(angle)

        ctx.lineWidth = scale
        ctx.strokeStyle = '#6366f1'

        ctx.beginPath()
        ctx.moveTo(w * -0.5, 0)
        ctx.lineTo(w * 0.5, 0)
        ctx.stroke()

        ctx.restore()

        num++

        if (num % 960 === 0) {
          frame++
        }
      }

    }
    const loop = () => {
      render()
      requestAnimationFrame(loop)
    }
    loop()
    return () => ctx.clearRect(0, 0, width, height)
  }, [height, width])

  useEffect(() => {
    if (currStep === 2) {
      setTimeout(() => {
        setCurrStep(1)
      }, 5000)
    }
  }, [currStep])

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full grid grid-cols-3 bg-gray-800 relative">
        {
          currStep === 1 ? (
            <>
              <div className="col-span-1 px-5 hidden lg:flex justify-center items-center">
                <TechForm key={1} id='1' setCurrStep={setCurrStep} />
              </div>
              <div className='absolute w-full h-full hidden max-lg:flex justify-center items-center top-0 z-10'>
                <div className="flex bg-gray-800 p-5 h-[520px]">
                  <TechForm key={2} id='2' setCurrStep={setCurrStep} />
                </div>
              </div>
            </>
          )
            :
            (
              <div className='flex max-lg:absolute max-lg:z-10 max-lg:w-full h-full justify-center items-center'>
                <div className="flex max-lg:justify-center max-lg:items-center bg-gray-800 max-lg:h-[200px] max-lg:w-[300px] p-5">
                  <ClockLoader color='#ffffff' />
                  <h1 className='font-body text-4xl text-[#ffffff]'>Thank you.</h1>
                </div>
              </div>
            )
        }
        <div className="relative col-span-3 lg:col-span-2 flex justify-start items-center rounded-r-[20px] overflow-hidden">
          <canvas className='absolute top-1/5 w-[1020px] -left-12 border lg:left-1/5' width={width} height={height} id='animation' />
        </div>
      </div>
    </div>
  )
}

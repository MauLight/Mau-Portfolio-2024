import { CodeBlock, nord } from 'react-code-blocks'

const text = `import random from 'canvas-sketch-util/random'
import math from 'canvas-sketch-util/math'
import { useEffect, useState, type ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaTech } from '@/utils/auth'

export const TechAuth = (): ReactElement => {
const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schemaTech)
  })

    const handleLogin = (): void => {
    reset()
  }
  
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

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full grid grid-cols-3 pl-10 bg-gray-800">
        <div className="col-span-1 flex justify-center items-center">
              <div className="w-full min-h-[400px] flex flex-col gap-y-5">
                <h1 className='text-[22px] font-body text-indigo-400'>Sign in to TechApp</h1>
                <div className="grid grid-cols-4 gap-x-2">
                  <button className="h-10 col-span-1 flex items-center justify-center gap-x-1 border bg-[#ffffff]">
                    <i className="fa-brands fa-github"></i>
                    <span className='text-gray-600 font-light text-[14px]'>Github</span>
                  </button>
                  <button className="h-10 col-span-1 flex items-center justify-center gap-x-1 border bg-[#ffffff]">
                    <i className="fa-brands fa-gitlab"></i>
                    <span className='text-gray-600 font-light text-[14px]'>Gitlab</span>
                  </button>
                  <button className="h-10 col-span-1 flex items-center justify-center gap-x-1 border bg-[#ffffff]">
                    <i className="fa-brands fa-bitbucket"></i>
                    <span className='text-gray-600 font-light text-[14px]'>Bitbucket</span>
                  </button>
                  <button className="h-10 col-span-1 flex items-center justify-center gap-x-1 border bg-[#ffffff]">
                    <i className="fa-brands fa-google"></i>
                    <span className='text-gray-600 font-light text-[14px]'>Google</span>
                  </button>
                </div>
                <p className='text-light text-gray-200 text-center'>or</p>
                <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-y-5">
                  <div className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-1">
                      <label htmlFor='email' className='text-[14px] font-light text-gray-200'>Email</label>
                      <input {...register('email')} id='email' placeholder='your@email.com' type='text' className={\`h-10 border border-gray-200 px-3 text-[15px] font-light ring-0 focus:ring-0 focus:outline-none \${errors.email !== undefined ? 'ring-1 ring-red-500' : ''}\`} />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <label htmlFor='password' className='text-[14px] font-light text-gray-200'>Password</label>
                      <input {...register('password')} id='password' placeholder='correct horse battery staple' type='password' className={\`h-10 border border-gray-200 px-3 text-[15px] font-light ring-0 focus:ring-0 focus:outline-none \${errors.password !== undefined ? 'ring-1 ring-red-500' : ''}\`} />
                    </div>
                  </div>
                  <div className="w-full flex gap-x-5">
                    <button type='submit' className='h-[60px] min-w-20 px-2 border bg-[#ffffff] hover:bg-gray-100 active:bg-[#ffffff] mt-1'>Sign in</button>
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
                    <a href="#" className='text-indigo-400 font-light underline'>Sign up</a>
                  </div>
                  <div className="flex gap-x-1">
                    <p className='font-light text text-gray-300'>Forgot your password?</p>
                    <a href="#" className='text-indigo-400 font-light underline'>Reset it</a>
                  </div>
                </div>
              </div>
            </div>
        <div className="relative col-span-2 flex justify-start items-center rounded-r-[20px] overflow-hidden">
          <canvas className='absolute top-1/5 left-1/5' width={width} height={height} id='animation' />
        </div>
      </div>
    </div>
  )
}
`

export const TechAuthCode = () => {
  return (
    <div className="w-full h-full flex justify-center overflow-hidden">
      <CodeBlock theme={nord} customStyle={{ borderRadius: '20px', fontFamily: 'IBM Plex Mono', fontWeight: '300', fontSize: '12px' }} text={text} language='jsx' showLineNumbers={true} />
    </div>
  )
}

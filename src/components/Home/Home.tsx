import { useEffect, useRef, useState } from 'react'
import { TitleText } from '../Common/TitleText'
import html2canvas from 'html2canvas'
import { Agent } from '@/utils/classes'
import { fadeIn, randRange } from '@/utils/functions'
import { format } from 'date-fns'
import { motion } from 'framer-motion'
import QRCode from 'react-qr-code'
//import { degToRad, randRange } from '@/utils/functions'

const Home = () => {
  const [width] = useState(850)
  const [height] = useState(850)
  const printRef = useRef(null)

  //   useEffect(() => {
  //     const canvas = document.querySelector('canvas') as HTMLCanvasElement
  //     const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

  //     ctx.fillStyle = 'black'

  //     const cx = width * 0.5
  //     const cy = height * 0.5

  //     const w = width * 0.01
  //     const h = height * 0.1
  //     let x, y

  //     const num = 22
  //     const radius = width * 0.3

  //     for (let i = 0; i < num; i++) {
  //       const slice = degToRad(360 / num)
  //       const angle = slice * i

  //       x = cx + radius * Math.sin(angle)
  //       y = cy + radius * Math.cos(angle)

  //       ctx.save()
  //       ctx.translate(x, y)
  //       ctx.rotate(-angle)
  //       ctx.scale(randRange(0.1, 2), randRange(0.1, 0.6))

  //       ctx.beginPath()
  //       ctx.rect( -w * 0.5, randRange(0, -h * 0.2), w, h)
  //       ctx.fill()
  //       ctx.restore()

  //       ctx.save()
  //       ctx.translate(cx, cy)
  //       ctx.rotate(-angle)

  //       ctx.lineWidth = randRange(2, 28)

  //       ctx.beginPath()
  //       ctx.arc(0, 0, radius * randRange(0.2, 1.8), slice * randRange(1, 2), slice * randRange(1, 4))
  //       ctx.stroke()

  //       ctx.restore()
  //     }
  //   })

  const agents: Agent[] = []

  for (let i = 0; i < 40; i++) {
    const x = randRange(0, width)
    const y = randRange(0, height)
    agents.push(new Agent(x, y))
  }

  useEffect(() => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < agents.length; i++) {
        const agent = agents[i]

        for (let j = i + 1; j < agents.length; j++) {
          const other = agents[j]
          const dist = agent.pos.getDistance(other.pos)
          if (dist > 200) continue

          ctx.lineWidth = 1 - dist / 200
          ctx.beginPath()
          ctx.moveTo(agent.pos.x, agent.pos.y)
          ctx.lineTo(other.pos.x, other.pos.y)
          ctx.stroke()
        }
      }

      agents.forEach(agent => {
        agent.update()
        agent.draw(ctx)
        agent.bounce(width, height)
      })
    }

    const loop = () => {
      render()
      requestAnimationFrame(loop)
    }
    loop()
    return () => ctx.clearRect(0, 0, width, height)
  })

  const handleDownloadImage = async () => {
    const element = printRef.current
    if (element) {
      const canvas = await html2canvas(element)
      const data = canvas.toDataURL('image/png')
      const link = document.createElement('a')

      if ( typeof link.download === 'string') {
        link.href = data
        link.download = 'image.jpg'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        window.open(data)
      }
    }
  }

  return (
    <div className="h-screen overflow-hidden grid grid-cols-3">
      <div className="flex flex-col justify-center pb-[50px]">
        <motion.div
          variants={fadeIn('right', 0.4)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: true, amount: 0.1 }}
          className="flex items-center gap-x-2">
          <TitleText text="M" />
          <TitleText text="Light" />
        </motion.div>
        <motion.p
          variants={fadeIn('left', 0.4)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className='font-body text-[18px] text-[#10100e]'>{format(new Date(), 'PPPP')}</motion.p>
      </div>
      <div className="relative col-span-2 flex flex-col justify-center items-end">
        <canvas className='absolute top-0 right-0 p-10' onClick={handleDownloadImage} ref={printRef} width={width} height={height} id='animation' />
      </div>
      <motion.div
        variants={fadeIn('top', 1.5)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: false, amount: 0.1 }}
        className="fixed left-0 bottom-0 h-[200px] w-screen flex flex-col items-center justify-center">
        <div className="w-[1440px] h-[100px] grid grid-cols-3">
          <div className="flex justify-center items-center">
          </div>
          <div className="relative flex">
            <div className="absolute -bottom-[65px] flex justify-start items-end w-full h-[100px] z-50">
              {/* <p className='w-[300px] font-body text-[20px] text-balance text-[#10100e] tracking-tight'>M.Light is a digital artist specialized in <span className='font-heading'>web development</span>, <span className='font-heading'>video & photography</span>, and <span className='font-heading'>storytelling.</span></p> */}
            </div>
          </div>
          <div className="flex items-center justify-end">
          </div>
        </div>
        <div className="w-[1440px] grid grid-cols-3">
          <div className="flex justify-start items-end pb-5">
            <p className='font-body text-[18px] text-[#fdeeff]'>If you can imagine it, you can make it real.</p>
          </div>
          <div className="flex"></div>
          <div className="flex flex-col items-end gap-y-2 pb-5">
            <div className="flex h-[100px] border items-start">
              <QRCode className='w-[100px] h-[100px] border border-gray-200 opacity-80' value='https://www.maulight.com' />
            </div>
            <p className='font-body text-[18px] text-[#10100e]'>© 2024 MLight</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Home

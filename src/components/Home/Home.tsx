import { useEffect, useRef, useState } from 'react'
import { TitleText } from '../Common/TitleText'
import html2canvas from 'html2canvas'
import { Agent } from '@/utils/classes'
import { fadeIn, randRange } from '@/utils/functions'
import { format } from 'date-fns'
import { motion } from 'framer-motion'
import bg from '@/assets/bg_2.webp'
import { Footer } from './Footer'
import { useLocation } from 'react-router'
import { useFollowPointer } from '@/hooks/useFollowPointer'
import video from '@/assets/end of time.webm'

const Home = () => {

  const ref = useRef(null)
  const { pathname } = useLocation()
  const { x, y } = useFollowPointer(ref)

  const [width] = useState(850)
  const [height] = useState(850)
  const printRef = useRef(null)

  const agents: Agent[] = []

  for (let i = 0; i < 40; i++) {
    const x = randRange(0, width)
    const y = randRange(0, height)
    agents.push(new Agent(x, y))
  }

  useEffect(() => {
    const canvas = document.getElementById('matrix') as HTMLCanvasElement
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

      if (typeof link.download === 'string') {
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
    <div className="h-screen max-h-screen relative flex justify-between">
      <div className="max-[1440px]:col-span-2 flex flex-col justify-center pb-[50px]">
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
          className='font-body text-[18px] text-[#10100e]'>{format(new Date(), 'PPPP')}
        </motion.p>
      </div>
      <div className="relative h-full max-[1440px]:w-[500px] flex flex-col justify-center items-end">
        <canvas className='absolute top-0 right-0 p-10' onClick={handleDownloadImage} ref={printRef} width={width} height={height} id='matrix' />
      </div>
      <Footer />
      <img src={bg} alt='background' className='w-full h-full fixed top-0 left-0 object-cover opacity-100 -z-10' />
      {
        pathname === '/' && (
          <motion.div ref={ref} className='absolute w-[200px] z-0 h-[200px] rounded-full overflow-hidden mix-blend-color-multiply' style={{ x, y }}>
            <video src={video} autoPlay loop muted className='w-full h-full object-cover' />
          </motion.div>
        )
      }
    </div>
  )
}

export default Home

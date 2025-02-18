import { useEffect, useMemo, useRef, useState } from 'react'
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
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const parentRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ width: 850, height: 850 })

  const printRef = useRef(null)

  const agents = useMemo(() => {
    let generatedAgents: Agent[] = []
    const iterations = size.width > 600 ? 160 : 30

    for (let i = 0; i < iterations; i++) {
      const x = randRange(0, size.width)
      const y = randRange(0, size.height)
      generatedAgents.push(new Agent(x, y))
    }

    return generatedAgents

  }, [size])

  useEffect(() => {
    const canvas = document.getElementById('matrix') as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

    const render = () => {
      ctx.clearRect(0, 0, size.width, size.height)

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
        agent.bounce(size.width, size.height)
      })
    }

    const loop = () => {
      render()
      requestAnimationFrame(loop)
    }
    loop()
    return () => ctx.clearRect(0, 0, size.width, size.height)
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

  useEffect(() => {
    const updateSize = () => {
      if (parentRef.current && canvasRef.current) {
        const { offsetWidth: width, offsetHeight: height } = parentRef.current
        setSize({ width, height })
      }
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize);
  }, [parentRef])


  return (
    <div className="h-screen relative flex justify-between">
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
          className='font-body text-[18px] text-[#10100e]'>{format(new Date(), 'PPPP')}
        </motion.p>
      </div>
      <div ref={parentRef} className='max-sm:absolute h-screen w-full'>
        <div className="relative h-full flex flex-col justify-center items-end">
          <canvas ref={canvasRef} className='absolute top-0 right-0' onClick={handleDownloadImage} width={size.width} height={size.height} id='matrix' />
        </div>
      </div>
      <Footer />
      <img src={bg} alt='background' className='w-full h-full fixed top-0 left-0 object-cover opacity-100 -z-10' />
      {
        pathname === '/' && (
          <motion.div ref={ref} className='absolute hidden sm:block w-[120px] z-0 h-[120px] rounded-full overflow-hidden mix-blend-color-multiply shadow-xl' style={{ x, y }}>
            <video src={video} autoPlay loop muted className='w-full h-full object-cover' />
          </motion.div>
        )
      }
    </div>
  )
}

export default Home

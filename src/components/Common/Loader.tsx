import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { WhiteAgent as Agent } from '@/utils/classes'
import { randRange } from '@/utils/functions'
import { AnimatePresence, motion } from 'framer-motion'
import video from '@/assets/video/loading.webm'
import videoEye from '@/assets/video/loading2.webm'
import videoMp4 from '@/assets/video/loading.mp4'
import videoEyeMp4 from '@/assets/video/loading2.mp4'

interface LoaderProps {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
}


export const Loader = ({ visible, setVisible }: LoaderProps) => {

  const [canvasReady, setCanvasReady] = useState<boolean>(false)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const eyeRef = useRef(null)

  function playEyeVideo() {
    if (eyeRef.current) {
      (eyeRef.current as HTMLVideoElement).play()
    }
  }

  const handleCloseLoader = () => {

    playEyeVideo()
    setCanvasReady(true)
    setTimeout(() => {
      setVisible(false)
    }, 2000)
  }

  const [width] = useState(2000)
  const [height] = useState(1400)
  const agents: Agent[] = []

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas && canvasReady) {
      setCanvasReady(false)
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

      for (let i = 0; i < 400; i++) {
        const x = randRange(0, width)
        const y = randRange(0, height)
        agents.push(new Agent(x, y))
      }

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
            ctx.strokeStyle = '#D1D5DB'
            ctx.stroke()
          }
        }

        agents.forEach(agent => {
          agent.update()
          agent.draw(ctx)
          agent.bounce(width, height)
        })

        agents.pop()
      }

      const loop = () => {
        render()
        requestAnimationFrame(loop)
      }
      loop()
      return () => ctx.clearRect(0, 0, width, height)
    }
  })

  const [supportsWebm, setSupportsWebm] = useState<boolean>(false)

  useEffect(() => {
    const videoElem = document.createElement('video')
    if (videoElem.canPlayType('video/webm') !== '') {
      setSupportsWebm(true)
    }
  }, [])

  return (
    <>
      <AnimatePresence>

        {
          visible && (
            <motion.div
              initial={{ opacity: 1 }}
              transition={{ duration: 2.5, ease: 'easeOut' }}
              exit={{ opacity: 0 }}
              className={`absolute h-screen w-screen left-0 top-0 overflow-hidden flex flex-col justify-center items-center gap-y-2 ${!visible ? 'bg-transparent' : 'bg-[#10100e]'}`}>
              <div className='absolute z-0 bg-[#10100e] w-screen h-screen opacity-70'></div>
              <div
                className="absolute z-10 top-0 left-0 p-10 h-full max-[1440px]:w-[500px] flex flex-col justify-center items-end">
                <canvas ref={canvasRef} className='' width={width} height={height} id='loader' />
              </div>
              <motion.video
                onCanPlay={handleCloseLoader}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                onPlay={handleCloseLoader}
                className='absolute w-screen h-screen object-cover' id='loader' autoPlay muted>
                {
                  supportsWebm ? (
                    <>
                      <source src={video} type="video/webm" />
                      <source src={videoMp4} type="video/mp4" />
                    </>
                  )
                    :
                    (
                      <>
                        <source src={videoMp4} type="video/mp4" />
                        <source src={video} type="video/webm" />
                      </>
                    )
                }
              </motion.video>
              <motion.video
                ref={eyeRef}
                initial={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='w-screen h-screen object-cover' muted>
                {
                  supportsWebm ? (
                    <>
                      <source src={videoEye} type="video/webm" />
                      <source src={videoEyeMp4} type="video/mp4" />
                    </>
                  )
                    :
                    (
                      <>
                        <source src={videoEyeMp4} type="video/mp4" />
                        <source src={videoEye} type="video/webm" />
                      </>
                    )
                }
              </motion.video>
            </motion.div>
          )
        }
      </AnimatePresence>
    </>
  )
}

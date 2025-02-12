import { useEffect, useState, type ReactElement } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/functions'

interface VideoDisplayProps {
  title: string
  description: string
  mp4: string[]
  webM: string[]
  bgColor: string
}

export const VideoDisplayHorizontal = ({ title, description, mp4, webM, bgColor }: VideoDisplayProps): ReactElement => {
  const [currentVideo, setCurrentVideo] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [volume, setVolume] = useState(false)

  const handleSlider = (direction: number) => {
    setCurrentVideo((prev) => {
      if (direction === 1) {
        if (prev === 0) return webM.length - 1
        return prev - 1
      }
      if (direction === 2) {
        if (prev === webM.length - 1) return 0
        return prev + 1
      }
      return prev
    })
  }

  useEffect(() => {
    setIsVisible(false)
    setTimeout(() => {
      setIsVisible(true)
    }, 100)
  }, [currentVideo])

  return (
    <div className="relative flex justify-center items-center w-full h-screen pt-[200px]">
      <div className="absolute w-screen flex flex-col justify-center items-start px-20 gap-y-5 bg-[#e7eee7] h-[450px] overflow-hidden">
        <motion.h1
          variants={fadeIn('right', 0.2)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className='hidden 2xl:block font-body text-4xl lg:text-5xl 2xl:text-6xl text-[#171817] z-10'>{title}</motion.h1>
        <motion.p
          variants={fadeIn('left', 0.4)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className='hidden 2xl:flex font-light text-2xl min-[1440px]:text-3xl text-[2e302e] z-10'>{description}</motion.p>
        <video autoPlay muted className='absolute h-full w-full top-0 left-0 object-cover z-0 opacity-30 grayscale'>
          <source src={webM[currentVideo]} type='video/webm' />
        </video>
        <div className={`absolute left-0 opacity-80 w-full h-full flex justify-center items-center animated-background ${bgColor ? bgColor : 'bg-[#ffffff]'}`}></div>
      </div>
      {
        isVisible && (
          <div className="absolute w-full top-[220px] z-10 right-0 2xl:right-10 flex flex-col items-center 2xl:items-end gap-y-6">
            <div className="relative sm:w-[400px] lg:w-[700px]">
              <motion.i
                variants={fadeIn('left', 1)}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{ once: false, amount: 0.1 }}
                onClick={() => { handleSlider(1) }} className="absolute top-1/2 left-8 sm:-left-12 fa-solid fa-chevron-left text-[#e7eee7] z-10 fa-xl cursor-pointer"></motion.i>
              <motion.i
                variants={fadeIn('right', 1)}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{ once: false, amount: 0.1 }}
                onClick={() => { handleSlider(2) }} className="absolute top-1/2 right-8 sm:-right-12 fa-solid fa-chevron-right text-[#e7eee7] z-10 fa-xl cursor-pointer"></motion.i>
              <motion.video
                variants={fadeIn('top', 1)}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{ once: false, amount: 0.1 }}
                onEnded={() => { setVolume(false); handleSlider(2) }}
                autoPlay muted={!volume} className='sm:shrink-0 w-full sm:w-[400px] lg:w-[700px] right-0 top-[220px] object-cover z-10 rounded-[20px] border-t border-x border-gray-600 shadow-sm shadow-gray-900'>
                <source src={webM[currentVideo]} type='video/webm' />
                <source src={mp4[currentVideo]} type='video/mp4' />
              </motion.video>

              <motion.button
                variants={fadeIn('left', 1)}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{ once: false, amount: 0.1 }}
                onClick={() => { setVolume(!volume) }}
                className='absolute bottom-[15px] right-[15px] w-[40px] h-[40px] rounded-full bg-[#10100e] z-50 bg-blue-0 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0'>
                {
                  volume ? (
                    <i className="fa-solid fa-volume-high text-[#ffffff]"></i>
                  )
                    :
                    (
                      <i className="fa-solid fa-volume-mute text-[#ffffff]"></i>
                    )
                }
              </motion.button>
            </div>
            <div className="flex-col max-2xl:flex hidden">
              <motion.h1
                variants={fadeIn('right', 0.2)}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{ once: false, amount: 0.1 }}
                className='font-body text-4xl text-[#171817] z-10'>{title}</motion.h1>
              <motion.p
                variants={fadeIn('left', 0.4)}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{ once: false, amount: 0.1 }}
                className='font-light text-2xl text-[2e302e] z-10'>{description}</motion.p>
            </div>
          </div>
        )
      }
    </div>
  )
}

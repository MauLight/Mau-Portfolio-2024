import { fadeIn } from '@/utils/functions'
import { motion } from 'framer-motion'
import { ReactElement, useEffect, useState } from 'react'

interface VideoDisplaySliderProps {
    video: { mp4: string, webM: string, title: string, description: string }[]
    bgColor: string
}

export const VideoDisplayHorizontalSlider = ({ video, bgColor } : VideoDisplaySliderProps ): ReactElement => {
  const [currentVideo, setCurrentVideo] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [hide, setHide] = useState(false)

  const handleSlider = (direction: number) => {
    setCurrentVideo((prev) => {
      if (direction === 1) {
        if (prev === 0) return video.length - 1
        return prev - 1
      }
      if (direction === 2) {
        if (prev === video.length - 1) return 0
        return prev + 1
      }
      return prev
    })
  }

  const handleHide = (): void => {
    setHide(!hide)
  }

  useEffect(() => {
    setIsVisible(false)
    setTimeout(() => {
      setIsVisible(true)
    }, 100)
  }, [currentVideo])
  return (
    <div className="relative flex justify-center items-center w-full h-screen pt-[200px]">
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial={'hidden'}
        whileInView={hide ? 'hidden' : 'show'}
        className={'absolute w-screen flex flex-col justify-center items-start px-20 gap-y-5 h-[450px] overflow-hidden'}>
        {
          isVisible && (
            <motion.h1
              variants={fadeIn('right', 0.2)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className='font-body text-6xl text-[#171817] z-10'>{video[currentVideo].title}</motion.h1>
          )
        }
        {
          isVisible && (
            <motion.p
              variants={fadeIn('left', 0.4)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className='w-1/3 font-light text-3xl text-[2e302e] z-10 text-balance'>{video[currentVideo].description}</motion.p>
          )
        }
        <video autoPlay muted loop className='absolute w-full top-0 left-0 object-cover z-0 opacity-40 grayscale'>
          <source src={video[currentVideo].webM} type='video/webm' />
          <source src={video[currentVideo].mp4} type='video/mp4' />
        </video>
        <div className={`absolute left-0 opacity-80 w-full h-full flex justify-center items-center animated-background ${bgColor ? bgColor : 'bg-[#ffffff]'}`}></div>
      </motion.div>
      <div className={`absolute w-1/2 h-1/2 flex justify-center items-center gap-x-10 top-[220px] ${hide ? 'right-[20vw]' : 'right-0'} object-cover z-10 rounded-[10px] transition-all duration-500`}>
        {
          isVisible && (
            <motion.i
              variants={fadeIn('left', 1)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              onClick={() => { handleSlider(1) }} className="fa-solid fa-chevron-left text-[#141413] z-10 fa-xl cursor-pointer"></motion.i>
          )
        }
        {
          isVisible && (
            <motion.video
              onClick={handleHide}
              onEnded={() => { handleSlider(2) }}
              variants={fadeIn('top', 1)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              autoPlay muted className='w-full object-cover z-10 rounded-[10px]'>
              <source src={video[currentVideo].webM} type='video/webm' />
              <source src={video[currentVideo].mp4} type='video/mp4' />
            </motion.video>
          )
        }
        {
          isVisible && (
            <motion.i
              variants={fadeIn('right', 1)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              onClick={() => { handleSlider(2) }} className="fa-solid fa-chevron-right text-[#141413] z-10 fa-xl cursor-pointer"></motion.i>
          )
        }
      </div>
    </div>
  )
}

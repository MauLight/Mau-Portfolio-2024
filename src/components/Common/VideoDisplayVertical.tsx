import { useEffect, useState, type ReactElement } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/functions'

interface VideoDisplayProps {
    video: string[]
    bgColor: string
    title: string
    description: string
}

export const VideoDisplayVertical = ({ title, description, video, bgColor } : VideoDisplayProps): ReactElement => {
  const [currentVideo, setCurrentVideo] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

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

  useEffect(() => {
    setIsVisible(false)
    setTimeout(() => {
      setIsVisible(true)
    }, 100)
  }, [currentVideo])

  return (
    <div className="relative flex justify-center items-end w-full h-screen">
      <div className="absolute w-screen flex flex-col justify-end items-center px-20 gap-y-5 h-[400px] overflow-hidden">
        <motion.h1
          variants={fadeIn('right', 0.2)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className='font-body text-6xl text-[#171817] z-10'>{title}</motion.h1>
        <motion.p
          variants={fadeIn('left', 0.4)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className='font-light text-3xl text-[2e302e] z-10 pb-[70px]'>{description}</motion.p>
        {
          isVisible && (
            <motion.video
              variants={fadeIn('top', 1)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              src={video[currentVideo]} autoPlay loop muted className='absolute w-full top-currentVideo left-currentVideo object-cover z-0 opacity-40 grayscale' />
          )
        }
        <div className={`absolute left-0 opacity-80 w-full h-full z-0 flex justify-center items-center animated-background ${bgColor ? bgColor : 'bg-[#ffffff]'} transition-color duration-500`}></div>
      </div>
      <div className="w-full flex justify-center items-center gap-x-[450px] h-full">
        <motion.i
          variants={fadeIn('left', 1)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          onClick={() => { handleSlider(1) }} className="fa-solid fa-chevron-left text-[#e7eee7] z-10 fa-xl cursor-pointer"></motion.i>
        <motion.i
          variants={fadeIn('right', 1)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          onClick={() => { handleSlider(2) }} className="fa-solid fa-chevron-right text-[#e7eee7] z-10 fa-xl cursor-pointer"></motion.i>
        {
          isVisible && (
            <motion.video
              onEnded={() => { handleSlider(2) }}
              variants={fadeIn('bottom', 0.2)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              src={video[currentVideo]} autoPlay muted className='absolute w-[24%] h-2/3 top-[100px] object-cover z-10 rounded-[10px]' />
          )
        }
        <div className={'absolute w-[24%] h-2/3 mx-auto top-[100px] object-cover rounded-[10px] bg-[#10100f]'}></div>
      </div>
    </div>
  )
}

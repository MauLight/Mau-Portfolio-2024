import { useEffect, useState, type ReactElement } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/functions'

interface VideoDisplayProps {
    mp4: string[]
    webM: string[]
    bgColor: string
    title: string
    description: string
    frame: string
}

export const VideoDisplayVertical = ({ title, description, mp4, webM, bgColor, frame } : VideoDisplayProps): ReactElement => {
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
    <div className="relative flex justify-center items-end w-full h-screen">
      <div className="absolute w-screen flex flex-col justify-end items-center px-20 gap-y-5 h-[400px] overflow-hidden">
        <motion.h1
          variants={fadeIn('right', 0.2)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className='font-body text-2xl sm:text-6xl text-[#171817] z-10'>{title}</motion.h1>
        <motion.p
          variants={fadeIn('left', 0.4)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className='font-light text-lg sm:text-3xl text-[2e302e] z-10 pb-[70px]'>{description}</motion.p>
        {
          isVisible && (
            <motion.video
              variants={fadeIn('top', 1)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              autoPlay loop muted className='absolute w-full object-cover z-0 opacity-0 hidden grayscale'>
              <source src={webM[currentVideo]} type='video/webm' />
              <source src={mp4[currentVideo]} type='video/mp4' />
            </motion.video>
          )
        }
        <div className={`absolute left-0 opacity-80 w-full h-full z-0 flex justify-center items-center animated-background ${bgColor ? bgColor : 'bg-[#ffffff]'} transition-color duration-500`}></div>
      </div>
      <div className={`relative w-full shrink-0 flex justify-center items-center ${frame} h-full pb-32`}>
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
            <div className='absolute bottom-[150px] shrink-0 h-2/3'>
              <motion.video
                variants={fadeIn('top', 1)}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{ once: false, amount: 0.1 }}
                onEnded={() => { setVolume(false) ; handleSlider(2) }}
                autoPlay muted={!volume} className='shrink-0 h-full sm:h-5/6 object-cover z-10 rounded-[20px] border-t border-x border-gray-600 shadow-sm shadow-gray-900'>
                <source src={webM[currentVideo]} type='video/webm' />
                <source src={mp4[currentVideo]} type='video/mp4' />
              </motion.video>
              <motion.button
                variants={fadeIn('left', 1)}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{ once: false, amount: 0.1 }}
                onClick={() => { setVolume(!volume) }}
                className='absolute bottom-[120px] right-[15px] w-[40px] h-[40px] rounded-full bg-[#10100e] z-50 bg-blue-0 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0'>
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
          )
        }
        <div className={'absolute shrink-0 h-2/3 mx-auto bottom-[250px] object-cover rounded-[20px] bg-[#10100f]'}></div>
      </div>
    </div>
  )
}

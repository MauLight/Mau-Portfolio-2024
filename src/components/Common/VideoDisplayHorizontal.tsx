import { type ReactElement } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/functions'

interface VideoDisplayProps {
    title: string
    description: string
    video: string
    bgColor: string
}

export const VideoDisplayHorizontal = ({ title, description, video, bgColor } : VideoDisplayProps): ReactElement => {
  return (
    <div className="relative flex justify-center items-center w-full h-screen pt-[200px]">
      <div className="absolute w-screen flex flex-col justify-center items-start px-20 gap-y-5 bg-[#e7eee7] h-[450px] overflow-hidden">
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
          className='font-light text-3xl text-[2e302e] z-10'>{description}</motion.p>
        <video src={video} autoPlay loop muted className='absolute w-full top-0 left-0 object-cover z-0 opacity-30 grayscale' />
        <div className={`absolute left-0 opacity-80 w-full h-full flex justify-center items-center animated-background ${bgColor ? bgColor : 'bg-[#ffffff]'}`}></div>
      </div>
      <motion.video
        variants={fadeIn('top', 1)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: false, amount: 0.1 }}
        src={video} autoPlay loop muted className='absolute w-1/2 right-0 top-[220px] object-cover z-10 rounded-[10px]' />
    </div>
  )
}

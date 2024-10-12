import { type ReactElement } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/functions'

interface VideoDisplayProps {
    title: string
    description: string
    mp4: string
    webM: string
    bgColor: string
}

export const VideoDisplayHorizontal = ({ title, description, mp4, webM, bgColor } : VideoDisplayProps): ReactElement => {
  return (
    <div className="relative flex justify-center items-center w-full h-screen pt-[200px]">
      <div className="absolute w-screen flex flex-col justify-center items-start px-20 gap-y-5 bg-[#e7eee7] h-[450px] overflow-hidden">
        <motion.h1
          variants={fadeIn('right', 0.2)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className='hidden xl:block font-body text-4xl lg:text-5xl 2xl:text-6xl text-[#171817] z-10'>{title}</motion.h1>
        <motion.p
          variants={fadeIn('left', 0.4)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className='hidden xl:flex font-light text-2xl min-[1440px]:text-3xl text-[2e302e] z-10'>{description}</motion.p>
        <video autoPlay loop muted className='absolute h-full w-full top-0 left-0 object-cover z-0 opacity-30 grayscale'>
          <source src={webM} type='video/webm' />
          <source src={mp4} type='video/mp4' />
        </video>
        <div className={`absolute left-0 opacity-80 w-full h-full flex justify-center items-center animated-background ${bgColor ? bgColor : 'bg-[#ffffff]'}`}></div>
      </div>
      <div className="absolute w-full top-[220px] z-10 right-0 flex flex-col items-center xl:items-end gap-y-6">
        <motion.video
          variants={fadeIn('top', 1)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          autoPlay loop muted className='shrink-0 w-[700px] right-0 top-[220px] object-cover z-10 rounded-[20px]'>
          <source src={webM} type='video/webm' />
          <source src={mp4} type='video/mp4' />
        </motion.video>
        <div className="flex-col max-xl:flex hidden">
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
    </div>
  )
}

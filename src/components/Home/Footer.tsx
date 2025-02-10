import { fadeIn } from '@/utils/functions'
import { motion } from 'framer-motion'
import QRCode from 'react-qr-code'

export const Footer = () => {
  return (
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
            <QRCode className='w-[100px] h-[100px] border border-gray-200 opacity-80' value='https://drive.google.com/file/d/1X17JPFMm0A09eonmj0AqkqHmkHsiMU98/preview' />
          </div>
          <p className='font-body text-[18px] text-[#10100e]'>© 2025 MLight</p>
        </div>
      </div>
    </motion.div>
  )
}

import { type ReactElement } from 'react'
import ctlst from '@/assets/video/Ctlst Logo.mp4'
import cascade from '@/assets/video/Text Cascade.mp4'
import kinetic from '@/assets/video/Kinetic.mp4'
import echo from '@/assets/video/Timeless.mp4'
import { VideoDisplayHorizontal } from '@/components/Common/VideoDisplayHorizontal'

const MotionHome = (): ReactElement => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center bg-[#10100e] gap-y-32'>
      <VideoDisplayHorizontal title='' description='' video={cascade} bgColor='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' />
      <VideoDisplayHorizontal title='' description='' video={kinetic} bgColor='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' />
      <VideoDisplayHorizontal title='' description='' video={echo} bgColor='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' />
      <VideoDisplayHorizontal title='' description='' video={ctlst} bgColor='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' />
    </div>
  )
}

export default MotionHome

import { type ReactElement } from 'react'
import ctlst from '@/assets/video/Ctlst Logo.mp4'
import ctlstWeb from '@/assets/video/Ctlst Logo.webm'
import cascade from '@/assets/video/Text Cascade.mp4'
import cascadeWeb from '@/assets/video/Text Cascade.webm'
import kinetic from '@/assets/video/Kinetic.mp4'
import kineticWeb from '@/assets/video/Kinetic.webm'
import echo from '@/assets/video/Timeless.mp4'
import echoWeb from '@/assets/video/Timeless.webm'
import { VideoDisplayHorizontal } from '@/components/Common/VideoDisplayHorizontal'

const MotionHome = (): ReactElement => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center bg-[#10100e] gap-y-32'>
      <VideoDisplayHorizontal title='' description='' mp4={[cascade]} webM={[cascadeWeb]} bgColor='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' />
      <VideoDisplayHorizontal title='' description='' mp4={[kinetic]} webM={[kineticWeb]} bgColor='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' />
      <VideoDisplayHorizontal title='' description='' mp4={[echo]} webM={[echoWeb]} bgColor='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' />
      <VideoDisplayHorizontal title='' description='' mp4={[ctlst]} webM={[ctlstWeb]} bgColor='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' />
    </div>
  )
}

export default MotionHome

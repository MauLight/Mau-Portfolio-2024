import { type ReactElement } from 'react'
import AMV from '@/assets/video/AMV.mp4'
import AMVweb from '@/assets/video/AMV.webm'
import Horror from '@/assets/video/Horror 2020s.mp4'
import HorrorWeb from '@/assets/video/Horror 2020s.webm'
import Horror2 from '@/assets/video/Horror 2020s TWO WEB.mp4'
import Horror2Web from '@/assets/video/Horror 2020s.webm'
import Horror3 from '@/assets/video/Horror 2010s Two WEB.mp4'
import Horror3Web from '@/assets/video/Horror 2010s Two WEB.webm'
import Horror4 from '@/assets/video/Horror 2010s One WEB.mp4'
import Horror4Web from '@/assets/video/Horror 2010s One WEB.webm'
import { VideoDisplayHorizontal } from '@/components/Common/VideoDisplayHorizontal'
import { VideoDisplayVertical } from '@/components/Common/VideoDisplayVertical'

const ViralHome = (): ReactElement => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center gap-y-32 bg-[#10100e]'>
      <VideoDisplayHorizontal title='Shonen Extravaganza AMV' description='21.8K views' mp4={AMV} webM={AMVweb} bgColor='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' />
      <VideoDisplayVertical title='Ctlst Halloween Campaign' description='200% follower increase' mp4={[Horror, Horror2, Horror3, Horror4]} webM={[HorrorWeb, Horror2Web, Horror3Web, Horror4Web]} bgColor='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' />
    </div>
  )
}

export default ViralHome

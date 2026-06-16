import { type ReactElement } from 'react'
import { VideoDisplayHorizontal } from '@/components/Common/VideoDisplayHorizontal'
import { VideoDisplayVertical } from '@/components/Common/VideoDisplayVertical'

const cdn = 'https://res.cloudinary.com/dglhgnd47/video/upload'

const videos = [
  [
    `${cdn}/v1781590293/AMV_sr3eqb.mp4`,
    `${cdn}/v1781590303/Dragon_AMV_WEB_u24cjt.webm`,
  ],
  [
    `${cdn}/v1781590291/Horror_2020s_gburd3.webm`,
    `${cdn}/v1781590290/Horror_2020s_TWO_WEB_jkfxwx.mp4`,
    `${cdn}/v1781590291/Horror_2010s_Two_WEB_cwfisi.mp4`,
    `${cdn}/v1781590289/Horror_2010s_One_WEB_efsq7e.webm`,
  ],
  [
    `${cdn}/v1781590290/Motivation_1_ajqyfv.webm`,
    `${cdn}/v1781590289/Motivation_2_hdjheb.webm`,
    `${cdn}/v1781590288/Motivation_3webm_tdnlnn.webm`,
    `${cdn}/v1781590293/Motivation_4_r5lkrl.webm`,
  ],
]

const ViralHome = (): ReactElement => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center gap-y-44 bg-[#10100e]'>
      <VideoDisplayHorizontal title='Shonen Extravaganza AMV' description='21.8K views' video={videos[0]} bgColor='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' />
      <VideoDisplayVertical frame='gap-x-[280px]' title='Ctlst Halloween Campaign' description='200% follower increase' video={videos[1]} bgColor='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' />
      <VideoDisplayVertical frame='gap-x-[280px] lg:gap-x-[750px]' title="Show, Don't Tell" description='New campaign' video={videos[2]} bgColor='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' />
    </div>
  )
}

export default ViralHome

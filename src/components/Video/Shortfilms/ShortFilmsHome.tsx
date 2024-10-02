import { type ReactElement } from 'react'
import entity from '@/assets/video/entity.mp4'
import despedida from '@/assets/video/despedida.mp4'
import retorno from '@/assets/video/retorno.mp4'
import halcyon from '@/assets/video/halcyon.mp4'
import stardust from '@/assets/video/stardust.mp4'
import { VideoDisplayHorizontalSlider } from '@/components/Common/VideoDisplayHorizontalSlider'

const videos = [
  {
    title: 'Entity',
    src: entity,
    description: 'Some words about the video'
  },
  {
    title: 'Despedida',
    src: despedida,
    description: 'Some words about the video'
  },
  {
    title: 'Retorno',
    src: retorno,
    description: 'Some words about the video'
  },
  {
    title: 'Halcyon',
    src: halcyon,
    description: 'Some words about the video'
  },
  {
    title: 'Stardust',
    src: stardust,
    description: 'Some words about the video'
  },
]

const ShortFilmsHome = (): ReactElement => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center gap-y-32 bg-[#10100e]'>
      <VideoDisplayHorizontalSlider video={videos} bgColor='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' />
    </div>
  )
}

export default ShortFilmsHome
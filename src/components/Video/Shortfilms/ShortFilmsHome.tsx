import { type ReactElement } from 'react'
import entity from '@/assets/video/entity.mp4'
import despedida from '@/assets/video/despedida.mp4'
import retorno from '@/assets/video/retorno.mp4'
import halcyon from '@/assets/video/halcyon.mp4'
import stardust from '@/assets/video/stardust.mp4'
import stardustII from '@/assets/video/stardust2.mp4'
import pig from '@/assets/video/pig.mp4'
import end from '@/assets/video/end.mp4'
import jackal from '@/assets/video/jackal.mp4'

import { VideoDisplayHorizontalSlider } from '@/components/Common/VideoDisplayHorizontalSlider'

const videos = [
  {
    title: 'End of Innocence',
    src: end,
    description: 'A woman traverses the empty spaces of a home that hides the secrets which took her innocence away.'
  },
  {
    title: 'Jackal',
    src: jackal,
    description: 'A drunk man walks down the path he took just minutes ago, a trail leading to his girlfriend\'s dead body.'
  },
  {
    title: 'Entity',
    src: entity,
    description: 'Two friends attempt an ancient ritual to rescue a loved one taken by the entity living in the house.'
  },
  {
    title: 'Despedida',
    src: despedida,
    description: 'The realization of the inescapable indoctrination echoing through the walls of the city.'
  },
  {
    title: 'Retorno',
    src: retorno,
    description: 'Memories push us to the root, no matter how far we go. The return is inevitable.'
  },
  {
    title: 'Halcyon',
    src: halcyon,
    description: 'A grieving man’s desire to find a way to reunite with his dead wife triggers the end of the universe.'
  },
  {
    title: 'Stardust',
    src: stardust,
    description: 'The sum of our lives as the tireless stream of light giving form to existence.'
  },
  {
    title: 'Stardust II',
    src: stardustII,
    description: 'The people in the city renew the pact with fate as a new year arrives.'
  },
  {
    title: 'Pig',
    src: pig,
    description: 'A fearless samurai faces the Pig\'s gang to rescue his sister.'
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
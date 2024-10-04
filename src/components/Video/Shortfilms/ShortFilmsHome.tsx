import { type ReactElement } from 'react'
import entity from '@/assets/video/entity.mp4'
import entityWeb from '@/assets/video/entity.webm'
import despedida from '@/assets/video/despedida.mp4'
import despedidaWeb from '@/assets/video/despedida.webm'
import retorno from '@/assets/video/retorno.mp4'
import retornoWeb from '@/assets/video/retorno.webm'
import halcyon from '@/assets/video/halcyon.mp4'
import halcyonWeb from '@/assets/video/halcyon.webm'
import stardust from '@/assets/video/stardust.mp4'
import stardustWeb from '@/assets/video/stardust.webm'
import stardustII from '@/assets/video/stardust2.mp4'
import stardustIIWeb from '@/assets/video/stardust2.webm'
import pig from '@/assets/video/pig.mp4'
import pigWeb from '@/assets/video/pig.webm'
import end from '@/assets/video/end.mp4'
import endWeb from '@/assets/video/end.webm'
import jackal from '@/assets/video/jackal.mp4'
import jackalWeb from '@/assets/video/jackal.webm'

import { VideoDisplayHorizontalSlider } from '@/components/Common/VideoDisplayHorizontalSlider'

const videos = [
  {
    title: 'End of Innocence',
    mp4: end,
    webM: endWeb,
    description: 'A woman traverses the empty spaces of a home that hides the secrets which took her innocence away.'
  },
  {
    title: 'Jackal',
    mp4: jackal,
    webM: jackalWeb,
    description: 'A drunk man walks down the path he took just minutes ago, a trail leading to his girlfriend\'s dead body.'
  },
  {
    title: 'Entity',
    mp4: entity,
    webM: entityWeb,
    description: 'Two friends attempt an ancient ritual to rescue a loved one taken by the entity living in the house.'
  },
  {
    title: 'Despedida',
    mp4: despedida,
    webM: despedidaWeb,
    description: 'The realization of the inescapable indoctrination echoing through the walls of the city.'
  },
  {
    title: 'Retorno',
    mp4: retorno,
    webM: retornoWeb,
    description: 'Memories push us to the root, no matter how far we go. The return is inevitable.'
  },
  {
    title: 'Halcyon',
    mp4: halcyon,
    webM: halcyonWeb,
    description: 'A grieving man’s desire to find a way to reunite with his dead wife triggers the end of the universe.'
  },
  {
    title: 'Stardust',
    mp4: stardust,
    webM: stardustWeb,
    description: 'The sum of our lives as the tireless stream of light giving form to existence.'
  },
  {
    title: 'Stardust II',
    mp4: stardustII,
    webM: stardustIIWeb,
    description: 'The people in the city renew the pact with fate as a new year arrives.'
  },
  {
    title: 'Pig',
    mp4: pig,
    webM: pigWeb,
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
import { type ReactElement } from 'react'
import { VideoDisplayHorizontalSlider } from '@/components/Common/VideoDisplayHorizontalSlider'

const videos = [
  {
    title: 'End of Innocence',
    video: 'https://res.cloudinary.com/dglhgnd47/video/upload/v1781590300/end_yo8inc.mp4',
    description: 'A woman traverses the empty spaces of a home that hides the secrets which took her innocence away.'
  },
  {
    title: 'Jackal',
    video: 'https://res.cloudinary.com/dglhgnd47/video/upload/v1781590303/jackal_rhxkqa.mp4',
    description: 'A drunk man walks down the path he took just minutes ago, a trail leading to his girlfriend\'s dead body.'
  },
  {
    title: 'Entity',
    video: 'https://res.cloudinary.com/dglhgnd47/video/upload/v1781590312/entity_tfpzjz.webm',
    description: 'Two friends attempt an ancient ritual to rescue a loved one taken by the entity living in the house.'
  },
  {
    title: 'Despedida',
    video: 'https://res.cloudinary.com/dglhgnd47/video/upload/v1781590308/despedida_lguzdh.webm',
    description: 'The realization of the inescapable indoctrination echoing through the walls of the city.'
  },
  {
    title: 'Retorno',
    video: 'https://res.cloudinary.com/dglhgnd47/video/upload/v1781590304/retorno_pnwzpa.mp4',
    description: 'Memories push us to the root, no matter how far we go. The return is inevitable.'
  },
  {
    title: 'Halcyon',
    video: 'https://res.cloudinary.com/dglhgnd47/video/upload/v1781590301/halcyon_g8cszx.webm',
    description: "A grieving man's desire to find a way to reunite with his dead wife triggers the end of the universe."
  },
  {
    title: 'Stardust',
    video: 'https://res.cloudinary.com/dglhgnd47/video/upload/v1781590304/stardust_yuegqs.mp4',
    description: 'The sum of our lives as the tireless stream of light giving form to existence.'
  },
  {
    title: 'Stardust II',
    video: 'https://res.cloudinary.com/dglhgnd47/video/upload/v1781590314/stardust2_j1spio.mp4',
    description: 'The people in the city renew the pact with fate as a new year arrives.'
  },
  {
    title: 'Pig',
    video: 'https://res.cloudinary.com/dglhgnd47/video/upload/v1781590307/pig_duuo7l.webm',
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
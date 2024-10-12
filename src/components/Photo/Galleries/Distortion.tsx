import distortion1 from '@/assets/photo/distortion/Distortion_1 copy.webp'
import distortion2 from '@/assets/photo/distortion/Distortion_2.webp'
import distortion3 from '@/assets/photo/distortion/Distortion_3.webp'
import distortion4 from '@/assets/photo/distortion/Distortion_4.webp'
import distortion6 from '@/assets/photo/distortion/Distortion_6.webp'
import distortion7 from '@/assets/photo/distortion/Distortion_7.webp'
import distortion8 from '@/assets/photo/distortion/Distortion_8.webp'
import distortion9 from '@/assets/photo/distortion/Distortion_9.webp'
import distortion10 from '@/assets/photo/distortion/Distortion_10.webp'
import distortion11 from '@/assets/photo/distortion/Distortion_11.webp'
import distortion12 from '@/assets/photo/distortion/Distortion_12.webp'

const quotes = [
  {
    id: 'a1',
    quote: 'Silence echoes through those places we call void, where we can\'t see but the primal shapes of time.'
  },
  {
    id: 'b2',
    quote: 'Where the only thing that changes is us, as we come to realize the distortion within.'
  },
  {
    id: 'c3',
    quote: 'Who dares reveal the shape of all things? Who dares to give meaning to form? Who spells the name?'
  },
  {
    id: 'd4',
    quote: 'Show me the nature of this world, the beauty that only you can give, that only you can conjure... that only you can create.'
  },
  {
    id: 'e5',
    quote: 'I think Nietzche spent a lot of time looking out the window and the smoke threads collapsed in his brain causing a black hole.'
  },
  {
    id: 'f6',
    quote: 'I just didn\'t want to grow up, I knew everything was a lie. I saw the poison hidden behind your heart, I saw myself.'
  },
]

const TitleText = ({ text1, text2, text3 } : { text1: string, text2: string, text3: string }) => (
  <div className="flex py-20">
    <h1 className='text-[#10100e] font-heading text-5xl sm:text-7xl lg:text-9xl text-balance'>{text1}<br/><span className='text-[#10100e] font-body text-5xl sm:text-7xl lg:text-9xl text-balance'>{text2}</span><br/><span className='text-[#10100e] font-body text-5xl sm:text-7xl lg:text-9xl text-balance'>{text3}</span></h1>
  </div>
)

const BodyTextRegular = ({ text } : { text: string }) => (
  <div className="flex py-20">
    <p className='text-[#10100e] font-body text-2xl sm:text-5xl text-balance'>{text}</p>
  </div>
)

const BodyTextLight = ({ text } : { text: string }) => (
  <div className="flex py-20">
    <p className='text-[#10100e] font-light text-xl sm:text-4xl text-balance'>{text}</p>
  </div>
)

const ImageHolder = ({ image, size, pos, footer } : { image: string, size: string, pos: string, footer: string }) => (
  <div className={`flex flex-col gap-y-2 items-${pos} py-20`}>
    <img alt='' src={image} className={`${size} object-cover`} />
    <small className={'font-body'}>{footer}</small>
  </div>
)

const Distortion = () => {
  return (
    <div className="bg-red-600 w-full min-h-screen pt-[60px]">
      <div className="flex flex-col gap-y-20">
        <div className="flex flex-col py-20 gap-y-20">
          <TitleText text1='The earth was waste and void,' text2='And darkness was' text3='upon the face of the deep.' />
          <img alt='' src={distortion1} className="w-full object-cover" />
        </div>
        <div className="flex w-full sm:w-1/2 justify-start">
          <BodyTextRegular text={quotes[0].quote} />
        </div>
        <div className="flex justify-end">
          <div className="w-full sm:w-1/2 flex justify-end">
            <BodyTextLight text={quotes[1].quote} />
          </div>
        </div>
        <ImageHolder footer='The primal home.' pos='end' image={distortion2} size='w-full sm:w-3/4' />
        <ImageHolder footer='The first skin.' pos='start' image={distortion3} size='w-full sm:w-1/2' />
        <div className="flex w-full sm:w-1/2 justify-start">
          <BodyTextRegular text={quotes[2].quote} />
        </div>
        <div className="flex gap-x-5">
          <ImageHolder footer='The Spy.' pos='end' image={distortion4} size='w-full' />
          <ImageHolder footer='The Vulture.' pos='center' image={distortion7} size='w-full' />
          <ImageHolder footer='The Signal.' pos='start' image={distortion6} size='w-full' />
        </div>
        <ImageHolder footer='The Rapture.' pos='center' image={distortion8} size='w-full sm:w-2/3' />
        <div className="flex w-full justify-center">
          <BodyTextRegular text={quotes[3].quote} />
        </div>
        <ImageHolder footer='Show me your tears.' pos='start' image={distortion9} size='w-full sm:w-1/3' />
        <ImageHolder footer='Show me your face.' pos='center' image={distortion10} size='w-full sm:w-1/3' />
        <ImageHolder footer='Show me the way.' pos='end' image={distortion11} size='w-full sm:w-1/3' />
        <ImageHolder footer='Monster.' pos='center' image={distortion12} size='w-full sm:w-1/2' />
      </div>
    </div>
  )
}

export default Distortion

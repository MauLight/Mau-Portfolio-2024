import antichrist from '@/assets/apps/1. The Antichrist.png'
import echoes from '@/assets/apps/2. Echoes.png'
import sin from '@/assets/apps/3. Sin.png'
import memory from '@/assets/apps/4. [NOT] a Memory.png'
import hope from '@/assets/apps/5. Hope.png'
import forbidden from '@/assets/apps/6. The Forbidden.png'
import speed from '@/assets/apps/7. Speed of Light.png'
import rebel from '@/assets/apps/8. Rebel Seraphim.png'
import hunger from '@/assets/apps/9. Hunger.png'
import them from '@/assets/apps/10. Them.png'
import { ScreenplayPosterProps } from './types'

const screenplayPosters = [
  {
    id: 'a1',
    title: 'The Antichrist',
    poster: antichrist
  },
  {
    id: 'b2',
    title: 'Echoes',
    poster: echoes
  },
  {
    id: 'c3',
    title: 'Sin',
    poster: sin
  },
  {
    id: 'd4',
    title: '[not] a memory',
    poster: memory
  },
  {
    id: 'e5',
    title: 'Hope',
    poster: hope
  },
  {
    id: 'f6',
    title: 'The Forbidden',
    poster: forbidden
  },
  {
    id: 'g7',
    title: 'Speed of Light',
    poster: speed
  },
  {
    id: 'h8',
    title: 'Rebel Seraphim',
    poster: rebel
  },
  {
    id: 'i9',
    title: 'Hunger',
    poster: hunger
  },
  {
    id: 'j10',
    title: 'Them',
    poster: them
  },
]

export const randomAddedArrayBuilder = () => {
  const randomAddedArray: ScreenplayPosterProps[] = []
  const copyArray =   [...screenplayPosters]
  copyArray.forEach((item) => {
    randomAddedArray.push({ ...item, sizeChance: Math.random(), shapeChance: Math.random() })
  })
  return randomAddedArray
}
import { type ReactElement } from 'react'

export const CardGroupBottom = ({ images } : { images: string[] }): ReactElement => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="w-full flex">
        <img className='w-1/2 object-cover' src={images[0]} alt="" />
        <img className='w-1/2 object-cover' src={images[1]} alt="" />
      </div>
      <div className="w-full flex">
        <img className='w-full object-cover' src={images[2]} alt="" />
      </div>
    </div>
  )
}

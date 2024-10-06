import { type ReactElement } from 'react'

interface EcommerceCardProps {
    image: string
    title: string
    price: number
    discount: number
    handleCart: () => void
}

export const EcommerceCard = ({ image, title, price, discount, handleCart }: EcommerceCardProps): ReactElement => {
  return (
    <div className="group relative col-span-1 flex justify-center overflow-hidden">
      <img src={image} alt="mock1" className="w-full h-full object-cover" />


      <div className="w-full absolute -bottom-20 group-hover:bottom-5 flex justify-between px-5 z-10 transition-all duration-300">
        <div className="flex flex-col">
          <h1 className='text-[22px] uppercase neue antialiazed text-[#ffffff] leading-tight'>{title}</h1>
          <div className="flex gap-x-2">
            <p className='text-[16px] uppercase neue antialiazed text-[#ffffff]'>{`${price}$`}</p>
            <p className='text-[12px] uppercase neue antialiazed text-gray-100 line-through'>{`${discount}$`}</p>
          </div>
        </div>
        <div onClick={handleCart} className='h-[50px] w-[50px] antialiased rounded-full bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 flex justify-center items-center pb-1 cursor-pointer'>
          <i className="fa-solid fa-bag-shopping text-[#ffffff]"></i>
        </div>
      </div>

      <div className="absolute w-full h-full bg-[#10100e] opacity-0 group-hover:opacity-30 z-0 transition-all duration-200"></div>
    </div>
  )
}

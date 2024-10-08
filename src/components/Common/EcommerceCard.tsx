import { type ReactElement } from 'react'
import { ProductProps } from '../Dev/Apps/Ecommerce/types'
interface EcommerceCardProps {
    product: ProductProps
    handleAddProduct: (product: ProductProps) => void
}

export const EcommerceCard = ({ product, handleAddProduct }: EcommerceCardProps): ReactElement => {
  return (
    <div className="group relative h-[700px] col-span-1 flex justify-center overflow-hidden">
      <img src={product.image} alt="mock1" className="w-full h-full object-cover" />


      <div className="w-full absolute bottom-5 flex justify-between px-5 z-10 transition-all duration-300">
        <div className="flex flex-col">
          <h1 className='text-[22px] uppercase neue antialiazed text-[#ffffff] leading-tight'>{product.title}</h1>
          <div className="flex gap-x-2">
            <p className='text-[16px] uppercase neue antialiazed text-[#ffffff]'>{`${product.price}$`}</p>
            <p className='text-[12px] uppercase neue antialiazed text-gray-100 line-through'>{`${product.discount}$`}</p>
          </div>
        </div>
        <div onClick={() => { handleAddProduct(product) }} className='h-[50px] w-[50px] antialiased rounded-full bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 flex justify-center items-center pb-1 cursor-pointer'>
          <i className="fa-solid fa-bag-shopping text-[#ffffff]"></i>
        </div>
      </div>

      <div className="absolute w-full h-full bg-[#10100e] opacity-0 group-hover:opacity-30 z-0 transition-all duration-200"></div>
    </div>
  )
}

import { useState, type ReactElement } from 'react'

interface CheckoutCardProps {
    product: { id: string, price: number, title: string, discount: number, image: string }
    handleRemoveProduct: (id: string) => void
}

export const CheckoutCard = ({ product, handleRemoveProduct } : CheckoutCardProps): ReactElement => {
  const [quantity, setQuantity] = useState(1)
  const handleClick = (step: number) => {
    step === 1 && setQuantity(quantity + 1)
    step === 2 && quantity > 1 && setQuantity(quantity - 1)
  }
  return (
    <div className="grid grid-cols-5 border-b border-[#10100e] pb-3 h-[220px]">
      <div className="col-span-1 border">
        <img src={product.image} alt="mock1" className="w-full h-full object-cover" />
      </div>
      <div className="col-span-4 h-full flex flex-col justify-start items-between px-5">
        <div className="w-full flex justify-between">
          <div className="flex flex-col">
            <h1 className='text-xl aktivLight text-[#10100e] uppercase'>{product.title}</h1>
            <div className="flex">
              <h1 className='text-xl font-semiBold text-[#10100e] uppercase'>{`${product.price}$`}</h1>
              <h1 className='text-md aktivLight text-[#10100e] uppercase line-through'>{`${product.discount}$`}</h1>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className='text-xl aktivLight text-[#10100e] uppercase'>Qty</h1>
            <div className='flex items-center justify-between border border-[#10100e] w-[80px] h-10 px-2'>{quantity}
              <div className="h-full flex flex-col py-3 justify-between">
                <i onClick={() => { handleClick(1) }} className="fa-solid fa-sm fa-plus hover:text-indigo-500"></i>
                <i onClick={() => { handleClick(2) }} className="fa-solid fa-sm fa-minus hover:text-indigo-500"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-between item-end">
          <div onClick={() => {handleRemoveProduct(product.id)}} className="flex items-end gap-x-1 cursor-pointer">
            <i className="fa-solid fa-trash-can pb-[3.5px]"></i>
            <p className='text-[18px] pb-0 leading-none aktivLight text-[#10100e]'>Remove</p>
          </div>
          <div className="flex items-end gap-x-1">
            <p className='text-[18px] pb-0 leading-none aktivLight text-[#10100e]'>Total</p>
            <p className='text-[18px] pb-0 leading-none aktiv text-[#10100e]'>{`${product.price}$`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

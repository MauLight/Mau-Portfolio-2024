import { type ReactElement } from 'react'

interface CheckoutCardProps {
    item: { price: number, title: string, discount: number, image: string }
}

export const CheckoutCard = ({ item } : CheckoutCardProps): ReactElement => {
  return (
    <div className="grid grid-cols-5 border-b border-[#10100e] pb-3 h-[220px]">
      <div className="col-span-1 border">
        <img src={item.image} alt="mock1" className="w-full h-full object-cover" />
      </div>
      <div className="col-span-4 h-full flex flex-col justify-start items-between px-5">
        <div className="w-full flex justify-between">
          <div className="flex flex-col">
            <h1 className='text-xl aktivLight text-[#10100e] uppercase'>{item.title}</h1>
            <div className="flex">
              <h1 className='text-xl font-semiBold text-[#10100e] uppercase'>{`${item.price}$`}</h1>
              <h1 className='text-md aktivLight text-[#10100e] uppercase line-through'>{`${item.discount}$`}</h1>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className='text-xl aktivLight text-[#10100e] uppercase'>Qty</h1>
            <input min={1} max={100} type="number" className='border border-[#10100e] w-[80px] h-10 px-2' />
          </div>
        </div>
        <div className="w-full h-full flex justify-between item-end">
          <div className="flex items-end gap-x-1">
            <i className="fa-solid fa-trash-can pb-[3.5px]"></i>
            <p className='text-[18px] pb-0 leading-none aktivLight text-[#10100e]'>Remove</p>
          </div>
          <div className="flex items-end gap-x-1">
            <p className='text-[18px] pb-0 leading-none aktivLight text-[#10100e]'>Total</p>
            <p className='text-[18px] pb-0 leading-none aktiv text-[#10100e]'>{`${item.price}$`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

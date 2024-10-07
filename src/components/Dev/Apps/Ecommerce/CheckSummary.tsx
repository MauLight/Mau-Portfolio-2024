import { type ReactElement } from 'react'

interface CheckSummaryProps {
    numberOfProducts: number
    total: number
    taxes: number
    totalWithTaxes: number
}

export const CheckSummary = ({ numberOfProducts, total, taxes, totalWithTaxes } : CheckSummaryProps): ReactElement => {
  return (
    <div className="col-span-1 flex flex-col">
      <h1 className='text-xl aktiv text-[#10100e] uppercase border-b border-[#10100e]'>Summary</h1>
      <div className="w-full flex flex-col pt-2 pb-3 border-[#10100e] border-b">
        <div className="w-full flex justify-between">
          <h1 className='text-lg aktivLight text-gray-700 uppercase'>{`${numberOfProducts} ${numberOfProducts > 1 || numberOfProducts === 0 ? 'products' : 'product'}`}</h1>
          <h1 className='text-lg aktivLight text-gray-700 uppercase'>{total}$</h1>
        </div>
        <div className="w-full flex justify-between">
          <h1 className='text-lg aktivLight text-gray-700 uppercase leading-none'>Shipping</h1>
          <h1 className='text-lg aktivLight text-gray-700 uppercase'>See at checkout</h1>
        </div>
      </div>
      <div className="w-full flex flex-col py-2">
        <div className="w-full flex justify-between">
          <h1 className='text-lg aktiv text-[#10100e] uppercase'>Total amount</h1>
          <h1 className='text-lg aktivLight text-gray-700 uppercase'>{totalWithTaxes}$</h1>
        </div>
        <div className="w-full flex justify-between">
          <h1 className='text-lg aktivLight text-gray-700 uppercase leading-none'>{`Includes ${taxes} VAT`}</h1>
        </div>
      </div>
      <button className='h-10 bg-[#10100e] px-2 uppercase text-[#ffffff] mt-3'>Checkout</button>
    </div>
  )
}

import { Dispatch, SetStateAction, useState, type ReactElement } from 'react'
import { CheckoutCard } from './CheckoutCard'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { CheckSummary } from './CheckSummary'
import { ProductProps } from './types'

interface CheckoutProps {
    cart: ProductProps[]
    setStep: Dispatch<SetStateAction<number>>
    handleAddQuantity: (id: string) => void
    handleMinusQuantity: (id: string) => void
    handleRemoveProduct: (id: string) => void
}

export const Checkout = ({ cart, setStep, handleAddQuantity, handleMinusQuantity, handleRemoveProduct } : CheckoutProps): ReactElement => {
  const [readyToPay, setReadyToPay] = useState<boolean>(false)
  const numberOfProducts = cart.reduce((acc, item) => acc + item.quantity, 0)
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const vat = Math.floor(((total/100) * 19))
  const totalWithVat = total + vat

  return (
    <div className={`w-full h-full min-h-[700px] flex flex-col justify-center gap-y-10 px-5 py-10 overflow-y-scroll transition-color duration-200 ${readyToPay ? 'bg-[#10100e]' : ''}`}>
      <div className="flex flex-col gap-y-5">
        <div className="flex justify-between items-start">
          <h1 className={`uppercase aktiv text-9xl ${readyToPay ? 'text-[#ffffff]' : 'text-[#10100e]'}`}>{readyToPay ? 'checkout' : 'your cart'}</h1>
          <XMarkIcon onClick={() => { setStep(1) }} className='w-6 text-[#2E3D49] font-accent hover:rotate-90 hover:text-[#EA0C1D] transition-all duration-200' />
        </div>
        {
          !readyToPay && (
            <div>
              <p className='aktivLight text-2xl text-[#10100e] uppercase'>{`total ${cart.length} items`}</p>
              <p className='aktivLight text-2xl text-[#10100e] uppercase'>Your products are not reserved until payment is complete</p>
            </div>
          )
        }
      </div>

      {/* CheckoutCard */}
      {
        readyToPay ? (
          <div className="w-full flex justify-end">
            <div className="flex flex-col gap-y-5 w-[400px] rounded-[20px] min-h-[400px] py-10">
              <div className="flex flex-col">
                <label className='text-[#ffffff] font-aktiv text-[14px]' htmlFor="email">Email</label>
                <input id='email' type="email" className='h-8 border bg-transparent text-[#ffffff] px-2' />
              </div>
              <div className="flex flex-col">
                <label className='text-[#ffffff] font-aktiv text-[14px]' htmlFor="card">Card information</label>
                <input id='card' type="text" className='h-8 border bg-transparent text-[#ffffff] px-2' />
                <div className="grid grid-cols-2">
                  <input type="text" className='h-8 border-l border-b bg-transparent text-[#ffffff] px-2' />
                  <input type="text" className='h-8 border-x border-b bg-transparent text-[#ffffff] px-2' />
                </div>
              </div>
              <div className="flex flex-col">
                <label className='text-[#ffffff] font-aktiv text-[14px]' htmlFor="holder">Cardholder name</label>
                <input id='holder' type="text" className='h-8 border bg-transparent text-[#ffffff] px-2' />
              </div>
              <div className="flex flex-col">
                <label className='text-[#ffffff] font-aktiv text-[14px]' htmlFor="holder">Country or region</label>
                <input id='holder' type="text" className='h-8 border bg-transparent text-[#ffffff] px-2' />
                <input placeholder='zip' id='holder' type="text" className='h-8 border-x border-b bg-transparent text-[#ffffff] px-2' />
              </div>
              <div className="flex flex-col">
                <button onClick={() => { setReadyToPay(false) }} className='h-8 bg-[#ffffff] hover:bg-indigo-500 active:bg-[#ffffff] px-2 uppercase text-[#10100e] mt-3 transition-all duration-200'>Pay</button>
                <button onClick={() => { setReadyToPay(false) }} className='h-8 hover:bg-red-600 active:bg-transparent px-2 uppercase text-[#ffffff] mt-3 transition-all duration-200 text-[14px] text-right'>Cancel</button>
              </div>
            </div>
          </div>
        )
          :
          (
            <div className="relative grid grid-cols-4 gap-x-5 overflow-y-scroll scrollbar-hide">
              <div className="col-span-3">
                {
                  cart.map((product, i) => (
                    <CheckoutCard handleMinusQuantity={handleMinusQuantity} handleAddQuantity={handleAddQuantity} handleRemoveProduct={handleRemoveProduct} product={product} key={i} />
                  ))
                }
              </div>
              <div className="col-span-1">
                <CheckSummary setReadyToPay={setReadyToPay} numberOfProducts={numberOfProducts} total={total} taxes={vat} totalWithTaxes={totalWithVat} />
              </div>
            </div>
          )
      }
    </div>
  )
}
